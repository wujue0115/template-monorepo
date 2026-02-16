import { describe, expect, it } from 'vitest'
import { createGreeting } from '../src'

describe('createGreeting', () => {
  it('returns a greeting message', () => {
    expect(createGreeting('Monorepo')).toBe('Hello, Monorepo!')
  })
})
