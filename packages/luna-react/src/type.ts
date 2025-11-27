import type { z } from 'zod'

export type Orderable = {
  order?: number
}

export type Hiddenable = {
  hidden?: boolean
}

export type Base = Orderable & Hiddenable

export type Form = {
  description?: string
  fields?: Fields
  separator?: boolean
  title?: string
} & Base

export type Forms = readonly Form[]

export type Column<T> = {
  advanced?: {
    cols?: number
  }
  type: 'column'
  fields?: T[]
} & Base

export type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean
}

export type AriaAttributes = {
  [key: `aria-${string}`]: string | number | boolean
}

export type Field = {
  advanced?: {
    aria?: AriaAttributes
    data?: DataAttributes
  }
  description?: string
  label?: string
  name: string
  placeholder?: string
  readonly?: boolean
  required?: boolean
  type: string
  validation?: {
    required?: string
  }
} & Base

export type Slot = Field | Column<Field>
export type Fields = readonly Slot[]

export type FormError = Record<string, { errors: string[] } | undefined>

export function isColumn(slot: Slot): slot is Column<Field> {
  return slot.type === 'column' && 'fields' in slot
}

export function isField(slot: Slot): slot is Field {
  return slot.type !== 'column'
}

export type Children = (props: {
  ariaAttributes?: AriaAttributes
  commonProps: CommonProps
  dataAttributes?: DataAttributes
  field: Field
}) => React.ReactNode

export type CommonProps = {
  disabled?: boolean
  id?: string
  name?: string
}

export type Schema = z.ZodTypeAny
