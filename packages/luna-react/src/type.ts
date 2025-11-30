import {
  COLUMN,
  INPUT,
  INPUT_NUMBER,
  INPUT_TEXTAREA,
  SELECT,
  SELECT_MONTH,
  SELECT_YEAR,
  TYPE_NUMBER,
} from './constant'
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

export function isColumn(slot: Slot): slot is Column<Field> {
  return slot.type === COLUMN && 'fields' in slot
}

export function isField(slot: Slot): slot is Field {
  return slot.type !== COLUMN
}

export function isInput(field: Field): field is Input {
  return field.type === INPUT || field.type.startsWith(`${INPUT}/`)
}

export function isTextArea(field: Field): field is Input {
  return field.type === INPUT_TEXTAREA
}

export type Children = (props: {
  ariaAttributes?: AriaAttributes
  commonProps: CommonProps
  dataAttributes?: DataAttributes
  field: Field
}) => React.ReactNode

export type Schema = z.ZodTypeAny

export type LunaConfig = {
  inputs: {
    [key: string]: React.ComponentType<React.HTMLAttributes<HTMLElement>>
  }
}

export type LunaInputConfig = {
  types: string | string[]
  input: React.ComponentType<React.HTMLAttributes<HTMLElement>>
}

export function isSelect(field: Field): field is Select {
  return field.type === SELECT || field.type.startsWith(`${SELECT}/`)
}

export function isSelectMonth(field: Field): boolean {
  return field.type === SELECT_MONTH
}

export function isSelectYear(field: Field): boolean {
  return field.type === SELECT_YEAR
}

export function isNumber(field: Field): field is Input {
  return field.type === INPUT_NUMBER || field.type === TYPE_NUMBER
}
