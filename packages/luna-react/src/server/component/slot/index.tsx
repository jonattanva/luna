import { COLUMN, FIELDS } from '../../../util/constant'
import { Column } from '../../../common/column'
import { Fragment } from 'react'
import { Input } from '../input'
import { prepare } from '../../../util/prepare'
import type { Fields } from '../../../type'

export function Slot(
  props: Readonly<{
    fields: Fields
  }>
) {
  const fields = prepare(props.fields)

  return (
    <>
      {fields.map((field, index) => (
        <Fragment key={index}>
          {field.type === COLUMN && FIELDS in field && (
            <Column cols={field.advanced?.cols}>
              <Slot fields={field.fields} />
            </Column>
          )}
          {field.type !== COLUMN && <Input field={field} />}
        </Fragment>
      ))}
    </>
  )
}
