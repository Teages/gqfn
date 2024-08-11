import { describe, expect, it } from 'vitest'
import { $enum, createGQFn } from '../src'

describe('@gqfn/core', () => {
  it('works', () => {
    const p = createGQFn()
    expect(typeof p.gqfn).toBe('function')
    expect(typeof p.gqp).toBe('function')
    expect(typeof p.$enum).toBe('function')
    expect(typeof $enum).toBe('function')
  })
})
