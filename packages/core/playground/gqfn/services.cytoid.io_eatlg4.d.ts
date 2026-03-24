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
  name: Input<Scalar_String | null>
  localized_name: Input<Scalar_String | null>
  url: Input<Scalar_String | null>
}>

type Input_CollectionMetaInput = InputObjectType<'CollectionMetaInput', {
  cover: Input<Input_ResourceMetaInput | null>
}>

type Input_CollectionInput = InputObjectType<'CollectionInput', {
  uid: Input<Scalar_String | null>
  coverPath: Input<Scalar_String | null>
  title: Input<Scalar_String | null>
  slogan: Input<Scalar_String | null>
  description: Input<Scalar_String | null>
  levelIds: Input<[Scalar_Int] | null>
  tags: Input<[Scalar_String] | null>
  state: Input<Enum_ResourceState | null>
  metadata: Input<Input_CollectionMetaInput | null>
}>

type Input_UpdateLevelInput = InputObjectType<'UpdateLevelInput', {
  state: Input<Enum_ResourceState | null>
  tags: Input<[Scalar_String] | null>
  description: Input<Scalar_String | null>
  censored: Input<Scalar_String | null>
  category: Input<[Scalar_String] | null>
}>

type Input_PartialChartMetadata = InputObjectType<'PartialChartMetadata', {
  type: Input<Scalar_String>
  name: Input<Scalar_String | null>
  difficulty: Input<Scalar_Int | null>
}>

type Input_PartialMetadata = InputObjectType<'PartialMetadata', {
  title: Input<Scalar_String | null>
  title_localized: Input<Scalar_String | null>
  artist: Input<Scalar_String | null>
  artist_localized: Input<Scalar_String | null>
  artist_source: Input<Scalar_String | null>
  illustrator: Input<Scalar_String | null>
  illustrator_source: Input<Scalar_String | null>
  charter: Input<Scalar_String | null>
  storyboarder: Input<Scalar_String | null>
  charts: Input<[Input_PartialChartMetadata] | null>
}>

type Input_PostMetaInput = InputObjectType<'PostMetaInput', {
  cover: Input<Input_ResourceMetaInput | null>
}>

type Input_PostInput = InputObjectType<'PostInput', {
  type: Input<Enum_PostType | null>
  uid: Input<Scalar_String | null>
  title: Input<Scalar_String | null>
  slogan: Input<Scalar_String | null>
  content: Input<Scalar_String | null>
  state: Input<Enum_ResourceState | null>
  coverPath: Input<Scalar_String | null>
  logoPath: Input<Scalar_String | null>
  metadata: Input<Input_PostMetaInput | null>
  startDate: Input<Scalar_Date | null>
  endDate: Input<Scalar_Date | null>
  locked: Input<Scalar_Boolean | null>
  levelId: Input<Scalar_Int | null>
  collectionId: Input<Scalar_ID | null>
}>

type Input_RecordQueryInput = InputObjectType<'RecordQueryInput', {
  chartId: Input<Scalar_Int | null>
  ownerId: Input<Scalar_ID | null>
  ownerUid: Input<Scalar_String | null>
  startDate: Input<Scalar_Date | null>
  endDate: Input<Scalar_Date | null>
  best: Input<Scalar_Boolean | null>
  ranked: Input<Scalar_Boolean | null>
}>

type Input_ProfileInput = InputObjectType<'ProfileInput', {
  birthday: Input<Scalar_Date | null>
  bio: Input<Scalar_String | null>
}>

