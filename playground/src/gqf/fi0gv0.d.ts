/* eslint-ignore */
import type { ArgOf, DefineSchema, EnumType, Field, InputObject, InterfaceObject, ResOf, ScalarType, TypeObject, Union} from '@teages/gqf/schema'

export type ResourceState =
  | 'PRIVATE'
  | 'PUBLIC'
  | 'UNLISTED'

export type QueryOrder =
  | 'ASC'
  | 'DESC'

export type LevelQuerySort =
  | 'CREATION_DATE'
  | 'MODIFICATION_DATE'
  | 'DURATION'
  | 'DOWNLOADS'
  | 'PLAYS'
  | 'RATING'
  | 'DIFFICULTY'

export type PostType =
  | 'POST'
  | 'PAGE'
  | 'EVENT'

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

export type RecordQuerySort =
  | 'Score'
  | 'Accuracy'
  | 'Date'
  | 'Rating'
  | 'RecentRating'

export type SearchLevelSortingStrategy =
  | 'CREATION_DATE'
  | 'MODIFICATION_DATE'
  | 'DURATION'
  | 'DOWNLOADS'
  | 'PLAYS'
  | 'RATING'
  | 'DIFFICULTY'

export type SearchLevelOrder =
  | 'ASC'
  | 'DESC'

export type Role =
  | 'MODERATOR'
  | 'ADMIN'
  | 'USER'

type ResourceMetaInput = InputObject<'ResourceMetaInput', {
  name: Arg<'String'>
  localized_name: Arg<'String'>
  url: Arg<'String'>
}>

type CollectionMetaInput = InputObject<'CollectionMetaInput', {
  cover: Arg<'ResourceMetaInput'>
}>

type CollectionInput = InputObject<'CollectionInput', {
  uid: Arg<'String'>
  coverPath: Arg<'String'>
  title: Arg<'String'>
  slogan: Arg<'String'>
  description: Arg<'String'>
  levelIds: Arg<'[Int!]'>
  tags: Arg<'[String!]'>
  state: Arg<'ResourceState'>
  metadata: Arg<'CollectionMetaInput'>
}>

type UpdateLevelInput = InputObject<'UpdateLevelInput', {
  state: Arg<'ResourceState'>
  tags: Arg<'[String!]'>
  description: Arg<'String'>
  censored: Arg<'String'>
  category: Arg<'[String!]'>
}>

type PartialChartMetadata = InputObject<'PartialChartMetadata', {
  type: Arg<'String!'>
  name: Arg<'String'>
  difficulty: Arg<'Int'>
}>

type PartialMetadata = InputObject<'PartialMetadata', {
  title: Arg<'String'>
  title_localized: Arg<'String'>
  artist: Arg<'String'>
  artist_localized: Arg<'String'>
  artist_source: Arg<'String'>
  illustrator: Arg<'String'>
  illustrator_source: Arg<'String'>
  charter: Arg<'String'>
  storyboarder: Arg<'String'>
  charts: Arg<'[PartialChartMetadata!]'>
}>

type PostMetaInput = InputObject<'PostMetaInput', {
  cover: Arg<'ResourceMetaInput'>
}>

type PostInput = InputObject<'PostInput', {
  type: Arg<'PostType'>
  uid: Arg<'String'>
  title: Arg<'String'>
  slogan: Arg<'String'>
  content: Arg<'String'>
  state: Arg<'ResourceState'>
  coverPath: Arg<'String'>
  logoPath: Arg<'String'>
  metadata: Arg<'PostMetaInput'>
  startDate: Arg<'Date'>
  endDate: Arg<'Date'>
  locked: Arg<'Boolean'>
  levelId: Arg<'Int'>
  collectionId: Arg<'ID'>
}>

type RecordQueryInput = InputObject<'RecordQueryInput', {
  chartId: Arg<'Int'>
  ownerId: Arg<'ID'>
  ownerUid: Arg<'String'>
  startDate: Arg<'Date'>
  endDate: Arg<'Date'>
  best: Arg<'Boolean'>
  ranked: Arg<'Boolean'>
}>

type ProfileInput = InputObject<'ProfileInput', {
  birthday: Arg<'Date'>
  bio: Arg<'String'>
}>

