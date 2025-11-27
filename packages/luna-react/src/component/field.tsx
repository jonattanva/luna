import { Description } from './description'
import { FieldError } from './field-error'
import { InputBase } from './input-base'
import { Label } from './label'
import type { Children, Field, FormError } from '../type'

export function Field(
  props: Readonly<{
    children: Children
    errors?: FormError
    field: Field
    hideErrorDetails?: boolean
  }>
) {
  const errors = props.field.name
    ? props.errors?.[props.field.name]?.errors
    : undefined

  return (
    <div
      data-slot="field"
      className="flex w-full flex-col gap-4 data-[invalid=true]:text-red-500 [&>*]:w-full"
    >
      {props.field.name && (
        <Label name={props.field.name} required={props.field.required}>
          {props.field.label}
        </Label>
      )}
      <InputBase field={props.field}>{props.children}</InputBase>
      {props.field.description && (
        <Description>{props.field.description}</Description>
      )}
      {!props.hideErrorDetails && <FieldError errors={errors} />}
    </div>
  )
}
