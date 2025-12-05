import type { Value } from '../type'

export function isObject<T>(value: unknown): value is Record<string, T> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

export function isValue(value: unknown): value is Value {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}
