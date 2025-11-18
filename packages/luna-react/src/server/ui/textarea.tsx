import { getDataAttributes } from '@/src/util/data-attribute'
import type { BaseInput } from './type'

export function TextArea(
  props: Readonly<{
    input: BaseInput
    component?: React.ComponentType<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>
    >
  }>
) {
  const Component = props.component
  if (!Component) {
    return null
  }

  const data = getDataAttributes(props.input)

  return (
    <Component
      {...data}
      disabled={props.input.readonly}
      id={props.input.name}
      maxLength={props.input.advanced?.length?.max}
      minLength={props.input.advanced?.length?.min}
      name={props.input.name}
      placeholder={props.input.placeholder}
      required={props.input.required}
    />
  )
}
