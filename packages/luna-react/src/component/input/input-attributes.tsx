import { ARIA_ERROR_MESSAGE, ARIA_INVALID } from '@/src/constant'
import { getAriaAttributes, getDataAttributes } from '@/src/util/attributes'
import type { Field } from '@/src/type'

export function buildAriaAttributes(field: Field, errors?: string[]) {
  const ariaAttributes = getAriaAttributes(field.advanced?.aria)

  if (errors && errors.length > 0) {
    ariaAttributes[ARIA_INVALID] = 'true'
    ariaAttributes[ARIA_ERROR_MESSAGE] = `${field.name}-error`
  }

  return ariaAttributes
}

export function buildDataAttributes(field: Field) {
  return getDataAttributes(field.advanced?.data)
}
