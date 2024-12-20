import { describe, it } from 'vitest'
import { gqfn } from '../../src/runtime'
import { fixture } from './utils'

describe('@gqfn/core/runtime', () => {
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
        'posts': $ => $({ category: gqfn.enum('Announcement') }, [
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
      password: $ => $('String!')
        .withDirective(['@check', { rule: gqfn.enum('password') }]),
      withUserData: 'Boolean! = true',
      skipToken: 'Boolean! = false',
      captchaType: 'CaptchaEnum! = google',
    }, [{
      login: $ => $({
        username: $.username,
        password: $.password,
      }, [{
        'token': $ => $(true).withDirective(['@skip', { if: $.skipToken }]),
        '...': $ => $([
          'id',
          'name',
          'email',
        ]).withDirective(['@include', { if: $.withUserData }]),
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

  // fragment MediaFields on Media { id title { romaji english native } }
  const MediaFields = gqfn.partial('fragment MediaFields', 'on Media', ['id', { title: $ => $(['romaji', 'english', 'native']) }])
  it('partial', fixture(
    gql => gql(`
      query FetchAnime($id: Int = 127549) {
        Media(id: $id, type: ANIME) {
          id
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
      Media: $ => $({ id: $.id, type: gqfn.enum('ANIME') }, [
        'id',
        {
          ...MediaFields($),
        },
      ]),
    }]),
  ))

  // nested fragment
  const UserBasicFields = gqfn.partial('fragment UserBasicFields', 'on User', ['id', 'name', 'avatar'])
  const LevelFields = gqfn.partial('fragment LevelFields', 'on Level', ['id', 'name', { user: $ => $([{ ...UserBasicFields($) }]) }])
  it('nested fragment', fixture(
    gql => gql(`
      query FetchLevel($id: Int = 127549) {
        level(id: $id) {
         ...LevelFields
        }
      }

      fragment UserBasicFields on User {
        id
        name
        avatar
      }

      fragment LevelFields on Level {
        id
        name
        user {
         ...UserBasicFields
        }
      }
    `),
    gqfn('query FetchLevel', {
      id: 'Int = 127549',
    }, [{
      level: $ => $({ id: $.id }, [
        {
          ...LevelFields($),
        },
      ]),
    }]),
  ))
})
