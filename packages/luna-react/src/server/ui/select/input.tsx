import { BaseInputComponent } from '../common/base-input'
import type { InputField } from '@/src/type'

export function Input(
  props: Readonly<{
    component?: React.ComponentType<
      React.InputHTMLAttributes<HTMLSelectElement> & {
        options: Array<{
          value: string
          label: string
        }>
      }
    >
    input: InputField
    options: Array<{
      value: string
      label: string
    }>
  }>
) {
  return (
    <BaseInputComponent input={props.input} component={props.component}>
      {({ Component, dataAttributes, commonProps }) => (
        <Component
          {...dataAttributes}
          {...commonProps}
          options={props.options}
        />
      )}
    </BaseInputComponent>
  )
}
