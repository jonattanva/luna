import type { Base } from '../type'

export function prepare<T extends Base>(base: readonly T[] = []) {
  return base
    .filter((field) => field.hidden !== true)
    .sort((a, b) => getOrder(a) - getOrder(b))
}

function getOrder(item: Base) {
  return item.order ?? Number.MAX_VALUE
}

export function entries<T>(values?: Record<string, T>) {
  return Object.entries(values ?? {}) as [key: string, value: T][]
}
