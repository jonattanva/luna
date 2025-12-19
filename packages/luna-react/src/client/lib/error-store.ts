import { atom } from 'jotai'
import { atomFamily } from 'jotai-family'

export const inputErrorAtom = atom<Record<string, string[]>>({})

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

export const clearInputErrorAtom = atom(null, (get, set, names: string[]) => {
  const current = get(inputErrorAtom)
  const next = { ...current }

  let hasChanges = false
  for (const name of names) {
    if (next[name]) {
      delete next[name]
      hasChanges = true
    }
  }

  if (hasChanges) {
    set(inputErrorAtom, next)
  }
})

export const reportErrorAtom = atom(
  null,
  (get, set, error: Record<string, string[]>) => {
    const current = get(inputErrorAtom)

    if (areErrorsPresent(current, error)) {
      set(inputErrorAtom, error)
    }
  }
)

function areErrorsPresent(
  current: Record<string, string[]>,
  errors: Record<string, string[]>
): boolean {
  const currentKeys = Object.keys(current)
  const errorKeys = Object.keys(errors)

  if (currentKeys.length !== errorKeys.length) {
    return true
  }

  for (const key of errorKeys) {
    const currentErrors = current[key]
    const newErrors = errors[key]

    if (!currentErrors || currentErrors.length !== newErrors.length) {
      return true
    }

    if (currentErrors.length > 0) {
      const currentSet = new Set(currentErrors)
      const allMatch = newErrors.every((err) => currentSet.has(err))
      if (!allMatch) {
        return true
      }
    }
  }

  return false
}
