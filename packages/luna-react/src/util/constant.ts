import type { Column, Field } from '../type'

export const COLUMN = 'column'
export const FIELDS = 'fields'

export const NUMBER = 'number'
export const TEXT = 'text'
export const TEXTAREA = 'textarea'

export const SELECT = 'select'
export const SELECT_MONTH = 'select/month'
export const SELECT_YEAR = 'select/year'

export function isColumn(field: Field | Column): field is Column {
  return field.type === COLUMN && FIELDS in field
}

export function isField(field: Field | Column): field is Field {
  return field.type !== COLUMN
}
