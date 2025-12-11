import { atom } from 'jotai'
import { atomFamily } from 'jotai-family'

export const inputErrorAtom = atom<Record<string, string[]>>({})

export const resetErrorAtom = atom(null, (get, set) => {
  set(inputErrorAtom, {})
})

export const reportInputErrorAtom = atomFamily((name: string) =>
  atom(
    (get) => get(inputErrorAtom)[name] ?? null,
    (get, set, errors: string[]) => {
      const current = get(inputErrorAtom)

      if (errors.length > 0) {
        const equals = current[name]?.every((err) => errors.includes(err))
        if (!equals) {
          set(inputErrorAtom, { ...current, [name]: errors })
        }
      } else if (current[name]) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [name]: _unused, ...rest } = current
        set(inputErrorAtom, rest)
      }
    }
  )
)

export const reportErrorAtom = atom(
  null,
  (get, set, error: Record<string, string[]>) => {
    const current = get(inputErrorAtom)

    const currentKeys = Object.keys(current)
    const errorKeys = Object.keys(error)

    if (currentKeys.length !== errorKeys.length) {
      set(inputErrorAtom, error)
      return
    }

    for (const key of errorKeys) {
      const currentErrors = current[key]
      const newErrors = error[key]

      if (!currentErrors) {
        set(inputErrorAtom, error)
        return
      }

      if (currentErrors.length !== newErrors.length) {
        set(inputErrorAtom, error)
        return
      }

      if (currentErrors.length > 0) {
        const currentSet = new Set(currentErrors)
        const allMatch = newErrors.every((err) => currentSet.has(err))
        if (!allMatch) {
          set(inputErrorAtom, error)
          return
        }
      }
    }
  }
)
