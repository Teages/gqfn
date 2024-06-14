/* eslint-ignore */
import type { ArgOf, DefineSchema, EnumType, Field, InputObject, InterfaceObject, ResOf, ScalarType, TypeObject, Union} from '@teages/gqf/schema'

type ContinentFilterInput = InputObject<'ContinentFilterInput', {
  code: Arg<'StringQueryOperatorInput'>
}>

type CountryFilterInput = InputObject<'CountryFilterInput', {
  code: Arg<'StringQueryOperatorInput'>
  continent: Arg<'StringQueryOperatorInput'>
  currency: Arg<'StringQueryOperatorInput'>
  name: Arg<'StringQueryOperatorInput'>
}>

type LanguageFilterInput = InputObject<'LanguageFilterInput', {
  code: Arg<'StringQueryOperatorInput'>
}>

type StringQueryOperatorInput = InputObject<'StringQueryOperatorInput', {
  eq: Arg<'String'>
  in: Arg<'[String!]'>
  ne: Arg<'String'>
  nin: Arg<'[String!]'>
  regex: Arg<'String'>
}>

type Continent = TypeObject<'Continent', {
  code: Field<'code', Res<'ID!'>>
  countries: Field<'countries', Res<'[Country!]!'>>
  name: Field<'name', Res<'String!'>>
}>

type Country = TypeObject<'Country', {
  awsRegion: Field<'awsRegion', Res<'String!'>>
  capital: Field<'capital', Res<'String'>>
  code: Field<'code', Res<'ID!'>>
  continent: Field<'continent', Res<'Continent!'>>
  currencies: Field<'currencies', Res<'[String!]!'>>
  currency: Field<'currency', Res<'String'>>
  emoji: Field<'emoji', Res<'String!'>>
  emojiU: Field<'emojiU', Res<'String!'>>
  languages: Field<'languages', Res<'[Language!]!'>>
  name: Field<'name', Res<'String!'>, {
    lang: Arg<'String'>
  }>
  native: Field<'native', Res<'String!'>>
  phone: Field<'phone', Res<'String!'>>
  phones: Field<'phones', Res<'[String!]!'>>
  states: Field<'states', Res<'[State!]!'>>
  subdivisions: Field<'subdivisions', Res<'[Subdivision!]!'>>
}>

type Language = TypeObject<'Language', {
  code: Field<'code', Res<'ID!'>>
  name: Field<'name', Res<'String!'>>
  native: Field<'native', Res<'String!'>>
  rtl: Field<'rtl', Res<'Boolean!'>>
}>

type Query = TypeObject<'Query', {
  continent: Field<'continent', Res<'Continent'>, {
    code: Arg<'ID!'>
  }>
  continents: Field<'continents', Res<'[Continent!]!'>, {
    filter: Arg<'ContinentFilterInput'>
  }>
  countries: Field<'countries', Res<'[Country!]!'>, {
    filter: Arg<'CountryFilterInput'>
  }>
  country: Field<'country', Res<'Country'>, {
    code: Arg<'ID!'>
  }>
  language: Field<'language', Res<'Language'>, {
    code: Arg<'ID!'>
  }>
  languages: Field<'languages', Res<'[Language!]!'>, {
    filter: Arg<'LanguageFilterInput'>
  }>
}>

type State = TypeObject<'State', {
  code: Field<'code', Res<'String'>>
  country: Field<'country', Res<'Country!'>>
  name: Field<'name', Res<'String!'>>
}>

type Subdivision = TypeObject<'Subdivision', {
  code: Field<'code', Res<'ID!'>>
  emoji: Field<'emoji', Res<'String'>>
  name: Field<'name', Res<'String!'>>
}>

export type Schema = DefineSchema<{
  Inputs: {
    ContinentFilterInput: ContinentFilterInput
    CountryFilterInput: CountryFilterInput
    LanguageFilterInput: LanguageFilterInput
    StringQueryOperatorInput: StringQueryOperatorInput
  }
  Objects: {
    Continent: Continent
    Country: Country
    Language: Language
    Query: Query
    State: State
    Subdivision: Subdivision
  }
}>

type Arg<T extends string> = ArgOf<Schema, T>
type Res<T extends string> = ResOf<Schema, T>

declare module '@teages/gqf/schema' {
  interface Schemas {
    'https://countries.trevorblades.com': Schema
  }
}
