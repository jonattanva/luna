import { Description } from '@/src/component/description'
import { FieldError } from '@/src/component/field-error'
import { reportInputErrorAtom } from '../lib/error-store'
import { useAtom } from 'jotai'
import { useDataSource } from '../hook/useDataSource'
import { useInput } from '../hook/useInput'
import {
  getValue,
  mergeCommonProps,
  resolveSource,
} from '@/src/util/helper/input'
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
    withinColumn?: boolean
  }>
) {
  const currentValue = getValue(props.field, props.value)
  const source = resolveSource(props.field, props.value, props.source)

  const [errors, setErrors] = useAtom(reportInputErrorAtom(props.field.name))

  const [schema] = useInput(props.field, props.onMount, props.onUnmount)
  const [options] = useDataSource(source, props.config, props.field.disabled)

  const commonPropsWithOptions = mergeCommonProps(
    props.field,
    props.commonProps,
    options
  )

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target.value
    validated(target)
  }

  function onBlur(event: React.FocusEvent<HTMLInputElement>) {
    const target = event.target.value
    validated(target)
  }

  function validated(value: string) {
    const results = schema.safeParse(value)
    const errors =
      results.error?.issues.map((issue) => {
        return issue.message
      }) ?? []

    setErrors(errors)
  }

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
        onBlur={onBlur}
        onChange={onChange}
      />
      {props.field.description && (
        <Description>{props.field.description}</Description>
      )}
      {!props.withinColumn && (
        <FieldError name={props.field.name} errors={errors} />
      )}
    </>
  )
}
