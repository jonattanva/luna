import { getMonth } from '@/src/util/month'
import { Input } from './input'
import type { MonthInput } from '../type'

export function InputMonth(
  props: Readonly<{
    input: MonthInput
    component?: React.ComponentType<
      React.InputHTMLAttributes<HTMLSelectElement> & {
        options: Array<{
          value: string
          label: string
        }>
      }
    >
  }>
) {
  const placeholder = props.input.placeholder ?? 'Select month'

  const options = [{ value: '', label: placeholder }, ...getMonth()]

  return (
    <Input input={props.input} component={props.component} options={options} />
  )
}
