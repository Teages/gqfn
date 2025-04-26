import type { Input } from '../../src/types'
import type { PrepareSelectionArgument } from '../../src/types/argument'
import type { AcceptVariable } from '../../src/types/variable'
import type { Scalar_String } from './schema'
import { describe, expectTypeOf, test } from 'vitest'

describe('types/arguments', () => {
  test('PrepareSelectionArgument', () => {
    expectTypeOf<PrepareSelectionArgument<{
      name: Input<'String!', Scalar_String>
    }>>().toEqualTypeOf<{
      name: string | AcceptVariable<'String!'>
    }>()

    expectTypeOf<PrepareSelectionArgument<{
      name_0: Input<'String', Scalar_String>
      name_1: Input<'String!', Scalar_String>
      name_2: Input<'[String]', Scalar_String>
      name_3: Input<'[String!]', Scalar_String>
      name_4: Input<'[String]!', Scalar_String>
      name_5: Input<'[String!]!', Scalar_String>
    }>>().toEqualTypeOf<{
      name_0?: string | null | undefined | AcceptVariable<'String'>
      name_1: string | AcceptVariable<'String!'>
      name_2?: (string | null | undefined)[] | string | null | undefined | AcceptVariable<'[String]'>
      name_3?: string[] | string | null | undefined | AcceptVariable<'[String!]'>
      name_4: (string | null | undefined)[] | string | AcceptVariable<'[String]!'>
      name_5: string[] | string | AcceptVariable<'[String!]!'>
    }>()
  })
})
