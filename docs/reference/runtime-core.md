# Runtime Core

GQFn is designed as non-schema dependent. You can directly use the core by importing `raw`.

```ts
import { raw } from '@gqfn/core'
```

By designing it this way, we can focus on the core functionality and testing without the complexity of schema types affecting the runtime design.

## Specification

```ts
export function gqfn(
  selection: TypeSelection
): DocumentNode
export function gqfn(
  name: OperationName,
  selection: TypeSelection,
  directives?: Directives
): DocumentNode
export function gqfn(
  name: OperationName,
  variables: Variables,
  selection: TypeSelection,
  directives?: Directives
): DocumentNode
```

### `name`

The name of the operation. Could be:

- `query`: A query operation.
- `mutation`: A mutation operation.
- `subscription`: A subscription operation.
- `${'query' | 'mutation' |'subscription'} ${string}`: A named operation.

### `variables`

The variables delineation of the operation.

```ts
const query = gqfn('query FetchData', {
  str: 'String!',
  strNullable: 'String',
  strWithDefault: 'String! = "default"',
  intWithDefault: 'Int! = 10',
  input: 'DataInput!',
  enumWithDefault: 'FruitEnum! = banana',
}, [/* selection */])
```
You can visit these variables in the selection under `$`, see [dollar function](./dollar)

Example:
::: code-group
```ts [Query Builder]
const query = gqfn('query FetchHello', {
  name: 'String!',
}, [{
  hello: $ => $({ name: $.name }, true)
}])
```

```graphql [GraphQL Query]
query FetchHello($name: String!) {
  hello(name: $name)
}
```
:::

### `selection`

The selection of the operation, see [selection](./selection).

### `directives`

The directives of the operation, see [directive](./directive).

### Example

::: code-group
```ts [Query Builder]
const query = gqfn('query FetchData', {
  userId: 'ID!',
  withGreeting: 'Boolean! = true'
}, [
  'hello',
  {
    'hi:hello': true,
    'greeting:hello': $ => $(true, [['@skip', { if: $.withGreeting }]]),
    'user': $ => $({
      userId: $.userId
    }, [
      'id',
      'name',
      {
        posts: $ => $([
          'id',
          'description',
        ]),
      }
    ]),
  },
], $ => [
  ['@operationDirectives', { arg: 'value' }],
])
```

```graphql [GraphQL Query]
query FetchData(
  $userId: ID!,
  $withGreeting: Boolean! = true
) @operationDirectives(arg: "value") {
  hello
  hi: hello
  greeting: hello @skip(if: $withGreeting)
  user(userId: $userId) {
    id
    name
    posts {
      id
      description
    }
  }
}
```
:::

## Simplify

Like writing GraphQL queries, you can skip `name` and `variables` if you don't need them.

::: tip
Difference with schema-typed GQFn, You don't need to use full spread if you want to use `directives`.
:::

```ts
export function gqfn(selection: TypeSelection): DocumentNode
```

### Example

::: code-group
```ts [Query Builder]
const query = gqfn([
  'hello',
])
```

```graphql [GraphQL Query]
{
  hello
}
```
:::

With `name`:

::: code-group
```ts [Query Builder]
const query = gqfn('mutation', [
  'hello',
])
```

```graphql [GraphQL Query]
mutation {
  hello
}
```
:::
