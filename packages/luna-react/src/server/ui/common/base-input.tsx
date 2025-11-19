import { getDataAttributes } from '@/src/util/data-attribute'
import type { BaseInput } from '../type'

type BaseInputProps<TProps = Record<string, unknown>> = {
  input: BaseInput
  component?: React.ComponentType<TProps>
  children: (props: {
    Component: React.ComponentType<TProps>
    dataAttributes: Record<string, string | number | boolean>
    commonProps: {
      disabled?: boolean
      id?: string
      name?: string
      placeholder?: string
      required?: boolean
    }
  }) => React.ReactNode
}

export function BaseInputComponent<TProps = Record<string, unknown>>(
  props: Readonly<BaseInputProps<TProps>>
) {
  const Component = props.component
  if (!Component) {
    return null
  }

  const dataAttributes = getDataAttributes(props.input)

  const commonProps = {
    disabled: props.input.readonly,
    id: props.input.name,
    name: props.input.name,
    placeholder: props.input.placeholder,
    required: props.input.required,
  }

  return props.children({
    Component,
    dataAttributes,
    commonProps,
  })
}
