import { describe, expect, it } from 'vitest'
import { $enum, createGqf } from '../src'

describe('@teages/gqf', () => {
  it('works', () => {
    const p = createGqf()
    expect(typeof p.gqf).toBe('function')
    expect(typeof p.gqp).toBe('function')
    expect(typeof p.$enum).toBe('function')
    expect(typeof $enum).toBe('function')
  })
})
