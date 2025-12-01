import { Column } from './column'
import { Field } from './field'
import { Fragment } from 'react'
import { prepare } from '../util/prepare'
import {
  isColumn,
  isField,
  type Children,
  type Fields,
  type FormError,
  type Nullable,
} from '../type'

export function Slot(
  props: Readonly<{
    children: Children
    errors?: Nullable<FormError>
    fields?: Fields
    hideErrorDetails?: boolean
    htmlValidation?: boolean
    value?: Record<string, unknown>
  }>
) {
  const fields = prepare(props.fields)

  return fields.map((field, index) => (
    <Fragment key={index}>
      {isColumn(field) && (
        <Column column={field} errors={props.errors}>
          <Slot
            errors={props.errors}
            fields={field.fields}
            hideErrorDetails={true}
            htmlValidation={props.htmlValidation}
            value={props.value}
          >
            {props.children}
          </Slot>
        </Column>
      )}
      {isField(field) && (
        <Field
          errors={props.errors}
          field={field}
          hideErrorDetails={props.hideErrorDetails}
          htmlValidation={props.htmlValidation}
          value={props.value}
        >
          {props.children}
        </Field>
      )}
    </Fragment>
  ))
}
