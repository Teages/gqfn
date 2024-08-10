import SchemaBuilder from '@pothos/core'

export const schema = createSchema()

function createSchema() {
  const builder = new SchemaBuilder({})
  builder.queryType({
    fields: t => ({
      echo: t.string({
        args: {
          message: t.arg.string({ required: true }),
        },
        resolve: (_p, { message }) => message,
      }),
    }),
  })

  builder.subscriptionType({
    fields: t => ({
      countdown: t.int({
        args: {
          from: t.arg.int({ required: true }),
        },
        async *subscribe(_p, { from }) {
          for (let i = from; i >= 0; i--) {
            yield i
            if (i !== 0) {
              await new Promise(resolve => setTimeout(resolve, 1000))
            }
          }
        },
        resolve: p => p,
      }),
    }),
  })

  return builder.toSchema()
}
