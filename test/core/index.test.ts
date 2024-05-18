import { describe, it } from 'vitest'
import { gqf, withDirective } from '../../src'
import { coreFixture as fixture } from '../utils'

describe('@teages/gqf/core', () => {
  it('works', fixture(
    gql => gql(`
      query FetchHelloWorld ($userId: ID!, $category: CategoryEnum! = Blog) {
        helloWorld
        hello: helloWorld(name: "Tom")
        user(id: $userId) {
          id
          name
          email
          posts(category: $category) {
            id
            title
            content
          }
          friends {
            id
          }
        }
        posts(category: Announcement) {
          id
          title
          content
          author: owner {
            id
            name
          }
        }
      }
    `),
    gqf('query FetchHelloWorld', {
      userId: 'ID!',
      category: 'CategoryEnum! = Blog',
    }, [
      'helloWorld',
      {
        'hello:helloWorld': $ => $({ name: 'Tom' }, true),
        'user': $ => $({ id: $.userId }, [
          'id',
          'name',
          'email',
          {
            posts: $ => $({ category: $.category }, [
              'id',
              'title',
              'content',
            ]),
            friends: ['id'],
          },
        ]),
        'posts': $ => $({ category: $('Announcement') }, [
          'id',
          'title',
          'content',
          {
            'author:owner': [
              'id',
              'name',
            ],
          },
        ]),
      },
    ]),
  ))

  it('directive', fixture(
    gql => gql(`
      mutation Login(
        $username: String!,
        $password: String! @check(rule: password),
        $withUserData: Boolean! = true,
        $skipToken: Boolean! = false
      ) @captcha(provider: cloudflare) {
        login(username: $username, password: $password) {
          token @skip(if: $skipToken)
          ... @include(if: $withUserData) {
            user {
              id
              name
              email
            }
          }
        }
      }
    `),
    gqf('mutation Login', {
      username: 'String!',
      password: withDirective([
        ['@check', $ => ({ rule: $('password') })],
      ], 'String!'),
      withUserData: 'Boolean! = true',
      skipToken: 'Boolean! = false',
    }, [{
      login: $ => $({
        username: $.username,
        password: $.password,
      }, [
        withDirective([
          ['@skip', { if: $.skipToken }],
        ], 'token'),
        {
          '...': withDirective([
            ['@include', { if: $.withUserData }],
          ], [{
            user: [
              'id',
              'name',
              'email',
            ],
          }]),
        },
      ]),
    }], [
      ['@captcha', $ => ({ provider: $('cloudflare') })],
    ]),
  ))
})