type Query = TypeObject<'Query', {
  discordOnlineCount: Field<'discordOnlineCount', Res<'Int'>>
  recentTweet: Field<'recentTweet', Res<'String'>>
  collectionsCount: Field<'collectionsCount', Res<'Int!'>>
  collection: Field<'collection', Res<'Collection'>, {
    id: Arg<'ID'>
    uid: Arg<'String'>
  }>
  collections: Field<'collections', Res<'[CollectionListing!]!'>, {
    limit: Arg<'Int'>
    cursor: Arg<'ID'>
    ownerId: Arg<'String'>
    ownerUid: Arg<'String'>
  }>
  recentComments: Field<'recentComments', Res<'[Comment!]!'>, {
    limit: Arg<'Int'>
  }>
  level: Field<'level', Res<'Level'>, {
    uid: Arg<'String!'>
  }>
  levels: Field<'levels', Res<'[Level!]!'>, {
    order: Arg<'QueryOrder'>
    page: Arg<'Int'>
    limit: Arg<'Int'>
    sort: Arg<'LevelQuerySort'>
    category: Arg<'String'>
  }>
  levelsCount: Field<'levelsCount', Res<'Int!'>, {
    category: Arg<'String'>
  }>
  chart: Field<'chart', Res<'Chart'>, {
    levelUid: Arg<'String!'>
    chartType: Arg<'String!'>
  }>
  getPosts: Field<'getPosts', Res<'[Post!]!'>, {
    limit: Arg<'Int!'>
    all: Arg<'Boolean'>
    skip: Arg<'Int'>
  }>
  getActivePosts: Field<'getActivePosts', Res<'[Post!]!'>, {
    limit: Arg<'Int!'>
    skip: Arg<'Int'>
  }>
  getPost: Field<'getPost', Res<'PostDetail'>, {
    uid: Arg<'String!'>
  }>
  recentRecords: Field<'recentRecords', Res<'[Record!]!'>, {
    limit: Arg<'Int'>
    ranked: Arg<'Boolean'>
  }>
  records: Field<'records', Res<'[Record!]!'>, {
    query: Arg<'RecordQueryInput'>
    page: Arg<'Int'>
    limit: Arg<'Int'>
    sort: Arg<'RecordQuerySort'>
    order: Arg<'QueryOrder'>
  }>
  recordsCount: Field<'recordsCount', Res<'Int!'>, {
    query: Arg<'RecordQueryInput'>
  }>
  record: Field<'record', Res<'Record'>, {
    id: Arg<'Int!'>
    chartId: Arg<'Int!'>
  }>
  searchLevels: Field<'searchLevels', Res<'[Level!]!'>, {
    search: Arg<'String!'>
    start: Arg<'Int'>
    limit: Arg<'Int'>
    strategy: Arg<'SearchLevelSortingStrategy'>
    order: Arg<'SearchLevelOrder'>
  }>
  profile: Field<'profile', Res<'Profile'>, {
    id: Arg<'ID'>
    uid: Arg<'String'>
  }>
  user: Field<'user', Res<'User'>, {
    id: Arg<'ID'>
    uid: Arg<'String'>
  }>
  my: Field<'my', Res<'My'>>
}>

