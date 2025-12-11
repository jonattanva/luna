import { Field as Component } from '@/src/component/field'
import { inputErrorAtom } from '../../lib/error-store'
import { useAtomValue } from 'jotai'
import type { Children, Field } from '@/src/type'

export function Field(
  props: Readonly<{
    children: Children
    disabled?: boolean
    field: Field
    withinColumn?: boolean
  }>
) {
  const errors = useAtomValue(inputErrorAtom)

  return (
    <Component
      disabled={props.disabled}
      errors={errors}
      field={props.field}
      withinColumn={props.withinColumn}
    >
      {props.children}
    </Component>
  )
}
