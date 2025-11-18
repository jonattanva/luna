import { getDataAttributes } from '@/src/util/data-attribute'
import type { TextInput } from './type'

export function InputText(
  props: Readonly<{
    input: TextInput
    component?: React.ComponentType<React.InputHTMLAttributes<HTMLInputElement>>
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
      autoComplete={props.input.advanced?.autocomplete}
      disabled={props.input.readonly}
      id={props.input.name}
      max={props.input.advanced?.length?.max}
      min={props.input.advanced?.length?.min}
      name={props.input.name}
      placeholder={props.input.placeholder}
      required={props.input.required}
      type="text"
    />
  )
}
