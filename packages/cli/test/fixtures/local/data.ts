export interface User {
  id: number
  name: string
  email: string
}

export interface Saying {
  id: number
  category: 'funny' | 'serious' | 'jokes'
  content: string

  createdAt: Date
  updatedAt: Date

  ownerId: number
}

export interface Friendship {
  id: number
  usersId: [number, number]
}

export const users: User[] = [
  { id: 0, name: 'Teages', email: 'Teages@teages.xyz' },
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
]

export const sayings: Saying[] = [
  {
    id: 0,
    category: 'funny',
    content: 'I love my cat!',
    ownerId: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 1,
    category: 'funny',
    content: 'I hate my job!',
    ownerId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    category: 'funny',
    content: 'I like my car!',
    ownerId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    category: 'funny',
    content: 'I am a good person!',
    ownerId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: 4,
    category: 'serious',
    content: 'I am a bad person!',
    ownerId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    category: 'serious',
    content: 'I am a terrible person!',
    ownerId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    category: 'serious',
    content: 'I am a nice person!',
    ownerId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: 7,
    category: 'jokes',
    content: 'I am a good programmer!',
    ownerId: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 8,
    category: 'jokes',
    content: 'I am a bad programmer!',
    ownerId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 9,
    category: 'jokes',
    content: 'I am a terrible programmer!',
    ownerId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 10,
    category: 'jokes',
    content: 'I am a nice programmer!',
    ownerId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export const friendships: Friendship[] = [
  { id: 0, usersId: [0, 1] },
  { id: 2, usersId: [0, 3] },
  { id: 4, usersId: [1, 3] },
  { id: 6, usersId: [2, 3] },
]
