import { buildCommon } from './input-common'
import { buildAriaAttributes, buildDataAttributes } from './input-attributes'
import type { Children, Field } from '@/src/type'

export function InputBase(
  props: Readonly<{
    children: Children
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

  const field = {
    ...props.field,
    disabled: props.disabled,
  }

  return props.children({
    ariaAttributes,
    commonProps,
    dataAttributes,
    field,
  })
}
