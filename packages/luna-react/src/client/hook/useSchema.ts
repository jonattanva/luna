import { useRef } from 'react'
import type { Schema, Schemas } from '../../type'

export function useSchema() {
  const schemaRef = useRef<Schemas>({})

  function onMount(name: string, schema: Schema) {
    schemaRef.current[name] = schema
  }

  function onUnmount(name: string) {
    if (schemaRef.current[name]) {
      delete schemaRef.current[name]
    }
  }

  function getSchema() {
    return schemaRef.current
  }

  return [getSchema, onMount, onUnmount] as const
}
