export type BaseInput = {
  advanced?: {
    data?: Record<string, string>
    length?: {
      min?: number
      max?: number
    }
  }
  name?: string
  placeholder?: string
  readonly?: boolean
  required?: boolean
}

export type MonthInput = BaseInput & {
  advanced?: {
    length?: never
  }
}
