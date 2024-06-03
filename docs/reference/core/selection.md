# Selection

The way to select fields.

## Example

Simply select some scalar or enum fields:

::: code-group
```ts [Query Builder]
const query = gqf([
  'hello',
  'hi:hello',
])
```

```graphql [GraphQL Query]
{
  hello
  hi: hello
}
```
:::

Select some TypeObject fields:

::: code-group
```ts [Query Builder]
const query = gqf([
  'hi',
  {
    users: $ => $([
      'id',
      'name',
      'email',
    ])
  }
])
```

```graphql [GraphQL Query]
{
  users {
    id
    name
    email
  }
}
```
:::

Select with arguments:

::: code-group
```ts [Query Builder]
const query = gqf([
  'hi',
  {
    hello: $ => $({ name: 'Tom' }, true),
    user: $ => $({ userId: 1 }, [
      'id',
      'name',
    ]),
  }
])
```

```graphql [GraphQL Query]
{
  hi
  hello(name: "Tom")
  user(userId: 1) {
    id
    name
  }
}
```
:::

## Type Definition

:::tip
The type definition is not complete, it only shows the basic structure of the `TypeSelection` type.
:::

```ts
export type TypeSelection =
  | Array<string>
  | [
    ...Array<string>,
    SelectionObject,
  ]

interface SelectionObject {
  [key: string]:
    | true
    | (($: Dollar) => DollarContext<TypeSelection>)
}
```
