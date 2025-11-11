import type { Base } from '../type'

export function prepare<T extends Base>(base: readonly T[] = []) {
  return base
    .filter((field) => field.hidden !== true)
    .sort((a, b) => {
      return (a.order ?? Number.MAX_VALUE) - (b.order ?? Number.MAX_VALUE)
    })
}
