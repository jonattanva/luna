import { BaseInputComponent } from './common/base-input'
import { getText } from '@/src/util/validation'
import type { Mount, InputField } from '@/src/type'

export function InputText(
  props: Readonly<{
    component?: React.ComponentType<React.InputHTMLAttributes<HTMLInputElement>>
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
    <BaseInputComponent component={props.component} input={props.input}>
      {({ Component, dataAttributes, commonProps }) => (
        <Component
          {...dataAttributes}
          {...(props.error && { 'data-invalid': true })}
          {...commonProps}
          autoComplete={props.input.advanced?.autocomplete}
          defaultValue={props.defaultValue}
          maxLength={props.input.advanced?.length?.max}
          minLength={props.input.advanced?.length?.min}
          type="text"
        />
      )}
    </BaseInputComponent>
  )
}
