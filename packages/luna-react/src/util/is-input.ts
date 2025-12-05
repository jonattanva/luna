import {
  COLUMN,
  FIELDS,
  INPUT,
  INPUT_EMAIL,
  INPUT_NUMBER,
  INPUT_TEXTAREA,
  RADIO,
  SELECT,
  SELECT_MONTH,
  SELECT_YEAR,
  TYPE_EMAIL,
  TYPE_NUMBER,
  TYPE_PASSWORD,
  TYPE_TEL,
  TYPE_TEXT,
} from './constant'
import type { Column, Field, Input, Select, Slot } from '../type'

export function isSelectMonth(field: Field): boolean {
  return field.type === SELECT_MONTH
}

export function isSelectYear(field: Field): boolean {
  return field.type === SELECT_YEAR
}

export function isOptions(field: Field): field is Input {
  return isSelect(field) || isRadio(field)
}

export function isRadio(field: Field): field is Select {
  return field.type === RADIO || field.type.startsWith(`${RADIO}/`)
}

export function isSelect(field: Field): field is Select {
  return field.type === SELECT || field.type.startsWith(`${SELECT}/`)
}

export function isColumn(slot: Slot): slot is Column<Field> {
  return slot.type === COLUMN && FIELDS in slot
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

export function isText(field: Field): field is Input {
  return (
    field.type === TYPE_TEXT ||
    field.type === TYPE_EMAIL ||
    field.type === TYPE_PASSWORD ||
    field.type === TYPE_TEL
  )
}

export function isNumber(field: Field): field is Input {
  return field.type === INPUT_NUMBER || field.type === TYPE_NUMBER
}

export function isEmail(field: Field): field is Input {
  return field.type === INPUT_EMAIL || field.type === TYPE_EMAIL
}

export function getType(value: string = TYPE_TEXT): string {
  const result = value.match(/[^/]+$/)
  if (result) {
    const [type] = result
    if (type !== INPUT) {
      return type.trim().toLowerCase()
    }
  }
  return TYPE_TEXT
}
