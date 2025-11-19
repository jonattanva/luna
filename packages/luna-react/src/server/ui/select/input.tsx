import { BaseInputComponent } from '../common/base-input'
import type { BaseInput } from '../type'

export function Input(
  props: Readonly<{
    input: BaseInput
    options: Array<{
      value: string
      label: string
    }>
    component?: React.ComponentType<
      React.InputHTMLAttributes<HTMLSelectElement> & {
        options: Array<{
          value: string
          label: string
        }>
      }
    >
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
