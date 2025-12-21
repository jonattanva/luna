import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const baseStorage = createJSONStorage<
  { key: string; provider: string } | null | undefined
>(() => localStorage)

const storage = {
  ...baseStorage,
  getItem: (key: string) => baseStorage.getItem(key, null),
}

export const codeAtom = atomWithStorage('luna-editor:code', '')

export const aiProviderAtom = atomWithStorage<
  { key: string; provider: string } | null | undefined
>('luna-editor:ai-provider', undefined, storage)
