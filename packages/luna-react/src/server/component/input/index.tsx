import { Description } from '@/src/common/description'
import { Field } from '@/src/common/field'
import { Label } from '@/src/common/label'
import { getComponent } from '@/src/adapter/registry'
import { parse } from '@/src/adapter'
import type { Field as FieldType } from '@/src/type'

export function Input(props: Readonly<{ field: FieldType }>) {
  const Component = getComponent(props.field.type)
  if (!Component) {
    return null
  }

  return (
    <Field>
      {props.field.name && (
        <Label name={props.field.name} required={props.field.required}>
          {props.field.label}
        </Label>
      )}
      <Component {...parse(props)} />
      {props.field.description && (
        <Description>{props.field.description}</Description>
      )}
    </Field>
  )
}
