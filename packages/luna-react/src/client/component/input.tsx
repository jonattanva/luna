import { isOptions } from '@/src/util/is-input'
import { useDataSource } from '../hook/useDataSource'
import { useInput } from '../hook/useInput'
import type {
  AriaAttributes,
  CommonProps,
  Config,
  DataAttributes,
  Field,
  Schema,
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
    onInputValidation?: (name: string, errors: string[]) => void
    onMount: (name: string, schema: Schema) => void
    onUnmount: (name: string) => void
    source?: Source
  }>
) {
  const [schema] = useInput(props.field, props.onMount, props.onUnmount)

  const source =
    props.source && !props.commonProps.disabled && isOptions(props.field)
      ? props.source[props.field.name]
      : undefined

  const [options] = useDataSource(source, props.config)

  const commonPropsWithOptions =
    isOptions(props.field) && Array.isArray(options)
      ? { ...props.commonProps, options }
      : props.commonProps

  function onBlur(event: React.FocusEvent<HTMLInputElement>) {
    if (props.field.required) {
      const validated = schema.safeParse(event.target.value)
      if (!validated.success) {
        const errors = validated.error.issues.map((issue) => issue.message)

        if (props.onInputValidation) {
          props.onInputValidation(props.field.name, errors)
        }
      }
    }
  }

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
      onBlur={onBlur}
    />
  )
}
