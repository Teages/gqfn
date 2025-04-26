/* eslint-ignore */
import type { ScalarType, EnumType, InputObjectType, Input, Field, ObjectType, DefineSchema } from '@gqfn/core/schema'

type Scalar_FileSize = ScalarType<'FileSize', unknown, unknown>
type Scalar_Date = ScalarType<'Date', unknown, unknown>
type Scalar_Long = ScalarType<'Long', unknown, unknown>
type Scalar_Object = ScalarType<'Object', unknown, unknown>
type Scalar_Int = ScalarType<'Int', number, number>
type Scalar_Float = ScalarType<'Float', number, number>
type Scalar_String = ScalarType<'String', string, string>
type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
type Scalar_ID = ScalarType<'ID', string | number, string>

export type ResourceState =
  | 'PRIVATE'
  | 'PUBLIC'
  | 'UNLISTED'
type Enum_ResourceState = EnumType<'ResourceState', ResourceState>

export type QueryOrder =
  | 'ASC'
  | 'DESC'
type Enum_QueryOrder = EnumType<'QueryOrder', QueryOrder>

export type LevelQuerySort =
  | 'CREATION_DATE'
  | 'MODIFICATION_DATE'
  | 'DURATION'
  | 'DOWNLOADS'
  | 'PLAYS'
  | 'RATING'
  | 'DIFFICULTY'
type Enum_LevelQuerySort = EnumType<'LevelQuerySort', LevelQuerySort>

export type PostType =
  | 'POST'
  | 'PAGE'
  | 'EVENT'
type Enum_PostType = EnumType<'PostType', PostType>

export type GameplayMods =
  | 'FC'
  | 'AP'
  | 'FlipX'
  | 'FlipY'
  | 'FlipAll'
  | 'Fast'
  | 'Slow'
  | 'Hard'
  | 'ExHard'
  | 'HideScanline'
  | 'HideNotes'
type Enum_GameplayMods = EnumType<'GameplayMods', GameplayMods>

export type RecordQuerySort =
  | 'Score'
  | 'Accuracy'
  | 'Date'
  | 'Rating'
  | 'RecentRating'
type Enum_RecordQuerySort = EnumType<'RecordQuerySort', RecordQuerySort>

export type SearchLevelSortingStrategy =
  | 'CREATION_DATE'
  | 'MODIFICATION_DATE'
  | 'DURATION'
  | 'DOWNLOADS'
  | 'PLAYS'
  | 'RATING'
  | 'DIFFICULTY'
type Enum_SearchLevelSortingStrategy = EnumType<'SearchLevelSortingStrategy', SearchLevelSortingStrategy>

export type SearchLevelOrder =
  | 'ASC'
  | 'DESC'
type Enum_SearchLevelOrder = EnumType<'SearchLevelOrder', SearchLevelOrder>

export type Role =
  | 'MODERATOR'
  | 'ADMIN'
  | 'USER'
type Enum_Role = EnumType<'Role', Role>

type Input_ResourceMetaInput = InputObjectType<'ResourceMetaInput', {
  name: Input<'String', Scalar_String>
  localized_name: Input<'String', Scalar_String>
  url: Input<'String', Scalar_String>
}>

type Input_CollectionMetaInput = InputObjectType<'CollectionMetaInput', {
  cover: Input<'ResourceMetaInput', Input_ResourceMetaInput>
}>

type Input_CollectionInput = InputObjectType<'CollectionInput', {
  uid: Input<'String', Scalar_String>
  coverPath: Input<'String', Scalar_String>
  title: Input<'String', Scalar_String>
  slogan: Input<'String', Scalar_String>
  description: Input<'String', Scalar_String>
  levelIds: Input<'[Int!]', Scalar_Int>
  tags: Input<'[String!]', Scalar_String>
  state: Input<'ResourceState', Enum_ResourceState>
  metadata: Input<'CollectionMetaInput', Input_CollectionMetaInput>
}>

type Input_UpdateLevelInput = InputObjectType<'UpdateLevelInput', {
  state: Input<'ResourceState', Enum_ResourceState>
  tags: Input<'[String!]', Scalar_String>
  description: Input<'String', Scalar_String>
  censored: Input<'String', Scalar_String>
  category: Input<'[String!]', Scalar_String>
}>

type Input_PartialChartMetadata = InputObjectType<'PartialChartMetadata', {
  type: Input<'String!', Scalar_String>
  name: Input<'String', Scalar_String>
  difficulty: Input<'Int', Scalar_Int>
}>

