# Your First Query with GQFn

Using GQFn feels just like writing native GraphQL queries. This guide assumes you are already familiar with [GraphQL query basics](https://graphql.org/learn/queries/).

In this walkthrough, we’ll incrementally build a more complex query step by step.

## Preparing the Schema

Before you start writing queries, you need to prepare your schema. Follow the [Prepare Schema](./prepare-schema) guide to generate schema types, and use `useSchema` to obtain the `gqfn` function. In this example, we’ll use the [AniList](https://anilist.gitbook.io/anilist-apiv2-docs/) GraphQL endpoint.

If you haven’t installed `gqfn` yet, run the following commands:
```bash
# ✨ Auto-detect package manager
npx nypm install @gqfn/core
npm run gqfn add https://graphql.anilist.co
```

Next, import the `gqfn` function from the `@gqfn/core` package and use it to construct your query:

<<< @/snippets/first-query/query-init.ts{ts twoslash}

## Selection and Arguments

To select fields on the `Query` type, simply pass your selection as the argument to the `gqfn` function.

<<< @/snippets/first-query/init.ts{ts twoslash}

Let’s add our first field. Suppose we want the title of the anime with ID `127549`. Add the `Media` field to your selection, and provide the `id` argument.

Pass arguments as the first parameter to `$`, and the selection as the second. For example:

::: code-group
<<< @/snippets/first-query/query_1/query.ts{ts twoslash} [GQFn]
<<< @/snippets/first-query/query_1/query.graphql [GraphQL]
<<< @/snippets/first-query/query_1/response.json [Response]
:::

To get the anime’s title, add the `title` field to your selection. Since `title` takes no arguments, you can use the shorthand syntax and pass only the selection.

GQFn provides type hints as you write your query:

```ts twoslash [Query Builder]
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import { useSchema } from '@gqfn/core'
import { request } from 'graphql-request'

const endpoint = 'https://graphql.anilist.co'
const gqfn = useSchema(endpoint)
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

Since the media is an anime, you can also add the type argument to the selection.

Here’s the complete code. As you can see, the experience closely mirrors writing GraphQL directly:

::: code-group
<<< @/snippets/first-query/query_2/query.ts{ts twoslash} [GQFn]
<<< @/snippets/first-query/query_2/query.graphql [GraphQL]
<<< @/snippets/first-query/query_2/response.json [Response]
:::

[Learn more about selection](../reference/selection).

## Operation Name

The operation name should always be the first argument to the `gqfn` function.

::: code-group
<<< @/snippets/first-query/query_3/query.ts{ts twoslash} [GQFn]
<<< @/snippets/first-query/query_3/query.graphql [GraphQL]
<<< @/snippets/first-query/query_3/response.json [Response]
:::

[Learn more about operation names](../reference/operation).

## Variables

Variables let you make your queries dynamic. To use variables, pass the variable definitions as the second argument to `gqfn`.

Defining and using variables in GQFn is similar to standard GraphQL. Use `$` to reference your variables:

::: code-group
<<< @/snippets/first-query/query_4/query.ts{ts twoslash} [GQFn]
<<< @/snippets/first-query/query_4/query.graphql [GraphQL]
<<< @/snippets/first-query/query_4/response.json [Response]
:::

You can also set default values for variables:

::: code-group
<<< @/snippets/first-query/query_5/query.ts{ts twoslash} [GQFn]
<<< @/snippets/first-query/query_5/query.graphql [GraphQL]
<<< @/snippets/first-query/query_5/response.json [Response]
:::

[Learn more about variables](../reference/variable).

[Learn more about `$` and the dollar function](../reference/dollar).

## Going Further

- [Directives](../reference/directive)
