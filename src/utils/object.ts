/**
 * A EmptyRecord, a alias for `Record<string, never>`
 */
export type EmptyRecord = Record<string, never>

/**
 * A EmptyRecord, a alias for `Record<never, never>`
 */
export type Empty = Record<never, never>

/**
 * Get the keys of a record. Excludes keys with `never` type.
 */
export type RecordKeys<T extends Record<string, unknown>> = keyof {
  [K in keyof T as T[K] extends never ? never : K]: unknown
}

/**
 * Make type nullable.
 * @example
 * type A = string
 * type B = Nullable<A> // string | null | undefined
 */
export type Nullable<T> = T extends never ? never : T | null | undefined

/**
 * Flatten record type.
 * @example
 * type A = { a: number } & { b: string } & { c: { d: boolean } }
 * type B = FlatRecord<A> // { a: number, b: string, c: { d: boolean } }
 */
export type FlatRecord<T> = T extends { [key: string]: unknown } ? { [K in keyof T]: FlatRecord<T[K]> } : T

/**
 * Make all undefined properties optional in record.
 * @example
 * type A = { a: number, b: string | undefined };
 * type B = RelaxedOptional<A> // { a: number, b?: string | undefined }
 */
export type RelaxedOptional<T> = FlatRecord<{
  [K in keyof T as undefined extends T[K] ? never : K]: T[K]
} & {
  [K in keyof T as undefined extends T[K] ? K : never]?: T[K]
}>

/**
 * Define a array that may follow an item.
 * @example
 * type A = string
 * type B = number
 * type C = ArrayMayFollowItem<A, B> // [...string, number] | string[]
 * const good: C = ['a', 'b', 47]
 * const bad: C = ['a', 47, 'b']
 */
export type ArrayMayFollowItem<T, U> = [...Array<T>, U] | Array<T>

/**
 * Define a type that may be an array.
 * @example
 * type A = string
 * type B = MayArray<A> // string | string[]
 */
export type MaybeArray<T> = T | T[]

/**
 * Get the values of a record.
 * @example
 * type A = { a: number, b: string }
 * type B = Values<A> // number | string
 */
export type Values<T> = T[keyof T]
