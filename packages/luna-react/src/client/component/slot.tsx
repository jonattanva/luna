import { Column } from './wrapper/column'
import { Field } from './wrapper/field'
import { SlotBase } from '../../component/slot/slot-base'
import type { Children } from '../../type'
import type { Fields } from '@luna-form/core'

export const Slot = (
  props: Readonly<{
    children: Children
    disabled?: boolean
    fields?: Fields
    withinColumn?: boolean
  }>
) => <SlotBase {...props} components={{ column: Column, field: Field }} />
