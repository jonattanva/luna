import { entries } from './prepare'
import type { DataAttributes } from '@/src/type'

export function getDataAttributes(
  props: Readonly<{
    advanced?: {
      data?: Record<string, string | number | boolean>
    }
  }>
) {
  const attrs: DataAttributes = {}
  for (const [key, value] of entries(props.advanced?.data)) {
    attrs[`data-${key}`] = value
  }
  return attrs
}
