import { PREFIX_ARIA, PREFIX_DATA } from '../constant'
import { entries } from './prepare'

export function getPrefixedAttributes(
  prefix: string,
  record?: Record<string, string | number | boolean>
) {
  const attrs: Record<string, string | number | boolean> = {}
  for (const [key, value] of entries(record)) {
    attrs[`${prefix}-${key}`] = value
  }
  return attrs
}

export function getAriaAttributes(
  record?: Record<string, string | number | boolean>
) {
  return getPrefixedAttributes(PREFIX_ARIA, record)
}

export function getDataAttributes(
  record?: Record<string, string | number | boolean>
) {
  return getPrefixedAttributes(PREFIX_DATA, record)
}
