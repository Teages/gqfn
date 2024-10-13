import SchemaBuilder from '@pothos/core'
import { DateTimeResolver } from 'graphql-scalars'

import { friendships, type Saying, sayings, type User, users } from './data'

export const schema = createSchema()

function createSchema() {
  const builder = new SchemaBuilder<{
    Scalars: {
      Date: { Input: Date, Output: Date }
    }
    DefaultFieldNullability: false
  }>({
    defaultFieldNullability: false,
  })
  builder.addScalarType('Date', DateTimeResolver)

  const CategoryEnum = builder.enumType('CategoryEnum', {
    values: ['funny', 'serious', 'jokes'] as const,
  })

  const ItemWithIdInterface = builder.interfaceRef<{
    id: number
  }>('ItemWithId')

  const UserEntity = builder.objectRef<User>('User')
  const SayingEntity = builder.objectRef<Saying>('Saying')

  ItemWithIdInterface.implement({
    fields: t => ({
      id: t.exposeInt('id'),
    }),
  })

  UserEntity.implement({
    interfaces: [ItemWithIdInterface],
    fields: t => ({
      name: t.exposeString('name'),
      email: t.exposeString('email'),

      sayings: t.field({
        type: [SayingEntity],
        args: {
          category: t.arg({ type: CategoryEnum }),
        },
        resolve: ({ id }, { category }) => category
          ? sayings.filter(saying => saying.ownerId === id)
            .filter(saying => saying.category === category)
          : sayings.filter(saying => saying.ownerId === id),
      }),
      friends: t.field({
        type: [UserEntity],
        resolve: ({ id }) => Array.from(new Set(
          // find all userId of friends
          friendships.filter(f => f.usersId.includes(id))
            .map(f => f.usersId)
            .flat()
            .filter(u => u !== id),
        )).map(
          // resolve each userId to User
          userId => users.find(user => user.id === userId)!,
        ),
      }),
    }),
    isTypeOf: obj => 'name' in (obj as any),
  })

  SayingEntity.implement({
    interfaces: [ItemWithIdInterface],
    fields: t => ({
      category: t.expose('category', {
        type: CategoryEnum,
      }),
      content: t.exposeString('content'),

      createdAt: t.expose('createdAt', { type: 'Date' }),
      updatedAt: t.expose('updatedAt', { type: 'Date' }),

      owner: t.field({
        type: UserEntity,
        resolve: ({ ownerId }) => users.find(user => user.id === ownerId)!,
      }),
    }),
    isTypeOf: obj => 'content' in (obj as any),
  })

  const DataUnion = builder.unionType('Data', {
    types: [UserEntity, SayingEntity],
    resolveType: (f) => {
      if ('name' in f) {
        return UserEntity
      }

      if ('content' in f) {
        return SayingEntity
      }
    },
  })

  builder.queryType({
    fields: t => ({
      hello: t.string({
        args: {
          name: t.arg.string(),
        },
        resolve: (_p, { name }) => `hello, ${name || 'World'}`,
      }),

      users: t.field({
        type: [UserEntity],
        resolve: () => users,
      }),
      user: t.field({
        type: UserEntity,
        args: {
          id: t.arg.int({ required: true }),
        },
        resolve: (_p, { id }) => users.find(user => user.id === id)!,
      }),

      sayings: t.field({
        type: [SayingEntity],
        args: {
          category: t.arg({ type: [CategoryEnum] }),
        },
        resolve: (_p, { category }) => category
          ? sayings.filter(saying => category.includes(saying.category))
          : sayings,
      }),
      saying: t.field({
        type: SayingEntity,
        args: {
          id: t.arg.int({ required: true }),
        },
        resolve: (_p, { id }) => sayings.find(saying => saying.id === id)!,
      }),

      all: t.field({
        type: [DataUnion],
        resolve: () => [...users, ...sayings],
      }),

      allId: t.field({
        type: [ItemWithIdInterface],
        resolve: () => [...users, ...sayings],
      }),
    }),
  })

  builder.subscriptionType({
    fields: t => ({
      countdown: t.int({
        args: {
          from: t.arg.int({ required: true }),
        },
        async *subscribe(_p, { from }) {
          for (let i = from; i >= 0; i--) {
            yield i
            if (i !== 0) {
              await new Promise(resolve => setTimeout(resolve, 1000))
            }
          }
        },
        resolve: p => p,
      }),
    }),
  })

  const SayingDataInput = builder.inputType('SayingDataInput', {
    fields: t => ({
      category: t.field({ type: CategoryEnum, required: true }),
      content: t.string({ required: true }),
    }),
  })

  builder.mutationType({
    fields: t => ({
      addSaying: t.field({
        type: SayingEntity,
        args: {
          input: t.arg({ type: SayingDataInput, required: true }),
          ownerId: t.arg.int({ required: true }),
        },
        resolve: (_p, { input, ownerId }) => {
          const item = {
            ...input,
            id: sayings.length,
            ownerId,
            createdAt: new Date(),
            updatedAt: new Date(),
          }

          sayings.push(item)
          return item
        },
      }),
    }),
  })

  return builder.toSchema()
}
