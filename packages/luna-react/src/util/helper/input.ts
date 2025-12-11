import { buildOptions, buildSource } from '../build'
import { getCurrentValue } from '../extract'
import { isOptions } from '../is-input'
import type {
  CommonProps,
  DataSource,
  Field,
  Nullable,
  Source,
} from '@/src/type'

export function resolveSource(
  field: Field,
  value?: Record<string, unknown>,
  source?: Source
) {
  const defaultSource = buildOptions(field, value)
  return buildSource(field, source) ?? defaultSource
}

export function getValue(field: Field, value?: Record<string, unknown>) {
  return getCurrentValue(field.name ? value?.[field.name] : undefined)
}

export function mergeCommonProps(
  field: Field,
  commonProps: CommonProps,
  options?: Nullable<DataSource | unknown[]>
) {
  return isOptions(field) && Array.isArray(options)
    ? { ...commonProps, options }
    : commonProps
}
