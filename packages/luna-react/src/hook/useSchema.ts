import { useRef } from 'react'
import type { z } from 'zod'

export function useSchema() {
  const schemaRef = useRef<Record<string, z.ZodTypeAny>>({})

  function onMount(name: string, schema: z.ZodTypeAny) {
    schemaRef.current = {
      ...schemaRef.current,
      [name]: schema,
    }
  }

  function getSchema() {
    return schemaRef.current
  }

  return [getSchema, onMount] as const
}
