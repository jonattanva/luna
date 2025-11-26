import { Description } from '@/src/common/description'
import { ErrorField } from '@/src/common/error'
import { Field as FieldComponent } from '@/src/common/field'
import { Input } from './input'
import { Label } from '@/src/common/label'
import { getComponent } from '@/src/adapter/registry'
import type { Field as FieldType, FormError, Mount } from '@/src/type'

export function Field(
  props: Readonly<{
    errors?: FormError
    field: FieldType
    onMount?: Mount
    hideErrorDetails?: boolean
    value?: Record<string, unknown>
  }>
) {
  const Component = getComponent(props.field.type)
  if (!Component) {
    return null
  }

  const errors = props.field.name
    ? props.errors?.[props.field.name]?.errors
    : undefined

  const error = errors && errors.length > 0
  const defaultValue =
    props.value && props.field.name ? props.value[props.field.name] : undefined

  return (
    <FieldComponent error={error}>
      {props.field.name && (
        <Label name={props.field.name} required={props.field.required}>
          {props.field.label}
        </Label>
      )}
      <Input
        component={Component}
        defaultValue={defaultValue}
        error={error}
        field={props.field}
        onMount={props.onMount}
      />
      {props.field.description && (
        <Description>{props.field.description}</Description>
      )}
      {error && !props.hideErrorDetails && <ErrorField errors={errors} />}
    </FieldComponent>
  )
}
