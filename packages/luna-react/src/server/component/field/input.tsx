import { InputMonth } from '../../ui/select/month'
import { InputNumber } from '../../ui/number'
import { InputText } from '../../ui/text'
import { InputTextArea } from '../../ui/textarea'
import { InputYear } from '../../ui/select/year'

import {
  NUMBER,
  SELECT_MONTH,
  SELECT_YEAR,
  TEXT,
  TEXTAREA,
} from '@/src/util/constant'

import type { Field as FieldType, Mount } from '@/src/type'

export function Input(
  props: Readonly<{
    component: React.ComponentType
    defaultValue?: unknown
    error?: boolean
    field: FieldType
    onMount?: Mount
  }>
) {
  return (
    {
      [TEXT]: (
        <InputText
          component={props.component}
          defaultValue={props.defaultValue}
          error={props.error}
          input={props.field}
          onMount={props.onMount}
        />
      ),
      [TEXTAREA]: (
        <InputTextArea
          component={props.component}
          defaultValue={props.defaultValue}
          error={props.error}
          input={props.field}
          onMount={props.onMount}
        />
      ),
      [NUMBER]: (
        <InputNumber
          component={props.component}
          defaultValue={props.defaultValue}
          error={props.error}
          input={props.field}
          onMount={props.onMount}
        />
      ),
      [SELECT_MONTH]: (
        <InputMonth
          component={props.component}
          defaultValue={props.defaultValue}
          error={props.error}
          input={props.field}
          onMount={props.onMount}
        />
      ),
      [SELECT_YEAR]: (
        <InputYear
          component={props.component}
          defaultValue={props.defaultValue}
          error={props.error}
          input={props.field}
          onMount={props.onMount}
        />
      ),
    }[props.field.type] ?? null
  )
}
