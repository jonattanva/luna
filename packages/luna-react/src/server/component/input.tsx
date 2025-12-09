import { buildOptions, buildSource } from '@/src/util/build'
import { getCurrentValue } from '@/src/util/extract'
import { isOptions } from '@/src/util/is-input'
import type {
  AriaAttributes,
  CommonProps,
  DataAttributes,
  Field,
  Config,
  Source,
} from '@/src/type'

export function Input(
  props: Readonly<{
    ariaAttributes?: AriaAttributes
    commonProps: CommonProps
    config: Config
    dataAttributes?: DataAttributes
    field: Field
    source?: Source
    value?: Record<string, unknown>
  }>
) {
  const defaultSource = buildOptions(props.field, props.value)
  const currentValue = getCurrentValue(
    props.field.name ? props.value?.[props.field.name] : undefined
  )

  const source = buildSource(props.field, props.source) ?? defaultSource

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
      defaultValue={currentValue}
    />
  )
}
