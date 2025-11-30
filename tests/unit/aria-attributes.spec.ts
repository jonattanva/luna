import { expect, test } from '@playwright/test'
import { getAriaAttributes } from '@/packages/luna-react/src/util/aria-attributes'

test.describe('Get aria attributes', { tag: ['@unit'] }, () => {
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
    expect(getAriaAttributes(props)).toEqual({
      'aria-label': 'Label',
      'aria-hidden': true,
      'aria-describedby': 'description-id',
    })
  })
})
