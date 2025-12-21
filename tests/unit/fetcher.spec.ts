import { expect, test } from '@playwright/test'
import { fetcher } from '@/packages/luna-core/src/fetcher'

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })

let originalFetch: typeof fetch
let calls: Array<{ url: string; init?: RequestInit }>

test.describe('Fetcher', { tag: ['@unit'] }, () => {
  test.beforeEach(() => {
    calls = []
    originalFetch = global.fetch

    global.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      calls.push({
        url: typeof input === 'string' ? input : input.toString(),
        init,
      })

      return jsonResponse({ ok: true })
    }
  })

  test.afterEach(() => {
    global.fetch = originalFetch
  })

  test('should throw error for invalid URL', async () => {
    const dataSource = {
      url: 'http://example.com/undefined',
      method: 'GET',
    }

    await expect(fetcher(dataSource)).rejects.toThrow(
      `Invalid URL: ${dataSource.url}`
    )
  })

  test('should append query parameters for GET requests', async () => {
    const dataSource = {
      url: 'http://example.com/api',
      method: 'GET',
      body: {
        param1: 'value1',
        param2: 'value2',
      },
    }

    const result = await fetcher(dataSource)

    expect(result).toEqual({ ok: true })
    expect(calls).toHaveLength(1)
    expect(calls[0]?.url).toBe(
      'http://example.com/api?param1=value1&param2=value2'
    )
    expect(calls[0]?.init?.method).toBe('GET')
    expect(calls[0]?.init?.body).toBeUndefined()
  })

  test('should send body for non-GET requests', async () => {
    const dataSource = {
      url: 'http://example.com/api',
      method: 'POST',
      body: {
        key: 'value',
      },
    }

    const result = await fetcher(dataSource)

    expect(result).toEqual({ ok: true })
    expect(calls).toHaveLength(1)
    expect(calls[0]?.url).toBe('http://example.com/api')
    expect(calls[0]?.init?.method).toBe('POST')
    expect(calls[0]?.init?.body).toBe(JSON.stringify(dataSource.body))
    expect(calls[0]?.init?.headers).toMatchObject({
      'Content-Type': 'application/json',
    })
  })
})
