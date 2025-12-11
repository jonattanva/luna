import type { z } from 'zod'

export type Nullable<T> = T | null

export type Orderable = {
  order?: number
}

export type Hiddenable = {
  hidden?: boolean
}

export type Base = Orderable & Hiddenable

export type Section = {
  description?: string
  fields?: Fields
  separator?: boolean
  title?: string
} & Base

export type Sections = readonly Section[]

export type DataSource = {
  url: string
  body?: BodyInit | Record<string, unknown>
  cache?: RequestCache
  headers?: HeadersInit
  method?: string
  namespace?: string
}

export type Source = {
  [key: string]: DataSource | Array<unknown>
}

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

export type CommonProps = {
  disabled?: boolean
  id?: string
  name: string
  placeholder?: string
  required?: boolean
}

export type Field = CommonProps & {
  advanced?: {
    aria?: AriaAttributes
    data?: DataAttributes
  }
  description?: string
  label?: string
  readonly?: boolean
  type: string
  validation?: {
    required?: string
    length?: {
      max?: string
      min?: string
    }
  }
} & Base

export type Input = Field & {
  advanced?: {
    autocomplete?: string
    length?: {
      max?: number
      min?: number
    }
  }
}

export type Select = Field & {
  advanced?: {
    length?: {
      min?: number | string
      max?: number | string
    }
  }
}

export type Fields = Array<Field | Column<Field>>

export type Slot = (props: {
  disabled?: boolean
  fields?: Fields
  withinColumn?: boolean
}) => React.ReactNode

export type Children = (props: {
  ariaAttributes?: AriaAttributes
  commonProps: CommonProps
  dataAttributes?: DataAttributes
  field: Field
  withinColumn?: boolean
}) => React.ReactNode

export type Schema = z.ZodTypeAny
export type Schemas = Record<string, Schema>

export type Environment = {
  [key: string]: Value
}

export type Value = string | number | readonly string[]
