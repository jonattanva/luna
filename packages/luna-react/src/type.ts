export type Orderable = {
  order?: number
}

export type Hiddenable = {
  hidden?: boolean
}

export type Base = Orderable & Hiddenable

export type Control = {
  advanced?: {
    data?: Record<string, string>
  }
  label?: string
  type: 'button' | 'button/submit'
} & Base

export type Controls = readonly Control[]

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

export type Fields = readonly (Column | Control | Field)[]

export type Form = {
  description?: string
  fields: Fields
  separator?: boolean
  title?: string
} & Base

export type Forms = readonly Form[]

export type InputElement = React.InputHTMLAttributes<HTMLInputElement> & {
  [key: `data-${string}`]: unknown
}

export type InputBase = {
  advanced?: {
    data?: Record<string, unknown>
    length?: {
      max?: number
      min?: number
    }
  }
  name?: string
  required?: boolean
  validation?: {
    required?: string
  }
}

export type InputText = InputBase & {
  advanced?: {
    autocomplete?: string
  }
}

export type InputNumber = InputBase

export type InputTextArea = InputBase
