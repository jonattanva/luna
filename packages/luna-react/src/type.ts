import type { z } from 'zod'

export type Mount = (name: string, schema: z.ZodTypeAny) => void

export type FormError = Record<
  string,
  | {
      errors: string[]
    }
  | undefined
>

export type Orderable = {
  order?: number
}

export type Hiddenable = {
  hidden?: boolean
}

export type Base = Orderable & Hiddenable

export type Column = {
  advanced?: {
    cols?: number
  }
  type: 'column'
  fields: Array<Field>
} & Base

export type Field = {
  advanced?: {
    data?: DataAttributes
  }
  description?: string
  label?: string
  name?: string
  placeholder?: string
  required?: boolean
  type: string
  readonly?: boolean
} & Base

export type Fields = readonly (Column | Field)[]

export type Form = {
  description?: string
  fields: Fields
  separator?: boolean
  title?: string
} & Base

export type Forms = readonly Form[]

export type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean
}

export type InputField = Field & {
  advanced?: {
    autocomplete?: string
    length?: {
      max?: number
      min?: number
    }
  }
  value?: string
}

export type Option<T> = {
  value: T
  label: string
}
