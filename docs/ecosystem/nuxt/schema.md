#  useSchema

`useSchema` is a copy of [`useSchema` in `@gqfn/core`](/cli/#useschema) which provide the typed `gqfn`, `gqp` and `$enum` function.

:::tip
You will receive a warning on console and find your `gqfn` being deprecated if you provide a unregistered endpoint.

Don't forget to add your schema url to `nuxt.config`.
:::

## Type Definition

```ts
export function useSchema(): useSchema<string>
export function useSchema<T extends ExactEndpoints>(endpoint: T): useSchema<T>
export function useSchema(endpoint: string): useSchemaWithWarning

export interface useSchema<
  TEndpoint extends Endpoints,
> {
  endpoint?: TEndpoint
  gqfn: LoadGQFn<TEndpoint>
  gqp: LoadGQP<TEndpoint>
  $enum: typeof $enum
}

export interface useSchemaWithWarning {
  endpoint?: string
  /**
   * @deprecated It's not really deprecated. The schema is not typed, maybe you input a wrong endpoint or forget to add it to nuxt config.
   */
  gqfn: LoadGQFn<string>
  /**
   * @deprecated It's not really deprecated. The schema is not typed, maybe you input a wrong endpoint or forget to add it to nuxt config.
   */
  gqp: LoadGQP<string>
  $enum: typeof $enum
}
```
