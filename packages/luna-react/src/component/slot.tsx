import { Column } from './column'
import { Field } from './field'
import { Fragment } from 'react'
import { prepare } from '../util/prepare'
import { isColumn, isField } from '../util/is-input'
import type { Children, Fields, FormError, Nullable } from '../type'

export function Slot(
  props: Readonly<{
    children: Children
    disabled?: boolean
    errors?: Nullable<FormError>
    fields?: Fields
    hideErrorDetails?: boolean
    value?: Record<string, unknown>
  }>
) {
  const fields = prepare(props.fields)

  return fields.map((field, index) => (
    <Fragment key={index}>
      {isColumn(field) && (
        <Column column={field} errors={props.errors}>
          <Slot
            disabled={props.disabled}
            errors={props.errors}
            fields={field.fields}
            hideErrorDetails={true}
            value={props.value}
          >
            {props.children}
          </Slot>
        </Column>
      )}
      {isField(field) && (
        <Field
          disabled={props.disabled}
          errors={props.errors}
          field={field}
          hideErrorDetails={props.hideErrorDetails}
          value={props.value}
        >
          {props.children}
        </Field>
      )}
    </Fragment>
  ))
}
