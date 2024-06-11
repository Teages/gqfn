# withGqfClient

You can set up your favorite client with nuxt-gqf.

## Setup Schema

```ts
const endpoint = 'https://your-graphql-endpoint'
const schema = useGqfSchema(endpoint)
```

## Setup Client

We provide a simple client by default. But most cases you need to configure your client for advanced features.

### Build-in Client

The build-in client use `$fetch` to send request.

```ts
const endpoint = 'https://your-graphql-endpoint'

const schema = useGqfSchema(endpoint)
const {
  defineOperation,
  defineAsyncQuery,
  defineLazyAsyncQuery,
  defineSubscription,
} = withGqfClient(schema, {
  fetchOptions: () => ({
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
})

// define your operations
```

### graphql-request

`graphql-request` is a minimal GraphQL client supporting Node and browsers for scripts or simple apps.

::: code-group
```bash [nypm]
# ✨ Auto-detect
npx nypm install graphql-request graphql
```
```bash [npm]
npm install graphql-request graphql
```
```bash [yarn]
yarn add graphql-request graphql
```
```bash [pnpm]
pnpm install graphql-request graphql
```
```bash [bun]
bun install graphql-request graphql
```
:::

Then setup your client.

```ts
import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://your-graphql-endpoint'

const schema = useGqfSchema(endpoint)
const client = new GraphQLClient(endpoint, {
  // we suggest to use build-in fetch if have a internal graphql server
  // so that you can save network cost
  fetch: (input, init) => $fetch.raw(
    input.toString(),
    {
      ...init as any,
      responseType: 'stream',
    },
  ),
  // custom options
})

const {
  defineOperation,
  defineAsyncQuery,
  defineLazyAsyncQuery,
  defineSubscription,
} = withGqfClient(
  schema,
  ({ url, document, variables }, _context) => {
    if (type === 'subscription') {
      return // use other library for subscription
    }

    // @ts-expect-error ignore var not match error
    return client.request({ document, variables })
  },
)
```

### urql

`urql` is a highly customisable and versatile GraphQL client.

::: code-group
```bash [nypm]
# ✨ Auto-detect
npx nypm install @urql/core
```
```bash [npm]
npm install @urql/core
```
```bash [yarn]
yarn add @urql/core
```
```bash [pnpm]
pnpm install @urql/core
```
```bash [bun]
bun install @urql/core
```
:::

Then setup your client.

```ts
import { Client, cacheExchange, fetchExchange } from '@urql/core'
import type { OperationContext } from '@urql/core'

const endpoint = 'https://your-graphql-endpoint'

const client = new Client({
  url: endpoint,
  exchanges: [cacheExchange, fetchExchange],
  // we suggest to use build-in fetch if have a internal graphql server
  // so that you can save network cost
  fetch: (input, init) => $fetch.raw(
    input.toString(),
    {
      ...init as any,
      responseType: 'stream',
    },
  ),
})

const schema = useGqfSchema(endpoint)
const {
  defineOperation,
  defineAsyncQuery,
  defineLazyAsyncQuery,
} = withGqfClient<Partial<OperationContext>>(
  schema,
  ({ document, variables, type }, context) => {
    if (type === 'query') {
      return client.query(document, variables, context)
        .toPromise()
    }
    // type === 'mutation'
    return client.mutation(document, variables, context)
      .toPromise()
  },
)
```

### Other Clients

You can use any other GraphQL client with `nuxt-gqf`.

## Setup Subscription Client

By default we provide two kinds of subscription client: `websocket` by `graphql-ws` and a simple `event-source` client for `sse`. For the vast majority of cases, they are enough. But if you need to customize them, you can use the `subscription` option in `withGqfClient`

### Build-in Subscription Client

`event-source` is the default subscription client. You can switch to `graphql-ws` by setting `handler: 'ws'`.

```ts
const schema = useGqfSchema(endpoint)
const {
  defineSubscription,
} = withGqfClient(schema, {
  subscription: { handler: 'ws' }
})
```

#### `event-source`

