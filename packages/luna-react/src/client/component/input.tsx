import { isSelect } from '@/src/input'
import { useDataSource } from '../hook/useDataSource'
import { useInput } from '../hook/useInput'
import type {
  AriaAttributes,
  CommonProps,
  DataAttributes,
  Field,
  Config,
  Schema,
  Source,
} from '@/src/type'

export function Input(
  props: Readonly<{
    ariaAttributes?: AriaAttributes
    commonProps: CommonProps
    config: Config
    dataAttributes?: DataAttributes
    defaultValue?: string | number
    field: Field
    onMount: (name: string, schema: Schema) => void
    onUnmount: (name: string) => void
    source?: Source
  }>
) {
  useInput(props.field, props.onMount, props.onUnmount)

  const source =
    props.source && isSelect(props.field)
      ? props.source[props.field.name]
      : undefined

  const [options] = useDataSource(source, props.config)

  const commonPropsWithOptions =
    isSelect(props.field) && Array.isArray(options)
      ? { ...props.commonProps, options }
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
