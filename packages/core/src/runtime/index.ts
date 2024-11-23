import type { GraphQueryFunctionFragment } from './fragment'
import type { GraphQueryFunctionCore } from './operation'
import { createEnumFunction, type EnumFunction } from './enum'
import { createGraphQueryFunctionFragment } from './fragment'
import { createGraphQueryFunctionCore } from './operation'
import { createGraphQueryPartial, type GraphQueryPartial } from './partial'

export interface GraphQueryFunction extends GraphQueryFunctionCore {
  enum: EnumFunction
  fragment: GraphQueryFunctionFragment
  partial: GraphQueryPartial
}

export const gqfn: GraphQueryFunction = init()

function init() {
  const core = createGraphQueryFunctionCore()
  return Object.assign(core, {
    enum: createEnumFunction(),
    fragment: createGraphQueryFunctionFragment(),
    partial: createGraphQueryPartial(),
  }) as GraphQueryFunction
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('gqfn', () => {
    expect(typeof gqfn).toBe('function')
    expect(typeof gqfn.enum).toBe('function')
    expect(typeof gqfn.fragment).toBe('function')
    expect(typeof gqfn.partial).toBe('function')
  })
}
