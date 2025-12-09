import { expect, test } from '@playwright/test'
import {
  extract,
  getArray,
  getCurrentValue,
  getValue,
} from '@/packages/luna-react/src/util/extract'

test.describe('Extract', { tag: ['@unit'] }, () => {
  test('should extract values correctly', () => {
    const data = {
      user: {
        name: 'John Doe',
        address: {
          city: 'New York',
          zip: '10001',
        },
      },
      items: [1, 2, 3],
    }

    expect(extract(data, 'user.name')).toBe('John Doe')
    expect(extract(data, 'user.address.city')).toBe('New York')
    expect(extract(data, 'user.address.zip')).toBe('10001')
    expect(extract(data, 'items')).toEqual([1, 2, 3])
  })

  test('should return null for non-existing paths', () => {
    const data = {
      user: {
        name: 'John Doe',
      },
    }

    expect(extract(data, 'user.age')).toBeNull()
    expect(extract(data, 'user.address.city')).toBeNull()
    expect(extract(data, 'items')).toBeNull()
  })

  test('should extract array correctly', () => {
    const data = {
      user: {
        name: 'John Doe',
        address: {
          city: 'New York',
          zip: '10001',
        },
      },
      items: [1, 2, 3],
    }

    expect(getArray(data, 'items')).toEqual([1, 2, 3])
    expect(getArray(data, 'user.name')).toBeNull()
  })

  test('should return null when namespace is not provided', () => {
    const data = {
      user: {
        name: 'John Doe',
      },
    }

    expect(extract(data)).toBeNull()
    expect(getArray(data)).toBeNull()
  })

  test('should get value correctly', () => {
    const data = {
      user: {
        name: 'John Doe',
        age: 30,
      },
      items: [1, 2, 3],
    }

    expect(getValue(data, 'user.name')).toBe('John Doe')
    expect(getValue(data, 'user.age')).toBe(30)
    expect(getValue(data, 'user.address')).toBeUndefined()
    expect(getValue(data, 'items')).toBeUndefined()
  })

  test('should get default value correctly', () => {
    const data = {
      label: 'John Doe',
      value: 2,
    }

    expect(getCurrentValue(data, 'label')).toBe('John Doe')
    expect(getCurrentValue(data)).toBe(2)
    expect(getCurrentValue('John Doe')).toBe('John Doe')
  })
})
