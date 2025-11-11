import { COLUMN, FIELDS } from '@/src/util/constant'
import { Column } from '@/src/common/column'
import { Fragment } from 'react'
import { Input } from '@/src/server/component/input'
import { prepare } from '@/src/util/prepare'
import type { Fields } from '@/src/type'

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
