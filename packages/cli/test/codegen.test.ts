import { parse } from 'graphql'
import { describe, expect, it } from 'vitest'
import { generate } from '../src/codegen'

describe('codegen', () => {
  describe('generate', () => {
    it('scalar', () => {
      const schema = `
        scalar DateTime
        scalar ID
      `
      const result = generate(schema)
      expect(result).toContain('DateTime: ScalarType')
      expect(result).toContain('ID: ScalarType')
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
      expect(result).toContain('export type UserRole =')
      expect(result).toContain('| \'ADMIN\'')
      expect(result).toContain('| \'USER\'')
      expect(result).toContain('| \'GUEST\'')
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
      expect(result).toContain('type UserInput = InputObject')
      expect(result).toContain('name: Arg')
      expect(result).toContain('age: Arg')
      expect(result).toContain('email: Arg')
    })

    it('interface', () => {
      const schema = `
        interface Node {
          id: ID!
        }

        type User implements Node {
          id: ID!
          name: String!
        }
      `
      const result = generate(schema)
      expect(result).toContain('type Node = InterfaceObject')
      expect(result).toContain('id: Field')
      expect(result).toContain('type User = TypeObject')
    })

    it('union', () => {
      const schema = `
        type Dog {
          name: String!
        }

        type Cat {
          name: String!
        }

        union Pet = Dog | Cat
      `
      const result = generate(schema)
      expect(result).toContain('type Pet = Union')
      expect(result).toContain('Dog: Dog')
      expect(result).toContain('Cat: Cat')
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
      expect(result).toContain('type User = TypeObject')
      expect(result).toContain('id: Field')
      expect(result).toContain('name: Field')
      expect(result).toContain('age: Field')
      expect(result).toContain('email: Field')
    })

    it('field', () => {
      const schema = `
        type Query {
          user(id: ID!): User
          users(limit: Int, offset: Int): [User!]!
        }
      `
      const result = generate(schema)
      expect(result).toContain('id: Arg')
      expect(result).toContain('limit: Arg')
      expect(result).toContain('offset: Arg')
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
      expect(result).toContain('type Query = TypeObject')
      expect(result).toContain('hello: Field')
    })

    it('invalid', () => {
      const invalidSchema = 'invalid schema'
      expect(() => generate(invalidSchema)).toThrow()
    })
  })
})
