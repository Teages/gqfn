import { describe, it } from 'vitest'
import { $enum, gqf, gqp } from '../../src/core'
import { fixture } from './utils'

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
            friends: $ => $(['id']),
          },
        ]),
        'posts': $ => $({ category: $enum('Announcement') }, [
          'id',
          'title',
          'content',
          {
            'author:owner': $ => $([
              'id',
              'name',
            ]),
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
      ) @captcha(provider: $captchaType) @cors(host: "teages.xyz") {
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
        ['@check', { rule: $enum('password') }],
      ]),
      withUserData: 'Boolean! = true',
      skipToken: 'Boolean! = false',
      captchaType: 'CaptchaEnum! = google',
    }, [{
      login: $ => $({
        username: $.username,
        password: $.password,
      }, [{
        'token': $ => $(true, [['@skip', { if: $.skipToken }]]),
        '...': $ => $([
          'id',
          'name',
          'email',
        ], [['@include', { if: $.withUserData }]]),
      }]),
    }], $ => [
      ['@captcha', { provider: $.captchaType }],
      ['@cors', { host: 'teages.xyz' }],
    ]),
  ))

  it('parse args', fixture(
    gql => gql(`
      query FetchString {
        getStr(
          data: {
            int: 42,
            float: 3.14,
            str: "hello",
            bool: true,
            null: null,
            arr: [1, 2, 3],
            obj: {a: 1, b: 2}
          }
        )
      }
    `),
    gqf('query FetchString', [{
      getStr: $ => $({
        data: {
          int: 42,
          float: 3.14,
          str: 'hello',
          bool: true,
          null: null,
          arr: [1, 2, 3],
          obj: { a: 1, b: 2 },
        },
      }, true),
    }]),
  ))

  const userFragment = gqp('fragment UserFields', 'on User', {
    withFriendsEmail: 'Boolean! = false',
  }, [
    'id',
    'name',
    {
      email: $ => $(true, [['@include', { if: $.withFriendsEmail }]]),
    },
  ])
  it('fragment / partial', fixture(
    gql => gql(`
      query FetchUser($userId: ID!, $withFriendsEmail: Boolean! = false) {
        user(id: $userId) {
          id
          name
          email
          friends {
            id
            name
            email @include(if: $withFriendsEmail)
          }
        }
        users {
          id
          name
          email @include(if: $withFriendsEmail)
        }
      }
    `),
    gqf('query FetchUser', {
      userId: 'ID!',
      withFriendsEmail: 'Boolean! = false',
    }, [{
      user: $ => $({
        id: $.userId,
      }, [
        'id',
        'name',
        'email',
        {
          friends: $ => $([{
            ...userFragment($),
          }]),
        },
      ]),
      users: $ => $([userFragment($)]),
    }]),
  ))
})