type Type_Query = ObjectType<'Query', {
  discordOnlineCount: Field<Scalar_Int | null>
  recentTweet: Field<Scalar_String | null>
  collectionsCount: Field<Scalar_Int>
  collection: Field<Type_Collection | null, {
    id: Input<Scalar_ID | null>
    uid: Input<Scalar_String | null>
  }>
  collections: Field<[Type_CollectionListing], {
    limit: Input<Scalar_Int | null>
    cursor: Input<Scalar_ID | null>
    ownerId: Input<Scalar_String | null>
    ownerUid: Input<Scalar_String | null>
  }>
  recentComments: Field<[Type_Comment], {
    limit: Input<Scalar_Int | null>
  }>
  level: Field<Type_Level | null, {
    uid: Input<Scalar_String>
  }>
  levels: Field<[Type_Level], {
    order: Input<Enum_QueryOrder | null>
    page: Input<Scalar_Int | null>
    limit: Input<Scalar_Int | null>
    sort: Input<Enum_LevelQuerySort | null>
    category: Input<Scalar_String | null>
  }>
  levelsCount: Field<Scalar_Int, {
    category: Input<Scalar_String | null>
  }>
  chart: Field<Type_Chart | null, {
    levelUid: Input<Scalar_String>
    chartType: Input<Scalar_String>
  }>
  getPosts: Field<[Type_Post], {
    limit: Input<Scalar_Int>
    all: Input<Scalar_Boolean | null>
    skip: Input<Scalar_Int | null>
  }>
  getActivePosts: Field<[Type_Post], {
    limit: Input<Scalar_Int>
    skip: Input<Scalar_Int | null>
  }>
  getPost: Field<Type_PostDetail | null, {
    uid: Input<Scalar_String>
  }>
  recentRecords: Field<[Type_Record], {
    limit: Input<Scalar_Int | null>
    ranked: Input<Scalar_Boolean | null>
  }>
  records: Field<[Type_Record], {
    query: Input<Input_RecordQueryInput | null>
    page: Input<Scalar_Int | null>
    limit: Input<Scalar_Int | null>
    sort: Input<Enum_RecordQuerySort | null>
    order: Input<Enum_QueryOrder | null>
  }>
  recordsCount: Field<Scalar_Int, {
    query: Input<Input_RecordQueryInput | null>
  }>
  record: Field<Type_Record | null, {
    id: Input<Scalar_Int>
    chartId: Input<Scalar_Int>
  }>
  searchLevels: Field<[Type_Level], {
    search: Input<Scalar_String>
    start: Input<Scalar_Int | null>
    limit: Input<Scalar_Int | null>
    strategy: Input<Enum_SearchLevelSortingStrategy | null>
    order: Input<Enum_SearchLevelOrder | null>
  }>
  profile: Field<Type_Profile | null, {
    id: Input<Scalar_ID | null>
    uid: Input<Scalar_String | null>
  }>
  user: Field<Type_User | null, {
    id: Input<Scalar_ID | null>
    uid: Input<Scalar_String | null>
  }>
  my: Field<Type_My | null>
}>

type Type_Mutation = ObjectType<'Mutation', {
  updateCollection: Field<Type_CollectionUserListing | null, {
    id: Input<Scalar_ID>
    input: Input<Input_CollectionInput>
  }>
  createCollection: Field<Type_CollectionUserListing | null, {
    input: Input<Input_CollectionInput>
  }>
  deleteCollection: Field<Type_CollectionUserListing | null, {
    id: Input<Scalar_ID>
  }>
  evaluateEpic: Field<Scalar_String | null, {
    id: Input<Scalar_String | null>
  }>
  rateLevel: Field<Type_Rating, {
    id: Input<Scalar_String>
    rating: Input<Scalar_Int | null>
  }>
  unpackLevelPackage: Field<Type_UserLevel | null, {
    token: Input<Scalar_String>
    replace: Input<Scalar_String | null>
  }>
  editLevelMetadata: Field<Type_UserLevel | null, {
    id: Input<Scalar_String>
    metadata: Input<Input_PartialMetadata | null>
  }>
  deleteLevel: Field<Scalar_Boolean | null, {
    id: Input<Scalar_ID>
  }>
  updateLevel: Field<Scalar_Boolean | null, {
    id: Input<Scalar_ID>
    input: Input<Input_UpdateLevelInput | null>
  }>
  addToLibrary: Field<Scalar_Boolean | null, {
    levelId: Input<Scalar_Int>
  }>
  removeFromLibrary: Field<Scalar_Boolean | null, {
    levelId: Input<Scalar_Int>
  }>
  createPost: Field<Type_Post | null, {
    post: Input<Input_PostInput | null>
  }>
  updatePost: Field<Type_Post | null, {
    id: Input<Scalar_ID>
    input: Input<Input_PostInput | null>
  }>
  deletePost: Field<Type_Post | null, {
    id: Input<Scalar_ID>
  }>
  addEmail: Field<Scalar_Boolean | null, {
    email: Input<Scalar_String>
  }>
  sendVerificationEmail: Field<Scalar_Boolean | null, {
    email: Input<Scalar_String>
  }>
  makeEmailPrimary: Field<Scalar_Boolean | null, {
    email: Input<Scalar_String>
  }>
  deleteEmail: Field<Scalar_Boolean | null, {
    email: Input<Scalar_String>
  }>
  sendResetPasswordEmail: Field<Scalar_Boolean | null, {
    email: Input<Scalar_String>
  }>
  changePasswordWithToken: Field<Scalar_Boolean | null, {
    token: Input<Scalar_String>
    password: Input<Scalar_String>
  }>
  changePassword: Field<Scalar_Boolean | null, {
    oldPassword: Input<Scalar_String>
    newPassword: Input<Scalar_String>
  }>
  removeExternalAccount: Field<Scalar_Boolean | null, {
    provider: Input<Scalar_String>
  }>
  addExternalAccount: Field<Scalar_Boolean | null, {
    token: Input<Scalar_String>
  }>
  updateProfile: Field<Scalar_Boolean | null, {
    input: Input<Input_ProfileInput>
  }>
  updateProfileHeader: Field<Type_Image | null, {
    path: Input<Scalar_String>
  }>
  setAvatar: Field<Type_Avatar | null, {
    path: Input<Scalar_String | null>
  }>
  setUserActive: Field<Scalar_Boolean | null, {
    id: Input<Scalar_ID>
    active: Input<Scalar_Boolean>
  }>
  banUser: Field<Scalar_Boolean | null, {
    id: Input<Scalar_ID>
    reason: Input<Scalar_String>
  }>
  grantUserBadge: Field<Scalar_Boolean | null, {
    id: Input<Scalar_ID>
    badge: Input<Scalar_String>
  }>
}>

