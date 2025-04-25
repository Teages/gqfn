import type { HasSkipDirective } from '../../src/types/directive'
import { describe, expectTypeOf, test } from 'vitest'

describe('types/directive', () => {
  test('HasSkipDirective', () => {
    expectTypeOf<HasSkipDirective<[]>>().toEqualTypeOf<false>()
    expectTypeOf<HasSkipDirective<[['@skip', { if: true }]]>>()
      .toEqualTypeOf<true>()
    expectTypeOf<HasSkipDirective<[['@include', { if: true }]]>>()
      .toEqualTypeOf<true>()
    expectTypeOf<HasSkipDirective<[['@skip', { if: false }]]>>()
      .toEqualTypeOf<true>()
    expectTypeOf<HasSkipDirective<[['@include', { if: false }]]>>()
      .toEqualTypeOf<true>()
    expectTypeOf<HasSkipDirective<[['@deprecated', { since: '1.0.0' }]]>>()
      .toEqualTypeOf<false>()
    expectTypeOf<HasSkipDirective<[
      ['@include', { if: false }],
      ['@deprecated', { since: '1.0.0' }],
    ]>>()
      .toEqualTypeOf<true>()
  })
})