type Mutation = TypeObject<'Mutation', {
  updateCollection: Field<'updateCollection', Res<'CollectionUserListing'>, {
    id: Arg<'ID!'>
    input: Arg<'CollectionInput!'>
  }>
  createCollection: Field<'createCollection', Res<'CollectionUserListing'>, {
    input: Arg<'CollectionInput!'>
  }>
  deleteCollection: Field<'deleteCollection', Res<'CollectionUserListing'>, {
    id: Arg<'ID!'>
  }>
  evaluateEpic: Field<'evaluateEpic', Res<'String'>, {
    id: Arg<'String'>
  }>
  rateLevel: Field<'rateLevel', Res<'Rating!'>, {
    id: Arg<'String!'>
    rating: Arg<'Int'>
  }>
  unpackLevelPackage: Field<'unpackLevelPackage', Res<'UserLevel'>, {
    token: Arg<'String!'>
    replace: Arg<'String'>
  }>
  editLevelMetadata: Field<'editLevelMetadata', Res<'UserLevel'>, {
    id: Arg<'String!'>
    metadata: Arg<'PartialMetadata'>
  }>
  deleteLevel: Field<'deleteLevel', Res<'Boolean'>, {
    id: Arg<'ID!'>
  }>
  updateLevel: Field<'updateLevel', Res<'Boolean'>, {
    id: Arg<'ID!'>
    input: Arg<'UpdateLevelInput'>
  }>
  addToLibrary: Field<'addToLibrary', Res<'Boolean'>, {
    levelId: Arg<'Int!'>
  }>
  removeFromLibrary: Field<'removeFromLibrary', Res<'Boolean'>, {
    levelId: Arg<'Int!'>
  }>
  createPost: Field<'createPost', Res<'Post'>, {
    post: Arg<'PostInput'>
  }>
  updatePost: Field<'updatePost', Res<'Post'>, {
    id: Arg<'ID!'>
    input: Arg<'PostInput'>
  }>
  deletePost: Field<'deletePost', Res<'Post'>, {
    id: Arg<'ID!'>
  }>
  addEmail: Field<'addEmail', Res<'Boolean'>, {
    email: Arg<'String!'>
  }>
  sendVerificationEmail: Field<'sendVerificationEmail', Res<'Boolean'>, {
    email: Arg<'String!'>
  }>
  makeEmailPrimary: Field<'makeEmailPrimary', Res<'Boolean'>, {
    email: Arg<'String!'>
  }>
  deleteEmail: Field<'deleteEmail', Res<'Boolean'>, {
    email: Arg<'String!'>
  }>
  sendResetPasswordEmail: Field<'sendResetPasswordEmail', Res<'Boolean'>, {
    email: Arg<'String!'>
  }>
  changePasswordWithToken: Field<'changePasswordWithToken', Res<'Boolean'>, {
    token: Arg<'String!'>
    password: Arg<'String!'>
  }>
  changePassword: Field<'changePassword', Res<'Boolean'>, {
    oldPassword: Arg<'String!'>
    newPassword: Arg<'String!'>
  }>
  removeExternalAccount: Field<'removeExternalAccount', Res<'Boolean'>, {
    provider: Arg<'String!'>
  }>
  addExternalAccount: Field<'addExternalAccount', Res<'Boolean'>, {
    token: Arg<'String!'>
  }>
  updateProfile: Field<'updateProfile', Res<'Boolean'>, {
    input: Arg<'ProfileInput!'>
  }>
  updateProfileHeader: Field<'updateProfileHeader', Res<'Image'>, {
    path: Arg<'String!'>
  }>
  setAvatar: Field<'setAvatar', Res<'Avatar'>, {
    path: Arg<'String'>
  }>
  setUserActive: Field<'setUserActive', Res<'Boolean'>, {
    id: Arg<'ID!'>
    active: Arg<'Boolean!'>
  }>
  banUser: Field<'banUser', Res<'Boolean'>, {
    id: Arg<'ID!'>
    reason: Arg<'String!'>
  }>
  grantUserBadge: Field<'grantUserBadge', Res<'Boolean'>, {
    id: Arg<'ID!'>
    badge: Arg<'String!'>
  }>
}>

type ResourceMetaProperty = TypeObject<'ResourceMetaProperty', {
  name: Field<'name', Res<'String'>>
  localized_name: Field<'localized_name', Res<'String'>>
  url: Field<'url', Res<'String'>>
}>

type ResourceMeta = TypeObject<'ResourceMeta', {
  cover: Field<'cover', Res<'ResourceMetaProperty'>>
}>

type Badge = TypeObject<'Badge', {
  uid: Field<'uid', Res<'String!'>>
  title: Field<'title', Res<'String!'>>
  description: Field<'description', Res<'String'>>
  metadata: Field<'metadata', Res<'Object'>>
}>

type Profile = TypeObject<'Profile', {
  badges: Field<'badges', Res<'[Badge!]!'>>
  recentRecords: Field<'recentRecords', Res<'[UserRecord!]!'>, {
    limit: Arg<'Int'>
    sort: Arg<'RecordQuerySort'>
    order: Arg<'QueryOrder'>
  }>
  bestRecords: Field<'bestRecords', Res<'[UserRecord!]!'>, {
    limit: Arg<'Int'>
  }>
  id: Field<'id', Res<'ID!'>>
  user: Field<'user', Res<'User'>>
  birthday: Field<'birthday', Res<'Date'>>
  bio: Field<'bio', Res<'String'>>
  header: Field<'header', Res<'Image'>>
  rating: Field<'rating', Res<'Float!'>>
  exp: Field<'exp', Res<'ProfileExp!'>>
  grades: Field<'grades', Res<'ProfileGrades!'>>
  activity: Field<'activity', Res<'ProfileActivity!'>>
  timeseries: Field<'timeseries', Res<'[ProfileTimeSeries!]!'>>
}>