type Type_ResourceMetaProperty = ObjectType<'ResourceMetaProperty', {
  name: Field<Scalar_String | null>
  localized_name: Field<Scalar_String | null>
  url: Field<Scalar_String | null>
}>

type Type_ResourceMeta = ObjectType<'ResourceMeta', {
  cover: Field<Type_ResourceMetaProperty | null>
}>

type Type_Badge = ObjectType<'Badge', {
  uid: Field<Scalar_String>
  title: Field<Scalar_String>
  description: Field<Scalar_String | null>
  metadata: Field<Scalar_Object | null>
}>

type Type_Profile = ObjectType<'Profile', {
  badges: Field<[Type_Badge]>
  recentRecords: Field<[Type_UserRecord], {
    limit: Input<Scalar_Int | null>
    sort: Input<Enum_RecordQuerySort | null>
    order: Input<Enum_QueryOrder | null>
  }>
  bestRecords: Field<[Type_UserRecord], {
    limit: Input<Scalar_Int | null>
  }>
  id: Field<Scalar_ID>
  user: Field<Type_User | null>
  birthday: Field<Scalar_Date | null>
  bio: Field<Scalar_String | null>
  header: Field<Type_Image | null>
  rating: Field<Scalar_Float>
  exp: Field<Type_ProfileExp>
  grades: Field<Type_ProfileGrades>
  activity: Field<Type_ProfileActivity>
  timeseries: Field<[Type_ProfileTimeSeries]>
}>

type Type_User = ObjectType<'User', {
  collectionsCount: Field<Scalar_Int>
  collections: Field<[Type_CollectionUserListing], {
    first: Input<Scalar_Int | null>
  }>
  levelsCount: Field<Scalar_Int, {
    category: Input<Scalar_String | null>
  }>
  levels: Field<[Type_UserLevel], {
    first: Input<Scalar_Int | null>
    category: Input<Scalar_String | null>
    sort: Input<Enum_LevelQuerySort | null>
    order: Input<Enum_QueryOrder | null>
  }>
  id: Field<Scalar_ID>
  uid: Field<Scalar_String | null>
  name: Field<Scalar_String | null>
  emails: Field<[Type_Email]>
  registrationDate: Field<Scalar_Date | null>
  role: Field<Enum_Role>
  avatar: Field<Type_Avatar>
  active: Field<Scalar_Boolean | null>
  lastSeen: Field<Scalar_Date | null>
  my: Field<Type_My | null>
}>

type Type_My = ObjectType<'My', {
  collections: Field<[Type_CollectionUserListing]>
  levels: Field<[Type_UserStudioLevel], {
    start: Input<Scalar_Int | null>
    limit: Input<Scalar_Int | null>
  }>
  levelsCount: Field<Scalar_Int>
  library: Field<[Type_Level], {
    granted: Input<Scalar_Boolean | null>
  }>
  emails: Field<[Type_Email]>
  user: Field<Type_User | null>
  externalAccountProviders: Field<[Scalar_String]>
}>

