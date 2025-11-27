import { Fragment } from 'react'
import { prepare } from '../util/prepare'
import type { Fields } from '../type'

export function Slot(
  props: Readonly<{
    fields?: Fields
    value?: Record<string, unknown>
  }>
) {
  const fields = prepare(props.fields)

  return fields.map((field, index) => <Fragment key={index}>{index}</Fragment>)
}
