import { Column } from '@/src/common/column'
import { Field } from '@/src/server/component/field'
import { Fragment } from 'react'
import { isColumn, isField } from '@/src/util/constant'
import { prepare } from '@/src/util/prepare'
import type { Fields, Mount, FormError } from '@/src/type'

export function Slot(
  props: Readonly<{
    errors?: FormError
    fields: Fields
    hideErrorDetails?: boolean
    onMount: Mount
    value?: Record<string, unknown>
  }>
) {
  const fields = prepare(props.fields)

  return (
    <>
      {fields.map((field, index) => (
        <Fragment key={index}>
          {isColumn(field) && (
            <Column column={field} errors={props.errors}>
              <Slot
                errors={props.errors}
                fields={field.fields}
                hideErrorDetails={true}
                onMount={props.onMount}
                value={props.value}
              />
            </Column>
          )}
          {isField(field) && (
            <Field
              errors={props.errors}
              field={field}
              hideErrorDetails={props.hideErrorDetails}
              onMount={props.onMount}
              value={props.value}
            />
          )}
        </Fragment>
      ))}
    </>
  )
}
