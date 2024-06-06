# Enum

You need to use `$enum` if you want to define an enum in GQF. [Learn about enum](https://graphql.org/learn/schema/#enumeration-types)

## Specification

To use enum, you need to warp the value with `$enum` function.

::: code-group
```ts [Query Builder]
const query = gqf([
  {
    toBytes: $ => $({ unit: $enum('MB'), value: 1000 }, true),
  },
])
```

```graphql [GraphQL Query]
{
  toBytes(unit: MB, value: 1000)
}
```
:::

:::tip Why we need `$enum`?

If we have a `toBytes` field to get the number of bytes in a certain unit and we defined a enum to limit the input values.

```graphql
enum UnitEnum {
  KB
  MB
  GB
  TB
}

type Query {
  toBytes(unit: UnitEnum, value: Int!): Int!
}
```

And make a query with query builder:

```ts
const query = gqf([
  {
    toBytes: $ => $({ unit: 'MB', value: 1000 }, true),
  },
])
```

In GraphQL, enums have a different syntax than strings, and they are not compatible with each other. But query builder is designed to be schema-independent, in this example the builder only know `MB` is a string, and it is impossible to determine whether the value is an enum or a string.

We need to make some different. As input object has used object, we can only use function or class, we choose function to wrap the enum value.

```ts
const query = gqf([
  {
    toBytes: $ => $({ unit: () => 'MB', value: 1000 }, true),
  },
])
```

Passing a function directly may lose type hints, so we provide a `$enum` wrapper.

```ts
const query = gqf([
  {
    toBytes: $ => $({ unit: $enum('MB'), value: 1000 }, true),
  },
])
```
:::

You can use enum in variables without `$enum` wrapper.

::: code-group
```ts [Query Builder]
const query = gqf('query', {
  unit: 'UnitEnum! = MB',
  value: 'Int!',
}, [
  {
    toBytes: $ => $({ unit: $.unit, value: $.value }, true),
  },
])

const data = client.query(query, {
  unit: 'MB',
  value: 1000,
})
```

```graphql [GraphQL Query]
query ($unit: UnitEnum! = MB, $value: Int!) {
  toBytes(unit: $unit, value: $value)
}
```
:::

## Type definition

```ts
export type EnumPackage<T extends string> = () => T
export function $enum<T extends string>(content: T): EnumPackage<T>
```
