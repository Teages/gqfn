import type { GraphQueryFunction, RequireOperationPartialData, TypedDocumentNode } from '../../src/types'
import type { CategoryEnum, Schema } from './fixture/schema'
import { describe, expectTypeOf, test } from 'vitest'

describe('type', () => {
  const gqfn: GraphQueryFunction<Schema> = null as any

  test('simple', () => {
    const query = gqfn(['__typename'])
    const { vars, res } = parse(query)

    expectTypeOf(vars).toEqualTypeOf<Empty>()
    expectTypeOf(res).toEqualTypeOf<{ __typename: 'Query' }>()
  })

  test('variables', () => {
    const query = gqfn('query', {
      int: 'Int!',
      float: 'Float!',
      str: 'String!',
      bool: 'Boolean!',
      array: '[Int!]!',
      inputObject: 'SayingDataInput!',
      enum: 'CategoryEnum!',
      enumArray: '[CategoryEnum!]!',
      enumAndNullArray: '[CategoryEnum]!',
      withDefault: 'String! = "default"',
      nullable: 'String',
    }, ['__typename'])

    const { vars, res } = parse(query)

    expectTypeOf(vars.int).toEqualTypeOf<number>()
    expectTypeOf(vars.float).toEqualTypeOf<number>()
    expectTypeOf(vars.str).toEqualTypeOf<string>()
    expectTypeOf(vars.bool).toEqualTypeOf<boolean>()
    expectTypeOf(vars.array).toEqualTypeOf<number[]>()
    expectTypeOf(vars.inputObject).toEqualTypeOf<{ content: string, category: CategoryEnum }>()
    expectTypeOf(vars.enum).toEqualTypeOf<CategoryEnum>()
    expectTypeOf(vars.enumArray).toEqualTypeOf<CategoryEnum[]>()
    expectTypeOf(vars.enumAndNullArray).toEqualTypeOf<(CategoryEnum | null | undefined)[]>()
    expectTypeOf(vars.withDefault).toEqualTypeOf<string | undefined>()
    expectTypeOf(vars.nullable).toEqualTypeOf<string | null | undefined>()
    expectTypeOf(res).toEqualTypeOf<{ __typename: 'Query' }>()
  })

  test('enum', () => {
    const query = gqfn([{
      sayings: $ => $({ category: [gqfn.enum('funny')] }, ['content']),
    }])
    const { vars, res } = parse(query)

    expectTypeOf(vars).toEqualTypeOf<Empty>()
    expectTypeOf(res.sayings[0]).toEqualTypeOf<{ content: string }>()
  })

  test('alias', () => {
    const query = gqfn(['type:__typename'])
    const { vars, res } = parse(query)

    expectTypeOf(vars).toEqualTypeOf<Empty>()
    expectTypeOf(res).toEqualTypeOf<{ type: 'Query' }>()
  })

  test('nested', () => {
    const query = gqfn([{
      user: $ => $({ id: 1 }, [
        'id',
        'name',
        'email',
        {
          friends: $ => $(['id']),
          saying: $ => $({ }, ['content']),
        },
      ]),
    }])
    const { vars, res } = parse(query)

    expectTypeOf(vars).toEqualTypeOf<Empty>()
    expectTypeOf(res.user).toEqualTypeOf<{
      id: number
      name: string
      email: string
      friends: { id: number }[]
      saying: { content: string }[]
    }>()
  })

  test('complex', () => {
    const query = gqfn([{
      complex: $ => $([
        '__typename',
        'nullable',
        'nonNullable',
        'array1',
        'array2',
        'array3',
        'array4',
        'nestingArray1',
        'nestingArray2',
        'nestingArray3',
        'nestingArray4',
        'nestingArray5',
        'nestingArray6',
        'nestingArray7',
        'nestingArray8',
      ]),
    }])
    const { vars, res } = parse(query)

    expectTypeOf(vars).toEqualTypeOf<Empty>()
    expectTypeOf(res.complex.__typename).toEqualTypeOf<'Complex'>()

    expectTypeOf(res.complex.nullable).toEqualTypeOf<number | null | undefined>()
    expectTypeOf(res.complex.nonNullable).toEqualTypeOf<number>()

    expectTypeOf(res.complex.array1).toEqualTypeOf<number[]>()
    expectTypeOf(res.complex.array2).toEqualTypeOf<number[] | null | undefined>()
    expectTypeOf(res.complex.array3).toEqualTypeOf<(number | null | undefined)[]>()
    expectTypeOf(res.complex.array4).toEqualTypeOf<(number | null | undefined)[] | null | undefined>()

    expectTypeOf(res.complex.nestingArray1).toEqualTypeOf<number[][]>()
    expectTypeOf(res.complex.nestingArray2).toEqualTypeOf<(number | null | undefined)[][]>()
    expectTypeOf(res.complex.nestingArray3).toEqualTypeOf<(number[] | null | undefined)[]>()
    expectTypeOf(res.complex.nestingArray4).toEqualTypeOf<number[][] | null | undefined>()
    expectTypeOf(res.complex.nestingArray5).toEqualTypeOf<((number[] | null | undefined)[]) | null | undefined>()
    expectTypeOf(res.complex.nestingArray6).toEqualTypeOf<(number | null | undefined)[][] | null | undefined>()
    expectTypeOf(res.complex.nestingArray7).toEqualTypeOf<((number | null | undefined)[] | null | undefined)[]>()
    expectTypeOf(res.complex.nestingArray8).toEqualTypeOf<((number | null | undefined)[] | null | undefined)[] | null | undefined>()
  })

  test('inline fragment', () => {
    const query = gqfn([{
      user: $ => $({ id: 1 }, [
        'name',
        {
          '...': $ => $(['id']),
        },
      ]),
      all: $ => $([{
        '... on Saying': $ => $([
          '__typename',
          'content',
        ]),
        '... on User': $ => $([
          '__typename',
          'email',
        ]),
      }]),
      allId: $ => $([
        'id',
        {
          '... on Saying': $ => $([
            '__typename',
            'content',
          ]),
          '... on User': $ => $([
            '__typename',
            'email',
          ]),
        },
      ]),
    }])
    const { vars, res } = parse(query)

    expectTypeOf(vars).toEqualTypeOf<Empty>()
    expectTypeOf(res.user.id).toEqualTypeOf<number>()
    expectTypeOf(res.user.name).toEqualTypeOf<string>()

    const item1 = res.all[0]
    if (item1.__typename === 'User') {
      expectTypeOf(item1.email).toEqualTypeOf<string>()
    }
    if (item1.__typename === 'Saying') {
      expectTypeOf(item1.content).toEqualTypeOf<string>()
    }

    const item2 = res.allId[1]
    expectTypeOf(item2.id).toEqualTypeOf<number>()
    if (item2.__typename === 'User') {
      expectTypeOf(item2.email).toEqualTypeOf<string>()
    }
    if (item2.__typename === 'Saying') {
      expectTypeOf(item2.content).toEqualTypeOf<string>()
    }
  })

  test('skip / include', () => {
    const query = gqfn([{
      user: $ => $({ id: 1 }, [
        {
          'email': $ => $(true).withDirective(['@include', { if: true }]),
          '...': $ => $([
            'id',
            'name',
          ]).withDirective(['@skip', { if: false }]),
        },
      ]),
    }])
    const { vars, res } = parse(query)

    expectTypeOf(vars).toEqualTypeOf<Empty>()
    expectTypeOf(res.user.id).toEqualTypeOf<number | null | undefined>()
    expectTypeOf(res.user.name).toEqualTypeOf<string | null | undefined>()
    expectTypeOf(res.user.email).toEqualTypeOf<string | null | undefined>()

    if (res.user.id) {
      expectTypeOf(res.user.id).toEqualTypeOf<number>()
      expectTypeOf(res.user.name).toEqualTypeOf<string>()
    }
  })

  test('partial', () => {
    const userFragment = gqfn.partial('fragment A', 'on User', [
      'id',
    ])
    const req: RequireOperationPartialData<typeof userFragment> = {} as any

    expectTypeOf(req).toEqualTypeOf<{
      id: number
    }>()

    const query = gqfn([{
      user: $ => $({ id: 1 }, [userFragment($)]),
    }])
    const { vars, res } = parse(query)

    expectTypeOf(vars).toEqualTypeOf<Empty>()
    expectTypeOf(res.user).toEqualTypeOf<{
      id: number
    }>()
  })

  test('partial with args', () => {
    const userFragment = gqfn.partial('fragment A', 'on User', {
      category: 'CategoryEnum!',
    }, [{
      saying: $ => $({ category: $.category }, ['content']),
    }])
    const req: RequireOperationPartialData<typeof userFragment> = {} as any

    expectTypeOf(req.saying[0]).toEqualTypeOf<{ content: string }>()

    const query = gqfn('query', {
      category: 'CategoryEnum!',
    }, [{
      user: $ => $({ id: 1 }, [userFragment($)]),
    }])
    const { vars, res } = parse(query)

    expectTypeOf(vars).toEqualTypeOf<{ category: CategoryEnum }>()
    expectTypeOf(res.user.saying[0]).toEqualTypeOf<{ content: string }>()
  })

  test('issues #4', () => {
    gqfn('mutation AddSaying', {
      input: 'SayingDataInput!',
    }, [{
      addSaying: $ => $(
        { input: $.input, ownerId: 1 },
        ['id'],
      ),
    }])
  })
})

function parse<T, U>(_doc: TypedDocumentNode<T, U>): { vars: U, res: T } {
  return {} as any
}

interface Empty { [key: string]: never }
