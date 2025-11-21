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
    field: FieldType
    onMount: Mount
  }>
) {
  return (
    <>
      {{
        [TEXT]: (
          <InputText
            component={
              props.component as React.ComponentType<
                React.InputHTMLAttributes<HTMLInputElement>
              >
            }
            input={props.field}
            onMount={props.onMount}
          />
        ),
        [TEXTAREA]: (
          <InputTextArea
            component={
              props.component as React.ComponentType<
                React.TextareaHTMLAttributes<HTMLTextAreaElement>
              >
            }
            input={props.field}
            onMount={props.onMount}
          />
        ),
        [SELECT_MONTH]: (
          <InputMonth
            input={props.field}
            component={
              props.component as React.ComponentType<
                React.InputHTMLAttributes<HTMLSelectElement> & {
                  options: Array<{
                    value: string
                    label: string
                  }>
                }
              >
            }
          />
        ),
        [SELECT_YEAR]: (
          <InputYear
            input={props.field}
            component={
              props.component as React.ComponentType<
                React.InputHTMLAttributes<HTMLSelectElement> & {
                  options: Array<{
                    value: string
                    label: string
                  }>
                }
              >
            }
          />
        ),
        [NUMBER]: (
          <InputNumber
            component={
              props.component as React.ComponentType<
                React.InputHTMLAttributes<HTMLInputElement>
              >
            }
            input={props.field}
            onMount={props.onMount}
          />
        ),
      }[props.field.type] ?? null}
    </>
  )
}
