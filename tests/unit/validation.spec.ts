import { expect, test } from '@playwright/test'
import { getText } from '@/packages/luna-react/src/util/validation'
import { z } from 'zod'

test.describe('Validation', { tag: ['@unit'] }, () => {
  test('should return a string schema and parse correctly', () => {
    const schema = getText({
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    })

    expect(z.parse(schema, 'Jonattan ')).toBe('Jonattan')
    expect(z.safeParse(schema, '').success).toBe(false)
    expect(z.safeParse(schema, null).success).toBe(false)
    expect(z.safeParse(schema, undefined).success).toBe(false)
  })
})
