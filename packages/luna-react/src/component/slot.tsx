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
} from '../type'

export function Slot(
  props: Readonly<{
    children: Children
    errors?: FormError
    fields?: Fields
    hideErrorDetails?: boolean
    htmlValidation?: boolean
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
        >
          {props.children}
        </Field>
      )}
    </Fragment>
  ))
}
