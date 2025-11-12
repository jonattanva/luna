import type { DataAttributes } from '@/src/type'

export function getDataAttributes(
  props: Readonly<{
    advanced?: {
      data?: Record<string, string | number | boolean>
    }
  }>
) {
  const { advanced = {} } = props
  const { data = {} } = advanced

  const attrs: DataAttributes = {}
  for (const [key, value] of Object.entries(data)) {
    attrs[`data-${key}`] = value
  }
  return attrs
}
