# Query Part

Use `gqp` to reuse common fields like [GraphQL Fragments](https://graphql.org/learn/queries/#fragments).

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

## Fragments vs Query Part

Fragments are a way to reuse common fields in multiple queries, and query parts do the same thing but in different way.

Like example from the official GraphQL documentation:

```graphql
{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```

You can use Query Part to create a similar query:

::: code-group
```ts [Query Builder]
const comparisonFields = gqp(
  'fragment comparisonFields',
  'on Character',
  [
    'name',
    'appearsIn',
    {
      friends: $ => $(['name']),
    },
  ],
)

const query = gqfn([
  {
    'leftComparison:hero': $ => $({
      episode: $enum('EMPIRE'),
    }, [{ ...comparisonFields($) }]),
    'rightComparison:hero': $ => $({
      episode: $enum('JEDI'),
    }, [{ ...comparisonFields($) }]),
  }
])
```

```graphql [GraphQL Query]
{
  leftComparison: hero(episode: EMPIRE) {
    name
    appearsIn
    friends {
      name
    }
  }
  rightComparison: hero(episode: JEDI) {
    name
    appearsIn
    friends {
      name
    }
  }
}
```
:::

You can immediately see the difference: Query Part will repeat the fields and let HTTP do the compression.

Query Builder **don't** support GraphQL Fragments by design because this would make the type parser and builder very complicated.

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
