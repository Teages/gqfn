import { parse } from 'graphql'
import { describe, expect, it } from 'vitest'
import { generate } from '../src/codegen'

describe('codegen', () => {
  describe('generate', () => {
    it('scalar', () => {
      const schema = `
        scalar DateTime
      `
      const result = generate(schema)
      expect(result).toMatchInlineSnapshot(`
        "/* eslint-ignore */
        import type { ScalarType, DefineSchema } from '@gqfn/core/schema'

        type Scalar_DateTime = ScalarType<'DateTime', unknown, unknown>
        type Scalar_Int = ScalarType<'Int', number, number>
        type Scalar_Float = ScalarType<'Float', number, number>
        type Scalar_String = ScalarType<'String', string, string>
        type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
        type Scalar_ID = ScalarType<'ID', string | number, string | number>

        export type Schema = DefineSchema<{
          DateTime: Scalar_DateTime
          Int: Scalar_Int
          Float: Scalar_Float
          String: Scalar_String
          Boolean: Scalar_Boolean
          ID: Scalar_ID
        }>
        "
      `)
    })

    it('enum', () => {
      const schema = `
        enum UserRole {
          ADMIN
          USER
          GUEST
        }
      `
      const result = generate(schema)
      expect(result).toMatchInlineSnapshot(`
        "/* eslint-ignore */
        import type { ScalarType, EnumType, DefineSchema } from '@gqfn/core/schema'

        type Scalar_Int = ScalarType<'Int', number, number>
        type Scalar_Float = ScalarType<'Float', number, number>
        type Scalar_String = ScalarType<'String', string, string>
        type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
        type Scalar_ID = ScalarType<'ID', string | number, string | number>

        export type UserRole =
          | 'ADMIN'
          | 'USER'
          | 'GUEST'
        type Enum_UserRole = EnumType<'UserRole', UserRole>

        export type Schema = DefineSchema<{
          Int: Scalar_Int
          Float: Scalar_Float
          String: Scalar_String
          Boolean: Scalar_Boolean
          ID: Scalar_ID
          UserRole: Enum_UserRole
        }>
        "
      `)
    })

    it('input', () => {
      const schema = `
        input UserInput {
          name: String!
          age: Int
          email: String
        }
      `
      const result = generate(schema)
      expect(result).toMatchInlineSnapshot(`
        "/* eslint-ignore */
        import type { ScalarType, InputObjectType, Input, DefineSchema } from '@gqfn/core/schema'

        type Scalar_Int = ScalarType<'Int', number, number>
        type Scalar_Float = ScalarType<'Float', number, number>
        type Scalar_String = ScalarType<'String', string, string>
        type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
        type Scalar_ID = ScalarType<'ID', string | number, string | number>

        type Input_UserInput = InputObjectType<'UserInput', {
          name: Input<'String!', Scalar_String>
          age: Input<'Int', Scalar_Int>
          email: Input<'String', Scalar_String>
        }>

        export type Schema = DefineSchema<{
          Int: Scalar_Int
          Float: Scalar_Float
          String: Scalar_String
          Boolean: Scalar_Boolean
          ID: Scalar_ID
          UserInput: Input_UserInput
        }>
        "
      `)
    })

    it('interface', () => {
      const schema = `
        interface Node {
          id: ID!
        }

        interface NodeWithUUID implements Node {
          id: ID!
          uuid: String!
        }

        type User implements NodeWithUUID {
          id: ID!
          uuid: String!
          name: String!
        }
      `
      const result = generate(schema)
      expect(result).toMatchInlineSnapshot(`
        "/* eslint-ignore */
        import type { ScalarType, Field, ObjectType, InterfaceType, DefineSchema } from '@gqfn/core/schema'

        type Scalar_Int = ScalarType<'Int', number, number>
        type Scalar_Float = ScalarType<'Float', number, number>
        type Scalar_String = ScalarType<'String', string, string>
        type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
        type Scalar_ID = ScalarType<'ID', string | number, string | number>

        type Type_User = ObjectType<'User', {
          id: Field<'ID!', Scalar_ID>
          uuid: Field<'String!', Scalar_String>
          name: Field<'String!', Scalar_String>
        }>

        type Interface_Node = InterfaceType<'Node', {
          id: Field<'id', Res<'ID!'>>
        }, {
          User: Type_User
        }>

        type Interface_NodeWithUUID = InterfaceType<'NodeWithUUID', {
          id: Field<'id', Res<'ID!'>>
          uuid: Field<'uuid', Res<'String!'>>
        }, {
          User: Type_User
        }>

        export type Schema = DefineSchema<{
          Int: Scalar_Int
          Float: Scalar_Float
          String: Scalar_String
          Boolean: Scalar_Boolean
          ID: Scalar_ID
          User: Type_User
          Node: Interface_Node
          NodeWithUUID: Interface_NodeWithUUID
        }>
        "
      `)
    })

    it('union', () => {
      const schema = `
        type Dog {
          name: String!
        }

        type Cat {
          name: String!
        }

        type Human {
          name: String!
        }

        union Pet = Dog | Cat
        union Animal = Pet | Human
      `
      const result = generate(schema)
      expect(result).toMatchInlineSnapshot(`
        "/* eslint-ignore */
        import type { ScalarType, Field, ObjectType, UnionType, DefineSchema } from '@gqfn/core/schema'

        type Scalar_Int = ScalarType<'Int', number, number>
        type Scalar_Float = ScalarType<'Float', number, number>
        type Scalar_String = ScalarType<'String', string, string>
        type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
        type Scalar_ID = ScalarType<'ID', string | number, string | number>

        type Type_Dog = ObjectType<'Dog', {
          name: Field<'String!', Scalar_String>
        }>

        type Type_Cat = ObjectType<'Cat', {
          name: Field<'String!', Scalar_String>
        }>

        type Type_Human = ObjectType<'Human', {
          name: Field<'String!', Scalar_String>
        }>

        type Union_Pet = UnionType<'Pet', {
          Dog: Type_Dog
          Cat: Type_Cat
        }>

        type Union_Animal = UnionType<'Animal', {
          Human: Type_Human
          Dog: Type_Dog
          Cat: Type_Cat
        }>

        export type Schema = DefineSchema<{
          Int: Scalar_Int
          Float: Scalar_Float
          String: Scalar_String
          Boolean: Scalar_Boolean
          ID: Scalar_ID
          Dog: Type_Dog
          Cat: Type_Cat
          Human: Type_Human
          Pet: Union_Pet
          Animal: Union_Animal
        }>
        "
      `)
    })

    it('object', () => {
      const schema = `
        type User {
          id: ID!
          name: String!
          age: Int
          email: String
        }
      `
      const result = generate(schema)
      expect(result).toMatchInlineSnapshot(`
        "/* eslint-ignore */
        import type { ScalarType, Field, ObjectType, DefineSchema } from '@gqfn/core/schema'

        type Scalar_Int = ScalarType<'Int', number, number>
        type Scalar_Float = ScalarType<'Float', number, number>
        type Scalar_String = ScalarType<'String', string, string>
        type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
        type Scalar_ID = ScalarType<'ID', string | number, string | number>

        type Type_User = ObjectType<'User', {
          id: Field<'ID!', Scalar_ID>
          name: Field<'String!', Scalar_String>
          age: Field<'Int', Scalar_Int>
          email: Field<'String', Scalar_String>
        }>

        export type Schema = DefineSchema<{
          Int: Scalar_Int
          Float: Scalar_Float
          String: Scalar_String
          Boolean: Scalar_Boolean
          ID: Scalar_ID
          User: Type_User
        }>
        "
      `)
    })

    it('field', () => {
      const schema = `
        type Query {
          user(id: ID!): User
          users(limit: Int, offset: Int): [User!]!
        }
      `
      const result = generate(schema)
      expect(result).toMatchInlineSnapshot(`
        "/* eslint-ignore */
        import type { ScalarType, Field, Input, ObjectType, DefineSchema } from '@gqfn/core/schema'

        type Scalar_Int = ScalarType<'Int', number, number>
        type Scalar_Float = ScalarType<'Float', number, number>
        type Scalar_String = ScalarType<'String', string, string>
        type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
        type Scalar_ID = ScalarType<'ID', string | number, string | number>

        type Type_Query = ObjectType<'Query', {
          user: Field<'User', undefined, {
            id: Input<'ID!', Scalar_ID>
          }>
          users: Field<'[User!]!', undefined, {
            limit: Input<'Int', Scalar_Int>
            offset: Input<'Int', Scalar_Int>
          }>
        }>

        export type Schema = DefineSchema<{
          Int: Scalar_Int
          Float: Scalar_Float
          String: Scalar_String
          Boolean: Scalar_Boolean
          ID: Scalar_ID
          Query: Type_Query
        }>
        "
      `)
    })

    it('url', () => {
      const schema = `
        type Query {
          hello: String!
        }
      `
      const result = generate(schema, { url: 'http://example.com/graphql' })
      expect(result).toContain('\'http://example.com/graphql\'')
    })

    it('document', () => {
      const schema = `
        type Query {
          hello: String!
        }
      `
      const document = parse(schema)
      const result = generate(document)
      expect(result).toMatchInlineSnapshot(`
        "/* eslint-ignore */
        import type { ScalarType, Field, ObjectType, DefineSchema } from '@gqfn/core/schema'

        type Scalar_Int = ScalarType<'Int', number, number>
        type Scalar_Float = ScalarType<'Float', number, number>
        type Scalar_String = ScalarType<'String', string, string>
        type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
        type Scalar_ID = ScalarType<'ID', string | number, string | number>

        type Type_Query = ObjectType<'Query', {
          hello: Field<'String!', Scalar_String>
        }>

        export type Schema = DefineSchema<{
          Int: Scalar_Int
          Float: Scalar_Float
          String: Scalar_String
          Boolean: Scalar_Boolean
          ID: Scalar_ID
          Query: Type_Query
        }>
        "
      `)
    })

    it('invalid', () => {
      const invalidSchema = 'invalid schema'
      expect(() => generate(invalidSchema)).toThrow()
    })
  })
})
