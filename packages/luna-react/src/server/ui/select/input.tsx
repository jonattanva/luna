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
    className?: string
    defaultValue?: string
    error?: boolean
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
          {...(props.error && { 'data-invalid': true })}
          {...commonProps}
          className={props.className}
          defaultValue={props.defaultValue}
          options={props.options}
        />
      )}
    </BaseInputComponent>
  )
}
