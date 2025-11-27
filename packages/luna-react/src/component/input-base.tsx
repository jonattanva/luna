import { getAriaAttributes } from '../util/aria-attributes'
import { getDataAttributes } from '../util/data-attributes'
import type { Children, Field } from '../type'

export function InputBase(
  props: Readonly<{
    children: Children
    field: Field
  }>
) {
  const ariaAttributes = getAriaAttributes(props.field)
  const dataAttributes = getDataAttributes(props.field)

  const commonProps = {
    disabled: props.field.readonly,
    id: props.field.name,
    name: props.field.name,
  }

  return props.children({
    ariaAttributes,
    commonProps,
    dataAttributes,
    field: props.field,
  })
}