type User = TypeObject<'User', {
  collectionsCount: Field<'collectionsCount', Res<'Int!'>>
  collections: Field<'collections', Res<'[CollectionUserListing!]!'>, {
    first: Arg<'Int'>
  }>
  levelsCount: Field<'levelsCount', Res<'Int!'>, {
    category: Arg<'String'>
  }>
  levels: Field<'levels', Res<'[UserLevel!]!'>, {
    first: Arg<'Int'>
    category: Arg<'String'>
    sort: Arg<'LevelQuerySort'>
    order: Arg<'QueryOrder'>
  }>
  id: Field<'id', Res<'ID!'>>
  uid: Field<'uid', Res<'String'>>
  name: Field<'name', Res<'String'>>
  emails: Field<'emails', Res<'[Email!]!'>>
  registrationDate: Field<'registrationDate', Res<'Date'>>
  role: Field<'role', Res<'Role!'>>
  avatar: Field<'avatar', Res<'Avatar!'>>
  active: Field<'active', Res<'Boolean'>>
  lastSeen: Field<'lastSeen', Res<'Date'>>
  my: Field<'my', Res<'My'>>
}>

type My = TypeObject<'My', {
  collections: Field<'collections', Res<'[CollectionUserListing!]!'>>
  levels: Field<'levels', Res<'[UserStudioLevel!]!'>, {
    start: Arg<'Int'>
    limit: Arg<'Int'>
  }>
  levelsCount: Field<'levelsCount', Res<'Int!'>>
  library: Field<'library', Res<'[Level!]!'>, {
    granted: Arg<'Boolean'>
  }>
  emails: Field<'emails', Res<'[Email!]!'>>
  user: Field<'user', Res<'User'>>
  externalAccountProviders: Field<'externalAccountProviders', Res<'[String!]!'>>
}>

type CollectionUserListing = TypeObject<'CollectionUserListing', {
  id: Field<'id', Res<'ID!'>>
  uid: Field<'uid', Res<'String!'>>
  cover: Field<'cover', Res<'Image'>>
  title: Field<'title', Res<'String!'>>
  slogan: Field<'slogan', Res<'String!'>>
  description: Field<'description', Res<'String!'>>
  levelCount: Field<'levelCount', Res<'Int!'>>
  creationDate: Field<'creationDate', Res<'Date!'>>
  modificationDate: Field<'modificationDate', Res<'Date!'>>
  tags: Field<'tags', Res<'[String!]!'>>
  state: Field<'state', Res<'ResourceState!'>>
  metadata: Field<'metadata', Res<'ResourceMeta!'>>
}>

type Collection = TypeObject<'Collection', {
  id: Field<'id', Res<'ID!'>>
  uid: Field<'uid', Res<'String!'>>
  cover: Field<'cover', Res<'Image'>>
  title: Field<'title', Res<'String!'>>
  slogan: Field<'slogan', Res<'String!'>>
  description: Field<'description', Res<'String!'>>
  owner: Field<'owner', Res<'User'>>
  levelCount: Field<'levelCount', Res<'Int!'>>
  levels: Field<'levels', Res<'[Level!]!'>, {
    limit: Arg<'Int'>
  }>
  creationDate: Field<'creationDate', Res<'Date!'>>
  modificationDate: Field<'modificationDate', Res<'Date!'>>
  tags: Field<'tags', Res<'[String!]!'>>
  state: Field<'state', Res<'ResourceState!'>>
  metadata: Field<'metadata', Res<'ResourceMeta!'>>
}>

type CollectionListing = TypeObject<'CollectionListing', {
  id: Field<'id', Res<'ID!'>>
  uid: Field<'uid', Res<'String!'>>
  cover: Field<'cover', Res<'Image'>>
  title: Field<'title', Res<'String!'>>
  slogan: Field<'slogan', Res<'String!'>>
  description: Field<'description', Res<'String!'>>
  owner: Field<'owner', Res<'User'>>
  levelCount: Field<'levelCount', Res<'Int!'>>
  creationDate: Field<'creationDate', Res<'Date!'>>
  modificationDate: Field<'modificationDate', Res<'Date!'>>
  tags: Field<'tags', Res<'[String!]!'>>
  state: Field<'state', Res<'ResourceState!'>>
  metadata: Field<'metadata', Res<'ResourceMeta!'>>
}>

