import {
  getType,
  isInput,
  isNumber,
  isSelect,
  isText,
  isTextArea,
} from '@/src/util/is-input'
import { buildOptionSelect } from './input-option-select'
import type { CommonProps, Field, Input } from '@/src/type'

export function buildCommon(
  field: Field,
  disabled: boolean = false
): CommonProps {
  const commonProps: CommonProps = {
    disabled: disabled ?? field.readonly,
    id: field.name,
    name: field.name,
    placeholder: field.placeholder,
    required: field.required,
  }

  if (isInput(field)) {
    return {
      ...commonProps,
      ...defineInput(field),
    }
  }

  if (isSelect(field)) {
    return {
      ...commonProps,
      ...defineSelect(field),
    }
  }

  if (isTextArea(field)) {
    return {
      ...commonProps,
      ...defineTextArea(field),
    }
  }

  return commonProps
}

function defineInput(input: Input) {
  const type = getType(input.type)
  const copy = { ...input, type }

  return {
    ...defineAutoComplete(input),
    ...defineNumberLimits(copy),
    ...defineTextLimits(copy),
    type,
  }
}

function defineSelect(field: Field) {
  const options = buildOptionSelect(field)
  if (options) {
    return { options }
  }
  return {}
}

function defineTextArea(field: Field) {
  return {
    ...defineAutoComplete(field),
    ...defineLength(field),
  }
}

function defineAutoComplete(input: Input) {
  const autoComplete = input.advanced?.autocomplete
  if (autoComplete) {
    return { autoComplete }
  }
  return {}
}

function defineConstraints(
  input: Input,
  keys: {
    min: 'min' | 'minLength'
    max: 'max' | 'maxLength'
  }
): Partial<CommonProps> {
  const result: Record<string, number> = {}
  const length = input.advanced?.length
  if (length) {
    if (length.min !== undefined) {
      result[keys.min] = length.min
    }

    if (length.max !== undefined) {
      result[keys.max] = length.max
    }
  }
  return result
}

function defineLength(input: Input): Partial<CommonProps> {
  return defineConstraints(input, { min: 'minLength', max: 'maxLength' })
}

function defineMinMax(input: Input): Partial<CommonProps> {
  return defineConstraints(input, { min: 'min', max: 'max' })
}

function defineTextLimits(input: Input): Partial<CommonProps> {
  if (isText(input)) {
    return defineLength(input)
  }
  return {}
}

function defineNumberLimits(input: Input): Partial<CommonProps> {
  if (isNumber(input)) {
    return defineMinMax(input)
  }
  return {}
}
