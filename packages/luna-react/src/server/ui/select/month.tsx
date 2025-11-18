import { getDataAttributes } from '@/src/util/data-attribute'
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
  const Component = props.component
  if (!Component) {
    return null
  }

  const data = getDataAttributes(props.input)
  const placeholder = props.input.placeholder ?? 'Select month'

  const options = Array.from({ length: 12 }, (_, i) => ({
    value: (i + 1).toString().padStart(2, '0'),
    label: new Date(0, i).toLocaleString('default', { month: 'long' }),
  }))

  options.unshift({
    value: '',
    label: placeholder,
  })

  return (
    <Component
      {...data}
      disabled={props.input.readonly}
      id={props.input.name}
      name={props.input.name}
      options={options}
      required={props.input.required}
    />
  )
}
