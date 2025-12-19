import { atomWithStorage } from 'jotai/utils'

export const codeAtom = atomWithStorage('luna-editor:code', '')

export const iaProviderAtom = atomWithStorage<string | null>(
  'luna-editor:ia-provider',
  null
)
