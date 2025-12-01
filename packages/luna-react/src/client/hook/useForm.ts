import { useActionState } from 'react'
import type { Schema } from '@/src/type'

export function useForm<T>(
  schema: Record<string, Schema>,
  initialState: T,
  callback?: (formData: FormData) => Promise<void> | void
) {
  const action = async (state: Awaited<T>, formData: FormData): Promise<T> => {
    console.log('Form Data:', Object.fromEntries(formData.entries()))

    if (callback) {
      await callback(formData)
    }
    return state as T
  }

  const [state, formAction] = useActionState(action, initialState as Awaited<T>)

  return [state, formAction] as const
}
