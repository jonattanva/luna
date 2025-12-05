import { DATA_INVALID } from '../util/constant'
import { Description } from './description'
import { FieldError } from './field-error'
import { InputBase } from './input/input-base'
import { Label } from './label'
import { getDefaultValue } from '../util/extract'
import type { Children, Field, FormError, Nullable } from '../type'

export function Field(
  props: Readonly<{
    children: Children
    disabled?: boolean
    errors?: Nullable<FormError>
    field: Field
    hideErrorDetails?: boolean
    value?: Record<string, unknown>
  }>
) {
  const errors = props.field.name
    ? props.errors?.[props.field.name]?.errors
    : undefined

  const defaultValue = getDefaultValue(
    props.field.name ? props.value?.[props.field.name] : undefined
  )

  return (
    <div
      {...(errors && { [DATA_INVALID]: 'true' })}
      data-slot="field"
      className="flex w-full flex-col gap-3 *:w-full data-[invalid=true]:text-red-500"
    >
      {props.field.name && props.field.label && (
        <Label name={props.field.name} required={props.field.required}>
          {props.field.label}
        </Label>
      )}
      <InputBase
        defaultValue={defaultValue}
        disabled={props.disabled}
        errors={errors}
        field={props.field}
      >
        {props.children}
      </InputBase>
      {!props.hideErrorDetails && (
        <FieldError errors={errors} name={props.field.name} />
      )}
      {props.field.description && (
        <Description>{props.field.description}</Description>
      )}
    </div>
  )
}
