import { getMonth } from '@/src/util/month'
import { Input } from './input'
import { getText } from '@/src/util/validation'
import type { Mount, InputField } from '@/src/type'

export function InputMonth(
  props: Readonly<{
    component?: React.ComponentType<
      React.InputHTMLAttributes<HTMLSelectElement> & {
        options: Array<{
          value: string
          label: string
        }>
      }
    >
    input: InputField
    onMount: Mount
  }>
) {
  const placeholder = props.input.placeholder ?? 'Select month'
  const options = [{ value: '', label: placeholder }, ...getMonth()]

  const schema = getText(props.input)
  if (props.input.name) {
    props.onMount(props.input.name, schema)
  }

  return (
    <Input input={props.input} component={props.component} options={options} />
  )
}
