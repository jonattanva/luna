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

export type Fields = readonly (Field | Column)[]

export type Form = {
  description?: string
  fields: Fields
  separator?: boolean
  title?: string
} & Base

export type Forms = readonly Form[]
