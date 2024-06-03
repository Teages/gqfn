# Directive

The way to add extra directive. [Learn about Directives](https://graphql.org/learn/queries/#directives)

## Example

There are three places where you can add directives:
  1. on operation root
  2. on field
  3. on inline fragment

### Operation

::: tip
You need to use full spread query builder if you want to use `directives`. It means you need to add a empty variable definition to the query. The builder will automatically ignore the empty variable.
:::

::: code-group
```ts [Query Builder]
const query = gqf('query', {}, [
  'time'
], $ => [
  ['@cache', { rule: 'cache-first', maxAge: 3600 }],
])
```

```graphql [GraphQL Query]
query @cache(rule: "cache-first", maxAge: 3600) {
  time
}
```
:::

Some times you need to use variables in the directive, for example:

::: code-group
```ts [Query Builder]
const query = gqf('query', {
  maxAge: 'Int!',
}, [
  'time'
], $ => [
  ['@cache', { rule: 'cache-first', maxAge: $.maxAge }],
])
```

```graphql [GraphQL Query]
query ($maxAge: Int!) @cache(rule: "cache-first", maxAge: $maxAge) {
  time
}
```
:::

### Field

::: code-group
```ts [Query Builder]
const query = gqf('query', {}, [
  {
    now: $ => $(true, [
      ['@skip', { if: false }],
    ]),
  },
])
```

```graphql [GraphQL Query]
{
  now @skip(if: false)
}
```
:::

Also you can use variables in the directive:

::: code-group
```ts [Query Builder]
const query = gqf('query', { withTime: 'Boolean!' }, [
  {
    now: $ => $(true, [
      ['@include', { if: $.withTime }],
    ]),
  },
])
```

```graphql [GraphQL Query]
query ($withTime: Boolean!) {
  now @include(if: $withTime)
}
```
:::

### Inline Fragment

It is same to field, for example:

::: code-group
```ts [Query Builder]
const query = gqf('query', { withDate: 'Boolean!' }, [
  {
    users: $ => $([
      'id',
      'name',
      'email',
      {
        '...': $ => $([
          'createdAt',
          'updatedAt',
        ], [
          ['@include', { if: $.withDate }],
        ]),
      },
    ]),
  },
])
```

```graphql [GraphQL Query]
query ($withDate: Boolean!) {
  users {
    id
    name
    email
    ... @include(if: $withDate) {
      createdAt
      updatedAt
    }
  }
}
```
:::

## Type Definition

```ts
export type Directives = Array<Directive>
export type Directive = [`@${string}`, { [key: string]: any }]
```
