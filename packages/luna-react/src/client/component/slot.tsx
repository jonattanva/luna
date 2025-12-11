import { Column } from './wrapper/column'
import { Field } from './wrapper/field'
import { SlotBase } from '@/src/component/slot/slot-base'
import type { Children, Fields } from '@/src/type'

export const Slot = (
  props: Readonly<{
    children: Children
    disabled?: boolean
    fields?: Fields
    withinColumn?: boolean
  }>
) => <SlotBase {...props} components={{ column: Column, field: Field }} />
