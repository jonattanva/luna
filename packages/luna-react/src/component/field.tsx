import { DATA_INVALID } from '../util/constant'
import { Description } from './description'
import { InputBase } from './input/input-base'
import { Label } from './label'
import type { Children, Field } from '../type'

export function Field(
  props: Readonly<{
    children: Children
    disabled?: boolean
    errors?: Record<string, string[]>
    field: Field
  }>
) {
  const errors = props.field.name ? props.errors?.[props.field.name] : undefined

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
      {props.field.description && (
        <Description>{props.field.description}</Description>
      )}
    </div>
  )
}
