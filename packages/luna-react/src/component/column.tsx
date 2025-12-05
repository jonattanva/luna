import { FieldError } from './field-error'
import { entries } from '../util/prepare'
import { getColumn } from '../util/column'
import { twMerge } from 'tailwind-merge'
import type { Column, Field, FormError, Nullable } from '../type'

export function Column(
  props: Readonly<{
    children?: React.ReactNode
    column?: Column<Field>
    errors?: Nullable<FormError>
  }>
) {
  const cols = getColumn(props.column?.advanced?.cols)

  const fields = props.column?.fields ?? []
  const errors = entries(props.errors)
    .filter(([key]) => fields.find((field) => field.name === key))
    .flatMap(([, value]) => value?.errors ?? [])

  return (
    <div className="flex w-full flex-col gap-4">
      <div className={twMerge('grid grid-cols-1 gap-4', cols)}>
        {props.children}
      </div>
      {errors.length > 0 && <FieldError errors={errors} />}
    </div>
  )
}
