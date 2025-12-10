import { useAtom } from 'jotai'
import { useErrorAtom } from '../lib/error-store'

export function useInputError(name: string) {
  const inputErrorAtom = useErrorAtom(name)
  return useAtom(inputErrorAtom)
}
