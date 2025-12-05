import useSWR from 'swr'
import { getArray } from '@/src/util/extract'
import type { Config, DataSource, Nullable } from '@/src/type'

export function useDataSource<T>(
  dataSource: Nullable<DataSource | T[]> = null,
  config: Config
): [Nullable<T[]>] {
  const { data } = useSWR<Record<string, T> | T[]>(
    buildSource(dataSource),
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

function buildSource<T>(dataSource: Nullable<DataSource | Array<T>> = null) {
  if (dataSource && !Array.isArray(dataSource)) {
    return dataSource
  }
  return null
}
