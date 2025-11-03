import * as z from 'zod'
import { applyMinMaxValidation, getMessage } from './common'
import type { Field } from './common'

export function getNumber(field: Field) {
  let schema = z.number({
    error: (issue) => {
      return issue.input === undefined ? getMessage(field) : 'Expected a number'
    },
  })

  schema = applyMinMaxValidation(schema, field)

  if (!field.required) {
    return schema.optional().nullable()
  }

  return schema
}