type Input_PartialMetadata = InputObjectType<'PartialMetadata', {
  title: Input<'String', Scalar_String>
  title_localized: Input<'String', Scalar_String>
  artist: Input<'String', Scalar_String>
  artist_localized: Input<'String', Scalar_String>
  artist_source: Input<'String', Scalar_String>
  illustrator: Input<'String', Scalar_String>
  illustrator_source: Input<'String', Scalar_String>
  charter: Input<'String', Scalar_String>
  storyboarder: Input<'String', Scalar_String>
  charts: Input<'[PartialChartMetadata!]', Input_PartialChartMetadata>
}>

type Input_PostMetaInput = InputObjectType<'PostMetaInput', {
  cover: Input<'ResourceMetaInput', Input_ResourceMetaInput>
}>

type Input_PostInput = InputObjectType<'PostInput', {
  type: Input<'PostType', Enum_PostType>
  uid: Input<'String', Scalar_String>
  title: Input<'String', Scalar_String>
  slogan: Input<'String', Scalar_String>
  content: Input<'String', Scalar_String>
  state: Input<'ResourceState', Enum_ResourceState>
  coverPath: Input<'String', Scalar_String>
  logoPath: Input<'String', Scalar_String>
  metadata: Input<'PostMetaInput', Input_PostMetaInput>
  startDate: Input<'Date', Scalar_Date>
  endDate: Input<'Date', Scalar_Date>
  locked: Input<'Boolean', Scalar_Boolean>
  levelId: Input<'Int', Scalar_Int>
  collectionId: Input<'ID', Scalar_ID>
}>

type Input_RecordQueryInput = InputObjectType<'RecordQueryInput', {
  chartId: Input<'Int', Scalar_Int>
  ownerId: Input<'ID', Scalar_ID>
  ownerUid: Input<'String', Scalar_String>
  startDate: Input<'Date', Scalar_Date>
  endDate: Input<'Date', Scalar_Date>
  best: Input<'Boolean', Scalar_Boolean>
  ranked: Input<'Boolean', Scalar_Boolean>
}>

type Input_ProfileInput = InputObjectType<'ProfileInput', {
  birthday: Input<'Date', Scalar_Date>
  bio: Input<'String', Scalar_String>
}>

type Type_Query = ObjectType<'Query', {
  discordOnlineCount: Field<'Int', Scalar_Int>
  recentTweet: Field<'String', Scalar_String>
  collectionsCount: Field<'Int!', Scalar_Int>
  collection: Field<'Collection', Type_Collection, {
    id: Input<'ID', Scalar_ID>
    uid: Input<'String', Scalar_String>
  }>
  collections: Field<'[CollectionListing!]!', Type_CollectionListing, {
    limit: Input<'Int', Scalar_Int>
    cursor: Input<'ID', Scalar_ID>
    ownerId: Input<'String', Scalar_String>
    ownerUid: Input<'String', Scalar_String>
  }>
  recentComments: Field<'[Comment!]!', Type_Comment, {
    limit: Input<'Int', Scalar_Int>
  }>
  level: Field<'Level', Type_Level, {
    uid: Input<'String!', Scalar_String>
  }>
  levels: Field<'[Level!]!', Type_Level, {
    order: Input<'QueryOrder', Enum_QueryOrder>
    page: Input<'Int', Scalar_Int>
    limit: Input<'Int', Scalar_Int>
    sort: Input<'LevelQuerySort', Enum_LevelQuerySort>
    category: Input<'String', Scalar_String>
  }>
  levelsCount: Field<'Int!', Scalar_Int, {
    category: Input<'String', Scalar_String>
  }>
  chart: Field<'Chart', Type_Chart, {
    levelUid: Input<'String!', Scalar_String>
    chartType: Input<'String!', Scalar_String>
  }>
  getPosts: Field<'[Post!]!', Type_Post, {
    limit: Input<'Int!', Scalar_Int>
    all: Input<'Boolean', Scalar_Boolean>
    skip: Input<'Int', Scalar_Int>
  }>
  getActivePosts: Field<'[Post!]!', Type_Post, {
    limit: Input<'Int!', Scalar_Int>
    skip: Input<'Int', Scalar_Int>
  }>
  getPost: Field<'PostDetail', Type_PostDetail, {
    uid: Input<'String!', Scalar_String>
  }>
  recentRecords: Field<'[Record!]!', Type_Record, {
    limit: Input<'Int', Scalar_Int>
    ranked: Input<'Boolean', Scalar_Boolean>
  }>
  records: Field<'[Record!]!', Type_Record, {
    query: Input<'RecordQueryInput', Input_RecordQueryInput>
    page: Input<'Int', Scalar_Int>
    limit: Input<'Int', Scalar_Int>
    sort: Input<'RecordQuerySort', Enum_RecordQuerySort>
    order: Input<'QueryOrder', Enum_QueryOrder>
  }>
  recordsCount: Field<'Int!', Scalar_Int, {
    query: Input<'RecordQueryInput', Input_RecordQueryInput>
  }>
  record: Field<'Record', Type_Record, {
    id: Input<'Int!', Scalar_Int>
    chartId: Input<'Int!', Scalar_Int>
  }>
  searchLevels: Field<'[Level!]!', Type_Level, {
    search: Input<'String!', Scalar_String>
    start: Input<'Int', Scalar_Int>
    limit: Input<'Int', Scalar_Int>
    strategy: Input<'SearchLevelSortingStrategy', Enum_SearchLevelSortingStrategy>
    order: Input<'SearchLevelOrder', Enum_SearchLevelOrder>
  }>
  profile: Field<'Profile', Type_Profile, {
    id: Input<'ID', Scalar_ID>
    uid: Input<'String', Scalar_String>
  }>
  user: Field<'User', Type_User, {
    id: Input<'ID', Scalar_ID>
    uid: Input<'String', Scalar_String>
  }>
  my: Field<'My', Type_My>
}>

