import useSWR from 'swr'
import { getArray } from '@luna-form/core'
import type { DataSource, Nullable } from '@luna-form/core'
import type { Config } from '../../type'

export function useDataSource<T>(
  dataSource: Nullable<DataSource | T[]> = null,
  config: Config,
  disabled = false
): [Nullable<T[]>] {
  const { data } = useSWR<Record<string, T> | T[]>(
    buildSource(dataSource, disabled),
    config.fetcher
  )

  if (dataSource) {
    if (Array.isArray(dataSource)) {
      return [dataSource]
    }

    if (data) {
      return [getArray(data, dataSource.namespace)]
    }
  }

  return [null]
}

function buildSource<T>(
  dataSource: Nullable<DataSource | Array<T>> = null,
  disabled = false
): Nullable<DataSource | Array<T>> {
  if (dataSource && !Array.isArray(dataSource) && !disabled) {
    return dataSource
  }
  return null
}
