import { entries } from './prepare'
import type { AriaAttributes } from '@/src/type'

export function getAriaAttributes(
  props: Readonly<{
    advanced?: {
      aria?: Record<string, string | number | boolean>
    }
  }>
) {
  const attrs: AriaAttributes = {}
  for (const [key, value] of entries(props.advanced?.aria)) {
    attrs[`aria-${key}`] = value
  }
  return attrs
}
