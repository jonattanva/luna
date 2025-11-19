import { expect, test } from '@playwright/test'
import { getDataAttributes } from '@/packages/luna-react/src/util/data-attribute'

test.describe('Get data attributes', { tag: ['@unit'] }, () => {
  test('should return empty object when no data attributes are provided', () => {
    expect(getDataAttributes({})).toEqual({})
  })

  test('should convert data attributes correctly', () => {
    const props = {
      advanced: {
        data: {
          testId: 'button-1',
          role: 'admin',
        },
      },
    }

    expect(getDataAttributes(props)).toEqual({
      'data-testId': 'button-1',
      'data-role': 'admin',
    })
  })
})
