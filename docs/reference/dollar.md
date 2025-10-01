# Dollar

The `$` (dollar) function in GQFn is a utility that provides access to variables, field arguments, and directive parameters within your static GraphQL queries.

## Dollar Function Basics

The dollar function is passed as a parameter to field selectors and provides access to:

- `$.vars` - Query variables
- Field arguments
- Directive parameters

```ts
const schema = useSchema('https://your-graphql-endpoint.com/graphql')

const query = schema.gqfn(
  { userId: 'ID!', limit: 'Int!' },
  [
    {
      user: $ => $({ id: $.vars.userId }, [
        'id',
        'name',
        {
          posts: $ => $({ first: $.vars.limit }, [
            'id',
            'title',
          ]),
        },
      ]),
    },
  ],
)
```

## Variable Access (`$.vars`)

Access query variables through the `$.vars` property:

```ts
const query = schema.gqfn(
  {
    userId: 'ID!',
    postLimit: 'Int!' = 10,
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

## Field Arguments

Use the dollar function to pass arguments to fields:

```ts
const query = schema.gqfn([
  {
    user: $ => $({ id: 1 }, [
      'id',
      'name',
      {
        posts: $ => $({
          first: 10,
          orderBy: 'createdAt_DESC',
          where: { published: true },
        }, [
          'id',
          'title',
          'createdAt',
        ]),
      },
    ]),
  },
])
```

## Dollar in Directives

Use the dollar function in directive arguments:

```ts
const query = schema.gqfn(
  {
    includeEmail: 'Boolean!',
    includePosts: 'Boolean!',
  },
  [
    {
      user: $ => $({ id: 1 }, [
        'id',
        'name',
        {
          email: true,
        },
        [
          // Directive with variable
          ['@include', { if: $.vars.includeEmail }],
        ],
        {
          posts: $ => $({ first: 5 }, [
            'id',
            'title',
          ], [
            // Directive with variable
            ['@include', { if: $.vars.includePosts }],
          ]),
        },
      ]),
    },
  ],
)
```

## Dollar in Fragments

Use the dollar function in fragments and partial queries:

```ts
const userFields = schema.partial(
  'fragment UserFields',
  'on User',
  { includeEmail: 'Boolean!' },
  [
    'id',
    'name',
    'email',
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

## Type Safety with Dollar

The dollar function provides full TypeScript type safety:

```ts
const query = schema.gqfn(
  {
    userId: 'ID!',
    limit: 'Int!',
  },
  [
    {
      user: $ => $({
        id: $.vars.userId, // ✅ Type-safe access
        // limit: $.vars.invalid, // ❌ Type error: property doesn't exist
      }, [
        'id',
        'name',
      ]),
    },
  ],
)
```