type Type_Mutation = ObjectType<'Mutation', {
  updateCollection: Field<'CollectionUserListing', Type_CollectionUserListing, {
    id: Input<'ID!', Scalar_ID>
    input: Input<'CollectionInput!', Input_CollectionInput>
  }>
  createCollection: Field<'CollectionUserListing', Type_CollectionUserListing, {
    input: Input<'CollectionInput!', Input_CollectionInput>
  }>
  deleteCollection: Field<'CollectionUserListing', Type_CollectionUserListing, {
    id: Input<'ID!', Scalar_ID>
  }>
  evaluateEpic: Field<'String', Scalar_String, {
    id: Input<'String', Scalar_String>
  }>
  rateLevel: Field<'Rating!', Type_Rating, {
    id: Input<'String!', Scalar_String>
    rating: Input<'Int', Scalar_Int>
  }>
  unpackLevelPackage: Field<'UserLevel', Type_UserLevel, {
    token: Input<'String!', Scalar_String>
    replace: Input<'String', Scalar_String>
  }>
  editLevelMetadata: Field<'UserLevel', Type_UserLevel, {
    id: Input<'String!', Scalar_String>
    metadata: Input<'PartialMetadata', Input_PartialMetadata>
  }>
  deleteLevel: Field<'Boolean', Scalar_Boolean, {
    id: Input<'ID!', Scalar_ID>
  }>
  updateLevel: Field<'Boolean', Scalar_Boolean, {
    id: Input<'ID!', Scalar_ID>
    input: Input<'UpdateLevelInput', Input_UpdateLevelInput>
  }>
  addToLibrary: Field<'Boolean', Scalar_Boolean, {
    levelId: Input<'Int!', Scalar_Int>
  }>
  removeFromLibrary: Field<'Boolean', Scalar_Boolean, {
    levelId: Input<'Int!', Scalar_Int>
  }>
  createPost: Field<'Post', Type_Post, {
    post: Input<'PostInput', Input_PostInput>
  }>
  updatePost: Field<'Post', Type_Post, {
    id: Input<'ID!', Scalar_ID>
    input: Input<'PostInput', Input_PostInput>
  }>
  deletePost: Field<'Post', Type_Post, {
    id: Input<'ID!', Scalar_ID>
  }>
  addEmail: Field<'Boolean', Scalar_Boolean, {
    email: Input<'String!', Scalar_String>
  }>
  sendVerificationEmail: Field<'Boolean', Scalar_Boolean, {
    email: Input<'String!', Scalar_String>
  }>
  makeEmailPrimary: Field<'Boolean', Scalar_Boolean, {
    email: Input<'String!', Scalar_String>
  }>
  deleteEmail: Field<'Boolean', Scalar_Boolean, {
    email: Input<'String!', Scalar_String>
  }>
  sendResetPasswordEmail: Field<'Boolean', Scalar_Boolean, {
    email: Input<'String!', Scalar_String>
  }>
  changePasswordWithToken: Field<'Boolean', Scalar_Boolean, {
    token: Input<'String!', Scalar_String>
    password: Input<'String!', Scalar_String>
  }>
  changePassword: Field<'Boolean', Scalar_Boolean, {
    oldPassword: Input<'String!', Scalar_String>
    newPassword: Input<'String!', Scalar_String>
  }>
  removeExternalAccount: Field<'Boolean', Scalar_Boolean, {
    provider: Input<'String!', Scalar_String>
  }>
  addExternalAccount: Field<'Boolean', Scalar_Boolean, {
    token: Input<'String!', Scalar_String>
  }>
  updateProfile: Field<'Boolean', Scalar_Boolean, {
    input: Input<'ProfileInput!', Input_ProfileInput>
  }>
  updateProfileHeader: Field<'Image', Type_Image, {
    path: Input<'String!', Scalar_String>
  }>
  setAvatar: Field<'Avatar', Type_Avatar, {
    path: Input<'String', Scalar_String>
  }>
  setUserActive: Field<'Boolean', Scalar_Boolean, {
    id: Input<'ID!', Scalar_ID>
    active: Input<'Boolean!', Scalar_Boolean>
  }>
  banUser: Field<'Boolean', Scalar_Boolean, {
    id: Input<'ID!', Scalar_ID>
    reason: Input<'String!', Scalar_String>
  }>
  grantUserBadge: Field<'Boolean', Scalar_Boolean, {
    id: Input<'ID!', Scalar_ID>
    badge: Input<'String!', Scalar_String>
  }>
}>

