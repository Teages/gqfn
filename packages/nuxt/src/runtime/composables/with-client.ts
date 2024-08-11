import type { ResultOf, VariablesOf } from '@gqfn/core/typed'
import { hash } from 'ohash'
import { type DocumentNode, Kind } from 'graphql'
import type { ComputedRef } from 'vue'
import type { Endpoints } from '../internal/utils/schema'
import { type HandlerOptions, type SSEOptions, type WSOptions, createHandler, createSubscriptionHandler } from '../internal/utils/client'
import type { UseGQFnSchema } from '../internal/types/composables/schema'
import type { WithGQFnClient, WithGQFnClientOptions } from '../internal/types/composables/with-client'
import { useAsyncData } from '#app/composables/asyncData'
import { useState } from '#app'
import { type MaybeRefOrGetter, readonly, toValue, watch } from '#imports'

type DefaultSubscriptionHandlerOptions = WSOptions & SSEOptions
type DefaultHandlerOptions = Omit<HandlerOptions, ''>

export function withGQFnClient<
  Context = DefaultHandlerOptions,
  SubscriptionContext = DefaultSubscriptionHandlerOptions,
  Endpoint extends Endpoints = string,
>(
  schema: UseGQFnSchema<Endpoint>,
  options?: WithGQFnClientOptions<Context, SubscriptionContext>,
): WithGQFnClient<Context, Endpoint> {
  const url = schema.endpoint

  if (!url) {
    throw new Error('Endpoint is not defined')
  }

  const handler = typeof options?.handler === 'function'
    ? options.handler
    : createHandler(options?.handler)

  const subscriptionHandler = typeof options?.subscription?.handler === 'function'
    ? options.subscription.handler
    : createSubscriptionHandler(options?.subscription ?? {})

  return {
    defineOperation: (def, context) => {
      const document = typeof def === 'function' ? def(schema.gqfn, schema.$enum) : def
      const type = getDocumentType(document)
      if (type === 'subscription') {
        throw new Error('Subscriptions are not supported')
      }

      return (variables?: any, contextRewrite?: any) => handler(
        { document, variables, url, type },
        {
          ...context,
          ...contextRewrite,
        },
      )
    },
    defineAsyncQuery: (def, context) => {
      const document = typeof def === 'function' ? def(schema.gqfn, schema.$enum) : def
      const type = getDocumentType(document)
      if (type !== 'query') {
        throw new Error('Operation is not a query.')
      }

      return (
        variables?: MaybeRefOrGetter<VariablesOf<typeof document>>,
        options?: any,
      ) => {
        const key = hash({ document, variables })

        return useAsyncData(
          key,
          () => handler(
            {
              document,
              variables: toValue(variables) ?? {} as VariablesOf<typeof document>,
              url,
              type,
            },
            {
              ...context,
              ...options?.context,
            },
          ),
          options,
        )
      }
    },
    defineLazyAsyncQuery: (def, context) => {
      const document = typeof def === 'function' ? def(schema.gqfn, schema.$enum) : def
      const type = getDocumentType(document)
      if (type !== 'query') {
        throw new Error('Operation is not a query.')
      }

      return (
        variables?: MaybeRefOrGetter<VariablesOf<typeof document>>,
        options?: any,
      ) => {
        const key = hash({ document, variables })

        return useAsyncData(
          key,
          () => handler(
            {
              document,
              variables: toValue(variables) ?? {} as VariablesOf<typeof document>,
              url,
              type,
            },
            {
              ...context,
              ...options?.context,
            },
          ),
          {
            lazy: true,
            ...options,
          },
        )
      }
    },
    defineSubscription: (def, context) => {
      const document = typeof def === 'function' ? def(schema.gqfn, schema.$enum) : def
      const type = getDocumentType(document)
      if (type !== 'subscription') {
        throw new Error('Operation is not a subscription')
      }

      return async (variables?: any, contextRewrite?: any) => {
        const key = import.meta.client
          ? crypto.randomUUID()
          // the function should not call in SSR,
          // but it's better to have a unique key as fallback
          : hash({ document, variables })
        const cache = useState<ResultOf<typeof document> | undefined>(key, () => undefined)
        const error = useState<Error | null>(`${key}-error`, () => null)
        const state = useState<'pending' | 'connected' | 'closed'>(`${key}-state`, () => 'pending')

        const hooks = {
          onUnsubscribe: [] as Array<() => void>,
        }

        const close = (e?: any) => {
          state.value = 'closed'
          try {
            hooks.onUnsubscribe.forEach(fn => fn())
          }
          catch (error) { console.error(error) }
          if (e) {
            console.error(e)
          }
        }

        const update = (
          data: ResultOf<typeof document>,
          isFinal: boolean = false,
        ) => {
          if (state.value === 'closed') {
            if (import.meta.dev) {
              console.warn('Subscription is already closed')
            }
            return
          }
          if (state.value === 'pending') {
            state.value = 'connected'
          }

          cache.value = data
          if (isFinal) {
            close()
          }
        }

        const onUnsubscribe = (fn: () => void) => {
          hooks.onUnsubscribe.push(fn)
        }

        const unsubscribe = () => {
          close()
        }

        const restart = () => new Promise<void>((resolve, reject) => {
          // disconnect previous subscription
          if (state.value === 'connected') {
            unsubscribe()
          }

          // if already closed, reset hooks and state
          if (state.value === 'closed') {
            hooks.onUnsubscribe = []
            state.value = 'pending'
          }

          // subscription should only be used in the browser
          // to avoid duplicated requests
          if (!import.meta.client) {
            if (import.meta.dev) {
              console.warn('Subscription is not supported during SSR')
            }
            return resolve()
          }

          // watch the state, resolve the promise when got the first data
          watch(state, (val) => {
            if (val === 'connected') {
              resolve()
            }
          }, { once: true })

          // start the subscription
          error.value = null
          try {
            subscriptionHandler(
              { update, onUnsubscribe, close },
              { document, variables, url, type },
              {
                ...context,
                ...contextRewrite,
              },
            )
          }
          catch (error) {
            reject(error)
          }
        })

        const refresh = () => new Promise<void>((resolve, reject) => {
          if (state.value === 'pending') {
            if (import.meta.dev) {
              console.warn('Subscription is not started yet')
            }
            return resolve()
          }
          if (state.value === 'closed') {
            restart()
              .then(() => resolve())
              .catch(reject)
          }

          // dry close
          const oldUnsubscribe = [...hooks.onUnsubscribe]
          state.value = 'closed'

          restart()
            .then(() => {
              resolve()
              // close previous subscription
              try {
                oldUnsubscribe.forEach(fn => fn())
              }
              catch (error) { console.error(error) }
            })
            .catch(reject)
        })

        await restart()

        return {
          state: readonly(state) as ComputedRef<'pending' | 'connected' | 'closed'>,
          data: readonly(cache) as ComputedRef<ResultOf<typeof document> | undefined>,
          error: readonly(error) as ComputedRef<Error | null>,
          unsubscribe,
          refresh,
          restart,
        }
      }
    },
  }
}

function getDocumentType(doc: DocumentNode) {
  let type: 'query' | 'mutation' | 'subscription' | undefined

  doc.definitions.forEach((def) => {
    if (def.kind === Kind.OPERATION_DEFINITION) {
      if (type !== undefined) {
        throw new Error('Multiple operation definitions in document')
      }
      type = def.operation
    }
  })

  if (!type) {
    throw new Error('Unrecognizable document type')
  }

  return type
}
