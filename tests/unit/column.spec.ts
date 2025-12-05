import { expect, test } from '@playwright/test'
import { getColumn } from '@/packages/luna-react/src/util/column'

test.describe('Column', { tag: ['@unit'] }, () => {
  test('should return the correct column class', () => {
    expect(getColumn()).toBe('md:grid-cols-2')
    expect(getColumn(1)).toBe('md:grid-cols-1')
    expect(getColumn(2)).toBe('md:grid-cols-2')
    expect(getColumn(3)).toBe('md:grid-cols-3')
    expect(getColumn(4)).toBe('md:grid-cols-2')
  })
})
