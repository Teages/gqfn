import { describe, expect, it } from 'vitest'
import { raw } from '../src'

describe('@gqfn/core', () => {
  it('works', () => {
    expect(typeof raw).toBe('function')
    expect(typeof raw.gqfn).toBe('function')
    expect(typeof raw.enum).toBe('function')
    expect(typeof raw.fragment).toBe('function')
    expect(typeof raw.partial).toBe('function')
  })
})
