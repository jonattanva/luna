export function Select({
  className,
  ...props
}: React.ComponentProps<'select'> & {
  options?: Array<{ value: string; label: string }>
  placeholder?: string
}) {
  const {
    options = [],
    placeholder = 'Select an option',
    ...selectProps
  } = props

  const optionsWithPlaceholder = placeholder
    ? [{ value: '', label: placeholder }, ...options]
    : options

  return (
    <NativeSelect className={className} {...selectProps}>
      {optionsWithPlaceholder.map((option) => (
        <NativeSelectOption key={option.value} value={option.value}>
          {option.label}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  )
}

function NativeSelect({ className, ...props }: React.ComponentProps<'select'>) {
  return (
    <select data-slot="native-select" {...props} />
  )
}

function NativeSelectOption({ ...props }: React.ComponentProps<'option'>) {
  return <option data-slot="native-select-option" {...props} />
}