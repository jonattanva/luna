import * as z from 'zod'
import {
  applyMinMaxValidation,
  applyPatternValidation,
  getMessage,
} from './common'
import type { Field } from './common'

export function getText(field: Field) {
  let schema = z
    .string({
      error: (issue) => {
        return issue.input === undefined
          ? getMessage(field)
          : 'Expected a string'
      },
    })
    .trim()

  schema = applyMinMaxValidation(schema, field)
  schema = applyPatternValidation(schema, field)

  if (!field.required) {
    return schema.optional().nullable()
  }

  return schema
}
