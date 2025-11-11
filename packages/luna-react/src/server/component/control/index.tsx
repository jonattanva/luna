import { Action } from '../action'
import { Field } from '@/src/common/field'
import type { Controls } from '@/src/type'

export function Control(
  props: Readonly<{
    control?: Controls
  }>
) {
  if (!props.control) {
    return null
  }

  return (
    <Field orientation="vertical">
      {props.control?.map((control, index) => (
        <Action key={index} field={control} />
      ))}
    </Field>
  )
}