type Type_CollectionUserListing = ObjectType<'CollectionUserListing', {
  id: Field<Scalar_ID>
  uid: Field<Scalar_String>
  cover: Field<Type_Image | null>
  title: Field<Scalar_String>
  slogan: Field<Scalar_String>
  description: Field<Scalar_String>
  levelCount: Field<Scalar_Int>
  creationDate: Field<Scalar_Date>
  modificationDate: Field<Scalar_Date>
  tags: Field<[Scalar_String]>
  state: Field<Enum_ResourceState>
  metadata: Field<Type_ResourceMeta>
}>

type Type_Collection = ObjectType<'Collection', {
  id: Field<Scalar_ID>
  uid: Field<Scalar_String>
  cover: Field<Type_Image | null>
  title: Field<Scalar_String>
  slogan: Field<Scalar_String>
  description: Field<Scalar_String>
  owner: Field<Type_User | null>
  levelCount: Field<Scalar_Int>
  levels: Field<[Type_Level], {
    limit: Input<Scalar_Int | null>
  }>
  creationDate: Field<Scalar_Date>
  modificationDate: Field<Scalar_Date>
  tags: Field<[Scalar_String]>
  state: Field<Enum_ResourceState>
  metadata: Field<Type_ResourceMeta>
}>

type Type_CollectionListing = ObjectType<'CollectionListing', {
  id: Field<Scalar_ID>
  uid: Field<Scalar_String>
  cover: Field<Type_Image | null>
  title: Field<Scalar_String>
  slogan: Field<Scalar_String>
  description: Field<Scalar_String>
  owner: Field<Type_User | null>
  levelCount: Field<Scalar_Int>
  creationDate: Field<Scalar_Date>
  modificationDate: Field<Scalar_Date>
  tags: Field<[Scalar_String]>
  state: Field<Enum_ResourceState>
  metadata: Field<Type_ResourceMeta>
}>

type Type_Comment = ObjectType<'Comment', {
  id: Field<Scalar_Int>
  category: Field<Scalar_String>
  key: Field<Scalar_String>
  content: Field<Scalar_String>
  date: Field<Scalar_Date>
  owner: Field<Type_User | null>
  metadata: Field<Scalar_Object | null>
}>

type Type_File = ObjectType<'File', {
  path: Field<Scalar_String>
  creationDate: Field<Scalar_Date | null>
}>

type Type_Image = ObjectType<'Image', {
  original: Field<Scalar_String | null>
  thumbnail: Field<Scalar_String | null>
  cover: Field<Scalar_String | null>
  stripe: Field<Scalar_String | null>
  sized: Field<Scalar_String | null, {
    height: Input<Scalar_Int | null>
    width: Input<Scalar_Int | null>
  }>
}>

type Type_Avatar = ObjectType<'Avatar', {
  original: Field<Scalar_String | null>
  small: Field<Scalar_String | null>
  large: Field<Scalar_String | null>
  sized: Field<Scalar_String | null, {
    size: Input<Scalar_Int | null>
  }>
}>

type Type_LevelMeta = ObjectType<'LevelMeta', {
  title_localized: Field<Scalar_String | null>
  artist: Field<Type_ResourceMetaProperty | null>
  illustrator: Field<Type_ResourceMetaProperty | null>
  charter: Field<Type_ResourceMetaProperty | null>
  storyboarder: Field<Type_ResourceMetaProperty | null>
}>

type Type_LevelBundle = ObjectType<'LevelBundle', {
  music: Field<Scalar_String | null>
  musicPreview: Field<Scalar_String | null>
  backgroundImage: Field<Type_Image | null>
}>

type Type_Chart = ObjectType<'Chart', {
  id: Field<Scalar_Int>
  name: Field<Scalar_String | null>
  difficulty: Field<Scalar_Int>
  type: Field<Scalar_String>
  notesCount: Field<Scalar_Int>
  leaderboard: Field<[Type_LeaderboardRecord], {
    start: Input<Scalar_Int>
    limit: Input<Scalar_Int>
  }>
  numPlayers: Field<Scalar_Int>
}>

type Type_Rating = ObjectType<'Rating', {
  average: Field<Scalar_Float | null>
  total: Field<Scalar_Int>
  rating: Field<Scalar_Float | null>
  distribution: Field<[Scalar_Int]>
}>

