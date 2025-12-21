import { expect, test } from '@playwright/test'
import {
  getDataAttributes,
  getAriaAttributes,
} from '@/packages/luna-core/src/util/attributes'

test.describe('Get aria and data attributes', { tag: ['@unit'] }, () => {
  test('should return empty object when no aria attributes are provided', () => {
    expect(getAriaAttributes({})).toEqual({})
  })

  test('should convert aria attributes correctly', () => {
    const props = {
      advanced: {
        aria: {
          label: 'Label',
          hidden: true,
          describedby: 'description-id',
        },
      },
    }
    expect(getAriaAttributes(props.advanced.aria)).toEqual({
      'aria-label': 'Label',
      'aria-hidden': true,
      'aria-describedby': 'description-id',
    })
  })

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

    expect(getDataAttributes(props.advanced.data)).toEqual({
      'data-testId': 'button-1',
      'data-role': 'admin',
    })
  })
})
