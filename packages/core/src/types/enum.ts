export interface EnumPackage<T extends string> { (): T }

export type PackedEnum<T extends string> =
  T extends any ? EnumPackage<T> : never

export interface EnumFunction {
  <T extends string>(content: T): EnumPackage<T>
}
