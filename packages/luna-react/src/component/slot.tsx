import { Column } from './column'
import { Field } from './field'
import { Fragment } from 'react'
import { prepare } from '../util/prepare'
import { isColumn, isField } from '../util/is-input'
import type { Children, Fields } from '../type'

export function Slot(
  props: Readonly<{
    children: Children
    disabled?: boolean
    errors?: Record<string, string[]>
    fields?: Fields
  }>
) {
  const fields = prepare(props.fields)

  // FIXME: Mirar que es posible llevar a client y server

  return fields.map((field, index) => (
    <Fragment key={index}>
      {isColumn(field) && (
        <Column column={field}>
          <Slot
            disabled={props.disabled}
            errors={props.errors}
            fields={field.fields}
          >
            {props.children}
          </Slot>
        </Column>
      )}
      {isField(field) && (
        <Field disabled={props.disabled} field={field} errors={props.errors}>
          {props.children}
        </Field>
      )}
    </Fragment>
  ))
}
