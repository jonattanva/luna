import type { z } from 'zod'

export type Nullable<T> = T | null

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

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type DataSource = {
  url: string
  headers?: Record<string, string>
  method?: Method
}

export type Source = {
  [key: string]: Array<unknown> | DataSource
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

export type Slot = Field | Column<Field>
export type Fields = readonly Slot[]

export type FormError = Record<string, { errors: string[] } | undefined>

export type Children = (props: {
  ariaAttributes?: AriaAttributes
  commonProps: CommonProps
  dataAttributes?: DataAttributes
  defaultValue?: string | number
  field: Field
}) => React.ReactNode

export type Schema = z.ZodTypeAny
export type Schemas = Record<string, Schema>

export type LunaForm = {
  data: {
    [key: string]: FormDataEntryValue
  }
  errors: FormError | null
}

export type Environment = {
  [key: string]: string | number | boolean
}

export type Config = {
  env?: Environment
  inputs: {
    [key: string]: React.ComponentType<React.HTMLAttributes<HTMLElement>>
  }
}

export type InputConfig = {
  types: string | string[]
  input: React.ComponentType<React.HTMLAttributes<HTMLElement>>
}
