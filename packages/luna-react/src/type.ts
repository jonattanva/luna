import type { z } from 'zod'

export type Mount = (name: string, schema: z.ZodTypeAny) => void

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
  fields: Fields
} & Base

export type Field = {
  description?: string
  label?: string
  name?: string
  required?: boolean
  type: string
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
