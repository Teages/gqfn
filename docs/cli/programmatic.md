# Programmatic Usage

Package `@gqfn/core/cli` provided a `sync` function to programmatic control the schema type generation.

## Type Definition

```ts
export async function sync(config: Config): Promise<Output[]>
export interface Output {
  filename: string
  url: string
  content: string
}
```

## Config

See the [Configuration](./config.md) for more details.
