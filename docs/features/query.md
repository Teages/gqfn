# Query

Learn how to build GraphQL queries with GQFn using type-safe TypeScript syntax.

## Basic Query Building

GQFn provides a simple, intuitive way to build GraphQL queries that mirrors the structure of GraphQL itself.

::: code-group
```ts [Query Builder]
const schema = useSchema('https://your-graphql-endpoint.com/graphql')

const query = schema.gqfn([
  {
    user: $ => $({ id: 1 }, [
      'id',
      'name',
      'email',
    ]),
  },
])
```

```graphql [GraphQL Query]
query {
  user(id: 1) {
    id
    name
    email
  }
}
```
:::

## Nested Queries

GQFn naturally supports nested queries to fetch related data:

::: code-group
```ts [Query Builder]
const query = schema.gqfn([
  {
    user: $ => $({ id: 1 }, [
      'id',
      'name',
      {
        posts: $ => $({ first: 10 }, [
          'id',
          'title',
          'content',
          {
            author: $ => $([
              'id',
              'name',
            ]),
          },
        ]),
      },
    ]),
  },
])
```

```graphql [GraphQL Query]
query {
  user(id: 1) {
    id
    name
    posts(first: 10) {
      id
      title
      content
      author {
        id
        name
      }
    }
  }
}
```
:::

## Query with Variables

Use variables to make your queries dynamic and reusable:

::: code-group
```ts [Query Builder]
const query = schema.gqfn(
  { userId: 'ID!', postLimit: 'Int!' },
  [{
    user: $ => $({ id: $.vars.userId }, [
      'id',
      'name',
      {
        posts: $ => $({ first: $.vars.postLimit }, [
          'id',
          'title',
          'publishedAt',
        ]),
      },
    ]),
  }],
)

// Execute with variables
const result = await executeQuery(query, {
  userId: '123',
  postLimit: 5,
})
```

```graphql [GraphQL Query]
query($userId: ID!, $postLimit: Int!) {
  user(id: $userId) {
    id
    name
    posts(first: $postLimit) {
      id
      title
      publishedAt
    }
  }
}
```
:::

## Query Aliases

Use aliases to rename fields in your query results:

::: code-group
```ts [Query Builder]
const query = schema.gqfn([
  {
    user: $ => $({ id: 1 }, [
      'id',
      'name',
      {
        posts: $ => $({ first: 5 }, [
          'id',
          'title',
        ]),
      },
      {
        featuredPosts: $$ => $$.posts({ first: 3, featured: true }, [
          'id',
          'title',
        ]),
      },
    ]),
  },
])
```

```graphql [GraphQL Query]
query {
  user(id: 1) {
    id
    name
    posts(first: 5) {
      id
      title
    }
    featuredPosts: posts(first: 3, featured: true) {
      id
      title
    }
  }
}
```
:::

## Query with Directives

Apply directives to fields for conditional inclusion or exclusion:

::: code-group
```ts [Query Builder]
const query = schema.gqfn(
  { includeEmail: 'Boolean!', includePosts: 'Boolean!' },
  [{
    user: $ => $({ id: 1 }, [
      'id',
      'name',
      $ => $.includeEmail ? 'email' : null,
      {
        posts: $ => $({ first: 10 }, [
          'id',
          'title',
        ], [
          ['@include', { if: $.vars.includePosts }],
        ]),
      },
    ]),
  }],
)
```

```graphql [GraphQL Query]
query($includeEmail: Boolean!, $includePosts: Boolean!) {
  user(id: 1) {
    id
    name
    email @include(if: $includeEmail)
    posts(first: 10) @include(if: $includePosts) {
      id
      title
    }
  }
}
```
:::

## Query with Fragments

Use fragments to reuse field selections across multiple queries:

::: code-group
```ts [Query Builder]
const userFields = schema.partial(
  'fragment UserFields',
  'on User',
  [
    'id',
    'name',
    'email',
    'avatar',
  ],
)

const query = schema.gqfn([
  {
    user: $ => $({ id: 1 }, [{
      ...userFields($),
      posts: $ => $({ first: 5 }, [
        'id',
        'title',
      ]),
    }]),
  },
  {
    featuredUser: $ => $({ featured: true }, [{
      ...userFields($),
    }]),
  },
])
```

```graphql [GraphQL Query]
query {
  user(id: 1) {
    ...UserFields
    posts(first: 5) {
      id
      title
    }
  }
  featuredUser(featured: true) {
    ...UserFields
  }
}

fragment UserFields on User {
  id
  name
  email
  avatar
}
```
:::

## Inline Fragments

Use inline fragments for type conditions on unions and interfaces:

::: code-group
```ts [Query Builder]
const query = schema.gqfn([
  {
    search: $ => $({ query: 'GraphQL' }, [
      'id',
      'title',
      {
        '... on Post': $ => $([
          'content',
          'publishedAt',
        ]),
      },
      {
        '... on Video': $ => $([
          'duration',
          'thumbnailUrl',
        ]),
      },
    ]),
  },
])
```

```graphql [GraphQL Query]
query {
  search(query: "GraphQL") {
    id
    title
    ... on Post {
      content
      publishedAt
    }
    ... on Video {
      duration
      thumbnailUrl
    }
  }
}
```
:::

## Type Safety

GQFn provides full type safety for your queries:

```ts
// TypeScript will provide autocomplete and type checking
const query = schema.gqfn([
  {
    user: $ => $({ id: 1 }, [
      'id',
      'name',
      // TypeScript will error if field doesn't exist
      // 'invalidField', // ❌ Type error
    ]),
  },
])

// Variables are type-checked
const queryWithVars = schema.gqfn(
  { userId: 'String!', postLimit: 'Int!' },
  [{
    user: $ => $({ id: $.vars.userId }, [
      'id',
      'name',
    ]),
  }],
)

// TypeScript will catch variable type mismatches
// executeQuery(queryWithVars, { userId: 123 }) // ❌ Type error: should be string
// executeQuery(queryWithVars, { userId: '123', postLimit: 'five' }) // ❌ Type error: should be number
