import { isObject, isValue } from './is-type'
import { INPUT, TYPE_TEXT, VALUE } from './constant'
import type { Nullable, Value } from '../type'

export function getCurrentValue<T>(
  value: T,
  entity = VALUE
): Value | undefined {
  if (value !== null && value !== undefined) {
    if (isValue(value)) {
      return value
    }

    if (isObject(value)) {
      const result = getValue(value, entity)
      if (isValue(result)) {
        return result
      }
    }
  }
}

export function getValue<T>(
  value: Record<string, T>,
  namespace?: string
): T | undefined {
  const result = extract(value, namespace)
  if (isValue(result)) {
    return result
  }
}

export function getArray<T>(
  value: Record<string, T> | T[],
  namespace?: string
): Nullable<T[]> {
  if (Array.isArray(value)) {
    return value
  }

  const result = extract(value, namespace)
  if (Array.isArray(result)) {
    return result
  }

  return null
}

export function extract<T>(
  value: Record<string, T>,
  namespace?: string
): T | null {
  if (!namespace || !isObject(value)) {
    return null
  }

  const keys = namespace.split('.').filter((key) => key !== '')
  if (keys.length === 0) {
    return null
  }

  let result: Record<string, T> | T = value
  for (const key of keys) {
    if (isObject(result) && key in result) {
      const obj = result as Record<string, T>
      result = obj[key]
    } else {
      return null
    }
  }

  return result as T
}

export function getType(value: string = TYPE_TEXT): string {
  if (value) {
    const result = value.match(/[^/]+$/)
    if (result) {
      const [type] = result
      if (type !== INPUT) {
        return type.trim().toLowerCase()
      }
    }
  }
  return TYPE_TEXT
}
