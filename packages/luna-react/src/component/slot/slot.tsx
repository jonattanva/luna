import { SlotBase } from './slot-base'
import { Column } from '../column'
import { Field } from '../field'
import type { Children, Fields } from '@/src/type'

export const Slot = (
  props: Readonly<{
    children: Children
    disabled?: boolean
    fields?: Fields
  }>
) => <SlotBase {...props} components={{ column: Column, field: Field }} />
