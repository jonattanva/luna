import { Input } from './input'
import { getMonth } from '@/src/util/month'
import { getText } from '@/src/util/validation'
import type { Mount, InputField, Option } from '@/src/type'

export function InputMonth(
  props: Readonly<{
    component?: React.ComponentType<
      React.InputHTMLAttributes<HTMLSelectElement> & Option<string>
    >
    defaultValue?: string
    error?: boolean
    input: InputField
    onMount: Mount
  }>
) {
  const placeholder = props.input.placeholder ?? 'Select month'
  const options = [{ value: '', label: placeholder }, ...getMonth()]

  const schema = getText({
    ...props.input,
    advanced: {
      ...props.input.advanced,
      length: undefined,
    },
  })

  if (props.input.name) {
    props.onMount(props.input.name, schema)
  }

  return (
    <Input
      component={props.component}
      defaultValue={props.defaultValue}
      error={props.error}
      input={props.input}
      options={options}
    />
  )
}
