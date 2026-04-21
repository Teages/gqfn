/* eslint-ignore */
import type { ScalarType, InputObjectType, Input, Field, ObjectType, DefineSchema } from '@gqfn/core/schema'

type Scalar_Int = ScalarType<'Int', number, number>
type Scalar_Float = ScalarType<'Float', number, number>
type Scalar_String = ScalarType<'String', string, string>
type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
type Scalar_ID = ScalarType<'ID', string | number, string>

type Input_ContinentFilterInput = InputObjectType<'ContinentFilterInput', {
  code: Input<Input_StringQueryOperatorInput | null>
}>

type Input_CountryFilterInput = InputObjectType<'CountryFilterInput', {
  code: Input<Input_StringQueryOperatorInput | null>
  continent: Input<Input_StringQueryOperatorInput | null>
  currency: Input<Input_StringQueryOperatorInput | null>
  name: Input<Input_StringQueryOperatorInput | null>
}>

type Input_LanguageFilterInput = InputObjectType<'LanguageFilterInput', {
  code: Input<Input_StringQueryOperatorInput | null>
}>

type Input_StringQueryOperatorInput = InputObjectType<'StringQueryOperatorInput', {
  eq: Input<Scalar_String | null>
  in: Input<[Scalar_String] | null>
  ne: Input<Scalar_String | null>
  nin: Input<[Scalar_String] | null>
  regex: Input<Scalar_String | null>
}>

type Type_Continent = ObjectType<'Continent', {
  code: Field<Scalar_ID>
  countries: Field<[Type_Country]>
  name: Field<Scalar_String>
}>

type Type_Country = ObjectType<'Country', {
  awsRegion: Field<Scalar_String>
  capital: Field<Scalar_String | null>
  code: Field<Scalar_ID>
  continent: Field<Type_Continent>
  currencies: Field<[Scalar_String]>
  currency: Field<Scalar_String | null>
  emoji: Field<Scalar_String>
  emojiU: Field<Scalar_String>
  languages: Field<[Type_Language]>
  name: Field<Scalar_String, {
    lang: Input<Scalar_String | null>
  }>
  native: Field<Scalar_String>
  phone: Field<Scalar_String>
  phones: Field<[Scalar_String]>
  states: Field<[Type_State]>
  subdivisions: Field<[Type_Subdivision]>
}>

type Type_Language = ObjectType<'Language', {
  code: Field<Scalar_ID>
  name: Field<Scalar_String>
  native: Field<Scalar_String>
  rtl: Field<Scalar_Boolean>
}>

type Type_Query = ObjectType<'Query', {
  continent: Field<Type_Continent | null, {
    code: Input<Scalar_ID>
  }>
  continents: Field<[Type_Continent], {
    filter: Input<Input_ContinentFilterInput | null>
  }>
  countries: Field<[Type_Country], {
    filter: Input<Input_CountryFilterInput | null>
  }>
  country: Field<Type_Country | null, {
    code: Input<Scalar_ID>
  }>
  language: Field<Type_Language | null, {
    code: Input<Scalar_ID>
  }>
  languages: Field<[Type_Language], {
    filter: Input<Input_LanguageFilterInput | null>
  }>
}>

type Type_State = ObjectType<'State', {
  code: Field<Scalar_String | null>
  country: Field<Type_Country>
  name: Field<Scalar_String>
}>

type Type_Subdivision = ObjectType<'Subdivision', {
  code: Field<Scalar_ID>
  emoji: Field<Scalar_String | null>
  name: Field<Scalar_String>
}>

export type Schema = DefineSchema<{
  Int: Scalar_Int
  Float: Scalar_Float
  String: Scalar_String
  Boolean: Scalar_Boolean
  ID: Scalar_ID
  ContinentFilterInput: Input_ContinentFilterInput
  CountryFilterInput: Input_CountryFilterInput
  LanguageFilterInput: Input_LanguageFilterInput
  StringQueryOperatorInput: Input_StringQueryOperatorInput
  Continent: Type_Continent
  Country: Type_Country
  Language: Type_Language
  Query: Type_Query
  State: Type_State
  Subdivision: Type_Subdivision
}>

declare module '@gqfn/core/schema' {
  interface Schemas {
    'https://countries.trevorblades.com': Schema
  }
}
