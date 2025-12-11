import { Column as Component } from '@/src/component/column'
import { inputErrorAtom } from '../../lib/error-store'
import { useAtomValue } from 'jotai'
import type { Column, Field } from '@/src/type'

export function Column(
  props: Readonly<{
    children?: React.ReactNode
    column?: Column<Field>
  }>
) {
  const errors = useAtomValue(inputErrorAtom)

  return (
    <Component column={props.column} errors={errors}>
      {props.children}
    </Component>
  )
}
