import { buildOptions, buildSource } from '@/src/util/build'
import { getCurrentValue } from '@/src/util/extract'
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
} from '@/src/type'

export function Input(
  props: Readonly<{
    ariaAttributes?: AriaAttributes
    commonProps: CommonProps
    config: Config
    dataAttributes?: DataAttributes
    field: Field
    onInputValidation?: (name: string, errors: string[]) => void
    onMount: (name: string, schema: Schema) => void
    onUnmount: (name: string) => void
    source?: Source
    value?: Record<string, unknown>
  }>
) {
  const [schema] = useInput(props.field, props.onMount, props.onUnmount)

  const defaultSource = buildOptions(props.field, props.value)
  const currentValue = getCurrentValue(
    props.field.name ? props.value?.[props.field.name] : undefined
  )

  const source = buildSource(props.field, props.source) ?? defaultSource
  const [options] = useDataSource(source, props.config, props.field.disabled)

  const commonPropsWithOptions =
    isOptions(props.field) && Array.isArray(options)
      ? { ...props.commonProps, options }
      : props.commonProps

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('Input changed:', event.target.value)
    // TODO: apply event handling logic here
  }

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
      defaultValue={currentValue}
      onBlur={onBlur}
      onChange={onChange}
    />
  )
}
