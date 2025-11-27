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
  label?: string
  type: string
} & Base

export type Slot = Field | Column<Field>
export type Fields = readonly Slot[]

export type FormError = Record<string, { errors: string[] } | undefined>