type Type_ResourceMetaProperty = ObjectType<'ResourceMetaProperty', {
  name: Field<'String', Scalar_String>
  localized_name: Field<'String', Scalar_String>
  url: Field<'String', Scalar_String>
}>

type Type_ResourceMeta = ObjectType<'ResourceMeta', {
  cover: Field<'ResourceMetaProperty', Type_ResourceMetaProperty>
}>

type Type_Badge = ObjectType<'Badge', {
  uid: Field<'String!', Scalar_String>
  title: Field<'String!', Scalar_String>
  description: Field<'String', Scalar_String>
  metadata: Field<'Object', Scalar_Object>
}>

type Type_Profile = ObjectType<'Profile', {
  badges: Field<'[Badge!]!', Type_Badge>
  recentRecords: Field<'[UserRecord!]!', Type_UserRecord, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'RecordQuerySort', Enum_RecordQuerySort>
    order: Input<'QueryOrder', Enum_QueryOrder>
  }>
  bestRecords: Field<'[UserRecord!]!', Type_UserRecord, {
    limit: Input<'Int', Scalar_Int>
  }>
  id: Field<'ID!', Scalar_ID>
  user: Field<'User', Type_User>
  birthday: Field<'Date', Scalar_Date>
  bio: Field<'String', Scalar_String>
  header: Field<'Image', Type_Image>
  rating: Field<'Float!', Scalar_Float>
  exp: Field<'ProfileExp!', Type_ProfileExp>
  grades: Field<'ProfileGrades!', Type_ProfileGrades>
  activity: Field<'ProfileActivity!', Type_ProfileActivity>
  timeseries: Field<'[ProfileTimeSeries!]!', Type_ProfileTimeSeries>
}>

type Type_User = ObjectType<'User', {
  collectionsCount: Field<'Int!', Scalar_Int>
  collections: Field<'[CollectionUserListing!]!', Type_CollectionUserListing, {
    first: Input<'Int', Scalar_Int>
  }>
  levelsCount: Field<'Int!', Scalar_Int, {
    category: Input<'String', Scalar_String>
  }>
  levels: Field<'[UserLevel!]!', Type_UserLevel, {
    first: Input<'Int', Scalar_Int>
    category: Input<'String', Scalar_String>
    sort: Input<'LevelQuerySort', Enum_LevelQuerySort>
    order: Input<'QueryOrder', Enum_QueryOrder>
  }>
  id: Field<'ID!', Scalar_ID>
  uid: Field<'String', Scalar_String>
  name: Field<'String', Scalar_String>
  emails: Field<'[Email!]!', Type_Email>
  registrationDate: Field<'Date', Scalar_Date>
  role: Field<'Role!', Enum_Role>
  avatar: Field<'Avatar!', Type_Avatar>
  active: Field<'Boolean', Scalar_Boolean>
  lastSeen: Field<'Date', Scalar_Date>
  my: Field<'My', Type_My>
}>

type Type_My = ObjectType<'My', {
  collections: Field<'[CollectionUserListing!]!', Type_CollectionUserListing>
  levels: Field<'[UserStudioLevel!]!', Type_UserStudioLevel, {
    start: Input<'Int', Scalar_Int>
    limit: Input<'Int', Scalar_Int>
  }>
  levelsCount: Field<'Int!', Scalar_Int>
  library: Field<'[Level!]!', Type_Level, {
    granted: Input<'Boolean', Scalar_Boolean>
  }>
  emails: Field<'[Email!]!', Type_Email>
  user: Field<'User', Type_User>
  externalAccountProviders: Field<'[String!]!', Scalar_String>
}>

