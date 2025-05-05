import SchemaBuilder from '@pothos/core'
import { createYoga } from 'graphql-yoga'

interface User {
  id: string
  name: string
  role: 'admin' | 'user'
  email?: string
  createdAt: Date
  lastSeenAt: Date
}

interface Post {
  id: string
  title: string
  content: string
  tags: string[]
  authorId: string
  createdAt: Date
  updatedAt: Date
}

interface Comment {
  id: string
  content: string
  authorId: string
  postId: string
  createdAt: Date
  updatedAt: Date
}

interface Like {
  id: string
  userId: string
  postId: string
  createdAt: Date
}

const builder = new SchemaBuilder({})

const UserEntity = builder.objectRef<User>('User')
const PostEntity = builder.objectRef<Post>('Post')
const CommentEntity = builder.objectRef<Comment>('Comment')
const LikeEntity = builder.objectRef<Like>('Like')

builder.queryType({
  fields: t => ({
    hello: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (_p, { name }) => `hello, ${name || 'World'}`,
    }),
  }),
})

const schema = builder.toSchema()

const yoga = createYoga({ schema })

export async function graphQLServer(request: GraphQLRequest): Promise<GraphQLResponse> {
  const res = await yoga.fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })
  return res.json()
}

export interface GraphQLRequest {
  query: string
  variables?: Record<string, any>
}

export interface GraphQLResponse {
  data: Record<string, any>
  errors?: {
    message: string
    locations: {
      line: number
      column: number
    }[]
  }[]
}
