import { z } from 'zod'
import type { InputField } from '@/src/type'

type Coerced<T = unknown> = z.ZodCoercedString<T> | z.ZodCoercedNumber<T>

export function getNumber(field: InputField) {
  let schema = z.coerce.number()

  schema = min(schema, field.advanced?.length?.min)
  schema = max(schema, field.advanced?.length?.max)

  if (field.required) {
    return required(schema, field.advanced?.length?.min)
  }

  return schema.nullable()
}

export function getText(field: InputField) {
  let schema = z.coerce.string().trim()

  schema = min(schema, field.advanced?.length?.min)
  schema = max(schema, field.advanced?.length?.max)

  if (field.required) {
    return required(schema, field.advanced?.length?.min)
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
