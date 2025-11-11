import { isNumber, isText, isTextArea } from '../util/constant'
import { toNumber, toText, toTextArea } from './parse'
import type { Field as FieldType } from '@/src/type'

export function parse(props: Readonly<{ field: FieldType }>) {
  if (isText(props.field.type)) {
    return toText(props.field)
  }

  if (isTextArea(props.field.type)) {
    return toTextArea(props.field)
  }

  if (isNumber(props.field.type)) {
    return toNumber(props.field)
  }

  return props.field
}
