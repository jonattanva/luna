import type { Field, Schema } from '@/src/type'
import { getSchema } from '@/src/util/schema'
import { useEffect, useEffectEvent } from 'react'

export function useInput(
  field: Field,
  onMount: (name: string, schema: Schema) => void,
  onUnmount: (name: string) => void
) {
  const schema = getSchema(field)

  const onMountHandler = useEffectEvent((name: string) => {
    onMount(name, schema)
  })

  const onUnmountHandler = useEffectEvent((name: string) => {
    onUnmount(name)
  })

  useEffect(() => {
    if (field.name) {
      onMountHandler(field.name)
    }

    return () => {
      if (field.name) {
        onUnmountHandler(field.name)
      }
    }
  }, [field.name])

  return [schema] as const
}
