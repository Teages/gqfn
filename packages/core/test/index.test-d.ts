import type { ResultOf, UnknownSchema, VariablesOf } from '../src'
import { describe, expectTypeOf, test } from 'vitest'
import { useSchema } from '../src'

describe('typeof @gqfn/core', () => {
  test('unknown schema', () => {
    const _s0 = useSchema()
    expectTypeOf<typeof _s0>().toEqualTypeOf<UnknownSchema>()

    const _s1 = useSchema('')
    expectTypeOf<typeof _s1>().toEqualTypeOf<UnknownSchema>()

    const _s2 = useSchema('/graphql')
    expectTypeOf<typeof _s2>().not.toEqualTypeOf<UnknownSchema>()
  })

  test('simple query', () => {
    const schema = useSchema('/graphql')

    const _i0 = schema.gqfn([])
    expectTypeOf<ResultOf<typeof _i0>>().toEqualTypeOf<never>()

    const _i1 = schema.gqfn(['__typename', 'hello'])
    expectTypeOf<ResultOf<typeof _i1>>().toEqualTypeOf<{ __typename: 'Query', hello: string }>()

    const _i2 = schema.gqfn(['__typename', 'hi: hello'])
    expectTypeOf<ResultOf<typeof _i2>>().toEqualTypeOf<{ __typename: 'Query', hi: string }>()

    const _i3 = schema.gqfn('query Hello', { name: 'String! = "world"' }, [{
      hello: $ => $({ name: $.vars.name }, true)
        .withDirective(['@skip', { if: true }]),
    }])
    expectTypeOf<ResultOf<typeof _i3>>().toEqualTypeOf<{ hello: string | null | undefined }>()
    expectTypeOf<VariablesOf<typeof _i3>>().toEqualTypeOf<{ name?: string | undefined }>()
  })
  test('complex query', () => {
    const schema = useSchema('/graphql')

    const _i0 = schema.gqfn('query Test', { name: 'String! = "world"' }, [{
      hello: $ => $({ name: $.vars.name }, true)
        .withDirective(['@skip', { if: true }]),
      sayings: $ => $({ category: schema.enum('funny') }, [
        'id',
        'content',
      ]),
    }])

    expectTypeOf<ResultOf<typeof _i0>>().toEqualTypeOf<{
      hello: string | null | undefined
      sayings: {
        id: number
        content: string
      }[]
    }>()
    expectTypeOf<VariablesOf<typeof _i0>>().toEqualTypeOf<{ name?: string | undefined }>()
  })

  test('query with fragment (partial)', () => {
    const schema = useSchema('/graphql')

    const _i0 = schema.partial(
      'fragment Hello',
      'on Query',
      { name: 'String!' },
      ['__typename'],
    )
    const _i0_res = schema.gqfn('query GetHello', { name: 'String! = "world"' }, [{
      '...': $ => $([{ ..._i0($) }]),
    }])
    expectTypeOf<ResultOf<typeof _i0_res>>().toEqualTypeOf<{ __typename: 'Query' }>()
    expectTypeOf<VariablesOf<typeof _i0_res>>().toEqualTypeOf<{ name?: string | undefined }>()
  })
})
