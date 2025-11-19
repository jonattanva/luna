import { BaseInputComponent } from './common/base-input'
import type { BaseInput } from './type'

export function TextArea(
  props: Readonly<{
    input: BaseInput
    component?: React.ComponentType<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>
    >
  }>
) {
  return (
    <BaseInputComponent input={props.input} component={props.component}>
      {({ Component, dataAttributes, commonProps }) => (
        <Component
          {...dataAttributes}
          {...commonProps}
          maxLength={props.input.advanced?.length?.max}
          minLength={props.input.advanced?.length?.min}
        />
      )}
    </BaseInputComponent>
  )
}
