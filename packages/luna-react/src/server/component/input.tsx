import type {
  AriaAttributes,
  CommonProps,
  DataAttributes,
  Field,
  LunaConfig,
} from '@/src/type'

export function Input(
  props: Readonly<{
    ariaAttributes?: AriaAttributes
    commonProps: CommonProps
    config: LunaConfig
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
