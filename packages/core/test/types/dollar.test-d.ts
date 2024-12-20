import type { DollarPackage } from '../../src/types/dollar'
import { describe, expectTypeOf, test } from 'vitest'

describe('types/dollar', () => {
  test('DollarPackage.withDirective', () => {
    const i0: DollarPackage<'Hello'> = null as any

    const i1 = i0.withDirective(['@some', { arg: 'value' }])
    expectTypeOf(i1)
      .toEqualTypeOf<DollarPackage<'Hello', false>>()

    const i2 = i0.withDirective(['@skip', { arg: 'value' }])
    expectTypeOf(i2)
      .toEqualTypeOf<DollarPackage<'Hello', true>>()

    const i3 = i0.withDirective(['@include', { arg: 'value' }])
    expectTypeOf(i3)
      .toEqualTypeOf<DollarPackage<'Hello', true>>()

    const i4 = i0.withDirective(
      ['@some', { arg: 'value' }],
      ['@skip', { arg: 'value' }],
    )
    expectTypeOf(i4)
      .toEqualTypeOf<DollarPackage<'Hello', true>>()

    const i5 = i0.withDirective(
      ['@some', { arg: 'value' }],
      ['@include', { arg: 'value' }],
    )
    expectTypeOf(i5)
      .toEqualTypeOf<DollarPackage<'Hello', true>>()
  })
})
