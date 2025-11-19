import { InputMonth } from '../../ui/select/month'
import { InputNumber } from '../../ui/input/number'
import { InputText } from '../../ui/input/text'
import { TextArea } from '../../ui/textarea'
import { InputYear } from '../../ui/select/year'

import {
  NUMBER,
  SELECT_MONTH,
  SELECT_YEAR,
  TEXT,
  TEXTAREA,
} from '@/src/util/constant'

import type { Field as FieldType } from '@/src/type'

export function Input(
  props: Readonly<{
    component: React.ComponentType
    field: FieldType
  }>
) {
  return (
    <>
      {{
        [TEXT]: (
          <InputText
            input={props.field}
            component={
              props.component as React.ComponentType<
                React.InputHTMLAttributes<HTMLInputElement>
              >
            }
          />
        ),
        [TEXTAREA]: (
          <TextArea
            input={props.field}
            component={
              props.component as React.ComponentType<
                React.TextareaHTMLAttributes<HTMLTextAreaElement>
              >
            }
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
            input={props.field}
            component={
              props.component as React.ComponentType<
                React.InputHTMLAttributes<HTMLInputElement>
              >
            }
          />
        ),
      }[props.field.type] ?? null}
    </>
  )
}
