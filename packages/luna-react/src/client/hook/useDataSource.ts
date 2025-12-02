import useSWR from 'swr'
import { isObject } from '@/src/input'
import type { Config, DataSource, Nullable } from '@/src/type'

export function useDataSource<T>(
  dataSource: Nullable<DataSource | Array<T>> = null,
  config: Config
): [Nullable<T[]>] {
  const { data } = useSWR<Record<string, T[]>>(
    buildSource(dataSource),
    config.fetcher
  )

  if (dataSource) {
    if (Array.isArray(dataSource)) {
      return [dataSource]
    }

    if (data) {
      const extracted = extract(data, dataSource.namespace)
      return [extracted]
    }
  }

  return [null]
}

function extract<T>(
  collection: Record<string, T[]>,
  namespace?: string
): T[] | null {
  if (!namespace) {
    return null
  }

  const keys = namespace.split('.').filter((key) => key !== '')
  if (keys.length === 0) {
    return null
  }

  let result: Record<string, T[]> | T[] = collection

  for (const key of keys) {
    if (isObject(result)) {
      const value = result[key]
      if (value !== undefined) {
        result = value as Record<string, T[]> | T[]
      } else {
        return null
      }
    } else {
      return null
    }
  }

  return Array.isArray(result) ? result : null
}

function buildSource<T>(dataSource: Nullable<DataSource | Array<T>> = null) {
  if (dataSource && !Array.isArray(dataSource)) {
    return dataSource
  }
  return null
}
