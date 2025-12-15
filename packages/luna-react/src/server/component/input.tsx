import { Description } from '../../component/description'
import {
  getValue,
  mergeCommonProps,
  resolveSource,
} from '../../util/helper/input'
import type {
  AriaAttributes,
  CommonProps,
  DataAttributes,
  Field,
  Config,
  Source,
} from '../../type'

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
  const currentValue = getValue(props.field, props.value)
  const source = resolveSource(props.field, props.value, props.source)

  const commonPropsWithOptions = mergeCommonProps(
    props.field,
    props.commonProps,
    source
  )

  const Component = props.config.inputs[props.field.type]
  if (!Component) {
    return null
  }

  return (
    <>
      <Component
        {...props.ariaAttributes}
        {...commonPropsWithOptions}
        {...props.dataAttributes}
        defaultValue={currentValue}
      />
      {props.field.description && (
        <Description>{props.field.description}</Description>
      )}
    </>
  )
}