type Type_CollectionUserListing = ObjectType<'CollectionUserListing', {
  id: Field<'ID!', Scalar_ID>
  uid: Field<'String!', Scalar_String>
  cover: Field<'Image', Type_Image>
  title: Field<'String!', Scalar_String>
  slogan: Field<'String!', Scalar_String>
  description: Field<'String!', Scalar_String>
  levelCount: Field<'Int!', Scalar_Int>
  creationDate: Field<'Date!', Scalar_Date>
  modificationDate: Field<'Date!', Scalar_Date>
  tags: Field<'[String!]!', Scalar_String>
  state: Field<'ResourceState!', Enum_ResourceState>
  metadata: Field<'ResourceMeta!', Type_ResourceMeta>
}>

type Type_Collection = ObjectType<'Collection', {
  id: Field<'ID!', Scalar_ID>
  uid: Field<'String!', Scalar_String>
  cover: Field<'Image', Type_Image>
  title: Field<'String!', Scalar_String>
  slogan: Field<'String!', Scalar_String>
  description: Field<'String!', Scalar_String>
  owner: Field<'User', Type_User>
  levelCount: Field<'Int!', Scalar_Int>
  levels: Field<'[Level!]!', Type_Level, {
    limit: Input<'Int', Scalar_Int>
  }>
  creationDate: Field<'Date!', Scalar_Date>
  modificationDate: Field<'Date!', Scalar_Date>
  tags: Field<'[String!]!', Scalar_String>
  state: Field<'ResourceState!', Enum_ResourceState>
  metadata: Field<'ResourceMeta!', Type_ResourceMeta>
}>

type Type_CollectionListing = ObjectType<'CollectionListing', {
  id: Field<'ID!', Scalar_ID>
  uid: Field<'String!', Scalar_String>
  cover: Field<'Image', Type_Image>
  title: Field<'String!', Scalar_String>
  slogan: Field<'String!', Scalar_String>
  description: Field<'String!', Scalar_String>
  owner: Field<'User', Type_User>
  levelCount: Field<'Int!', Scalar_Int>
  creationDate: Field<'Date!', Scalar_Date>
  modificationDate: Field<'Date!', Scalar_Date>
  tags: Field<'[String!]!', Scalar_String>
  state: Field<'ResourceState!', Enum_ResourceState>
  metadata: Field<'ResourceMeta!', Type_ResourceMeta>
}>

type Type_Comment = ObjectType<'Comment', {
  id: Field<'Int!', Scalar_Int>
  category: Field<'String!', Scalar_String>
  key: Field<'String!', Scalar_String>
  content: Field<'String!', Scalar_String>
  date: Field<'Date!', Scalar_Date>
  owner: Field<'User', Type_User>
  metadata: Field<'Object', Scalar_Object>
}>

type Type_File = ObjectType<'File', {
  path: Field<'String!', Scalar_String>
  creationDate: Field<'Date', Scalar_Date>
}>

type Type_Image = ObjectType<'Image', {
  original: Field<'String', Scalar_String>
  thumbnail: Field<'String', Scalar_String>
  cover: Field<'String', Scalar_String>
  stripe: Field<'String', Scalar_String>
  sized: Field<'String', Scalar_String, {
    height: Input<'Int', Scalar_Int>
    width: Input<'Int', Scalar_Int>
  }>
}>

type Type_Avatar = ObjectType<'Avatar', {
  original: Field<'String', Scalar_String>
  small: Field<'String', Scalar_String>
  large: Field<'String', Scalar_String>
  sized: Field<'String', Scalar_String, {
    size: Input<'Int', Scalar_Int>
  }>
}>

type Type_LevelMeta = ObjectType<'LevelMeta', {
  title_localized: Field<'String', Scalar_String>
  artist: Field<'ResourceMetaProperty', Type_ResourceMetaProperty>
  illustrator: Field<'ResourceMetaProperty', Type_ResourceMetaProperty>
  charter: Field<'ResourceMetaProperty', Type_ResourceMetaProperty>
  storyboarder: Field<'ResourceMetaProperty', Type_ResourceMetaProperty>
}>

type Type_LevelBundle = ObjectType<'LevelBundle', {
  music: Field<'String', Scalar_String>
  musicPreview: Field<'String', Scalar_String>
  backgroundImage: Field<'Image', Type_Image>
}>

type Type_Chart = ObjectType<'Chart', {
  id: Field<'Int!', Scalar_Int>
  name: Field<'String', Scalar_String>
  difficulty: Field<'Int!', Scalar_Int>
  type: Field<'String!', Scalar_String>
  notesCount: Field<'Int!', Scalar_Int>
  leaderboard: Field<'[LeaderboardRecord!]!', Type_LeaderboardRecord, {
    start: Input<'Int!', Scalar_Int>
    limit: Input<'Int!', Scalar_Int>
  }>
  numPlayers: Field<'Int!', Scalar_Int>
}>