type Comment = TypeObject<'Comment', {
  id: Field<'id', Res<'Int!'>>
  category: Field<'category', Res<'String!'>>
  key: Field<'key', Res<'String!'>>
  content: Field<'content', Res<'String!'>>
  date: Field<'date', Res<'Date!'>>
  owner: Field<'owner', Res<'User'>>
  metadata: Field<'metadata', Res<'Object'>>
}>

type File = TypeObject<'File', {
  path: Field<'path', Res<'String!'>>
  creationDate: Field<'creationDate', Res<'Date'>>
}>

type Image = TypeObject<'Image', {
  original: Field<'original', Res<'String'>>
  thumbnail: Field<'thumbnail', Res<'String'>>
  cover: Field<'cover', Res<'String'>>
  stripe: Field<'stripe', Res<'String'>>
  sized: Field<'sized', Res<'String'>, {
    height: Arg<'Int'>
    width: Arg<'Int'>
  }>
}>

type Avatar = TypeObject<'Avatar', {
  original: Field<'original', Res<'String'>>
  small: Field<'small', Res<'String'>>
  large: Field<'large', Res<'String'>>
  sized: Field<'sized', Res<'String'>, {
    size: Arg<'Int'>
  }>
}>

type LevelMeta = TypeObject<'LevelMeta', {
  title_localized: Field<'title_localized', Res<'String'>>
  artist: Field<'artist', Res<'ResourceMetaProperty'>>
  illustrator: Field<'illustrator', Res<'ResourceMetaProperty'>>
  charter: Field<'charter', Res<'ResourceMetaProperty'>>
  storyboarder: Field<'storyboarder', Res<'ResourceMetaProperty'>>
}>

type LevelBundle = TypeObject<'LevelBundle', {
  music: Field<'music', Res<'String'>>
  musicPreview: Field<'musicPreview', Res<'String'>>
  backgroundImage: Field<'backgroundImage', Res<'Image'>>
}>

type Chart = TypeObject<'Chart', {
  id: Field<'id', Res<'Int!'>>
  name: Field<'name', Res<'String'>>
  difficulty: Field<'difficulty', Res<'Int!'>>
  type: Field<'type', Res<'String!'>>
  notesCount: Field<'notesCount', Res<'Int!'>>
  leaderboard: Field<'leaderboard', Res<'[LeaderboardRecord!]!'>, {
    start: Arg<'Int!'>
    limit: Arg<'Int!'>
  }>
  numPlayers: Field<'numPlayers', Res<'Int!'>>
}>

type Rating = TypeObject<'Rating', {
  average: Field<'average', Res<'Float'>>
  total: Field<'total', Res<'Int!'>>
  rating: Field<'rating', Res<'Float'>>
  distribution: Field<'distribution', Res<'[Int!]!'>>
}>

type Level = TypeObject<'Level', {
  id: Field<'id', Res<'Int!'>>
  version: Field<'version', Res<'Int!'>>
  uid: Field<'uid', Res<'String!'>>
  title: Field<'title', Res<'String!'>>
  metadata: Field<'metadata', Res<'LevelMeta!'>>
  duration: Field<'duration', Res<'Float!'>>
  size: Field<'size', Res<'FileSize!'>>
  description: Field<'description', Res<'String!'>>
  state: Field<'state', Res<'ResourceState!'>>
  censored: Field<'censored', Res<'String'>>
  tags: Field<'tags', Res<'[String!]!'>>
  category: Field<'category', Res<'[String!]!'>>
  owner: Field<'owner', Res<'User'>>
  creationDate: Field<'creationDate', Res<'Date!'>>
  modificationDate: Field<'modificationDate', Res<'Date!'>>
  bundle: Field<'bundle', Res<'LevelBundle'>>
  charts: Field<'charts', Res<'[Chart!]!'>>
  rating: Field<'rating', Res<'Rating!'>>
  owned: Field<'owned', Res<'Boolean'>>
}>

