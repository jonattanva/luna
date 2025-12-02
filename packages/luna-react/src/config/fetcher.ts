import type { DataSource } from '../type'

export async function fetcher(dataSource: DataSource) {
  const url = buildUrl(dataSource)
  const method = buildMethod(dataSource)

  let headers = buildHeaders(dataSource)
  if (dataSource.body) {
    if (isGetMethod(method)) {
      Object.entries(dataSource.body)
        .filter(([, value]) => value !== undefined && value !== 'undefined')
        .forEach(([key, value]) => {
          url.searchParams.append(key, String(value))
        })
    } else {
      const body = stringify(dataSource.body)
      if (body) {
        dataSource.body = body
        headers = {
          ...headers,
          'Content-Type': 'application/json',
        }
      }
    }
  }

  const request = await fetch(url.toString(), {
    body: buildBody(method, dataSource.body),
    cache: dataSource.cache,
    headers,
    method,
  })

  const response = await request.json()
  if (request.ok) {
    return response
  }

  throw response
}

function isValid(value: string) {
  return !value.includes('undefined') && !value.includes('null')
}

function buildUrl(dataSource: DataSource) {
  const url = dataSource.url?.trim()
  if (!url || !isValid(url)) {
    throw new Error(`Invalid URL: ${dataSource.url}`)
  }
  return new URL(url)
}

function buildMethod(dataSource: DataSource) {
  return dataSource.method ?? 'GET'
}

function buildHeaders(dataSource: DataSource): HeadersInit {
  const headers = dataSource.headers ?? {}
  return {
    Accept: 'application/json',
    ...headers,
  }
}

function isGetMethod(method: string) {
  return method.toUpperCase() === 'GET'
}

function stringify(body: BodyInit | Record<string, unknown>) {
  try {
    return JSON.stringify(body)
  } catch {
    return null
  }
}

function buildBody(method: string, body?: BodyInit | Record<string, unknown>) {
  if (!isGetMethod(method)) {
    return body as BodyInit
  }
}
