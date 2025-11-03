import * as z from 'zod'

export type Field = {
  advanced?: {
    max?: number
    min?: number
    pattern?: RegExp
  }
  required?: boolean
  validator?: {
    max?: string
    min?: string
    pattern?: string
    required?: string
  }
}

export function getMessage(field: Field) {
  return field.validator?.required ?? 'This field is required'
}

export function applyMinMaxValidation<T extends z.ZodString | z.ZodNumber>(
  schema: T,
  field: Field
): T {
  if (field.advanced?.min !== undefined) {
    schema = schema.min(field.advanced.min, {
      message: field.validator?.min,
    }) as T
  }

  if (field.advanced?.max !== undefined) {
    schema = schema.max(field.advanced.max, {
      message: field.validator?.max,
    }) as T
  }

  return schema
}

export function applyPatternValidation(
  schema: z.ZodString,
  field: Field
): z.ZodString {
  if (field.advanced?.pattern instanceof RegExp) {
    schema = schema.regex(field.advanced.pattern, {
      message: field.validator?.pattern,
    })
  }
  return schema
}
