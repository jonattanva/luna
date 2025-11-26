import { BaseInputComponent } from './common/base-input'
import { getNumber } from '@/src/util/validation'
import type { Mount, InputField } from '@/src/type'

export function InputNumber(
  props: Readonly<{
    component?: React.ComponentType<React.InputHTMLAttributes<HTMLInputElement>>
    defaultValue?: number
    error?: boolean
    input: InputField
    onMount?: Mount
  }>
) {
  const schema = getNumber(props.input)
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
          max={props.input.advanced?.length?.max}
          min={props.input.advanced?.length?.min}
          type="number"
        />
      )}
    </BaseInputComponent>
  )
}
