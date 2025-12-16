import { expect, test } from '@playwright/test'
import {
  isOptions,
  isSelectMonth,
  isSelectYear,
} from '@/packages/luna-react/src/util/is-input'

test.describe('Is Input Utility', { tag: ['@unit'] }, () => {
  test('should identify select month inputs correctly', () => {
    const fieldMonth = {
      name: 'birthMonth',
      type: 'select/month',
    }

    expect(isSelectMonth(fieldMonth)).toBe(true)
  })

  test('should identify non-select month inputs correctly', () => {
    const fieldYear = {
      name: 'birthYear',
      type: 'select/year',
    }

    expect(isSelectMonth(fieldYear)).toBe(false)
  })

  test('should identify select year inputs correctly', () => {
    const fieldYear = {
      name: 'birthYear',
      type: 'select/year',
    }

    expect(isSelectYear(fieldYear)).toBe(true)
  })

  test('should identify non-select year inputs correctly', () => {
    const fieldEmail = {
      name: 'email',
      type: 'email',
    }

    expect(isSelectYear(fieldEmail)).toBe(false)
  })

  test('should identify options inputs correctly', () => {
    const fieldOptions = {
      name: 'country',
      type: 'select/options',
      options: ['USA', 'Canada', 'Mexico'],
    }

    expect(isOptions(fieldOptions)).toBe(true)
  })

  test('should identify non-options inputs correctly', () => {
    const fieldText = {
      name: 'firstName',
      type: 'text',
    }

    expect(isOptions(fieldText)).toBe(false)
  })
})
