import { atom } from 'jotai'
import { atomFamily } from 'jotai-family'

export const errorAtom = atom<Record<string, string[]>>({})

export const useErrorAtom = atomFamily((name: string) =>
  atom(
    (get) => get(errorAtom)[name] ?? null,
    (get, set, errors: string[]) => {
      const current = get(errorAtom)

      if (errors.length > 0) {
        const equals = current[name]?.every((err) => errors.includes(err))
        if (!equals) {
          set(errorAtom, { ...current, [name]: errors })
        }
      } else if (current[name]) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [name]: _unused, ...rest } = current
        set(errorAtom, rest)
      }
    }
  )
)
