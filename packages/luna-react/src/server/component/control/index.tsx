import { Action } from '../action'
import { Field } from '@/src/common/field'
import { prepare } from '@/src/util/prepare'
import type { Controls } from '@/src/type'

export function Control(
  props: Readonly<{
    control?: Controls
  }>
) {
  if (!props.control) {
    return null
  }

  const controls = prepare(props.control)

  return (
    <Field orientation="vertical">
      {controls.map((control, index) => (
        <Action key={index} field={control} />
      ))}
    </Field>
  )
}