type Type_Rating = ObjectType<'Rating', {
  average: Field<'Float', Scalar_Float>
  total: Field<'Int!', Scalar_Int>
  rating: Field<'Float', Scalar_Float>
  distribution: Field<'[Int!]!', Scalar_Int>
}>

type Type_Level = ObjectType<'Level', {
  id: Field<'Int!', Scalar_Int>
  version: Field<'Int!', Scalar_Int>
  uid: Field<'String!', Scalar_String>
  title: Field<'String!', Scalar_String>
  metadata: Field<'LevelMeta!', Type_LevelMeta>
  duration: Field<'Float!', Scalar_Float>
  size: Field<'FileSize!', Scalar_FileSize>
  description: Field<'String!', Scalar_String>
  state: Field<'ResourceState!', Enum_ResourceState>
  censored: Field<'String', Scalar_String>
  tags: Field<'[String!]!', Scalar_String>
  category: Field<'[String!]!', Scalar_String>
  owner: Field<'User', Type_User>
  creationDate: Field<'Date!', Scalar_Date>
  modificationDate: Field<'Date!', Scalar_Date>
  bundle: Field<'LevelBundle', Type_LevelBundle>
  charts: Field<'[Chart!]!', Type_Chart>
  rating: Field<'Rating!', Type_Rating>
  owned: Field<'Boolean', Scalar_Boolean>
}>

type Type_UserLevel = ObjectType<'UserLevel', {
  id: Field<'Int!', Scalar_Int>
  version: Field<'Int!', Scalar_Int>
  uid: Field<'String!', Scalar_String>
  title: Field<'String!', Scalar_String>
  metadata: Field<'LevelMeta!', Type_LevelMeta>
  duration: Field<'Float!', Scalar_Float>
  size: Field<'FileSize!', Scalar_FileSize>
  description: Field<'String!', Scalar_String>
  state: Field<'ResourceState!', Enum_ResourceState>
  censored: Field<'String', Scalar_String>
  tags: Field<'[String!]!', Scalar_String>
  category: Field<'[String!]!', Scalar_String>
  creationDate: Field<'Date!', Scalar_Date>
  modificationDate: Field<'Date!', Scalar_Date>
  bundle: Field<'LevelBundle', Type_LevelBundle>
  charts: Field<'[Chart!]!', Type_Chart>
}>

type Type_UserStudioLevel = ObjectType<'UserStudioLevel', {
  id: Field<'Int!', Scalar_Int>
  version: Field<'Int!', Scalar_Int>
  uid: Field<'String!', Scalar_String>
  title: Field<'String!', Scalar_String>
  metadata: Field<'LevelMeta!', Type_LevelMeta>
  duration: Field<'Float!', Scalar_Float>
  size: Field<'FileSize!', Scalar_FileSize>
  description: Field<'String!', Scalar_String>
  state: Field<'ResourceState!', Enum_ResourceState>
  censored: Field<'String', Scalar_String>
  tags: Field<'[String!]!', Scalar_String>
  category: Field<'[String!]!', Scalar_String>
  creationDate: Field<'Date!', Scalar_Date>
  modificationDate: Field<'Date!', Scalar_Date>
  bundle: Field<'LevelBundle', Type_LevelBundle>
  charts: Field<'[Chart!]!', Type_Chart>
  downloadCount: Field<'Float', Scalar_Float>
  playCount: Field<'Float', Scalar_Float>
  avgRating: Field<'Float', Scalar_Float>
  ratingCount: Field<'Float', Scalar_Float>
}>

type Type_PostMeta = ObjectType<'PostMeta', {
  cover: Field<'ResourceMetaProperty', Type_ResourceMetaProperty>
}>

type Type_Post = ObjectType<'Post', {
  id: Field<'String!', Scalar_String>
  type: Field<'PostType!', Enum_PostType>
  uid: Field<'String!', Scalar_String>
  title: Field<'String', Scalar_String>
  slogan: Field<'String', Scalar_String>
  content: Field<'String', Scalar_String>
  state: Field<'ResourceState!', Enum_ResourceState>
  creationDate: Field<'Date', Scalar_Date>
  modificationDate: Field<'Date', Scalar_Date>
  startDate: Field<'Date', Scalar_Date>
  endDate: Field<'Date', Scalar_Date>
  cover: Field<'Image', Type_Image>
  logo: Field<'Image', Type_Image>
  metadata: Field<'PostMeta', Type_PostMeta>
  locked: Field<'Boolean', Scalar_Boolean>
}>

