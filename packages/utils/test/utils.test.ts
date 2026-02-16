import { describe, expect, it } from 'vitest'
import { greetUpper } from '../src'

describe('greetUpper', () => {
  it('returns upper-cased greeting', () => {
    expect(greetUpper('Workspace')).toBe('HELLO, WORKSPACE!')
  })
})
