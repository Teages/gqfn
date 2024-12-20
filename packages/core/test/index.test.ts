import { describe, expect, it } from 'vitest'
import { createGQFn } from '../src'

describe('@gqfn/core', () => {
  it('works', () => {
    const gqfn = createGQFn()
    expect(typeof gqfn).toBe('function')
    expect(typeof gqfn.gqfn).toBe('function')
    expect(typeof gqfn.enum).toBe('function')
    expect(typeof gqfn.fragment).toBe('function')
    expect(typeof gqfn.partial).toBe('function')
  })
})