type Type_PostDetail = ObjectType<'PostDetail', {
  id: Field<'String!', Scalar_String>
  type: Field<'PostType!', Enum_PostType>
  uid: Field<'String!', Scalar_String>
  title: Field<'String', Scalar_String>
  slogan: Field<'String', Scalar_String>
  content: Field<'String', Scalar_String>
  state: Field<'ResourceState!', Enum_ResourceState>
  creationDate: Field<'Date', Scalar_Date>
  modificationDate: Field<'Date', Scalar_Date>
  startDate: Field<'Date', Scalar_Date>
  endDate: Field<'Date', Scalar_Date>
  cover: Field<'Image', Type_Image>
  logo: Field<'Image', Type_Image>
  metadata: Field<'PostMeta', Type_PostMeta>
  locked: Field<'Boolean', Scalar_Boolean>
  level: Field<'Level', Type_Level>
  collection: Field<'Collection', Type_Collection>
  epicId: Field<'String', Scalar_String>
}>

type Type_RecordDetails = ObjectType<'RecordDetails', {
  perfect: Field<'Int!', Scalar_Int>
  great: Field<'Int!', Scalar_Int>
  good: Field<'Int!', Scalar_Int>
  bad: Field<'Int!', Scalar_Int>
  miss: Field<'Int!', Scalar_Int>
  maxCombo: Field<'Int!', Scalar_Int>
}>

type Type_RecordLevel = ObjectType<'RecordLevel', {
  id: Field<'Int!', Scalar_Int>
  version: Field<'Int!', Scalar_Int>
  uid: Field<'String!', Scalar_String>
  title: Field<'String!', Scalar_String>
  metadata: Field<'LevelMeta!', Type_LevelMeta>
  duration: Field<'Float!', Scalar_Float>
  size: Field<'FileSize!', Scalar_FileSize>
  description: Field<'String!', Scalar_String>
  state: Field<'ResourceState!', Enum_ResourceState>
  censored: Field<'String', Scalar_String>
  tags: Field<'[String!]!', Scalar_String>
  category: Field<'[String!]!', Scalar_String>
  owner: Field<'User', Type_User>
  creationDate: Field<'Date!', Scalar_Date>
  modificationDate: Field<'Date!', Scalar_Date>
  bundle: Field<'LevelBundle', Type_LevelBundle>
}>

type Type_RecordChart = ObjectType<'RecordChart', {
  id: Field<'Int!', Scalar_Int>
  name: Field<'String', Scalar_String>
  difficulty: Field<'Int!', Scalar_Int>
  type: Field<'String!', Scalar_String>
  notesCount: Field<'Int!', Scalar_Int>
  level: Field<'RecordLevel', Type_RecordLevel>
}>

type Type_Record = ObjectType<'Record', {
  id: Field<'Int!', Scalar_Int>
  date: Field<'Date!', Scalar_Date>
  owner: Field<'User', Type_User>
  chart: Field<'RecordChart', Type_RecordChart>
  score: Field<'Int!', Scalar_Int>
  accuracy: Field<'Float!', Scalar_Float>
  mods: Field<'[GameplayMods!]!', Enum_GameplayMods>
  ranked: Field<'Boolean!', Scalar_Boolean>
  details: Field<'RecordDetails!', Type_RecordDetails>
  rating: Field<'Float!', Scalar_Float>
  recentRating: Field<'Float', Scalar_Float>
  rank: Field<'Int', Scalar_Int>
}>

type Type_LeaderboardRecord = ObjectType<'LeaderboardRecord', {
  id: Field<'Int!', Scalar_Int>
  date: Field<'Date!', Scalar_Date>
  owner: Field<'User', Type_User>
  score: Field<'Int!', Scalar_Int>
  accuracy: Field<'Float!', Scalar_Float>
  mods: Field<'[GameplayMods!]!', Enum_GameplayMods>
  details: Field<'RecordDetails!', Type_RecordDetails>
}>

type Type_UserRecord = ObjectType<'UserRecord', {
  id: Field<'Int!', Scalar_Int>
  date: Field<'Date!', Scalar_Date>
  chart: Field<'RecordChart', Type_RecordChart>
  score: Field<'Int!', Scalar_Int>
  accuracy: Field<'Float!', Scalar_Float>
  mods: Field<'[GameplayMods!]!', Enum_GameplayMods>
  ranked: Field<'Boolean!', Scalar_Boolean>
  details: Field<'RecordDetails!', Type_RecordDetails>
  rating: Field<'Float!', Scalar_Float>
  recentRating: Field<'Float', Scalar_Float>
}>

type Type_Email = ObjectType<'Email', {
  address: Field<'String!', Scalar_String>
  verified: Field<'Boolean!', Scalar_Boolean>
  primary: Field<'Boolean', Scalar_Boolean>
}>

