# Selection

The way to select fields.

## Specification

Depends on the field type, the selection can be `true` or `TypeSelection`.

- `true`: Select a scalar field or an enum field.
- `TypeSelection`: Select a TypeObject field.

At the beginning you need select the fields from the type object `Query`, `Mutation` or `Subscription`. It means it required a `TypeSelection` on root of the query.

```ts
const query = gqfn([])
```

TypeSelection is an array, it can contain the list of names of fields to select, and the last item can be a record for these fields which are type object or you need to pass arguments.

::: code-group
```ts [Query Builder]
const query = gqfn([
  'a',
  'b',
  {
    c: true,
  }
])
```

```ts [Another]
const query = gqfn([{
  a: true,
  b: true,
  c: true,
}])
```

```graphql [GraphQL Query]
{
  a
  b
  c
}
```
:::

You can use `{alias}:{field}` to select a field with an alias.

::: code-group
```ts [Query Builder]
const query = gqfn([
  'hi:hello',
])
```

```graphql [GraphQL Query]
{
  hi: hello
}
```
:::

If you want to pass arguments to a field, you can use the `$` function.

::: code-group
```ts [Query Builder]
const query = gqfn([
  {
    hello: $ => $({ name: 'Tom' }, true)
  }
])
```

```graphql [GraphQL Query]
{
  hello(name: "Tom")
}
```
:::

In the previous example, the selected fields returns a scalar value, but if you want to select a TypeObject field, you can pass a `TypeSelection` as the second argument of the `$` function.

::: code-group
```ts [Query Builder]
const query = gqfn([
  {
    user: $ => $({ id: 1 }, [
      'id',
      'name',
      'email',
    ])
  }
])
```

```graphql [GraphQL Query]
{
  user(id: 1) {
    id
    name
    email
  }
}
```
:::

Or for simplify you can pass the `TypeSelection` as the only argument.

::: code-group
```ts [Query Builder]
const query = gqfn([
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

Learn more about [`$` and dollar function](./dollar).

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
