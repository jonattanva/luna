import { isOptions } from '@/src/util/is-input'
import type {
  AriaAttributes,
  CommonProps,
  DataAttributes,
  Field,
  Config,
  Source,
  Value,
} from '@/src/type'

export function Input(
  props: Readonly<{
    ariaAttributes?: AriaAttributes
    commonProps: CommonProps
    config: Config
    dataAttributes?: DataAttributes
    defaultValue?: Value
    field: Field
    source?: Source
  }>
) {
  const source =
    props.source && isOptions(props.field)
      ? props.source[props.field.name]
      : undefined

  const commonPropsWithOptions =
    isOptions(props.field) && Array.isArray(source)
      ? { ...props.commonProps, options: source }
      : props.commonProps

  const Component = props.config.inputs[props.field.type]
  if (!Component) {
    return null
  }

  return (
    <Component
      {...props.ariaAttributes}
      {...commonPropsWithOptions}
      {...props.dataAttributes}
      defaultValue={props.defaultValue}
    />
  )
}
