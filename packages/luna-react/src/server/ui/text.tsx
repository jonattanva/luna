import { BaseInputComponent } from './common/base-input'
import { getText } from '@/src/util/validation'
import type { Mount, InputField } from '@/src/type'

export function InputText(
  props: Readonly<{
    component?: React.ComponentType<React.InputHTMLAttributes<HTMLInputElement>>
    input: InputField
    onMount: Mount
  }>
) {
  const schema = getText(props.input)
  if (props.input.name) {
    props.onMount(props.input.name, schema)
  }

  return (
    <BaseInputComponent input={props.input} component={props.component}>
      {({ Component, dataAttributes, commonProps }) => (
        <Component
          {...dataAttributes}
          {...commonProps}
          autoComplete={props.input.advanced?.autocomplete}
          maxLength={props.input.advanced?.length?.max}
          minLength={props.input.advanced?.length?.min}
          type="text"
        />
      )}
    </BaseInputComponent>
  )
}
