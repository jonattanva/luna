import { useInput } from '../hook/useInput'
import type {
  AriaAttributes,
  CommonProps,
  DataAttributes,
  Field,
  LunaConfig,
  Schema,
} from '@/src/type'

export function Input(
  props: Readonly<{
    ariaAttributes?: AriaAttributes
    commonProps: CommonProps
    config: LunaConfig
    dataAttributes?: DataAttributes
    defaultValue?: string | number
    field: Field
    onMount: (name: string, schema: Schema) => void
    onUnmount: (name: string) => void
  }>
) {
  const [] = useInput(props.field, props.onMount, props.onUnmount)

  const Component = props.config.inputs[props.field.type]
  if (!Component) {
    return null
  }

  return (
    <Component
      {...props.ariaAttributes}
      {...props.commonProps}
      {...props.dataAttributes}
      defaultValue={props.defaultValue}
    />
  )
}
