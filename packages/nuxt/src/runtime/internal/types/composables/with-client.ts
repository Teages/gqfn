import type { TypedQueryDocumentNode } from '@gqfn/core/types'
import type { ComputedRef } from 'vue'
import type { Endpoints } from '../../utils/schema'
import type { HandlerOptions, SSEOptions, WSOptions } from '../../utils/client'
import type { UseGQFnSchema } from './schema'
import type { AsyncData, AsyncDataOptions, KeysOf, PickFrom } from '#app/composables/asyncData'
import type { Ref } from '#imports'

// rename the type
export type DefaultHandlerOptions = Omit<HandlerOptions, ''>

export interface WithGQFnClientOptions<
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

export interface WithGQFnClient<
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
        gqfn: UseGQFnSchema<Endpoint>['gqfn'],
        $enum: UseGQFnSchema<Endpoint>['$enum'],
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
        gqfn: UseGQFnSchema<Endpoint>['gqfn'],
        $enum: UseGQFnSchema<Endpoint>['$enum'],
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
        gqfn: UseGQFnSchema<Endpoint>['gqfn'],
        $enum: UseGQFnSchema<Endpoint>['$enum'],
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
        gqfn: UseGQFnSchema<Endpoint>['gqfn'],
        $enum: UseGQFnSchema<Endpoint>['$enum'],
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
