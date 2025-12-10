import { FieldError } from '@/src/component/field-error'
import { buildOptions, buildSource } from '@/src/util/build'
import { getCurrentValue } from '@/src/util/extract'
import { isOptions } from '@/src/util/is-input'
import { useDataSource } from '../hook/useDataSource'
import { useInput } from '../hook/useInput'
import { useInputError } from '../hook/useInputError'
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
    onMount: (name: string, schema: Schema) => void
    onUnmount: (name: string) => void
    source?: Source
    value?: Record<string, unknown>
  }>
) {
  const defaultSource = buildOptions(props.field, props.value)
  const source = buildSource(props.field, props.source) ?? defaultSource

  const currentValue = getCurrentValue(
    props.field.name ? props.value?.[props.field.name] : undefined
  )

  const [errors, setErrors] = useInputError(props.field.name)

  const [schema] = useInput(props.field, props.onMount, props.onUnmount)
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
      const errors =
        validated.error?.issues.map((issue) => {
          return issue.message
        }) ?? []

      setErrors(errors)
    }
  }

  const Component = props.config.inputs[props.field.type]
  if (!Component) {
    return null
  }

  // FIXME: Solo mostrar el error si el campo no pertence a una columna

  console.log('Rendering input for field:', props.field.name)
  return (
    <>
      <Component
        {...props.ariaAttributes}
        {...commonPropsWithOptions}
        {...props.dataAttributes}
        defaultValue={currentValue}
        onBlur={onBlur}
        onChange={onChange}
      />
      <FieldError name={props.field.name} errors={errors} />
    </>
  )
}
