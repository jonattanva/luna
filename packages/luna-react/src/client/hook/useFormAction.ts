import { buildFormData } from '@/src/util/build'
import { buildSchema, flatten } from '@/src/util/schema'
import { reportErrorAtom } from '../lib/error-store'
import { startTransition } from 'react'
import { useSetAtom } from 'jotai'
import type { Schemas } from '@/src/type'

export function useFormAction(
  getSchema: () => Schemas,
  action?: (formData: FormData) => Promise<void> | void
) {
  const setError = useSetAtom(reportErrorAtom)

  async function formAction(formData: FormData) {
    const schemas = getSchema()
    const schema = buildSchema(schemas)

    const form = Object.fromEntries(formData)
    const validated = schema.safeParse(form)

    if (!validated.success) {
      const pretty = flatten(validated.error)
      startTransition(() => {
        setError(pretty)
      })
      return
    }

    if (action) {
      const formData = buildFormData(validated.data)
      await action(formData)
    }
  }

  return [formAction] as const
}
