import { parse } from 'graphql'
import { describe, it } from 'vitest'
import { $enum, gqfn, gqp } from '../../src/runtime'
import { fixture } from './utils'

describe.todo('@gqfn/core/runtime', () => {
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
    gqfn('query FetchHelloWorld', {
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
    gqfn('mutation Login', {
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
    gqfn('query FetchString', [{
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
  it('partial', fixture(
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
    gqfn('query FetchUser', {
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

  const MediaFields = parse('fragment MediaFields on Media { id title { romaji english native } }', { noLocation: true })
  it('fragment', fixture(
    gql => gql(`
      query FetchAnime($id: Int = 127549) {
        Media(id: $id, type: ANIME) {
          id
          title {
            romaji
            english
            native
          }
          ...MediaFields
        }
      }

      fragment MediaFields on Media {
        id
        title {
          romaji
          english
          native
        }
      }
    `),
    gqfn('query FetchAnime', {
      id: 'Int = 127549',
    }, [{
      Media: $ => $({ id: $.id, type: $enum('ANIME') }, [
        'id',
        {
          title: $ => $([
            'romaji',
            'english',
            'native',
          ]),
        },
        MediaFields,
      ]),
    }]),
  ))
})
