# Partial Query

Use `partial` to define reusable common fields like [GraphQL Fragments](https://graphql.org/learn/queries/#fragments).

## Example

::: code-group
```ts [Query Builder]
const userFields = schema.partial(
  'fragment UserFields',
  'on Users',
  [
    'id',
    'name',
  ],
)

const query = schema.gqfn([
  {
    user: $ => $({ id: 1 }, [{
      ...userFields($),
      friends: $ => $([
        userFields($), // if you don't need more fields
      ]),
    }]),
  },
])
```

```graphql [GraphQL Query]
{
  user(id: 1) {
    name
    id
    friends {
      name
      id
    }
  }
}
```
:::

## Fragments vs Partial Query

Partial Query is a typed package of GraphQL Fragments.
On the base of Fragment, we add the type check for Variables.

Fragments can not be used in gqfn, it is for compatibility with other GraphQL tools.
