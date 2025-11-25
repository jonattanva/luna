import { ErrorField } from '../error'
import { getColumn } from '../../util/column'
import { twMerge } from 'tailwind-merge'
import type { Column, FormError } from '@/src/type'

export function Column(
  props: Readonly<{
    children?: React.ReactNode
    column?: Column
    errors?: FormError
  }>
) {
  const cols = getColumn(props.column?.advanced?.cols)

  const errors = Object.entries(props.errors ?? {})
    .filter(([key]) => props.column?.fields.find((field) => field.name === key))
    .flatMap(([, value]) => value?.errors ?? [])

  return (
    <div className="flex w-full flex-col gap-4">
      <div className={twMerge('grid gap-4', cols)}>{props.children}</div>
      {errors.length > 0 && <ErrorField errors={errors} />}
    </div>
  )
}
