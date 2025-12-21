import type { z } from 'zod'

export type Nullable<T> = T | null

export type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean
}

export type AriaAttributes = {
  [key: `aria-${string}`]: string | number | boolean
}

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

export type Orderable = {
  order?: number
}

export type Hideable = {
  hidden?: boolean
}

export type Sections = Array<Section>
export type Value = string | number | readonly string[]
export type Fields = Array<Field | Column>
export type Base = Orderable & Hideable

export type CommonProps = {
  disabled?: boolean
  id?: string
  name?: string
  placeholder?: string
  required?: boolean
}

export type Section = {
  description?: string
  fields?: Fields
  separator?: boolean
  title?: string
} & Base

export type Column = {
  advanced?: {
    cols?: number
  }
  fields: Array<Field>
  type: 'column' | (string & {})
} & Base

export type Field = CommonProps & {
  advanced?: {
    aria?: AriaAttributes
    autocomplete?: string
    cols?: number
    data?: DataAttributes
  }
  description?: string
  fields?: never
  label?: string
  name: string
  readonly?: boolean
  type: string
  validation?: {
    required?: string
    length?: Length<string>
  }
} & Base

export type Length<T> = {
  max?: T
  min?: T
}

export type Input = Field & {
  advanced?: {
    length?: Length<number>
  }
}

export type Select = Field & {
  advanced?: {
    autocomplete?: never
    length?: Length<number | string>
    preselected?: boolean
  }
}

export type Schema = z.ZodTypeAny
export type Schemas = Record<string, Schema>

export type Environment = {
  [key: string]: Value
}

export type BaseConfig<T> = {
  env?: Environment
  fetcher: <T>(dataSource: DataSource) => Promise<T>
  inputs: {
    [key: string]: T
  }
  style?: {
    compact?: boolean
  }
  validation: {
    blur?: boolean
    change?: boolean
    submit?: boolean
  }
}
