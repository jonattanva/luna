import { getSchema } from '@/src/util/schema'
import { useEffect, useEffectEvent } from 'react'
import type { Field, Schema } from '@/src/type'

export function useInput(
  field: Field,
  onMount: (name: string, schema: Schema) => void,
  onUnmount: (name: string) => void
) {
  const schema = getSchema(field)

  const onMountHandler = useEffectEvent((name: string) => {
    if (name) {
      onMount(name, schema)
    }
  })

  const onUnmountHandler = useEffectEvent((name: string) => {
    if (name) {
      onUnmount(name)
    }
  })

  useEffect(() => {
    onMountHandler(field.name)
    return () => {
      onUnmountHandler(field.name)
    }
  }, [field.name])

  return [schema] as const
}