type Type_ProfileExp = ObjectType<'ProfileExp', {
  basicExp: Field<'Int!', Scalar_Int>
  levelExp: Field<'Int!', Scalar_Int>
  totalExp: Field<'Int!', Scalar_Int>
  currentLevel: Field<'Int!', Scalar_Int>
  nextLevelExp: Field<'Int!', Scalar_Int>
  currentLevelExp: Field<'Int!', Scalar_Int>
}>

type Type_ProfileGrades = ObjectType<'ProfileGrades', {
  MAX: Field<'Int!', Scalar_Int>
  SS: Field<'Int!', Scalar_Int>
  S: Field<'Int!', Scalar_Int>
  A: Field<'Int!', Scalar_Int>
  B: Field<'Int!', Scalar_Int>
  C: Field<'Int!', Scalar_Int>
  D: Field<'Int!', Scalar_Int>
  F: Field<'Int!', Scalar_Int>
}>

type Type_ProfileActivity = ObjectType<'ProfileActivity', {
  totalRankedPlays: Field<'Long!', Scalar_Long>
  clearedNotes: Field<'Long!', Scalar_Long>
  maxCombo: Field<'Long!', Scalar_Long>
  averageRankedAccuracy: Field<'Float!', Scalar_Float>
  totalRankedScore: Field<'Long!', Scalar_Long>
  totalPlayTime: Field<'Float!', Scalar_Float>
}>

type Type_ProfileTimeSeries = ObjectType<'ProfileTimeSeries', {
  cumulativeRating: Field<'Float!', Scalar_Float>
  cumulativeAccuracy: Field<'Float!', Scalar_Float>
  week: Field<'Int!', Scalar_Int>
  year: Field<'Int!', Scalar_Int>
  accuracy: Field<'Float!', Scalar_Float>
  rating: Field<'Float!', Scalar_Float>
  count: Field<'Int!', Scalar_Int>
}>

export type Schema = DefineSchema<{
  FileSize: Scalar_FileSize
  Date: Scalar_Date
  Long: Scalar_Long
  Object: Scalar_Object
  Int: Scalar_Int
  Float: Scalar_Float
  String: Scalar_String
  Boolean: Scalar_Boolean
  ID: Scalar_ID
  ResourceState: Enum_ResourceState
  QueryOrder: Enum_QueryOrder
  LevelQuerySort: Enum_LevelQuerySort
  PostType: Enum_PostType
  GameplayMods: Enum_GameplayMods
  RecordQuerySort: Enum_RecordQuerySort
  SearchLevelSortingStrategy: Enum_SearchLevelSortingStrategy
  SearchLevelOrder: Enum_SearchLevelOrder
  Role: Enum_Role
  ResourceMetaInput: Input_ResourceMetaInput
  CollectionMetaInput: Input_CollectionMetaInput
  CollectionInput: Input_CollectionInput
  UpdateLevelInput: Input_UpdateLevelInput
  PartialChartMetadata: Input_PartialChartMetadata
  PartialMetadata: Input_PartialMetadata
  PostMetaInput: Input_PostMetaInput
  PostInput: Input_PostInput
  RecordQueryInput: Input_RecordQueryInput
  ProfileInput: Input_ProfileInput
  Query: Type_Query
  Mutation: Type_Mutation
  ResourceMetaProperty: Type_ResourceMetaProperty
  ResourceMeta: Type_ResourceMeta
  Badge: Type_Badge
  Profile: Type_Profile
  User: Type_User
  My: Type_My
  CollectionUserListing: Type_CollectionUserListing
  Collection: Type_Collection
  CollectionListing: Type_CollectionListing
  Comment: Type_Comment
  File: Type_File
  Image: Type_Image
  Avatar: Type_Avatar
  LevelMeta: Type_LevelMeta
  LevelBundle: Type_LevelBundle
  Chart: Type_Chart
  Rating: Type_Rating
  Level: Type_Level
  UserLevel: Type_UserLevel
  UserStudioLevel: Type_UserStudioLevel
  PostMeta: Type_PostMeta
  Post: Type_Post
  PostDetail: Type_PostDetail
  RecordDetails: Type_RecordDetails
  RecordLevel: Type_RecordLevel
  RecordChart: Type_RecordChart
  Record: Type_Record
  LeaderboardRecord: Type_LeaderboardRecord
  UserRecord: Type_UserRecord
  Email: Type_Email
  ProfileExp: Type_ProfileExp
  ProfileGrades: Type_ProfileGrades
  ProfileActivity: Type_ProfileActivity
  ProfileTimeSeries: Type_ProfileTimeSeries
}>

declare module '@gqfn/core/schema' {
  interface Schemas {
    'https://services.cytoid.io/graphql': Schema
  }
}
