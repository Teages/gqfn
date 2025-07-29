# Typed Core

Typed core is based on [runtime core](./runtime-core), it has the same runtime behavior but you can benefit from type safety and better type hints by TypeScript.

Usage same to [runtime core](./runtime-core).

## Differences from non-typed core

Typed core is based on runtime core, this means that they have a completely consistent runtime behavior.

But due to TypeScript limitations, some usages are not supported.

### Selection

In non-typed core, these are allowed:

```ts
gqfn([
  {
    users: $ => $([ // you can omit the arguments if you don't need it
      'id',
    ])
  }
])

gqfn([
  {
    users: $ => $({}, [ // or pass a empty object
      'id',
    ])
  }
])
```

But in typed core, you need to pass the arguments if the field can accept arguments, if you don't need it, you can pass a empty object:

```ts
gqfn([
  {
    users: $ => $({}, [
      'id',
    ])
  }
])
```


### Directives

If you need to add directives in selection, you need to pass a empty object even the field don't accept arguments:

```ts
gqfn([
  {
    allUsers: $ => $({}, [
      'id',
    ], [
      ['@skip', { if: true }],
    ])
  }
])
```

You need to pass the variable definition in the query if you want to use directives, even you don't need it:

```ts
gqfn('query', {}, [
  'hello',
], $ => [
  ['@skip', { if: true }],
])
```
