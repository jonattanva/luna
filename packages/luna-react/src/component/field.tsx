import { Description } from './description'
import { FieldError } from './field-error'
import { InputBase } from './input/input-base'
import { Label } from './label'
import { DATA_INVALID } from '../constant'

import {
  getDefaultValue,
  type Children,
  type Field,
  type FormError,
  type Nullable,
} from '../type'

export function Field(
  props: Readonly<{
    children: Children
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
      className="flex w-full flex-col gap-4 data-[invalid=true]:text-red-500 [&>*]:w-full"
    >
      {props.field.name && (
        <Label name={props.field.name} required={props.field.required}>
          {props.field.label}
        </Label>
      )}
      <InputBase
        defaultValue={defaultValue}
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
