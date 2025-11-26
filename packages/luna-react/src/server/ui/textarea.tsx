import { BaseInputComponent } from './common/base-input'
import { getText } from '@/src/util/validation'
import type { Mount, InputField } from '@/src/type'

export function InputTextArea(
  props: Readonly<{
    component?: React.ComponentType<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>
    >
    defaultValue?: string
    error?: boolean
    input: InputField
    onMount?: Mount
  }>
) {
  const schema = getText(props.input)
  if (props.input.name && props.onMount) {
    props.onMount(props.input.name, schema)
  }

  return (
    <BaseInputComponent input={props.input} component={props.component}>
      {({ Component, dataAttributes, commonProps }) => (
        <Component
          {...dataAttributes}
          {...(props.error && { 'data-invalid': true })}
          {...commonProps}
          autoComplete={props.input.advanced?.autocomplete}
          defaultValue={props.defaultValue}
          maxLength={props.input.advanced?.length?.max}
          minLength={props.input.advanced?.length?.min}
        />
      )}
    </BaseInputComponent>
  )
}
