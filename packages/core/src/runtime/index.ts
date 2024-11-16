import type { GraphQueryFunctionFragment } from './fragment'
import type { GraphQueryFunctionCore } from './operation'
import type { Variable } from './variable'
import { createWithDirectives, type WithDirectivesFunction } from './directive'
import { createEnumFunction, type EnumFunction } from './enum'
import { createGraphQueryFunctionFragment } from './fragment'
import { createGraphQueryFunctionCore } from './operation'

export interface GraphQueryFunction extends GraphQueryFunctionCore {
  enum: EnumFunction
  fragment: GraphQueryFunctionFragment
  withDirectives: WithDirectivesFunction<Record<string, Variable<string>>>
}

export const gqfn: GraphQueryFunction = init()

function init() {
  const core = createGraphQueryFunctionCore()
  return Object.assign(core, {
    enum: createEnumFunction(),
    fragment: createGraphQueryFunctionFragment(),
    withDirectives: createWithDirectives(),
  }) as GraphQueryFunction
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('gqfn', () => {
    expect(typeof gqfn).toBe('function')
    expect(typeof gqfn.enum).toBe('function')
    expect(typeof gqfn.fragment).toBe('function')
    expect(typeof gqfn.withDirectives).toBe('function')
  })
}
