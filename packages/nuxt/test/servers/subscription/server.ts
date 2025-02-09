import type { Socket } from 'node:net'
import { createServer } from 'node:http'
import { checkPort, waitForPort } from 'get-port-please'
import { useServer } from 'graphql-ws/use/ws'
import { createYoga } from 'graphql-yoga'
import { WebSocketServer } from 'ws'
import { schema } from './schema'

const port = 64961

function buildApp() {
  const yoga = createYoga({
    graphiql: {
      subscriptionsProtocol: 'WS',
    },
    schema,
  })

  const server = createServer(yoga)
  const wsServer = new WebSocketServer({
    server,
    path: yoga.graphqlEndpoint,
  })

  useServer({
    execute: (args: any) => args.rootValue.execute(args),
    subscribe: (args: any) => args.rootValue.subscribe(args),
    onSubscribe: async (ctx, _id, payload) => {
      const { schema, execute, subscribe, contextFactory, parse, validate }
          = yoga.getEnveloped({
            ...ctx,
            req: ctx.extra.request,
            socket: ctx.extra.socket,
            params: payload,
          })

      const args = {
        schema,
        operationName: payload.operationName,
        document: parse(payload.query),
        variableValues: payload.variables,
        contextValue: await contextFactory(),
        rootValue: {
          execute,
          subscribe,
        },
      }

      const errors = validate(args.schema, args.document)
      if (errors.length) {
        return errors
      }
      return args
    },
  }, wsServer)

  // for termination
  const sockets = new Set<Socket>()
  server.on('connection', (socket) => {
    sockets.add(socket)
    server.once('close', () => sockets.delete(socket))
  })

  return {
    start: () =>
      new Promise<void>((resolve, reject) => {
        server.on('error', err => reject(err))
        server.on('listening', () => resolve())
        server.listen(port)
      }),
    stop: () =>
      new Promise<void>((resolve) => {
        for (const socket of sockets) {
          socket.destroy()
          sockets.delete(socket)
        }
        server.close(() => resolve())
      }),
  }
}

export async function startServer() {
  if (!await checkPort(port)) {
    await waitForPort(port)
  }

  const app = buildApp()
  await app.start()

  return {
    port,
    [Symbol.asyncDispose]: async () => {
      await app.stop()
    },
  }
}
