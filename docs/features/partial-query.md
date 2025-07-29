# Partial Query

Use `gqfp` to reuse common fields like [GraphQL Fragments](https://graphql.org/learn/queries/#fragments).

## Example

::: code-group
```ts [Query Builder]
const userFields = gqp(
  'fragment UserFields',
  'on Users',
  [
    'id',
    'name',
  ],
)

const query = gqfn([
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

## Type Definition

```ts
export function gqp(
  name: 'fragment' | `fragment ${string}`,
  base: `on ${string}`,
  selection: TypeSelection,
): ($: Dollar<any>) => SelectionObject
export function gqp(
  name: 'fragment' | `fragment ${string}`,
  base: `on ${string}`,
  vars: Variables,
  selection: TypeSelection,
): ($: Dollar) => SelectionObject

interface SelectionObject {
  [key: string]:
    | true
    | (($: Dollar) => DollarContext<TypeSelection>)
}
```
