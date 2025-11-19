import { BaseInputComponent } from '../common/base-input'
import type { BaseInput } from '../type'

export function Input(
  props: Readonly<{
    input: BaseInput
    type: string
    component?: React.ComponentType<React.InputHTMLAttributes<HTMLInputElement>>
    autoComplete?: string
  }>
) {
  return (
    <BaseInputComponent input={props.input} component={props.component}>
      {({ Component, dataAttributes, commonProps }) => (
        <Component
          {...dataAttributes}
          {...commonProps}
          autoComplete={props.autoComplete}
          max={props.input.advanced?.length?.max}
          min={props.input.advanced?.length?.min}
          type={props.type}
        />
      )}
    </BaseInputComponent>
  )
}
