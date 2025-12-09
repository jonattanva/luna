import { z } from 'zod'
import { isEmail, isNumber, isSelectMonth, isSelectYear } from './is-input'
import type { Input } from '../type'

type Coerced<T = unknown> = z.ZodCoercedString<T> | z.ZodCoercedNumber<T>

type SchemaChecker = (input: Input) => boolean
type SchemaGetter = (input: Input) => z.ZodType

const approach: Array<[SchemaChecker, SchemaGetter]> = [
  [isNumber, getNumber],
  [isEmail, getEmail],
  [isSelectYear, getYear],
  [isSelectMonth, getMonth],
]

export function getSchema(input: Input) {
  for (const [check, getSchema] of approach) {
    if (check(input)) {
      return getSchema(input)
    }
  }
  return getText(input)
}

export function getEmail(input: Input) {
  let schema = z.email().trim()
  if (!input.required) {
    schema = schema.or(z.literal(''))
  }

  return applyInputCommon(schema, input)
}

export function getText(input: Input) {
  return applyInputCommon(z.coerce.string().trim(), input)
}

export function getNumber(input: Input) {
  return applyInputCommon(z.coerce.number(), input)
}

export function getYear(input: Input) {
  const schema = z.coerce.number()
  if (input.required) {
    return schema.min(1, input.validation?.required)
  }
  return schema.nullable()
}

export function getMonth(input: Input) {
  const schema = z.coerce.number()
  if (input.required) {
    return schema
      .min(1, input.validation?.required)
      .max(12, input.validation?.required)
  }
  return schema.nullable()
}

function applyInputCommon<T extends Coerced>(schema: T, input: Input) {
  schema = min(schema, input.advanced?.length?.min)
  schema = max(schema, input.advanced?.length?.max)

  return applyInputRequired(schema, input)
}

function applyInputRequired<T extends Coerced>(schema: T, input: Input) {
  if (input.required) {
    const min = input.advanced?.length?.min
    if (min === undefined || min < 1) {
      schema = schema.min(1, input.validation?.required) as T
    }
    return schema
  }
  return schema.nullable()
}

function min<T extends Coerced>(schema: T, min?: number): T {
  if (min !== undefined) {
    return schema.min(min) as T
  }
  return schema
}

function max<T extends Coerced>(schema: T, max?: number): T {
  return max !== undefined ? (schema.max(max) as T) : schema
}
