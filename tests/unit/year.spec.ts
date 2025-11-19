import { expect, test } from '@playwright/test'
import { getYear, getConvert } from '@/packages/luna-react/src/util/year'

test.describe('Year', { tag: ['@unit'] }, () => {
  test('should return the correct years', () => {
    expect(getYear(2020, 2023)).toEqual([
      { value: '2020', label: '2020' },
      { value: '2021', label: '2021' },
      { value: '2022', label: '2022' },
      { value: '2023', label: '2023' },
    ])
  })

  test('should return an empty array when max is less than min', () => {
    expect(getYear(2025, 2020)).toEqual([])
  })

  test('should handle same min and max', () => {
    expect(getYear(2022, 2022)).toEqual([{ value: '2022', label: '2022' }])
  })

  test('should convert various year formats correctly', () => {
    const currentYear = new Date().getFullYear()

    expect(getConvert('current')).toBe(currentYear)
    expect(getConvert('current+3')).toBe(currentYear + 3)
    expect(getConvert('current+0')).toBe(currentYear)
    expect(getConvert(2025)).toBe(2025)
    expect(getConvert('2020')).toBe(2020)
    expect(getConvert(' 2021 ')).toBe(2021)
    expect(getConvert('invalid')).toBe(currentYear)
  })
})