type UserLevel = TypeObject<'UserLevel', {
  id: Field<'id', Res<'Int!'>>
  version: Field<'version', Res<'Int!'>>
  uid: Field<'uid', Res<'String!'>>
  title: Field<'title', Res<'String!'>>
  metadata: Field<'metadata', Res<'LevelMeta!'>>
  duration: Field<'duration', Res<'Float!'>>
  size: Field<'size', Res<'FileSize!'>>
  description: Field<'description', Res<'String!'>>
  state: Field<'state', Res<'ResourceState!'>>
  censored: Field<'censored', Res<'String'>>
  tags: Field<'tags', Res<'[String!]!'>>
  category: Field<'category', Res<'[String!]!'>>
  creationDate: Field<'creationDate', Res<'Date!'>>
  modificationDate: Field<'modificationDate', Res<'Date!'>>
  bundle: Field<'bundle', Res<'LevelBundle'>>
  charts: Field<'charts', Res<'[Chart!]!'>>
}>

type UserStudioLevel = TypeObject<'UserStudioLevel', {
  id: Field<'id', Res<'Int!'>>
  version: Field<'version', Res<'Int!'>>
  uid: Field<'uid', Res<'String!'>>
  title: Field<'title', Res<'String!'>>
  metadata: Field<'metadata', Res<'LevelMeta!'>>
  duration: Field<'duration', Res<'Float!'>>
  size: Field<'size', Res<'FileSize!'>>
  description: Field<'description', Res<'String!'>>
  state: Field<'state', Res<'ResourceState!'>>
  censored: Field<'censored', Res<'String'>>
  tags: Field<'tags', Res<'[String!]!'>>
  category: Field<'category', Res<'[String!]!'>>
  creationDate: Field<'creationDate', Res<'Date!'>>
  modificationDate: Field<'modificationDate', Res<'Date!'>>
  bundle: Field<'bundle', Res<'LevelBundle'>>
  charts: Field<'charts', Res<'[Chart!]!'>>
  downloadCount: Field<'downloadCount', Res<'Float'>>
  playCount: Field<'playCount', Res<'Float'>>
  avgRating: Field<'avgRating', Res<'Float'>>
  ratingCount: Field<'ratingCount', Res<'Float'>>
}>

type PostMeta = TypeObject<'PostMeta', {
  cover: Field<'cover', Res<'ResourceMetaProperty'>>
}>

type Post = TypeObject<'Post', {
  id: Field<'id', Res<'String!'>>
  type: Field<'type', Res<'PostType!'>>
  uid: Field<'uid', Res<'String!'>>
  title: Field<'title', Res<'String'>>
  slogan: Field<'slogan', Res<'String'>>
  content: Field<'content', Res<'String'>>
  state: Field<'state', Res<'ResourceState!'>>
  creationDate: Field<'creationDate', Res<'Date'>>
  modificationDate: Field<'modificationDate', Res<'Date'>>
  startDate: Field<'startDate', Res<'Date'>>
  endDate: Field<'endDate', Res<'Date'>>
  cover: Field<'cover', Res<'Image'>>
  logo: Field<'logo', Res<'Image'>>
  metadata: Field<'metadata', Res<'PostMeta'>>
  locked: Field<'locked', Res<'Boolean'>>
}>

type PostDetail = TypeObject<'PostDetail', {
  id: Field<'id', Res<'String!'>>
  type: Field<'type', Res<'PostType!'>>
  uid: Field<'uid', Res<'String!'>>
  title: Field<'title', Res<'String'>>
  slogan: Field<'slogan', Res<'String'>>
  content: Field<'content', Res<'String'>>
  state: Field<'state', Res<'ResourceState!'>>
  creationDate: Field<'creationDate', Res<'Date'>>
  modificationDate: Field<'modificationDate', Res<'Date'>>
  startDate: Field<'startDate', Res<'Date'>>
  endDate: Field<'endDate', Res<'Date'>>
  cover: Field<'cover', Res<'Image'>>
  logo: Field<'logo', Res<'Image'>>
  metadata: Field<'metadata', Res<'PostMeta'>>
  locked: Field<'locked', Res<'Boolean'>>
  level: Field<'level', Res<'Level'>>
  collection: Field<'collection', Res<'Collection'>>
  epicId: Field<'epicId', Res<'String'>>
}>

