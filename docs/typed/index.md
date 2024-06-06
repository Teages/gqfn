# Typed Query Builder

Typed query builder is based on [Query Builder](../core/), it has the same runtime behavior but you can benefit from type safety and better type hints by TypeScript.

Usage same to [Query Builder](../core/).

## Differences from non-typed query builder

Typed query build is based on query build, this means that they have a completely consistent runtime behavior. But for type safety and better type hints, some usage will be marked as type error by TypeScript.

### Selection

In non-typed query builder, these are allowed:

```ts
gqf([
  {
    users: $ => $([ // you can omit the arguments if you don't need it
      'id',
    ])
  }
])

gqf([
  {
    users: $ => $({}, [ // or pass a empty object
      'id',
    ])
  }
])
```

But in typed query builder, you need to pass the arguments if the field can accept arguments, if you don't need it, you can pass a empty object:

```ts
gqf([
  {
    users: $ => $({}, [
      'id',
    ])
  }
])
```

If you need to add directives, you need to pass a empty object even the field don't accept arguments:

```ts
gqf([
  {
    allUsers: $ => $({}, [
      'id',
    ], [
      ['@skip', { if: true }],
    ])
  }
])
```