type Type_Level = ObjectType<'Level', {
  id: Field<Scalar_Int>
  version: Field<Scalar_Int>
  uid: Field<Scalar_String>
  title: Field<Scalar_String>
  metadata: Field<Type_LevelMeta>
  duration: Field<Scalar_Float>
  size: Field<Scalar_FileSize>
  description: Field<Scalar_String>
  state: Field<Enum_ResourceState>
  censored: Field<Scalar_String | null>
  tags: Field<[Scalar_String]>
  category: Field<[Scalar_String]>
  owner: Field<Type_User | null>
  creationDate: Field<Scalar_Date>
  modificationDate: Field<Scalar_Date>
  bundle: Field<Type_LevelBundle | null>
  charts: Field<[Type_Chart]>
  rating: Field<Type_Rating>
  owned: Field<Scalar_Boolean | null>
}>

type Type_UserLevel = ObjectType<'UserLevel', {
  id: Field<Scalar_Int>
  version: Field<Scalar_Int>
  uid: Field<Scalar_String>
  title: Field<Scalar_String>
  metadata: Field<Type_LevelMeta>
  duration: Field<Scalar_Float>
  size: Field<Scalar_FileSize>
  description: Field<Scalar_String>
  state: Field<Enum_ResourceState>
  censored: Field<Scalar_String | null>
  tags: Field<[Scalar_String]>
  category: Field<[Scalar_String]>
  creationDate: Field<Scalar_Date>
  modificationDate: Field<Scalar_Date>
  bundle: Field<Type_LevelBundle | null>
  charts: Field<[Type_Chart]>
}>

type Type_UserStudioLevel = ObjectType<'UserStudioLevel', {
  id: Field<Scalar_Int>
  version: Field<Scalar_Int>
  uid: Field<Scalar_String>
  title: Field<Scalar_String>
  metadata: Field<Type_LevelMeta>
  duration: Field<Scalar_Float>
  size: Field<Scalar_FileSize>
  description: Field<Scalar_String>
  state: Field<Enum_ResourceState>
  censored: Field<Scalar_String | null>
  tags: Field<[Scalar_String]>
  category: Field<[Scalar_String]>
  creationDate: Field<Scalar_Date>
  modificationDate: Field<Scalar_Date>
  bundle: Field<Type_LevelBundle | null>
  charts: Field<[Type_Chart]>
  downloadCount: Field<Scalar_Float | null>
  playCount: Field<Scalar_Float | null>
  avgRating: Field<Scalar_Float | null>
  ratingCount: Field<Scalar_Float | null>
}>

type Type_PostMeta = ObjectType<'PostMeta', {
  cover: Field<Type_ResourceMetaProperty | null>
}>

type Type_Post = ObjectType<'Post', {
  id: Field<Scalar_String>
  type: Field<Enum_PostType>
  uid: Field<Scalar_String>
  title: Field<Scalar_String | null>
  slogan: Field<Scalar_String | null>
  content: Field<Scalar_String | null>
  state: Field<Enum_ResourceState>
  creationDate: Field<Scalar_Date | null>
  modificationDate: Field<Scalar_Date | null>
  startDate: Field<Scalar_Date | null>
  endDate: Field<Scalar_Date | null>
  cover: Field<Type_Image | null>
  logo: Field<Type_Image | null>
  metadata: Field<Type_PostMeta | null>
  locked: Field<Scalar_Boolean | null>
}>

type Type_PostDetail = ObjectType<'PostDetail', {
  id: Field<Scalar_String>
  type: Field<Enum_PostType>
  uid: Field<Scalar_String>
  title: Field<Scalar_String | null>
  slogan: Field<Scalar_String | null>
  content: Field<Scalar_String | null>
  state: Field<Enum_ResourceState>
  creationDate: Field<Scalar_Date | null>
  modificationDate: Field<Scalar_Date | null>
  startDate: Field<Scalar_Date | null>
  endDate: Field<Scalar_Date | null>
  cover: Field<Type_Image | null>
  logo: Field<Type_Image | null>
  metadata: Field<Type_PostMeta | null>
  locked: Field<Scalar_Boolean | null>
  level: Field<Type_Level | null>
  collection: Field<Type_Collection | null>
  epicId: Field<Scalar_String | null>
}>

type Type_RecordDetails = ObjectType<'RecordDetails', {
  perfect: Field<Scalar_Int>
  great: Field<Scalar_Int>
  good: Field<Scalar_Int>
  bad: Field<Scalar_Int>
  miss: Field<Scalar_Int>
  maxCombo: Field<Scalar_Int>
}>

