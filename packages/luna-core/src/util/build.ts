import { isObject } from './is-type'
import { isRadio, isSelect } from './is-input'
import type { Field, Source } from '../type'

export function buildOptions(
  field: Field,
  values: Record<string, unknown> = {}
) {
  if (isSelect(field) && field.disabled) {
    const current = field.name ? values[field.name] : undefined
    if (current && isObject(current)) {
      return [current]
    }
  }
}

export function buildSource(field: Field, source?: Source) {
  if (source) {
    const current = source[field.name]
    if (isRadio(field)) {
      return current
    }

    if (isSelect(field) && !field.disabled) {
      return current
    }
  }
}

export function buildFormData(form: Record<string, unknown>) {
  const formData = new FormData()
  for (const [key, value] of Object.entries(form)) {
    if (value !== null) {
      formData.append(key, String(value))
    }
  }
  return formData
}
