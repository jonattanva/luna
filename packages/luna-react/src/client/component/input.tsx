import { isSelect } from '@/src/input'
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
  const [schema] = useInput(props.field, props.onMount, props.onUnmount)

  const source =
    props.source && isSelect(props.field)
      ? props.source[props.field.name] || []
      : []

  function onBlur(event: React.FocusEvent<HTMLElement>) {
    // FIXME: Implement proper onBlur handling
    console.log(event.target, 'onBlur event target')
    console.log(schema, 'onBlur schema')
  }

  console.log(source, 'input source')

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
      onBlur={onBlur}
    />
  )
}