type Type_RecordLevel = ObjectType<'RecordLevel', {
  id: Field<Scalar_Int>
  version: Field<Scalar_Int>
  uid: Field<Scalar_String>
  title: Field<Scalar_String>
  metadata: Field<Type_LevelMeta>
  duration: Field<Scalar_Float>
  size: Field<Scalar_FileSize>
  description: Field<Scalar_String>
  state: Field<Enum_ResourceState>
  censored: Field<Scalar_String | null>
  tags: Field<[Scalar_String]>
  category: Field<[Scalar_String]>
  owner: Field<Type_User | null>
  creationDate: Field<Scalar_Date>
  modificationDate: Field<Scalar_Date>
  bundle: Field<Type_LevelBundle | null>
}>

type Type_RecordChart = ObjectType<'RecordChart', {
  id: Field<Scalar_Int>
  name: Field<Scalar_String | null>
  difficulty: Field<Scalar_Int>
  type: Field<Scalar_String>
  notesCount: Field<Scalar_Int>
  level: Field<Type_RecordLevel | null>
}>

type Type_Record = ObjectType<'Record', {
  id: Field<Scalar_Int>
  date: Field<Scalar_Date>
  owner: Field<Type_User | null>
  chart: Field<Type_RecordChart | null>
  score: Field<Scalar_Int>
  accuracy: Field<Scalar_Float>
  mods: Field<[Enum_GameplayMods]>
  ranked: Field<Scalar_Boolean>
  details: Field<Type_RecordDetails>
  rating: Field<Scalar_Float>
  recentRating: Field<Scalar_Float | null>
  rank: Field<Scalar_Int | null>
}>

type Type_LeaderboardRecord = ObjectType<'LeaderboardRecord', {
  id: Field<Scalar_Int>
  date: Field<Scalar_Date>
  owner: Field<Type_User | null>
  score: Field<Scalar_Int>
  accuracy: Field<Scalar_Float>
  mods: Field<[Enum_GameplayMods]>
  details: Field<Type_RecordDetails>
}>

type Type_UserRecord = ObjectType<'UserRecord', {
  id: Field<Scalar_Int>
  date: Field<Scalar_Date>
  chart: Field<Type_RecordChart | null>
  score: Field<Scalar_Int>
  accuracy: Field<Scalar_Float>
  mods: Field<[Enum_GameplayMods]>
  ranked: Field<Scalar_Boolean>
  details: Field<Type_RecordDetails>
  rating: Field<Scalar_Float>
  recentRating: Field<Scalar_Float | null>
}>

type Type_Email = ObjectType<'Email', {
  address: Field<Scalar_String>
  verified: Field<Scalar_Boolean>
  primary: Field<Scalar_Boolean | null>
}>

type Type_ProfileExp = ObjectType<'ProfileExp', {
  basicExp: Field<Scalar_Int>
  levelExp: Field<Scalar_Int>
  totalExp: Field<Scalar_Int>
  currentLevel: Field<Scalar_Int>
  nextLevelExp: Field<Scalar_Int>
  currentLevelExp: Field<Scalar_Int>
}>

type Type_ProfileGrades = ObjectType<'ProfileGrades', {
  MAX: Field<Scalar_Int>
  SS: Field<Scalar_Int>
  S: Field<Scalar_Int>
  A: Field<Scalar_Int>
  B: Field<Scalar_Int>
  C: Field<Scalar_Int>
  D: Field<Scalar_Int>
  F: Field<Scalar_Int>
}>

type Type_ProfileActivity = ObjectType<'ProfileActivity', {
  totalRankedPlays: Field<Scalar_Long>
  clearedNotes: Field<Scalar_Long>
  maxCombo: Field<Scalar_Long>
  averageRankedAccuracy: Field<Scalar_Float>
  totalRankedScore: Field<Scalar_Long>
  totalPlayTime: Field<Scalar_Float>
}>

type Type_ProfileTimeSeries = ObjectType<'ProfileTimeSeries', {
  cumulativeRating: Field<Scalar_Float>
  cumulativeAccuracy: Field<Scalar_Float>
  week: Field<Scalar_Int>
  year: Field<Scalar_Int>
  accuracy: Field<Scalar_Float>
  rating: Field<Scalar_Float>
  count: Field<Scalar_Int>
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
