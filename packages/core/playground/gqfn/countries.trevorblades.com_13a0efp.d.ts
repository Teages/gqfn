/* eslint-ignore */
import type { ScalarType, InputObjectType, Input, Field, ObjectType, DefineSchema } from '@gqfn/core/schema'

type Scalar_Int = ScalarType<'Int', number, number>
type Scalar_Float = ScalarType<'Float', number, number>
type Scalar_String = ScalarType<'String', string, string>
type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
type Scalar_ID = ScalarType<'ID', string | number, string>

type Input_ContinentFilterInput = InputObjectType<'ContinentFilterInput', {
  code: Input<'StringQueryOperatorInput', Input_StringQueryOperatorInput>
}>

type Input_CountryFilterInput = InputObjectType<'CountryFilterInput', {
  code: Input<'StringQueryOperatorInput', Input_StringQueryOperatorInput>
  continent: Input<'StringQueryOperatorInput', Input_StringQueryOperatorInput>
  currency: Input<'StringQueryOperatorInput', Input_StringQueryOperatorInput>
  name: Input<'StringQueryOperatorInput', Input_StringQueryOperatorInput>
}>

type Input_LanguageFilterInput = InputObjectType<'LanguageFilterInput', {
  code: Input<'StringQueryOperatorInput', Input_StringQueryOperatorInput>
}>

type Input_StringQueryOperatorInput = InputObjectType<'StringQueryOperatorInput', {
  eq: Input<'String', Scalar_String>
  in: Input<'[String!]', Scalar_String>
  ne: Input<'String', Scalar_String>
  nin: Input<'[String!]', Scalar_String>
  regex: Input<'String', Scalar_String>
}>

type Type_Continent = ObjectType<'Continent', {
  code: Field<'ID!', Scalar_ID>
  countries: Field<'[Country!]!', Type_Country>
  name: Field<'String!', Scalar_String>
}>

type Type_Country = ObjectType<'Country', {
  awsRegion: Field<'String!', Scalar_String>
  capital: Field<'String', Scalar_String>
  code: Field<'ID!', Scalar_ID>
  continent: Field<'Continent!', Type_Continent>
  currencies: Field<'[String!]!', Scalar_String>
  currency: Field<'String', Scalar_String>
  emoji: Field<'String!', Scalar_String>
  emojiU: Field<'String!', Scalar_String>
  languages: Field<'[Language!]!', Type_Language>
  name: Field<'String!', Scalar_String, {
    lang: Input<'String', Scalar_String>
  }>
  native: Field<'String!', Scalar_String>
  phone: Field<'String!', Scalar_String>
  phones: Field<'[String!]!', Scalar_String>
  states: Field<'[State!]!', Type_State>
  subdivisions: Field<'[Subdivision!]!', Type_Subdivision>
}>

type Type_Language = ObjectType<'Language', {
  code: Field<'ID!', Scalar_ID>
  name: Field<'String!', Scalar_String>
  native: Field<'String!', Scalar_String>
  rtl: Field<'Boolean!', Scalar_Boolean>
}>

type Type_Query = ObjectType<'Query', {
  continent: Field<'Continent', Type_Continent, {
    code: Input<'ID!', Scalar_ID>
  }>
  continents: Field<'[Continent!]!', Type_Continent, {
    filter: Input<'ContinentFilterInput', Input_ContinentFilterInput>
  }>
  countries: Field<'[Country!]!', Type_Country, {
    filter: Input<'CountryFilterInput', Input_CountryFilterInput>
  }>
  country: Field<'Country', Type_Country, {
    code: Input<'ID!', Scalar_ID>
  }>
  language: Field<'Language', Type_Language, {
    code: Input<'ID!', Scalar_ID>
  }>
  languages: Field<'[Language!]!', Type_Language, {
    filter: Input<'LanguageFilterInput', Input_LanguageFilterInput>
  }>
}>

type Type_State = ObjectType<'State', {
  code: Field<'String', Scalar_String>
  country: Field<'Country!', Type_Country>
  name: Field<'String!', Scalar_String>
}>

type Type_Subdivision = ObjectType<'Subdivision', {
  code: Field<'ID!', Scalar_ID>
  emoji: Field<'String', Scalar_String>
  name: Field<'String!', Scalar_String>
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
