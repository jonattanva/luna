import { clearInputErrorAtom } from '../lib/error-store'
import { useRef } from 'react'
import { useSetAtom } from 'jotai'
import type { Schema, Schemas } from '../../type'

export function useSchema() {
  const setError = useSetAtom(clearInputErrorAtom)
  const schemaRef = useRef<Schemas>({})

  function onMount(name: string, schema: Schema) {
    schemaRef.current[name] = schema
  }

  function onUnmount(name: string) {
    if (schemaRef.current[name]) {
      setError(name)
      delete schemaRef.current[name]
    }
  }

  function getSchema() {
    return schemaRef.current
  }

  return [getSchema, onMount, onUnmount] as const
}