The only option of `event-source` is [`withCredentials`](https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource#withcredentials).

#### `graphql-ws`

[Configuration Options of `graphql-ws`](https://the-guild.dev/graphql/ws/docs/interfaces/client.ClientOptions)

### Other Subscription Clients

See [Type Definitions](#type-definitions) to implement your own subscription client.

## Define Operation

`withGqfClient` provides some methods for you to define operations composables.

### `defineOperation`

```ts
export const useUser = defineOperation(
  gqf => gqf('query QueryUser', {
    id: 'ID',
  }, [{
    user: $ => $({ id: $.id }, ['id', 'name']),
  }]),
)

const { user } = await useUser({ id: '1' })
```

### `defineAsyncQuery`

Create a composable around `useAsyncData` and `defineOperation`. It automatically generates a key base on the query and first time variables.

:::tip
It only works on `query` and will throw an error if received a `mutation` or `subscription` operation.
:::

```ts
export const useAsyncUser = defineAsyncQuery(
  gqf => gqf('query QueryUser', {
    id: 'ID',
  }, [{
    user: $ => $({ id: $.id }, ['id', 'name']),
  }]),
)

const { data, pending, error, refresh } = await useAsyncUser({ id: '1' })
```

You can set the `watch` option to refresh when the variables changed. You need to provide `ref`, `computed` or a getter (`() => T`) as the variables, so that we can always use the latest value to refresh.

```ts
const id = ref('1')
const { data, pending, error, refresh } = await useAsyncUser(
  () => { id: id.value },
  { watch: [id] },
)
```

[Nuxt: useAsyncData](https://nuxt.com/docs/api/composables/use-async-data)

### `defineLazyAsyncQuery`

Same to `defineAsyncQuery` but with `lazy:true` by default.

```ts
export const useLazyAsyncUser = defineLazyAsyncQuery(
  gqf => gqf('query QueryUser', {
    id: 'ID',
  }, [{
    user: $ => $({ id: $.id }, ['id', 'name']),
  }]),
)

const { data, pending, error, refresh } = await useLazyAsyncUser({ id: '1' })
```

[Nuxt: useLazyAsyncData](https://nuxt.com/docs/api/composables/use-lazy-async-data)

### `defineSubscription`

Create a composable for your subscription. This composable only works in client-side and will do nothing and throw a warning if used in server-side.

```ts
const useCountdown = defineSubscription(
  gqf => gqf('subscription', [{
    countdown: $ => $({ from: 3 }, true),
  }]),
)

const num = ref(0)
let cancel: () => void | undefined
async function reset() {
  if (cancel) {
    cancel()
  }
  const countdown = await useCountdown()
  cancel = countdown.unsubscribe
  num.value = countdown.data.value?.countdown ?? 0

  const unwatch = watch(countdown.data, (val) => {
    if (val) {
      num.value = val.countdown
    }
    if (countdown.state.value === 'closed') {
      unwatch()
    }
  })
}
```

## Type Definitions

```ts
export function withGqfClient<
  Context = DefaultHandlerOptions,
  SubscriptionContext = DefaultSubscriptionHandlerOptions,
  Endpoint extends Endpoints = string,
>(
  schema: UseGqfSchema<Endpoint>,
  options?: WithGqfClientOptions<Context, SubscriptionContext>,
): WithGqfClient<Context, Endpoint>
```

::: details More
```ts
export interface WithGqfClientOptions<
  Context,
  SubscriptionContext,
> {
  handler?: RequestHandler<Context> | DefaultHandlerOptions
  subscription?:
    | ({
      /**
       * Override the default subscription handler.
       * By default it use EventSource
       * - `SubscriptionHandler`: Custom subscription handler.
       * - `ws`: Use websocket handler from package `graphql-ws`.
       * - `sse`: Use default sse handler.
       */
      handler?: 'sse'
    } & SSEOptions)
    | ({
      /**
       * Override the default subscription handler.
       * By default it use EventSource
       * - `SubscriptionHandler`: Custom subscription handler.
       * - `ws`: Use websocket handler from package `graphql-ws`.
       * - `sse`: Use default sse handler.
       */
      handler: 'ws'
    } & WSOptions)
    | {
      /**
       * Override the default subscription handler.
       * By default it use EventSource
       * - `SubscriptionHandler`: Custom subscription handler.
       * - `ws`: Use websocket handler from package `graphql-ws`.
       * - `sse`: Use default sse handler.
       */
      handler: SubscriptionHandler<SubscriptionContext>
    }
}

export type RequestHandler<Context> = <
  TData,
  TVars extends Record<string, unknown>,
> (
  query: {
    document: TypedQueryDocumentNode<TData, TVars>
    variables: NoInfer<TVars>
    type: 'query' | 'mutation'
    url: string
  },
  context?: Context
) => Promise<TData>

export type SubscriptionHandler<Context> = <
  TData,
  TVars extends Record<string, unknown>,
> (
  func: {
    update: (data: TData, isFinal?: boolean) => void
    close: (error?: any) => void
    onUnsubscribe: (fn: () => void) => void
  },
  query: {
    document: TypedQueryDocumentNode<TData, TVars>
    variables: NoInfer<TVars>
    type: 'subscription'
    url: string
  },
  context?: Context
) => void

export interface WithGqfClient<
  Context,
  Endpoint extends Endpoints = string,
> {
  defineOperation: DefineOperation<Context, Endpoint>
  defineAsyncQuery: DefineAsyncQuery<Context, Endpoint>
  defineLazyAsyncQuery: DefineAsyncQuery<Context, Endpoint>
  defineSubscription: DefineSubscription<Context, Endpoint>
}

export interface DefineOperation<
  Context,
  Endpoint extends Endpoints = string,
> {
  <TData, TVars extends Record<string, unknown>>(
    def: (
      | ((
        gqf: UseGqfSchema<Endpoint>['gqf'],
        $enum: UseGqfSchema<Endpoint>['$enum'],
      ) => TypedQueryDocumentNode<TData, TVars>)
      | TypedQueryDocumentNode<TData, TVars>
    ),
    context?: Context,
  ): DefineOperationReturn<Promise<TData>, TVars, Context>
}

export interface DefineAsyncQuery<
  Context,
  Endpoint extends Endpoints = string,
> {
  <
    TData,
    TVars extends Record<string, unknown>,
    DataT = TData | undefined,
    PickKeys extends KeysOf<DataT> = KeysOf<DataT>,
    DefaultT = null,
  > (
    def: (
      | ((
        gqf: UseGqfSchema<Endpoint>['gqf'],
        $enum: UseGqfSchema<Endpoint>['$enum'],
      ) => TypedQueryDocumentNode<TData, TVars>)
      | TypedQueryDocumentNode<TData, TVars>
    ),
    context?: Context,
  ): DefineAsyncQueryReturn<
    AsyncData<PickFrom<DataT, PickKeys> | DefaultT, Error | null>,
    TVars,
    AsyncDataOptions<TData | undefined, DataT, PickKeys, DefaultT> & { context?: Context }
  >

  <
    TData,
    TVars extends Record<string, unknown>,
    DataT = TData | undefined,
    PickKeys extends KeysOf<DataT> = KeysOf<DataT>,
    DefaultT = DataT,
  > (
    def: (
      | ((
        gqf: UseGqfSchema<Endpoint>['gqf'],
        $enum: UseGqfSchema<Endpoint>['$enum'],
      ) => TypedQueryDocumentNode<TData, TVars>)
      | TypedQueryDocumentNode<TData, TVars>
    ),
    context?: Context,
  ): DefineAsyncQueryReturn<
    AsyncData<PickFrom<DataT, PickKeys> | DefaultT, Error | null>,
    TVars,
    AsyncDataOptions<TData | undefined, DataT, PickKeys, DefaultT> & { context?: Context }
  >
}

export interface DefineSubscription<
  Context,
  Endpoint extends Endpoints = string,
> {
  <TData, TVars extends Record<string, unknown>>(
    def: (
      | ((
        gqf: UseGqfSchema<Endpoint>['gqf'],
        $enum: UseGqfSchema<Endpoint>['$enum'],
      ) => TypedQueryDocumentNode<TData, TVars>)
      | TypedQueryDocumentNode<TData, TVars>
    ),
    context?: Context,
  ): DefineSubscriptionReturn<TData, TVars, Context>
}

export type DefineOperationReturn<Ret, TVars, Context> =
  Record<string, never> extends TVars
    ? (variables?: TVars, context?: Context) => Ret
    : (variables: TVars, context?: Context) => Ret

export type DefineAsyncQueryReturn<Ret, TVars, Options> =
  Record<string, never> extends TVars
    ? DefineAsyncQueryReturnFnE<Ret, TVars, Options>
    : DefineAsyncQueryReturnFn<Ret, TVars, Options>

export interface DefineAsyncQueryReturnFn<Ret, TVars, Options> {
  (
    variables: TVars,
    options?: Omit<Options, 'watch'> // Force to use getter if watched.
  ): Ret
  (
    variables: Ref<TVars> | (() => TVars),
    options?: Options
  ): Ret
}
export interface DefineAsyncQueryReturnFnE<Ret, TVars, Options> {
  (
    variables?: TVars,
    options?: Omit<Options, 'watch'> // Force to use getter if watched.
  ): Ret
  (
    variables?: Ref<TVars> | (() => TVars),
    options?: Options
  ): Ret
}

export type DefineSubscriptionReturn<Ret, TVars, Context> =
  Record<string, never> extends TVars
    ? (variables?: TVars, options?: Context) => Promise<SubscriptionReturn<Ret>>
    : (variables: TVars, options?: Context) => Promise<SubscriptionReturn<Ret>>

export interface SubscriptionReturn<TData> {
  state: ComputedRef<'pending' | 'connected' | 'closed'>
  data: ComputedRef<TData | undefined>
  error: ComputedRef<Error | null>
  unsubscribe: () => void
  /**
   * Close the current subscription and reconnect.
   */
  restart: () => Promise<void>
  /**
   * Keep the current subscription alive and seamless switch to a new one.
   * This is useful when you have a connection time limit.
   */
  refresh: () => Promise<void>
}
```
:::
