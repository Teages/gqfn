# First Query with GQFn

The experience of using gqfn is very similar to writing plain GraphQL queries. The following content assumes that you already know [how to write a GraphQL query](https://graphql.org/learn/queries/).

In this guide, our goal is to gradually build a slightly complex query.

## Prepare the Schema

Before writing a query, you need to prepare the schema. Follow the guide in [Getting Started](./) to generate the schema types. and use `useSchema` to get the `gqfn` function. Here we use the endpoint from [AniList](https://anilist.gitbook.io/anilist-apiv2-docs/).

If you haven't install `gqfn` yet, you can do it by running the following command:
```bash
# ✨ Auto-detect package manager
npx nypm install @gqfn/core
npm run gqfn add https://graphql.anilist.co
```

Then, you can import the `gqfn` function from `@gqfn/core` package and use it to create a query.

```ts twoslash
import { useSchema } from '@gqfn/core'
// ---cut-start---
import '#schema/10n5kr7'
// ---cut-end---
import { request } from 'graphql-request' // or you favorite GraphQL client
const endpoint = 'https://graphql.anilist.co'
const { gqfn, gqp, $enum } = useSchema(endpoint)
```

## Selection and Arguments

To build a selection on the `Query` type, you can pass the selection as the only argument of the `gqfn` function.

```ts twoslash
import { useSchema } from '@gqfn/core'
import '#schema/10n5kr7'
const endpoint = 'https://graphql.anilist.co'
const { gqfn, gqp, $enum } = useSchema(endpoint)
// ---cut---
const query = gqfn([])
```

Ok let's add the first field to the selection. We want to get the title of the Anime with the id `127549`. We need to add the `Media` field to the selection with the `id` argument.

Pass the arguments as the first argument of the `$`, and the selection as the second argument. Now we got this:

::: code-group
```ts twoslash [Query Builder]
import { useSchema } from '@gqfn/core'
import { request } from 'graphql-request'
import '#schema/10n5kr7'
const endpoint = 'https://graphql.anilist.co'
const { gqfn, gqp, $enum } = useSchema(endpoint)
// ---cut---
const query = gqfn([{
  Media: $ => $({ id: 127549 }, [
    'id',
  ]),
}])

const data = await request(endpoint, query)
const id = data.Media?.id // it is typed!
```

```graphql [GraphQL Query]
{
  Media {
    id
  }
}
```

```json [Response]
{
  "Media": {
    "id": 127549
  }
}
```
:::

But we want to get the title of the Anime. We can add the `title` field to the selection. We have no need to pass any arguments to the `title` field so we can use the shorthand syntax, pass the selection as the only argument.

You can get the type hint when writing the query.

```ts twoslash [Query Builder]
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import { useSchema } from '@gqfn/core'
import { request } from 'graphql-request'
import '#schema/10n5kr7'
const endpoint = 'https://graphql.anilist.co'
const { gqfn, gqp, $enum } = useSchema(endpoint)
// ---cut---
const query = gqfn([{
  Media: $ => $({ id: 127549 }, [
    'id',
    {
      title: $ => $([
// @noErrors
        '',
//       ^|
      ]),
    },
  ]),
}])
```

The media we want to get is an anime, so we can also add the type argument to the selection.

The full code is here, you can intuitively see that the writing experience is similar to GraphQL.

::: code-group
```ts twoslash [Query Builder]
import { useSchema } from '@gqfn/core'
import { request } from 'graphql-request'
import '#schema/10n5kr7'
const endpoint = 'https://graphql.anilist.co'
const { gqfn, gqp, $enum } = useSchema(endpoint)
// ---cut---
const query = gqfn([{
  Media: $ => $({ id: 127549, type: $enum('ANIME') }, [
    'id',
    {
      title: $ => $([
        'romaji',
        'english',
        'native',
      ]),
    },
  ]),
}])

const data = await request(endpoint, query)
const id = data.Media?.id
const nativeTitle = data.Media?.title?.native
```

```graphql [GraphQL Query]
{
  Media(id: 127549, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
  }
}
```

```json [Response]
{
  "Media": {
    "id": 127549,
    "title": {
      "romaji": "Slow Loop",
      "english": "Slow Loop",
      "native": "スローループ"
    }
  }
}
```
:::

[Learn more about selection](/runtime/selection).

## Operation Name

Operation names are useful to make the code less ambiguous. The operation name should be always be the first argument of the `gqfn` function.

::: code-group
```ts twoslash [Query Builder]
import { useSchema } from '@gqfn/core'
import { request } from 'graphql-request'
import '#schema/10n5kr7'
const endpoint = 'https://graphql.anilist.co'
const { gqfn, gqp, $enum } = useSchema(endpoint)
// ---cut---
const query = gqfn('query FetchAnime', [{
  Media: $ => $({ id: 127549, type: $enum('ANIME') }, [
    'id',
    {
      title: $ => $([
        'romaji',
        'english',
        'native',
      ]),
    },
  ]),
}])

await request(endpoint, query)
```

```graphql [GraphQL Query]
query FetchAnime {
  Media(id: 127549, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
  }
}
```

```json [Response]
{
  "Media": {
    "id": 127549,
    "title": {
      "romaji": "Slow Loop",
      "english": "Slow Loop",
      "native": "スローループ"
    }
  }
}
```
:::

[Learn more about operation name](/runtime/#name).

## Variables

Variables are helpful if we want to query for other anime. You can pass the variables definition as the second argument of the `gqfn` function.

Writing variables is similar to writing a GraphQL query and you can use the `$` to visit you variables.

::: code-group
```ts twoslash [Query Builder]
import { useSchema } from '@gqfn/core'
import { request } from 'graphql-request'
import '#schema/10n5kr7'
const endpoint = 'https://graphql.anilist.co'
const { gqfn, gqp, $enum } = useSchema(endpoint)
// ---cut---
const query = gqfn('query FetchAnime', {
  id: 'Int!',
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
  ]),
}])

await request(endpoint, query, { id: 127549 })
```

```graphql [GraphQL Query]
query FetchAnime($id: Int!) {
  Media(id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
  }
}
```

```json [Response]
{
  "Media": {
    "id": 127549,
    "title": {
      "romaji": "Slow Loop",
      "english": "Slow Loop",
      "native": "スローループ"
    }
  }
}
```
:::

Default values can be set as follows:

::: code-group
```ts twoslash [Query Builder]
import { useSchema } from '@gqfn/core'
import { request } from 'graphql-request'
import '#schema/10n5kr7'
const endpoint = 'https://graphql.anilist.co'
const { gqfn, gqp, $enum } = useSchema(endpoint)
// ---cut---
const query = gqfn('query FetchAnime', {
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
  ]),
}])

await request(endpoint, query, {})
```

```graphql [GraphQL Query]
query FetchAnime($id: Int = 127549) {
  Media(id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
  }
}
```

```json [Response]
{
  "Media": {
    "id": 127549,
    "title": {
      "romaji": "Slow Loop",
      "english": "Slow Loop",
      "native": "スローループ"
    }
  }
}
```
:::

[Learn more about variables](/runtime/#variables).

[Learn more about `$` and dollar function](/runtime/dollar).

## Going Further

- [Directives](/runtime/directive)
