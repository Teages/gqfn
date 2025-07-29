# Operation

GQFn supports all GraphQL operation types, including `query`, `mutation`, and `subscription`.

```ts
const query = schema.gqfn('query Hello', [
  'hello',
])

const mutation = schema.gqfn('mutation Greeting', [
  'greeting',
])

const subscription = schema.gqfn('subscription OnMessage', [
  'message',
])
```
