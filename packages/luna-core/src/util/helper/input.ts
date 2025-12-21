import { buildOptions, buildSource } from '../build'
import { getCurrentValue } from '../extract'
import { isOptions, isSelect, isValidValue } from '../is-input'
import type {
  CommonProps,
  DataSource,
  Field,
  Nullable,
  Source,
  Value,
} from '../../type'
import { OPTIONS } from '../constant'

export function resolveSource(
  field: Field,
  value?: Record<string, unknown>,
  source?: Source
) {
  const defaultSource = buildOptions(field, value)
  return buildSource(field, source) ?? defaultSource
}

export function getInputValue(field: Field, value?: Record<string, unknown>) {
  return getCurrentValue(field.name ? value?.[field.name] : undefined)
}

export function mergeOptionsProps(
  field: Field,
  commonProps: CommonProps,
  options?: Nullable<DataSource | unknown[]>
) {
  return isOptions(field) && Array.isArray(options)
    ? { ...commonProps, [OPTIONS]: options }
    : commonProps
}

export function getPreselectedValue(
  field: Field,
  commonProps: CommonProps,
  value?: Value
) {
  if (field.required && !isValidValue(value)) {
    if (isSelect(field)) {
      if (field.advanced?.preselected !== false && OPTIONS in commonProps) {
        const options = commonProps[OPTIONS]
        if (Array.isArray(options) && options.length === 1) {
          return options[0]
        }
      }
    }
  }
  return value
}

/*

export function getPreselectedValue(field: Field, commonProps: CommonProps) {
  if (field.required && isSelect(field)) {
    if (field.advanced?.preselected !== false && OPTIONS in commonProps) {
      const options = commonProps[OPTIONS]
      if (Array.isArray(options) && options.length === 1) {
        return {
          ...commonProps,
          defaultValue: options[0],
        }
      }
    }
  }
  return commonProps
}


*/
