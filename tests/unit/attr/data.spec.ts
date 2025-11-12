import { expect, test } from '@playwright/test'
import { getData } from '@/packages/luna-react/src/util/attr/data'

test.describe('Get data attributes', { tag: ['@unit'] }, () => {
  test('should return empty object when no data attributes are provided', () => {
    expect(getData({})).toEqual({})
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

    expect(getData(props)).toEqual({
      'data-testId': 'button-1',
      'data-role': 'admin',
    })
  })
})
