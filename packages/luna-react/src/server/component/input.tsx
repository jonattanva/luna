import type {
  AriaAttributes,
  CommonProps,
  DataAttributes,
  Field,
  Config,
} from '@/src/type'

export function Input(
  props: Readonly<{
    ariaAttributes?: AriaAttributes
    commonProps: CommonProps
    config: Config
    dataAttributes?: DataAttributes
    field: Field
  }>
) {
  const Component = props.config.inputs[props.field.type]
  if (!Component) {
    return null
  }

  return (
    <Component
      {...props.ariaAttributes}
      {...props.commonProps}
      {...props.dataAttributes}
    />
  )
}
