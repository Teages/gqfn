#  useGqfSchema

`useGqfSchema` is a copy of [`useSchema` in `@teages/gqf`](/cli/#useschema) which provide the typed `gqf`, `gqp` and `$enum` function.

:::tip
You will receive a warning on console and find your `gqf` being deprecated if you provide a unregistered endpoint.

Don't forget to add your schema url to `nuxt.config`.
:::

## Type Definition

```ts
export function useGqfSchema(): UseGqfSchema<string>
export function useGqfSchema<T extends ExactEndpoints>(endpoint: T): UseGqfSchema<T>
export function useGqfSchema(endpoint: string): UseGqfSchemaWithWarning

export interface UseGqfSchema<
  TEndpoint extends Endpoints,
> {
  endpoint?: TEndpoint
  gqf: LoadGQF<TEndpoint>
  gqp: LoadGQP<TEndpoint>
  $enum: typeof $enum
}

export interface UseGqfSchemaWithWarning {
  endpoint?: string
  /**
   * @deprecated The schema is not typed.
   */
  gqf: LoadGQF<string>
  /**
   * @deprecated The schema is not typed.
   */
  gqp: LoadGQP<string>
  $enum: typeof $enum
}
```
