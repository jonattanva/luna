import { z } from 'zod'
import { isNumber, isSelectYear } from '../input'
import type { Input } from '../type'

type Coerced<T = unknown> = z.ZodCoercedString<T> | z.ZodCoercedNumber<T>

export function getSchema(input: Input) {
  if (isNumber(input) || isSelectYear(input)) {
    return getNumber(input)
  }

  return getText(input)
}

export function getText(input: Input) {
  let schema = z.coerce.string().trim()

  schema = min(schema, input.advanced?.length?.min)
  schema = max(schema, input.advanced?.length?.max)

  if (input.required) {
    return required(schema, input.advanced?.length?.min)
  }

  return schema.nullable()
}

export function getNumber(input: Input) {
  let schema = z.coerce.number()

  schema = min(schema, input.advanced?.length?.min)
  schema = max(schema, input.advanced?.length?.max)

  if (input.required) {
    return required(schema, input.advanced?.length?.min)
  }

  return schema.nullable()
}

function min<T extends Coerced>(schema: T, min?: number): T {
  return min !== undefined ? (schema.min(min) as T) : schema
}

function max<T extends Coerced>(schema: T, max?: number): T {
  return max !== undefined ? (schema.max(max) as T) : schema
}

function required<T extends Coerced>(schema: T, min?: number): T {
  return min === undefined || min < 1 ? (schema.min(1) as T) : schema
}
