import { getConvert, getYear, getCurrentYear } from '@/src/util/year'
import { Input } from './input'
import type { BaseInput } from '../type'

const now = getCurrentYear()

export function InputYear(
  props: Readonly<{
    input: BaseInput
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
  const { advanced = {} } = props.input
  const { length = {} } = advanced
  const { min = now, max = now + 5 } = length

  const placeholder = props.input.placeholder ?? 'Select year'

  const options = [
    { value: '', label: placeholder },
    ...getYear(getConvert(min, now), getConvert(max, now)),
  ]

  return (
    <Input input={props.input} component={props.component} options={options} />
  )
}
