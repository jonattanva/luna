import { expect, test } from '@playwright/test'
import { getEmail } from '@/packages/luna-react/src/util/schema'

test.describe('Schema Utility', { tag: ['@unit'] }, () => {
  test('should create an email schema with required validation', () => {
    const input = {
      name: 'email',
      required: true,
      type: 'input/email',
      validation: {
        required: 'Email is required',
      },
    }

    const schema = getEmail(input)
    expect(schema.safeParse('').success).toBe(false)
    expect(schema.safeParse(null).success).toBe(false)
    expect(schema.safeParse('invalid-email').success).toBe(false)
    expect(schema.safeParse('test@example.com').success).toBe(true)
  })

  test('should create an email schema without required validation', () => {
    const input = {
      name: 'email',
      required: false,
      type: 'input/email',
    }

    const schema = getEmail(input)
    expect(schema.safeParse('').success).toBe(true)
    expect(schema.safeParse(null).success).toBe(true)
    expect(schema.safeParse('invalid-email').success).toBe(false)
    expect(schema.safeParse('test@example.com').success).toBe(true)
  })
})
