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

export type Split<T extends string, S extends string = DefaultSpaces> =
  T extends `${infer L}${S}${infer R}`
    ? [...Split<L, S>, ...Split<R, S>]
    : [T]

export type SplitOne<T extends string, S extends string = DefaultSpaces> =
  T extends `${infer L}${S}${infer R}`
    ? [L, R]
    : [T, undefined]
