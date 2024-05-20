import { describe, it } from 'vitest'
import { gqf } from '../../src'
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
        $skipToken: Boolean! = false,
        $captchaType: CaptchaEnum! = google
      ) @captcha(provider: $captchaType) {
        login(username: $username, password: $password) {
          token @skip(if: $skipToken)
          ... @include(if: $withUserData) {
            id
            name
            email
          }
        }
      }
    `),
    gqf('mutation Login', {
      username: 'String!',
      password: $ => $('String!', [
        ['@check', { rule: $('password') }],
      ]),
      withUserData: 'Boolean! = true',
      skipToken: 'Boolean! = false',
      captchaType: 'CaptchaEnum! = google',
    }, [{
      login: $ => $({
        username: $.username,
        password: $.password,
      }, [
        $ => $('token', [['@skip', { if: $.skipToken }]]),
        {
          '...': $ => $([
            'id',
            'name',
            'email',
          ], [['@include', { if: $.withUserData }]]),
        },
      ]),
    }], [
      ['@captcha', $ => ({ provider: $.captchaType })],
    ]),
  ))
})
