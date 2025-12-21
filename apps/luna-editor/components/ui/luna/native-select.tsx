import { NativeSelect, NativeSelectOption } from '../native-select'

type Option = {
  value: string | number
  label: string
}

export function Select({
  className,
  size = 'default',
  ...props
}: Omit<React.ComponentProps<'select'>, 'size'> & {
  defaultValue?: Option
  options?: Array<Option>
  placeholder?: string
  size?: 'sm' | 'default'
}) {
  const {
    options = [],
    placeholder = 'Select an option',
    ...selectProps
  } = props

  const optionsWithPlaceholder = placeholder
    ? [{ value: '', label: placeholder }, ...options]
    : options

  const defaultValue = props.defaultValue ? props.defaultValue.value : undefined

  return (
    <NativeSelect
      className={className}
      {...selectProps}
      size={size}
      defaultValue={defaultValue}
    >
      {optionsWithPlaceholder.map((option) => (
        <NativeSelectOption key={option.value} value={option.value}>
          {option.label}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  )
}
