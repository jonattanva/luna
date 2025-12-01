import { useActionState } from 'react'
import { z } from 'zod'
import type { LunaForm, Nullable, Schema, Schemas } from '@/src/type'

export function useFormAction(
  getSchema: () => Schemas,
  callback?: (form: LunaForm) => Promise<void> | void
) {
  const action = async (_: Nullable<LunaForm>, formData: FormData) => {
    const schema = getSchema()
    const data = Object.fromEntries(formData.entries())

    const form = {
      data,
      errors: null,
    }

    const validated = parse(schema, data)
    console.log('Validated form data:', validated)

    if (!validated.success) {
      Object.assign(form, {
        errors: z.treeifyError(validated.error).properties,
      })
    }

    if (callback) {
      await callback(form)
    }

    return form
  }

  const [state, formAction] = useActionState(action, null)

  return [state, formAction] as const
}

function parse(
  schema: Record<string, Schema>,
  formData: { [k: string]: FormDataEntryValue }
) {
  return z.object(schema).safeParse(formData)
}
