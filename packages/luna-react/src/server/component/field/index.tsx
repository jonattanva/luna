import { Description } from '@/src/common/description'
import { Field as FieldComponent } from '@/src/common/field'
import { Input } from './input'
import { Label } from '@/src/common/label'
import { getComponent } from '@/src/adapter/registry'
import type { Field as FieldType, Mount } from '@/src/type'

export function Field(
  props: Readonly<{
    field: FieldType
    onMount: Mount
  }>
) {
  const Component = getComponent(props.field.type)
  if (!Component) {
    return null
  }

  return (
    <FieldComponent>
      {props.field.name && (
        <Label name={props.field.name} required={props.field.required}>
          {props.field.label}
        </Label>
      )}
      <Input
        component={Component}
        field={props.field}
        onMount={props.onMount}
      />
      {props.field.description && (
        <Description>{props.field.description}</Description>
      )}
    </FieldComponent>
  )
}
