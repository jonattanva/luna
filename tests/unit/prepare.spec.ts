import { expect, test } from '@playwright/test'
import { prepare } from '@/packages/luna-core/src/util/prepare'

test.describe('Prepare Utility', { tag: ['@unit'] }, () => {
  test('should filter out hidden fields and sort by order', () => {
    const input = [
      { id: '1', order: 2 },
      { id: '2', hidden: true, order: 1 },
      { id: '3' },
      { id: '4', order: 0 },
    ]

    const result = prepare(input)
    expect(result).toEqual([
      { id: '4', order: 0 },
      { id: '1', order: 2 },
      { id: '3' },
    ])
  })

  test('should return an empty array when given no input', () => {
    const result = prepare()
    expect(result).toEqual([])
  })
})