type RecordDetails = TypeObject<'RecordDetails', {
  perfect: Field<'perfect', Res<'Int!'>>
  great: Field<'great', Res<'Int!'>>
  good: Field<'good', Res<'Int!'>>
  bad: Field<'bad', Res<'Int!'>>
  miss: Field<'miss', Res<'Int!'>>
  maxCombo: Field<'maxCombo', Res<'Int!'>>
}>

type RecordLevel = TypeObject<'RecordLevel', {
  id: Field<'id', Res<'Int!'>>
  version: Field<'version', Res<'Int!'>>
  uid: Field<'uid', Res<'String!'>>
  title: Field<'title', Res<'String!'>>
  metadata: Field<'metadata', Res<'LevelMeta!'>>
  duration: Field<'duration', Res<'Float!'>>
  size: Field<'size', Res<'FileSize!'>>
  description: Field<'description', Res<'String!'>>
  state: Field<'state', Res<'ResourceState!'>>
  censored: Field<'censored', Res<'String'>>
  tags: Field<'tags', Res<'[String!]!'>>
  category: Field<'category', Res<'[String!]!'>>
  owner: Field<'owner', Res<'User'>>
  creationDate: Field<'creationDate', Res<'Date!'>>
  modificationDate: Field<'modificationDate', Res<'Date!'>>
  bundle: Field<'bundle', Res<'LevelBundle'>>
}>

type RecordChart = TypeObject<'RecordChart', {
  id: Field<'id', Res<'Int!'>>
  name: Field<'name', Res<'String'>>
  difficulty: Field<'difficulty', Res<'Int!'>>
  type: Field<'type', Res<'String!'>>
  notesCount: Field<'notesCount', Res<'Int!'>>
  level: Field<'level', Res<'RecordLevel'>>
}>

type Record = TypeObject<'Record', {
  id: Field<'id', Res<'Int!'>>
  date: Field<'date', Res<'Date!'>>
  owner: Field<'owner', Res<'User'>>
  chart: Field<'chart', Res<'RecordChart'>>
  score: Field<'score', Res<'Int!'>>
  accuracy: Field<'accuracy', Res<'Float!'>>
  mods: Field<'mods', Res<'[GameplayMods!]!'>>
  ranked: Field<'ranked', Res<'Boolean!'>>
  details: Field<'details', Res<'RecordDetails!'>>
  rating: Field<'rating', Res<'Float!'>>
  recentRating: Field<'recentRating', Res<'Float'>>
  rank: Field<'rank', Res<'Int'>>
}>

type LeaderboardRecord = TypeObject<'LeaderboardRecord', {
  id: Field<'id', Res<'Int!'>>
  date: Field<'date', Res<'Date!'>>
  owner: Field<'owner', Res<'User'>>
  score: Field<'score', Res<'Int!'>>
  accuracy: Field<'accuracy', Res<'Float!'>>
  mods: Field<'mods', Res<'[GameplayMods!]!'>>
  details: Field<'details', Res<'RecordDetails!'>>
}>

type UserRecord = TypeObject<'UserRecord', {
  id: Field<'id', Res<'Int!'>>
  date: Field<'date', Res<'Date!'>>
  chart: Field<'chart', Res<'RecordChart'>>
  score: Field<'score', Res<'Int!'>>
  accuracy: Field<'accuracy', Res<'Float!'>>
  mods: Field<'mods', Res<'[GameplayMods!]!'>>
  ranked: Field<'ranked', Res<'Boolean!'>>
  details: Field<'details', Res<'RecordDetails!'>>
  rating: Field<'rating', Res<'Float!'>>
  recentRating: Field<'recentRating', Res<'Float'>>
}>

type Email = TypeObject<'Email', {
  address: Field<'address', Res<'String!'>>
  verified: Field<'verified', Res<'Boolean!'>>
  primary: Field<'primary', Res<'Boolean'>>
}>

type ProfileExp = TypeObject<'ProfileExp', {
  basicExp: Field<'basicExp', Res<'Int!'>>
  levelExp: Field<'levelExp', Res<'Int!'>>
  totalExp: Field<'totalExp', Res<'Int!'>>
  currentLevel: Field<'currentLevel', Res<'Int!'>>
  nextLevelExp: Field<'nextLevelExp', Res<'Int!'>>
  currentLevelExp: Field<'currentLevelExp', Res<'Int!'>>
}>

