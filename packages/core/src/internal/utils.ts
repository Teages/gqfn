/**
 * Make type nullable.
 * @example
 * type A = string
 * type B = Nullable<A> // string | null | undefined
 */
export type Nullable<T> = T | null | undefined

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
 * Get the values of a record.
 * @example
 * type A = { a: number, b: string }
 * type B = Values<A> // number | string
 */
export type Values<T> = T[keyof T]

/**
 * Make all properties in argument exact.
 * @see https://github.com/microsoft/TypeScript/issues/12936#issuecomment-2088768988
 */
export type Exact<Shape, T extends Shape> =
  Shape extends (...args: any) => any
    ? ExactFunction<Shape, T>
    : Shape extends [...infer ItemShapes extends Array<string>, infer FollowShape extends Record<string, any>]
      ? T extends Array<string>
        ? T
        : T extends [...infer Items extends ItemShapes, infer Follow extends FollowShape]
          ? [...Items, ExactRecord<FollowShape, Follow>]
          : never
      : Shape extends Record<string, any>
        ? ExactRecord<Shape, T>
        : T
type ExactFunction<Shape extends (...args: any) => any, T extends Shape> =
  Shape extends (...args: any) => infer ReturnShape
    ? T extends (...args: infer Args) => (infer Return extends ReturnShape)
      ? (...args: Args) => Exact<ReturnShape, Return>
      : never
    : never
type ExactRecord<Shape extends Record<string, any>, T extends Shape> = {
  [Key in keyof T]: Key extends keyof Shape
    ? Exact<Shape[Key], T[Key]>
    : never
}

export type UnionToIntersection<U extends Record<string, any>> =
  (U extends any ? (x: U) => void : never) extends ((x: infer I) => void) ? I : never

export type DefaultSpaces = ' ' | '\t' | '\n' | '\r'

/**
 * Trim the spaces before the last character of a string.
 */
export type TrimBefore<T, S extends string = DefaultSpaces> =
  T extends `${S}${infer Rest}`
    ? TrimBefore<Rest>
    : T

/**
 * Trim the spaces before the first character of a string.
 */
export type TrimAfter<T, S extends string = DefaultSpaces> =
  T extends `${infer Rest}${S}`
    ? TrimAfter<Rest>
    : T

/**
 * Trim both sides of a string.
 */
export type Trim<T, S extends string = DefaultSpaces> =
  TrimBefore<TrimAfter<T, S>, S>
