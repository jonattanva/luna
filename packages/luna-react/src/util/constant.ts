export const COLUMN = 'column'
export const FIELDS = 'fields'

export const TEXT = 'text'
export const TEXT_AREA = 'textarea'
export const NUMBER = 'number'

export function isText(type: string): boolean {
  return type === TEXT
}

export function isTextArea(type: string): boolean {
  return type === TEXT_AREA
}

export function isNumber(type: string): boolean {
  return type === NUMBER
}
