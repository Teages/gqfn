# Variable

Variables in GQFn provide a way to pass dynamic data to your GraphQL queries with full type safety.

## Variable Declaration

Variables are declared as the first parameter to `schema.gqfn()`:

```ts
const schema = useSchema('https://your-graphql-endpoint.com/graphql')

const query = schema.gqfn(
  {
    userId: 'ID!',
    postLimit: 'Int!',
    includeUnpublished: 'Boolean = false',
  },
  [
    // Query selection sets
  ],
)
```

## Variable Types

GQFn supports all GraphQL scalar types and custom types:

### Scalar Types

```ts
const query = schema.gqfn(
  {
    // Basic scalars
    id: 'ID!',
    name: 'String!',
    age: 'Int',
    rating: 'Float',
    active: 'Boolean!',

    // Custom scalars
    date: 'Date!',
    email: 'EmailAddress',
    url: 'URL',
  },
  [
    // Query selection sets
  ],
)
```

### Complex Types

```ts
const query = schema.gqfn(
  {
    // Lists
    userIds: '[ID!]!',
    tags: '[String]',

    // Objects (input types)
    filter: 'PostFilter',

    // Enums
    status: 'PostStatus!',

    // Custom scalars
    timestamp: 'DateTime!',
  },
  [
    // Query selection sets
  ],
)
```

## Variable Usage

Use variables in your queries through the `$.vars` object:

```ts
const query = schema.gqfn(
  {
    userId: 'ID!',
    postLimit: 'Int! = 10',
    status: 'PostStatus',
  },
  [
    {
      user: $ => $({ id: $.vars.userId }, [
        'id',
        'name',
        {
          posts: $ => $({
            first: $.vars.postLimit,
            status: $.vars.status,
          }, [
            'id',
            'title',
            'status',
          ]),
        },
      ]),
    },
  ],
)
```

## Variable Default Values

Provide default values for optional variables:

```ts
const query = schema.gqfn(
  {
    userId: 'ID!',
    postLimit: 'Int! = 10', // Default value
    status: 'PostStatus = PUBLISHED', // Default enum value
    includeComments: 'Boolean = false', // Default boolean
  },
  [
    {
      user: $ => $({ id: $.vars.userId }, [
        'id',
        'name',
        {
          posts: $ => $({
            first: $.vars.postLimit,
            status: $.vars.status,
            includeComments: $.vars.includeComments,
          }, [
            'id',
            'title',
          ]),
        },
      ]),
    },
  ],
)
```

## Variable Type Safety

GQFn provides full TypeScript type safety for variables:

```ts
const query = schema.gqfn(
  {
    userId: 'ID!',
    postLimit: 'Int!',
  },
  [
    {
      user: $ => $({ id: $.vars.userId }, [
        'id',
        'name',
      ]),
    },
  ],
)

// TypeScript will validate variable types at compile time
const variables = {
  userId: '123', // ✅ Correct: string
  postLimit: 10, // ✅ Correct: number
}

// Type errors will be caught:
const invalidVariables = {
  userId: 123, // ❌ Type error: should be string
  postLimit: '10', // ❌ Type error: should be number
  missingVar: 'value', // ❌ Type error: not in variable definition
}
```

## Variables in Directives

Use variables in directive arguments:

```ts
const query = schema.gqfn(
  {
    includeEmail: 'Boolean!',
    includePosts: 'Boolean! = true',
  },
  [
    {
      user: $ => $({ id: 1 }, [
        'id',
        'name',
        {
          email: $(true, [
            ['@include', { if: $.vars.includeEmail }],
          ]),
          posts: $ => $({ first: 5 }, [
            'id',
            'title',
          ], [
            ['@include', { if: $.vars.includePosts }],
          ]),
        },
      ]),
    },
  ],
)
```

## Variables in Fragments

Variables can be used in fragments and partial queries:

```ts
const userFields = schema.partial(
  'fragment UserFields',
  'on User',
  { includeEmail: 'Boolean!' },
  [
    'id',
    'name',
    $ => $.vars.includeEmail ? 'email' : null,
    'avatar',
  ],
)

const query = schema.gqfn(
  { includeEmail: 'Boolean!' },
  [
    {
      user: $ => $({ id: 1 }, [{
        ...userFields($),
      }]),
    },
  ],
)
```

## Complex Variable Examples

### Input Object Variables

```ts
const query = schema.gqfn(
  {
    filter: 'PostFilter!',
    sort: `PostSort = { field: 'createdAt', direction: 'DESC' }`,
  },
  [
    {
      posts: $ => $({
        filter: $.vars.filter,
        sort: $.vars.sort,
      }, [
        'id',
        'title',
        'createdAt',
      ]),
    },
  ],
)

// Usage
const variables = {
  filter: {
    status: 'PUBLISHED',
    authorId: '123',
    dateRange: {
      start: '2023-01-01',
      end: '2023-12-31',
    },
  },
}
```

### List Variables

```ts
const query = schema.gqfn(
  {
    userIds: '[ID!]!',
    tags: '[String]',
  },
  [
    {
      users: $ => $({ ids: $.vars.userIds }, [
        'id',
        'name',
        {
          posts: $ => $({
            tags: $.vars.tags,
          }, [
            'id',
            'title',
          ]),
        },
      ]),
    },
  ],
)

// Usage
const variables = {
  userIds: ['1', '2', '3'],
  tags: ['javascript', 'typescript'],
}
```

## Variable Validation

GQFn validates variables at both compile-time and runtime:

```ts
const query = schema.gqfn(
  {
    required: 'ID!',
    optional: 'String',
    withDefault: 'Int! = 42',
  },
  [
    // Query selection
  ],
)

// Runtime validation will catch:
const invalidExecution = await executeQuery(query, {
  // required: '123', // ❌ Missing required variable
  optional: null, // ✅ Optional can be null
  withDefault: 100, // ✅ Override default
})
```
