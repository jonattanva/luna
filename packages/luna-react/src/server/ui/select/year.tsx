import { Input } from './input'
import { getConvert, getYear, getCurrentYear } from '@/src/util/year'
import { getText } from '@/src/util/validation'
import type { Mount, InputField } from '@/src/type'

const now = getCurrentYear()

export function InputYear(
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
  const { advanced = {} } = props.input
  const { length = {} } = advanced
  const { min = now, max = now + 5 } = length

  const placeholder = props.input.placeholder ?? 'Select year'

  const options = [
    { value: '', label: placeholder },
    ...getYear(getConvert(min, now), getConvert(max, now)),
  ]

  const schema = getText(props.input)
  if (props.input.name) {
    props.onMount(props.input.name, schema)
  }

  return (
    <Input input={props.input} component={props.component} options={options} />
  )
}