type ProfileGrades = TypeObject<'ProfileGrades', {
  MAX: Field<'MAX', Res<'Int!'>>
  SS: Field<'SS', Res<'Int!'>>
  S: Field<'S', Res<'Int!'>>
  A: Field<'A', Res<'Int!'>>
  B: Field<'B', Res<'Int!'>>
  C: Field<'C', Res<'Int!'>>
  D: Field<'D', Res<'Int!'>>
  F: Field<'F', Res<'Int!'>>
}>

type ProfileActivity = TypeObject<'ProfileActivity', {
  totalRankedPlays: Field<'totalRankedPlays', Res<'Long!'>>
  clearedNotes: Field<'clearedNotes', Res<'Long!'>>
  maxCombo: Field<'maxCombo', Res<'Long!'>>
  averageRankedAccuracy: Field<'averageRankedAccuracy', Res<'Float!'>>
  totalRankedScore: Field<'totalRankedScore', Res<'Long!'>>
  totalPlayTime: Field<'totalPlayTime', Res<'Float!'>>
}>

type ProfileTimeSeries = TypeObject<'ProfileTimeSeries', {
  cumulativeRating: Field<'cumulativeRating', Res<'Float!'>>
  cumulativeAccuracy: Field<'cumulativeAccuracy', Res<'Float!'>>
  week: Field<'week', Res<'Int!'>>
  year: Field<'year', Res<'Int!'>>
  accuracy: Field<'accuracy', Res<'Float!'>>
  rating: Field<'rating', Res<'Float!'>>
  count: Field<'count', Res<'Int!'>>
}>

export type Schema = DefineSchema<{
  Scalars: {
    FileSize: ScalarType<'FileSize', string>
    Date: ScalarType<'Date', string>
    Long: ScalarType<'Long', string>
    Object: ScalarType<'Object', string>
  }
  Enums: {
    ResourceState: EnumType<'ResourceState', ResourceState>
    QueryOrder: EnumType<'QueryOrder', QueryOrder>
    LevelQuerySort: EnumType<'LevelQuerySort', LevelQuerySort>
    PostType: EnumType<'PostType', PostType>
    GameplayMods: EnumType<'GameplayMods', GameplayMods>
    RecordQuerySort: EnumType<'RecordQuerySort', RecordQuerySort>
    SearchLevelSortingStrategy: EnumType<'SearchLevelSortingStrategy', SearchLevelSortingStrategy>
    SearchLevelOrder: EnumType<'SearchLevelOrder', SearchLevelOrder>
    Role: EnumType<'Role', Role>
  }
  Inputs: {
    ResourceMetaInput: ResourceMetaInput
    CollectionMetaInput: CollectionMetaInput
    CollectionInput: CollectionInput
    UpdateLevelInput: UpdateLevelInput
    PartialChartMetadata: PartialChartMetadata
    PartialMetadata: PartialMetadata
    PostMetaInput: PostMetaInput
    PostInput: PostInput
    RecordQueryInput: RecordQueryInput
    ProfileInput: ProfileInput
  }
  Objects: {
    Query: Query
    Mutation: Mutation
    ResourceMetaProperty: ResourceMetaProperty
    ResourceMeta: ResourceMeta
    Badge: Badge
    Profile: Profile
    User: User
    My: My
    CollectionUserListing: CollectionUserListing
    Collection: Collection
    CollectionListing: CollectionListing
    Comment: Comment
    File: File
    Image: Image
    Avatar: Avatar
    LevelMeta: LevelMeta
    LevelBundle: LevelBundle
    Chart: Chart
    Rating: Rating
    Level: Level
    UserLevel: UserLevel
    UserStudioLevel: UserStudioLevel
    PostMeta: PostMeta
    Post: Post
    PostDetail: PostDetail
    RecordDetails: RecordDetails
    RecordLevel: RecordLevel
    RecordChart: RecordChart
    Record: Record
    LeaderboardRecord: LeaderboardRecord
    UserRecord: UserRecord
    Email: Email
    ProfileExp: ProfileExp
    ProfileGrades: ProfileGrades
    ProfileActivity: ProfileActivity
    ProfileTimeSeries: ProfileTimeSeries
  }
}>

type Arg<T extends string> = ArgOf<Schema, T>
type Res<T extends string> = ResOf<Schema, T>

declare module '@teages/gqf/schema' {
  interface Schemas {
    'https://services.cytoid.io/graphql': Schema
  }
}
