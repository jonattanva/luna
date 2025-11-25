import { useActionState } from 'react'
import { z } from 'zod'

export type Schema = () => Record<string, z.ZodTypeAny>

export function useFormAction(
  getSchema: Schema,
  callback?: (data: Record<string, unknown>) => void
) {
  function dispatch(_: unknown, formData: FormData) {
    const data = getEntries(formData)
    const validated = getValidated(getSchema, data)

    if (!validated.success) {
      return {
        data,
        errors: z.treeifyError(validated.error).properties,
      }
    }

    if (callback) {
      callback(validated.data)
    }

    return {
      data: validated.data,
    }
  }

  return useActionState(dispatch, null)
}

function getValidated(
  getSchema: Schema,
  formData: { [k: string]: FormDataEntryValue }
) {
  return z.object(getSchema()).safeParse(formData)
}

function getEntries(formData: FormData) {
  return Object.fromEntries(formData.entries())
}
