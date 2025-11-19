import { Input } from './input'
import type { TextInput } from '../type'

export function InputText(
  props: Readonly<{
    input: TextInput
    component?: React.ComponentType<React.InputHTMLAttributes<HTMLInputElement>>
  }>
) {
  return (
    <Input
      input={props.input}
      component={props.component}
      type="text"
      autoComplete={props.input.advanced?.autocomplete}
    />
  )
}
