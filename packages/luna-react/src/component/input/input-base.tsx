import { buildCommon } from './input-common'
import { buildAriaAttributes, buildDataAttributes } from './input-attributes'
import type { Children, Field, Value } from '@/src/type'

export function InputBase(
  props: Readonly<{
    children: Children
    defaultValue?: Value
    disabled?: boolean
    errors?: string[]
    field: Field
  }>
) {
  if (!props.field.type) {
    return null
  }

  const commonProps = buildCommon(props.field, props.disabled)

  const dataAttributes = buildDataAttributes(props.field)
  const ariaAttributes = buildAriaAttributes(props.field, props.errors)

  return props.children({
    ariaAttributes,
    commonProps,
    dataAttributes,
    defaultValue: props.defaultValue,
    field: props.field,
  })
}
