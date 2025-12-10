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
  const schema = z.email().trim()
  if (input.required) {
    return schema.min(1, input.validation?.required)
  }
  return schema.or(z.literal('')).nullable()
}

export function getText(input: Input) {
  let schema = z.coerce.string().trim()
  schema = applyMinAndMax(schema, input)

  if (input.required) {
    schema = applyRequired(schema, input)
    return z.preprocess((value) => (value === null ? '' : value), schema)
  }
  return schema.nullable()
}

export function getNumber(input: Input) {
  let schema = z.coerce.number().int()
  schema = applyMinAndMax(schema, input)

  if (input.required) {
    schema = applyRequired(schema, input)
    return z.preprocess((value) => (value === null ? undefined : value), schema)
  }
  return schema.nullable()
}

export function getYear(input: Input) {
  if (input.required) {
    const schema = z.coerce
      .number({ message: input.validation?.required })
      .int()

    return z.preprocess(normalize, schema)
  }
  return z.coerce.number().int().nullable()
}

export function getMonth(input: Input) {
  const schema = z.coerce
    .number()
    .int()
    .min(1, input.validation?.required)
    .max(12, input.validation?.required)

  return !input.required ? schema.nullable() : schema
}

function min<T extends Coerced>(schema: T, min?: number): T {
  if (min !== undefined) {
    return schema.min(min) as T
  }
  return schema
}

function max<T extends Coerced>(schema: T, max?: number): T {
  if (max !== undefined) {
    return schema.max(max) as T
  }
  return schema
}

function normalize(value: unknown) {
  return value === null || value === undefined || value === ''
    ? undefined
    : value
}

function applyMinAndMax<T extends Coerced>(schema: T, input: Input): T {
  schema = min(schema, input.advanced?.length?.min)
  schema = max(schema, input.advanced?.length?.max)
  return schema
}

function applyRequired<T extends Coerced>(schema: T, input: Input): T {
  const min = input.advanced?.length?.min
  if (min === undefined || min < 1) {
    return schema.min(1, input.validation?.required) as T
  }
  return schema
}
