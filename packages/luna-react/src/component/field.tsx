import { DATA_INVALID } from '../util/constant'
import { Description } from './description'
import { FieldError } from './field-error'
import { InputBase } from './input/input-base'
import { Label } from './label'
import type { Children, Field, FormError, Nullable } from '../type'

export function Field(
  props: Readonly<{
    children: Children
    disabled?: boolean
    errors?: Nullable<FormError>
    field: Field
    hideErrorDetails?: boolean
  }>
) {
  const errors = props.field.name
    ? props.errors?.[props.field.name]?.errors
    : undefined

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
      <InputBase disabled={props.disabled} errors={errors} field={props.field}>
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
