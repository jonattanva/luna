import { Input } from './input'
import { getConvert, getYear, getCurrentYear } from '@/src/util/year'
import { getText } from '@/src/util/validation'
import type { Mount, InputField, Option } from '@/src/type'

const now = getCurrentYear()

export function InputYear(
  props: Readonly<{
    component?: React.ComponentType<
      React.InputHTMLAttributes<HTMLSelectElement> & Option<string>
    >
    defaultValue?: string
    error?: boolean
    input: InputField
    onMount?: Mount
  }>
) {
  const { advanced = {} } = props.input
  const { length = {} } = advanced
  const { min = now, max = now + 5 } = length

  const placeholder = props.input.placeholder ?? 'Select year'

  const options = [
    { value: '', label: placeholder },
    ...getYear(getConvert(min, now), getConvert(max, now)),
  ]

  const schema = getText({
    ...props.input,
    advanced: {
      ...props.input.advanced,
      length: undefined,
    },
  })

  if (props.input.name && props.onMount) {
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
