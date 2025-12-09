import { expect, test } from '@playwright/test'
import { isObject, isValue } from '@/packages/luna-react/src/util/is-type'

test.describe('Is Type Utility', { tag: ['@unit'] }, () => {
  test('should identify objects correctly', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ key: 'value' })).toBe(true)
    expect(isObject(null)).toBe(false)
    expect(isObject([])).toBe(false)
    expect(isObject('string')).toBe(false)
    expect(isObject(123)).toBe(false)
  })

  test('should identify values correctly', () => {
    expect(isValue('string')).toBe(true)
    expect(isValue(123)).toBe(true)
    expect(isValue(true)).toBe(true)
    expect(isValue(false)).toBe(true)
    expect(isValue(null)).toBe(false)
    expect(isValue(undefined)).toBe(false)
    expect(isValue({})).toBe(false)
    expect(isValue([])).toBe(false)
  })
})
