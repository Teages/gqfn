# Fragment

Use `schema.fragment` to define GraphQL fragments.

```ts
const fragment = schema.fragment(
  'fragment UserFields',
  'on User',
  [
    'id',
    'name',
    'email',
  ]
)
```

:::tip
GQFn does not support GraphQL fragments directly. Instead, you should use [Partial Query](./partial-query.md) to define a reusable set of fields.
:::
