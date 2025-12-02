import { buildCommon } from './input-common'
import { buildAriaAttributes, buildDataAttributes } from './input-attributes'
import type { Children, Field } from '@/src/type'

export function InputBase(
  props: Readonly<{
    children: Children
    defaultValue?: string | number
    errors?: string[]
    field: Field
  }>
) {
  const commonProps = buildCommon(props.field)

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
