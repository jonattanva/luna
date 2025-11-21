import { useActionState } from 'react'
import { z } from 'zod'

export type Schema = () => Record<string, z.ZodTypeAny>

export function useFormAction(getSchema: Schema) {
  function dispatch(_: unknown, formData: FormData) {
    const formEntries = getEntries(formData)
    const validated = getValidated(getSchema, formEntries)

    if (!validated.success) {
      return {
        data: formEntries,
        errors: z.treeifyError(validated.error),
      }
    }
    return validated.data
  }

  const [state, formAction] = useActionState(dispatch, null)

  console.log('Form Action State:', state)

  return [state, formAction] as const
}

function getValidated(
  getSchema: Schema,
  formData: { [k: string]: FormDataEntryValue }
) {
  const schema = getSchema()
  return z.object(schema).safeParse(formData)
}

function getEntries(formData: FormData) {
  return Object.fromEntries(formData.entries())
}
