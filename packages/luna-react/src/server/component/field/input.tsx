import { InputMonth } from '../../ui/select/month'
import { InputNumber } from '../../ui/number'
import { InputText } from '../../ui/text'
import { NUMBER, SELECT_MONTH, TEXT, TEXTAREA } from '@/src/util/constant'
import { TextArea } from '../../ui/textarea'
import type { Field as FieldType } from '@/src/type'

export function Input(
  props: Readonly<{
    component?: React.ComponentType
    field: FieldType
  }>
) {
  return (
    <>
      {
        {
          [TEXT]: <InputText input={props.field} component={props.component} />,
          [TEXTAREA]: (
            <TextArea input={props.field} component={props.component} />
          ),
          [SELECT_MONTH]: (
            <InputMonth input={props.field} component={props.component} />
          ),
          [NUMBER]: (
            <InputNumber input={props.field} component={props.component} />
          ),
        }[props.field.type]
      }
    </>
  )
}
