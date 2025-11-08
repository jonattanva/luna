import { Description } from '../../../common/description'
import { Field as Component } from '../../../common/field'
import { Label } from '../../../common/label'
import type { Field } from '../../../type'

export function Input(props: Readonly<{ field: Field }>) {
  return (
    <Component>
      {props.field.name && (
        <Label name={props.field.name} required={props.field.required}>
          {props.field.label}
        </Label>
      )}
      {props.field.type}
      {props.field.description && (
        <Description>{props.field.description}</Description>
      )}
    </Component>
  )
}
