import { Input } from './input'
import type { BaseInput } from '../type'

export function InputNumber(
  props: Readonly<{
    input: BaseInput
    component?: React.ComponentType<React.InputHTMLAttributes<HTMLInputElement>>
  }>
) {
  return <Input input={props.input} component={props.component} type="number" />
}
