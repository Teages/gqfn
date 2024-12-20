export interface EnumPackage<T extends string> { (): T }

export interface EnumFunction {
  <T extends string>(content: T): EnumPackage<T>
}
