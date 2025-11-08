import type { Base } from '../type'

export function prepare<T extends Base>(base: readonly T[]) {
  return base
    .filter((field) => field.hidden !== true)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}
