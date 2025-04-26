/* eslint-ignore */
import type { ScalarType, EnumType, InputObjectType, Input, Field, ObjectType, UnionType, DefineSchema } from '@gqfn/core/schema'

type Scalar_Json = ScalarType<'Json', unknown, unknown>
type Scalar_CountryCode = ScalarType<'CountryCode', unknown, unknown>
type Scalar_FuzzyDateInt = ScalarType<'FuzzyDateInt', unknown, unknown>
type Scalar_Int = ScalarType<'Int', number, number>
type Scalar_Float = ScalarType<'Float', number, number>
type Scalar_String = ScalarType<'String', string, string>
type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
type Scalar_ID = ScalarType<'ID', string | number, string>

export type UserSort =
  | 'ID'
  | 'ID_DESC'
  | 'USERNAME'
  | 'USERNAME_DESC'
  | 'WATCHED_TIME'
  | 'WATCHED_TIME_DESC'
  | 'CHAPTERS_READ'
  | 'CHAPTERS_READ_DESC'
  | 'SEARCH_MATCH'
type Enum_UserSort = EnumType<'UserSort', UserSort>

export type UserTitleLanguage =
  | 'ROMAJI'
  | 'ENGLISH'
  | 'NATIVE'
  | 'ROMAJI_STYLISED'
  | 'ENGLISH_STYLISED'
  | 'NATIVE_STYLISED'
type Enum_UserTitleLanguage = EnumType<'UserTitleLanguage', UserTitleLanguage>

export type NotificationType =
  | 'ACTIVITY_MESSAGE'
  | 'ACTIVITY_REPLY'
  | 'FOLLOWING'
  | 'ACTIVITY_MENTION'
  | 'THREAD_COMMENT_MENTION'
  | 'THREAD_SUBSCRIBED'
  | 'THREAD_COMMENT_REPLY'
  | 'AIRING'
  | 'ACTIVITY_LIKE'
  | 'ACTIVITY_REPLY_LIKE'
  | 'THREAD_LIKE'
  | 'THREAD_COMMENT_LIKE'
  | 'ACTIVITY_REPLY_SUBSCRIBED'
  | 'RELATED_MEDIA_ADDITION'
  | 'MEDIA_DATA_CHANGE'
  | 'MEDIA_MERGE'
  | 'MEDIA_DELETION'
type Enum_NotificationType = EnumType<'NotificationType', NotificationType>

export type UserStaffNameLanguage =
  | 'ROMAJI_WESTERN'
  | 'ROMAJI'
  | 'NATIVE'
type Enum_UserStaffNameLanguage = EnumType<'UserStaffNameLanguage', UserStaffNameLanguage>

export type MediaListStatus =
  | 'CURRENT'
  | 'PLANNING'
  | 'COMPLETED'
  | 'DROPPED'
  | 'PAUSED'
  | 'REPEATING'
type Enum_MediaListStatus = EnumType<'MediaListStatus', MediaListStatus>

export type ScoreFormat =
  | 'POINT_100'
  | 'POINT_10_DECIMAL'
  | 'POINT_10'
  | 'POINT_5'
  | 'POINT_3'
type Enum_ScoreFormat = EnumType<'ScoreFormat', ScoreFormat>

export type MediaType =
  | 'ANIME'
  | 'MANGA'
type Enum_MediaType = EnumType<'MediaType', MediaType>

export type MediaFormat =
  | 'TV'
  | 'TV_SHORT'
  | 'MOVIE'
  | 'SPECIAL'
  | 'OVA'
  | 'ONA'
  | 'MUSIC'
  | 'MANGA'
  | 'NOVEL'
  | 'ONE_SHOT'
type Enum_MediaFormat = EnumType<'MediaFormat', MediaFormat>

export type MediaStatus =
  | 'FINISHED'
  | 'RELEASING'
  | 'NOT_YET_RELEASED'
  | 'CANCELLED'
  | 'HIATUS'
type Enum_MediaStatus = EnumType<'MediaStatus', MediaStatus>

export type MediaSeason =
  | 'WINTER'
  | 'SPRING'
  | 'SUMMER'
  | 'FALL'
type Enum_MediaSeason = EnumType<'MediaSeason', MediaSeason>

export type MediaSource =
  | 'ORIGINAL'
  | 'MANGA'
  | 'LIGHT_NOVEL'
  | 'VISUAL_NOVEL'
  | 'VIDEO_GAME'
  | 'OTHER'
  | 'NOVEL'
  | 'DOUJINSHI'
  | 'ANIME'
  | 'WEB_NOVEL'
  | 'LIVE_ACTION'
  | 'GAME'
  | 'COMIC'
  | 'MULTIMEDIA_PROJECT'
  | 'PICTURE_BOOK'
type Enum_MediaSource = EnumType<'MediaSource', MediaSource>

export type CharacterSort =
  | 'ID'
  | 'ID_DESC'
  | 'ROLE'
  | 'ROLE_DESC'
  | 'SEARCH_MATCH'
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'
  | 'RELEVANCE'
type Enum_CharacterSort = EnumType<'CharacterSort', CharacterSort>

export type CharacterRole =
  | 'MAIN'
  | 'SUPPORTING'
  | 'BACKGROUND'
type Enum_CharacterRole = EnumType<'CharacterRole', CharacterRole>

export type MediaSort =
  | 'ID'
  | 'ID_DESC'
  | 'TITLE_ROMAJI'
  | 'TITLE_ROMAJI_DESC'
  | 'TITLE_ENGLISH'
  | 'TITLE_ENGLISH_DESC'
  | 'TITLE_NATIVE'
  | 'TITLE_NATIVE_DESC'
  | 'TYPE'
  | 'TYPE_DESC'
  | 'FORMAT'
  | 'FORMAT_DESC'
  | 'START_DATE'
  | 'START_DATE_DESC'
  | 'END_DATE'
  | 'END_DATE_DESC'
  | 'SCORE'
  | 'SCORE_DESC'
  | 'POPULARITY'
  | 'POPULARITY_DESC'
  | 'TRENDING'
  | 'TRENDING_DESC'
  | 'EPISODES'
  | 'EPISODES_DESC'
  | 'DURATION'
  | 'DURATION_DESC'
  | 'STATUS'
  | 'STATUS_DESC'
  | 'CHAPTERS'
  | 'CHAPTERS_DESC'
  | 'VOLUMES'
  | 'VOLUMES_DESC'
  | 'UPDATED_AT'
  | 'UPDATED_AT_DESC'
  | 'SEARCH_MATCH'
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'
type Enum_MediaSort = EnumType<'MediaSort', MediaSort>

export type StaffLanguage =
  | 'JAPANESE'
  | 'ENGLISH'
  | 'KOREAN'
  | 'ITALIAN'
  | 'SPANISH'
  | 'PORTUGUESE'
  | 'FRENCH'
  | 'GERMAN'
  | 'HEBREW'
  | 'HUNGARIAN'
type Enum_StaffLanguage = EnumType<'StaffLanguage', StaffLanguage>

export type StaffSort =
  | 'ID'
  | 'ID_DESC'
  | 'ROLE'
  | 'ROLE_DESC'
  | 'LANGUAGE'
  | 'LANGUAGE_DESC'
  | 'SEARCH_MATCH'
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'
  | 'RELEVANCE'
type Enum_StaffSort = EnumType<'StaffSort', StaffSort>

export type StudioSort =
  | 'ID'
  | 'ID_DESC'
  | 'NAME'
  | 'NAME_DESC'
  | 'SEARCH_MATCH'
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'
type Enum_StudioSort = EnumType<'StudioSort', StudioSort>

export type MediaTrendSort =
  | 'ID'
  | 'ID_DESC'
  | 'MEDIA_ID'
  | 'MEDIA_ID_DESC'
  | 'DATE'
  | 'DATE_DESC'
  | 'SCORE'
  | 'SCORE_DESC'
  | 'POPULARITY'
  | 'POPULARITY_DESC'
  | 'TRENDING'
  | 'TRENDING_DESC'
  | 'EPISODE'
  | 'EPISODE_DESC'
type Enum_MediaTrendSort = EnumType<'MediaTrendSort', MediaTrendSort>

export type ExternalLinkType =
  | 'INFO'
  | 'STREAMING'
  | 'SOCIAL'
type Enum_ExternalLinkType = EnumType<'ExternalLinkType', ExternalLinkType>

export type MediaRankType =
  | 'RATED'
  | 'POPULAR'
type Enum_MediaRankType = EnumType<'MediaRankType', MediaRankType>

export type ReviewSort =
  | 'ID'
  | 'ID_DESC'
  | 'SCORE'
  | 'SCORE_DESC'
  | 'RATING'
  | 'RATING_DESC'
  | 'CREATED_AT'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT'
  | 'UPDATED_AT_DESC'
type Enum_ReviewSort = EnumType<'ReviewSort', ReviewSort>

export type ReviewRating =
  | 'NO_VOTE'
  | 'UP_VOTE'
  | 'DOWN_VOTE'
type Enum_ReviewRating = EnumType<'ReviewRating', ReviewRating>

export type RecommendationSort =
  | 'ID'
  | 'ID_DESC'
  | 'RATING'
  | 'RATING_DESC'
type Enum_RecommendationSort = EnumType<'RecommendationSort', RecommendationSort>

export type RecommendationRating =
  | 'NO_RATING'
  | 'RATE_UP'
  | 'RATE_DOWN'
type Enum_RecommendationRating = EnumType<'RecommendationRating', RecommendationRating>

export type MediaRelation =
  | 'ADAPTATION'
  | 'PREQUEL'
  | 'SEQUEL'
  | 'PARENT'
  | 'SIDE_STORY'
  | 'CHARACTER'
  | 'SUMMARY'
  | 'ALTERNATIVE'
  | 'SPIN_OFF'
  | 'OTHER'
  | 'SOURCE'
  | 'COMPILATION'
  | 'CONTAINS'
type Enum_MediaRelation = EnumType<'MediaRelation', MediaRelation>

export type UserStatisticsSort =
  | 'ID'
  | 'ID_DESC'
  | 'COUNT'
  | 'COUNT_DESC'
  | 'PROGRESS'
  | 'PROGRESS_DESC'
  | 'MEAN_SCORE'
  | 'MEAN_SCORE_DESC'
type Enum_UserStatisticsSort = EnumType<'UserStatisticsSort', UserStatisticsSort>

export type ModRole =
  | 'ADMIN'
  | 'LEAD_DEVELOPER'
  | 'DEVELOPER'
  | 'LEAD_COMMUNITY'
  | 'COMMUNITY'
  | 'DISCORD_COMMUNITY'
  | 'LEAD_ANIME_DATA'
  | 'ANIME_DATA'
  | 'LEAD_MANGA_DATA'
  | 'MANGA_DATA'
  | 'LEAD_SOCIAL_MEDIA'
  | 'SOCIAL_MEDIA'
  | 'RETIRED'
  | 'CHARACTER_DATA'
  | 'STAFF_DATA'
type Enum_ModRole = EnumType<'ModRole', ModRole>

export type MediaListSort =
  | 'MEDIA_ID'
  | 'MEDIA_ID_DESC'
  | 'SCORE'
  | 'SCORE_DESC'
  | 'STATUS'
  | 'STATUS_DESC'
  | 'PROGRESS'
  | 'PROGRESS_DESC'
  | 'PROGRESS_VOLUMES'
  | 'PROGRESS_VOLUMES_DESC'
  | 'REPEAT'
  | 'REPEAT_DESC'
  | 'PRIORITY'
  | 'PRIORITY_DESC'
  | 'STARTED_ON'
  | 'STARTED_ON_DESC'
  | 'FINISHED_ON'
  | 'FINISHED_ON_DESC'
  | 'ADDED_TIME'
  | 'ADDED_TIME_DESC'
  | 'UPDATED_TIME'
  | 'UPDATED_TIME_DESC'
  | 'MEDIA_TITLE_ROMAJI'
  | 'MEDIA_TITLE_ROMAJI_DESC'
  | 'MEDIA_TITLE_ENGLISH'
  | 'MEDIA_TITLE_ENGLISH_DESC'
  | 'MEDIA_TITLE_NATIVE'
  | 'MEDIA_TITLE_NATIVE_DESC'
  | 'MEDIA_POPULARITY'
  | 'MEDIA_POPULARITY_DESC'
type Enum_MediaListSort = EnumType<'MediaListSort', MediaListSort>

export type AiringSort =
  | 'ID'
  | 'ID_DESC'
  | 'MEDIA_ID'
  | 'MEDIA_ID_DESC'
  | 'TIME'
  | 'TIME_DESC'
  | 'EPISODE'
  | 'EPISODE_DESC'
type Enum_AiringSort = EnumType<'AiringSort', AiringSort>

export type ActivityType =
  | 'TEXT'
  | 'ANIME_LIST'
  | 'MANGA_LIST'
  | 'MESSAGE'
  | 'MEDIA_LIST'
type Enum_ActivityType = EnumType<'ActivityType', ActivityType>

export type ActivitySort =
  | 'ID'
  | 'ID_DESC'
  | 'PINNED'
type Enum_ActivitySort = EnumType<'ActivitySort', ActivitySort>

export type ThreadSort =
  | 'ID'
  | 'ID_DESC'
  | 'TITLE'
  | 'TITLE_DESC'
  | 'CREATED_AT'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT'
  | 'UPDATED_AT_DESC'
  | 'REPLIED_AT'
  | 'REPLIED_AT_DESC'
  | 'REPLY_COUNT'
  | 'REPLY_COUNT_DESC'
  | 'VIEW_COUNT'
  | 'VIEW_COUNT_DESC'
  | 'IS_STICKY'
  | 'SEARCH_MATCH'
type Enum_ThreadSort = EnumType<'ThreadSort', ThreadSort>

export type ThreadCommentSort =
  | 'ID'
  | 'ID_DESC'
type Enum_ThreadCommentSort = EnumType<'ThreadCommentSort', ThreadCommentSort>

export type LikeableType =
  | 'THREAD'
  | 'THREAD_COMMENT'
  | 'ACTIVITY'
  | 'ACTIVITY_REPLY'
type Enum_LikeableType = EnumType<'LikeableType', LikeableType>

export type SiteTrendSort =
  | 'DATE'
  | 'DATE_DESC'
  | 'COUNT'
  | 'COUNT_DESC'
  | 'CHANGE'
  | 'CHANGE_DESC'
type Enum_SiteTrendSort = EnumType<'SiteTrendSort', SiteTrendSort>

export type ExternalLinkMediaType =
  | 'ANIME'
  | 'MANGA'
  | 'STAFF'
type Enum_ExternalLinkMediaType = EnumType<'ExternalLinkMediaType', ExternalLinkMediaType>

export type SubmissionStatus =
  | 'PENDING'
  | 'REJECTED'
  | 'PARTIALLY_ACCEPTED'
  | 'ACCEPTED'
type Enum_SubmissionStatus = EnumType<'SubmissionStatus', SubmissionStatus>

export type SubmissionSort =
  | 'ID'
  | 'ID_DESC'
type Enum_SubmissionSort = EnumType<'SubmissionSort', SubmissionSort>

export type RevisionHistoryAction =
  | 'CREATE'
  | 'EDIT'
type Enum_RevisionHistoryAction = EnumType<'RevisionHistoryAction', RevisionHistoryAction>

export type ModActionType =
  | 'NOTE'
  | 'BAN'
  | 'DELETE'
  | 'EDIT'
  | 'EXPIRE'
  | 'REPORT'
  | 'RESET'
  | 'ANON'
type Enum_ModActionType = EnumType<'ModActionType', ModActionType>

type Input_NotificationOptionInput = InputObjectType<'NotificationOptionInput', {
  type: Input<'NotificationType', Enum_NotificationType>
  enabled: Input<'Boolean', Scalar_Boolean>
}>

type Input_MediaListOptionsInput = InputObjectType<'MediaListOptionsInput', {
  sectionOrder: Input<'[String]', Scalar_String>
  splitCompletedSectionByFormat: Input<'Boolean', Scalar_Boolean>
  customLists: Input<'[String]', Scalar_String>
  advancedScoring: Input<'[String]', Scalar_String>
  advancedScoringEnabled: Input<'Boolean', Scalar_Boolean>
  theme: Input<'String', Scalar_String>
}>

type Input_ListActivityOptionInput = InputObjectType<'ListActivityOptionInput', {
  disabled: Input<'Boolean', Scalar_Boolean>
  type: Input<'MediaListStatus', Enum_MediaListStatus>
}>

type Input_FuzzyDateInput = InputObjectType<'FuzzyDateInput', {
  year: Input<'Int', Scalar_Int>
  month: Input<'Int', Scalar_Int>
  day: Input<'Int', Scalar_Int>
}>

type Input_AniChartHighlightInput = InputObjectType<'AniChartHighlightInput', {
  mediaId: Input<'Int', Scalar_Int>
  highlight: Input<'String', Scalar_String>
}>

type Input_MediaTitleInput = InputObjectType<'MediaTitleInput', {
  romaji: Input<'String', Scalar_String>
  english: Input<'String', Scalar_String>
  native: Input<'String', Scalar_String>
}>

type Input_AiringScheduleInput = InputObjectType<'AiringScheduleInput', {
  airingAt: Input<'Int', Scalar_Int>
  episode: Input<'Int', Scalar_Int>
  timeUntilAiring: Input<'Int', Scalar_Int>
}>

type Input_MediaExternalLinkInput = InputObjectType<'MediaExternalLinkInput', {
  id: Input<'Int!', Scalar_Int>
  url: Input<'String!', Scalar_String>
  site: Input<'String!', Scalar_String>
}>

type Input_CharacterNameInput = InputObjectType<'CharacterNameInput', {
  first: Input<'String', Scalar_String>
  middle: Input<'String', Scalar_String>
  last: Input<'String', Scalar_String>
  native: Input<'String', Scalar_String>
  alternative: Input<'[String]', Scalar_String>
  alternativeSpoiler: Input<'[String]', Scalar_String>
}>

type Input_StaffNameInput = InputObjectType<'StaffNameInput', {
  first: Input<'String', Scalar_String>
  middle: Input<'String', Scalar_String>
  last: Input<'String', Scalar_String>
  native: Input<'String', Scalar_String>
  alternative: Input<'[String]', Scalar_String>
}>

type Type_Query = ObjectType<'Query', {
  Page: Field<'Page', Type_Page, {
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  Media: Field<'Media', Type_Media, {
    id: Input<'Int', Scalar_Int>
    idMal: Input<'Int', Scalar_Int>
    startDate: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    endDate: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    season: Input<'MediaSeason', Enum_MediaSeason>
    seasonYear: Input<'Int', Scalar_Int>
    type: Input<'MediaType', Enum_MediaType>
    format: Input<'MediaFormat', Enum_MediaFormat>
    status: Input<'MediaStatus', Enum_MediaStatus>
    episodes: Input<'Int', Scalar_Int>
    duration: Input<'Int', Scalar_Int>
    chapters: Input<'Int', Scalar_Int>
    volumes: Input<'Int', Scalar_Int>
    isAdult: Input<'Boolean', Scalar_Boolean>
    genre: Input<'String', Scalar_String>
    tag: Input<'String', Scalar_String>
    minimumTagRank: Input<'Int', Scalar_Int>
    tagCategory: Input<'String', Scalar_String>
    onList: Input<'Boolean', Scalar_Boolean>
    licensedBy: Input<'String', Scalar_String>
    licensedById: Input<'Int', Scalar_Int>
    averageScore: Input<'Int', Scalar_Int>
    popularity: Input<'Int', Scalar_Int>
    source: Input<'MediaSource', Enum_MediaSource>
    countryOfOrigin: Input<'CountryCode', Scalar_CountryCode>
    isLicensed: Input<'Boolean', Scalar_Boolean>
    search: Input<'String', Scalar_String>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    idMal_not: Input<'Int', Scalar_Int>
    idMal_in: Input<'[Int]', Scalar_Int>
    idMal_not_in: Input<'[Int]', Scalar_Int>
    startDate_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startDate_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startDate_like: Input<'String', Scalar_String>
    endDate_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    endDate_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    endDate_like: Input<'String', Scalar_String>
    format_in: Input<'[MediaFormat]', Enum_MediaFormat>
    format_not: Input<'MediaFormat', Enum_MediaFormat>
    format_not_in: Input<'[MediaFormat]', Enum_MediaFormat>
    status_in: Input<'[MediaStatus]', Enum_MediaStatus>
    status_not: Input<'MediaStatus', Enum_MediaStatus>
    status_not_in: Input<'[MediaStatus]', Enum_MediaStatus>
    episodes_greater: Input<'Int', Scalar_Int>
    episodes_lesser: Input<'Int', Scalar_Int>
    duration_greater: Input<'Int', Scalar_Int>
    duration_lesser: Input<'Int', Scalar_Int>
    chapters_greater: Input<'Int', Scalar_Int>
    chapters_lesser: Input<'Int', Scalar_Int>
    volumes_greater: Input<'Int', Scalar_Int>
    volumes_lesser: Input<'Int', Scalar_Int>
    genre_in: Input<'[String]', Scalar_String>
    genre_not_in: Input<'[String]', Scalar_String>
    tag_in: Input<'[String]', Scalar_String>
    tag_not_in: Input<'[String]', Scalar_String>
    tagCategory_in: Input<'[String]', Scalar_String>
    tagCategory_not_in: Input<'[String]', Scalar_String>
    licensedBy_in: Input<'[String]', Scalar_String>
    licensedById_in: Input<'[Int]', Scalar_Int>
    averageScore_not: Input<'Int', Scalar_Int>
    averageScore_greater: Input<'Int', Scalar_Int>
    averageScore_lesser: Input<'Int', Scalar_Int>
    popularity_not: Input<'Int', Scalar_Int>
    popularity_greater: Input<'Int', Scalar_Int>
    popularity_lesser: Input<'Int', Scalar_Int>
    source_in: Input<'[MediaSource]', Enum_MediaSource>
    sort: Input<'[MediaSort]', Enum_MediaSort>
  }>
  MediaTrend: Field<'MediaTrend', Type_MediaTrend, {
    mediaId: Input<'Int', Scalar_Int>
    date: Input<'Int', Scalar_Int>
    trending: Input<'Int', Scalar_Int>
    averageScore: Input<'Int', Scalar_Int>
    popularity: Input<'Int', Scalar_Int>
    episode: Input<'Int', Scalar_Int>
    releasing: Input<'Boolean', Scalar_Boolean>
    mediaId_not: Input<'Int', Scalar_Int>
    mediaId_in: Input<'[Int]', Scalar_Int>
    mediaId_not_in: Input<'[Int]', Scalar_Int>
    date_greater: Input<'Int', Scalar_Int>
    date_lesser: Input<'Int', Scalar_Int>
    trending_greater: Input<'Int', Scalar_Int>
    trending_lesser: Input<'Int', Scalar_Int>
    trending_not: Input<'Int', Scalar_Int>
    averageScore_greater: Input<'Int', Scalar_Int>
    averageScore_lesser: Input<'Int', Scalar_Int>
    averageScore_not: Input<'Int', Scalar_Int>
    popularity_greater: Input<'Int', Scalar_Int>
    popularity_lesser: Input<'Int', Scalar_Int>
    popularity_not: Input<'Int', Scalar_Int>
    episode_greater: Input<'Int', Scalar_Int>
    episode_lesser: Input<'Int', Scalar_Int>
    episode_not: Input<'Int', Scalar_Int>
    sort: Input<'[MediaTrendSort]', Enum_MediaTrendSort>
  }>
  AiringSchedule: Field<'AiringSchedule', Type_AiringSchedule, {
    id: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    episode: Input<'Int', Scalar_Int>
    airingAt: Input<'Int', Scalar_Int>
    notYetAired: Input<'Boolean', Scalar_Boolean>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    mediaId_not: Input<'Int', Scalar_Int>
    mediaId_in: Input<'[Int]', Scalar_Int>
    mediaId_not_in: Input<'[Int]', Scalar_Int>
    episode_not: Input<'Int', Scalar_Int>
    episode_in: Input<'[Int]', Scalar_Int>
    episode_not_in: Input<'[Int]', Scalar_Int>
    episode_greater: Input<'Int', Scalar_Int>
    episode_lesser: Input<'Int', Scalar_Int>
    airingAt_greater: Input<'Int', Scalar_Int>
    airingAt_lesser: Input<'Int', Scalar_Int>
    sort: Input<'[AiringSort]', Enum_AiringSort>
  }>
  Character: Field<'Character', Type_Character, {
    id: Input<'Int', Scalar_Int>
    isBirthday: Input<'Boolean', Scalar_Boolean>
    search: Input<'String', Scalar_String>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    sort: Input<'[CharacterSort]', Enum_CharacterSort>
  }>
  Staff: Field<'Staff', Type_Staff, {
    id: Input<'Int', Scalar_Int>
    isBirthday: Input<'Boolean', Scalar_Boolean>
    search: Input<'String', Scalar_String>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    sort: Input<'[StaffSort]', Enum_StaffSort>
  }>
  MediaList: Field<'MediaList', Type_MediaList, {
    id: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    userName: Input<'String', Scalar_String>
    type: Input<'MediaType', Enum_MediaType>
    status: Input<'MediaListStatus', Enum_MediaListStatus>
    mediaId: Input<'Int', Scalar_Int>
    isFollowing: Input<'Boolean', Scalar_Boolean>
    notes: Input<'String', Scalar_String>
    startedAt: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    completedAt: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    compareWithAuthList: Input<'Boolean', Scalar_Boolean>
    userId_in: Input<'[Int]', Scalar_Int>
    status_in: Input<'[MediaListStatus]', Enum_MediaListStatus>
    status_not_in: Input<'[MediaListStatus]', Enum_MediaListStatus>
    status_not: Input<'MediaListStatus', Enum_MediaListStatus>
    mediaId_in: Input<'[Int]', Scalar_Int>
    mediaId_not_in: Input<'[Int]', Scalar_Int>
    notes_like: Input<'String', Scalar_String>
    startedAt_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startedAt_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startedAt_like: Input<'String', Scalar_String>
    completedAt_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    completedAt_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    completedAt_like: Input<'String', Scalar_String>
    sort: Input<'[MediaListSort]', Enum_MediaListSort>
  }>
  MediaListCollection: Field<'MediaListCollection', Type_MediaListCollection, {
    userId: Input<'Int', Scalar_Int>
    userName: Input<'String', Scalar_String>
    type: Input<'MediaType', Enum_MediaType>
    status: Input<'MediaListStatus', Enum_MediaListStatus>
    notes: Input<'String', Scalar_String>
    startedAt: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    completedAt: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    forceSingleCompletedList: Input<'Boolean', Scalar_Boolean>
    chunk: Input<'Int', Scalar_Int>
    perChunk: Input<'Int', Scalar_Int>
    status_in: Input<'[MediaListStatus]', Enum_MediaListStatus>
    status_not_in: Input<'[MediaListStatus]', Enum_MediaListStatus>
    status_not: Input<'MediaListStatus', Enum_MediaListStatus>
    notes_like: Input<'String', Scalar_String>
    startedAt_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startedAt_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startedAt_like: Input<'String', Scalar_String>
    completedAt_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    completedAt_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    completedAt_like: Input<'String', Scalar_String>
    sort: Input<'[MediaListSort]', Enum_MediaListSort>
  }>
  GenreCollection: Field<'[String]', Scalar_String>
  MediaTagCollection: Field<'[MediaTag]', Type_MediaTag, {
    status: Input<'Int', Scalar_Int>
  }>
  User: Field<'User', Type_User, {
    id: Input<'Int', Scalar_Int>
    name: Input<'String', Scalar_String>
    isModerator: Input<'Boolean', Scalar_Boolean>
    search: Input<'String', Scalar_String>
    sort: Input<'[UserSort]', Enum_UserSort>
  }>
  Viewer: Field<'User', Type_User>
  Notification: Field<'NotificationUnion', Union_NotificationUnion, {
    type: Input<'NotificationType', Enum_NotificationType>
    resetNotificationCount: Input<'Boolean', Scalar_Boolean>
    type_in: Input<'[NotificationType]', Enum_NotificationType>
  }>
  Studio: Field<'Studio', Type_Studio, {
    id: Input<'Int', Scalar_Int>
    search: Input<'String', Scalar_String>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    sort: Input<'[StudioSort]', Enum_StudioSort>
  }>
  Review: Field<'Review', Type_Review, {
    id: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    mediaType: Input<'MediaType', Enum_MediaType>
    sort: Input<'[ReviewSort]', Enum_ReviewSort>
  }>
  Activity: Field<'ActivityUnion', Union_ActivityUnion, {
    id: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    messengerId: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    type: Input<'ActivityType', Enum_ActivityType>
    isFollowing: Input<'Boolean', Scalar_Boolean>
    hasReplies: Input<'Boolean', Scalar_Boolean>
    hasRepliesOrTypeText: Input<'Boolean', Scalar_Boolean>
    createdAt: Input<'Int', Scalar_Int>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    userId_not: Input<'Int', Scalar_Int>
    userId_in: Input<'[Int]', Scalar_Int>
    userId_not_in: Input<'[Int]', Scalar_Int>
    messengerId_not: Input<'Int', Scalar_Int>
    messengerId_in: Input<'[Int]', Scalar_Int>
    messengerId_not_in: Input<'[Int]', Scalar_Int>
    mediaId_not: Input<'Int', Scalar_Int>
    mediaId_in: Input<'[Int]', Scalar_Int>
    mediaId_not_in: Input<'[Int]', Scalar_Int>
    type_not: Input<'ActivityType', Enum_ActivityType>
    type_in: Input<'[ActivityType]', Enum_ActivityType>
    type_not_in: Input<'[ActivityType]', Enum_ActivityType>
    createdAt_greater: Input<'Int', Scalar_Int>
    createdAt_lesser: Input<'Int', Scalar_Int>
    sort: Input<'[ActivitySort]', Enum_ActivitySort>
  }>
  ActivityReply: Field<'ActivityReply', Type_ActivityReply, {
    id: Input<'Int', Scalar_Int>
    activityId: Input<'Int', Scalar_Int>
  }>
  Following: Field<'User', Type_User, {
    userId: Input<'Int!', Scalar_Int>
    sort: Input<'[UserSort]', Enum_UserSort>
  }>
  Follower: Field<'User', Type_User, {
    userId: Input<'Int!', Scalar_Int>
    sort: Input<'[UserSort]', Enum_UserSort>
  }>
  Thread: Field<'Thread', Type_Thread, {
    id: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    replyUserId: Input<'Int', Scalar_Int>
    subscribed: Input<'Boolean', Scalar_Boolean>
    categoryId: Input<'Int', Scalar_Int>
    mediaCategoryId: Input<'Int', Scalar_Int>
    search: Input<'String', Scalar_String>
    id_in: Input<'[Int]', Scalar_Int>
    sort: Input<'[ThreadSort]', Enum_ThreadSort>
  }>
  ThreadComment: Field<'[ThreadComment]', Type_ThreadComment, {
    id: Input<'Int', Scalar_Int>
    threadId: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    sort: Input<'[ThreadCommentSort]', Enum_ThreadCommentSort>
  }>
  Recommendation: Field<'Recommendation', Type_Recommendation, {
    id: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    mediaRecommendationId: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    rating: Input<'Int', Scalar_Int>
    onList: Input<'Boolean', Scalar_Boolean>
    rating_greater: Input<'Int', Scalar_Int>
    rating_lesser: Input<'Int', Scalar_Int>
    sort: Input<'[RecommendationSort]', Enum_RecommendationSort>
  }>
  Like: Field<'User', Type_User, {
    likeableId: Input<'Int', Scalar_Int>
    type: Input<'LikeableType', Enum_LikeableType>
  }>
  Markdown: Field<'ParsedMarkdown', Type_ParsedMarkdown, {
    markdown: Input<'String!', Scalar_String>
  }>
  AniChartUser: Field<'AniChartUser', Type_AniChartUser>
  SiteStatistics: Field<'SiteStatistics', Type_SiteStatistics>
  ExternalLinkSourceCollection: Field<'[MediaExternalLink]', Type_MediaExternalLink, {
    id: Input<'Int', Scalar_Int>
    type: Input<'ExternalLinkType', Enum_ExternalLinkType>
    mediaType: Input<'ExternalLinkMediaType', Enum_ExternalLinkMediaType>
  }>
}>

type Type_Page = ObjectType<'Page', {
  pageInfo: Field<'PageInfo', Type_PageInfo>
  users: Field<'[User]', Type_User, {
    id: Input<'Int', Scalar_Int>
    name: Input<'String', Scalar_String>
    isModerator: Input<'Boolean', Scalar_Boolean>
    search: Input<'String', Scalar_String>
    sort: Input<'[UserSort]', Enum_UserSort>
  }>
  media: Field<'[Media]', Type_Media, {
    id: Input<'Int', Scalar_Int>
    idMal: Input<'Int', Scalar_Int>
    startDate: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    endDate: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    season: Input<'MediaSeason', Enum_MediaSeason>
    seasonYear: Input<'Int', Scalar_Int>
    type: Input<'MediaType', Enum_MediaType>
    format: Input<'MediaFormat', Enum_MediaFormat>
    status: Input<'MediaStatus', Enum_MediaStatus>
    episodes: Input<'Int', Scalar_Int>
    duration: Input<'Int', Scalar_Int>
    chapters: Input<'Int', Scalar_Int>
    volumes: Input<'Int', Scalar_Int>
    isAdult: Input<'Boolean', Scalar_Boolean>
    genre: Input<'String', Scalar_String>
    tag: Input<'String', Scalar_String>
    minimumTagRank: Input<'Int', Scalar_Int>
    tagCategory: Input<'String', Scalar_String>
    onList: Input<'Boolean', Scalar_Boolean>
    licensedBy: Input<'String', Scalar_String>
    licensedById: Input<'Int', Scalar_Int>
    averageScore: Input<'Int', Scalar_Int>
    popularity: Input<'Int', Scalar_Int>
    source: Input<'MediaSource', Enum_MediaSource>
    countryOfOrigin: Input<'CountryCode', Scalar_CountryCode>
    isLicensed: Input<'Boolean', Scalar_Boolean>
    search: Input<'String', Scalar_String>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    idMal_not: Input<'Int', Scalar_Int>
    idMal_in: Input<'[Int]', Scalar_Int>
    idMal_not_in: Input<'[Int]', Scalar_Int>
    startDate_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startDate_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startDate_like: Input<'String', Scalar_String>
    endDate_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    endDate_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    endDate_like: Input<'String', Scalar_String>
    format_in: Input<'[MediaFormat]', Enum_MediaFormat>
    format_not: Input<'MediaFormat', Enum_MediaFormat>
    format_not_in: Input<'[MediaFormat]', Enum_MediaFormat>
    status_in: Input<'[MediaStatus]', Enum_MediaStatus>
    status_not: Input<'MediaStatus', Enum_MediaStatus>
    status_not_in: Input<'[MediaStatus]', Enum_MediaStatus>
    episodes_greater: Input<'Int', Scalar_Int>
    episodes_lesser: Input<'Int', Scalar_Int>
    duration_greater: Input<'Int', Scalar_Int>
    duration_lesser: Input<'Int', Scalar_Int>
    chapters_greater: Input<'Int', Scalar_Int>
    chapters_lesser: Input<'Int', Scalar_Int>
    volumes_greater: Input<'Int', Scalar_Int>
    volumes_lesser: Input<'Int', Scalar_Int>
    genre_in: Input<'[String]', Scalar_String>
    genre_not_in: Input<'[String]', Scalar_String>
    tag_in: Input<'[String]', Scalar_String>
    tag_not_in: Input<'[String]', Scalar_String>
    tagCategory_in: Input<'[String]', Scalar_String>
    tagCategory_not_in: Input<'[String]', Scalar_String>
    licensedBy_in: Input<'[String]', Scalar_String>
    licensedById_in: Input<'[Int]', Scalar_Int>
    averageScore_not: Input<'Int', Scalar_Int>
    averageScore_greater: Input<'Int', Scalar_Int>
    averageScore_lesser: Input<'Int', Scalar_Int>
    popularity_not: Input<'Int', Scalar_Int>
    popularity_greater: Input<'Int', Scalar_Int>
    popularity_lesser: Input<'Int', Scalar_Int>
    source_in: Input<'[MediaSource]', Enum_MediaSource>
    sort: Input<'[MediaSort]', Enum_MediaSort>
  }>
  characters: Field<'[Character]', Type_Character, {
    id: Input<'Int', Scalar_Int>
    isBirthday: Input<'Boolean', Scalar_Boolean>
    search: Input<'String', Scalar_String>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    sort: Input<'[CharacterSort]', Enum_CharacterSort>
  }>
  staff: Field<'[Staff]', Type_Staff, {
    id: Input<'Int', Scalar_Int>
    isBirthday: Input<'Boolean', Scalar_Boolean>
    search: Input<'String', Scalar_String>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    sort: Input<'[StaffSort]', Enum_StaffSort>
  }>
  studios: Field<'[Studio]', Type_Studio, {
    id: Input<'Int', Scalar_Int>
    search: Input<'String', Scalar_String>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    sort: Input<'[StudioSort]', Enum_StudioSort>
  }>
  mediaList: Field<'[MediaList]', Type_MediaList, {
    id: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    userName: Input<'String', Scalar_String>
    type: Input<'MediaType', Enum_MediaType>
    status: Input<'MediaListStatus', Enum_MediaListStatus>
    mediaId: Input<'Int', Scalar_Int>
    isFollowing: Input<'Boolean', Scalar_Boolean>
    notes: Input<'String', Scalar_String>
    startedAt: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    completedAt: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    compareWithAuthList: Input<'Boolean', Scalar_Boolean>
    userId_in: Input<'[Int]', Scalar_Int>
    status_in: Input<'[MediaListStatus]', Enum_MediaListStatus>
    status_not_in: Input<'[MediaListStatus]', Enum_MediaListStatus>
    status_not: Input<'MediaListStatus', Enum_MediaListStatus>
    mediaId_in: Input<'[Int]', Scalar_Int>
    mediaId_not_in: Input<'[Int]', Scalar_Int>
    notes_like: Input<'String', Scalar_String>
    startedAt_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startedAt_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startedAt_like: Input<'String', Scalar_String>
    completedAt_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    completedAt_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    completedAt_like: Input<'String', Scalar_String>
    sort: Input<'[MediaListSort]', Enum_MediaListSort>
  }>
  airingSchedules: Field<'[AiringSchedule]', Type_AiringSchedule, {
    id: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    episode: Input<'Int', Scalar_Int>
    airingAt: Input<'Int', Scalar_Int>
    notYetAired: Input<'Boolean', Scalar_Boolean>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    mediaId_not: Input<'Int', Scalar_Int>
    mediaId_in: Input<'[Int]', Scalar_Int>
    mediaId_not_in: Input<'[Int]', Scalar_Int>
    episode_not: Input<'Int', Scalar_Int>
    episode_in: Input<'[Int]', Scalar_Int>
    episode_not_in: Input<'[Int]', Scalar_Int>
    episode_greater: Input<'Int', Scalar_Int>
    episode_lesser: Input<'Int', Scalar_Int>
    airingAt_greater: Input<'Int', Scalar_Int>
    airingAt_lesser: Input<'Int', Scalar_Int>
    sort: Input<'[AiringSort]', Enum_AiringSort>
  }>
  mediaTrends: Field<'[MediaTrend]', Type_MediaTrend, {
    mediaId: Input<'Int', Scalar_Int>
    date: Input<'Int', Scalar_Int>
    trending: Input<'Int', Scalar_Int>
    averageScore: Input<'Int', Scalar_Int>
    popularity: Input<'Int', Scalar_Int>
    episode: Input<'Int', Scalar_Int>
    releasing: Input<'Boolean', Scalar_Boolean>
    mediaId_not: Input<'Int', Scalar_Int>
    mediaId_in: Input<'[Int]', Scalar_Int>
    mediaId_not_in: Input<'[Int]', Scalar_Int>
    date_greater: Input<'Int', Scalar_Int>
    date_lesser: Input<'Int', Scalar_Int>
    trending_greater: Input<'Int', Scalar_Int>
    trending_lesser: Input<'Int', Scalar_Int>
    trending_not: Input<'Int', Scalar_Int>
    averageScore_greater: Input<'Int', Scalar_Int>
    averageScore_lesser: Input<'Int', Scalar_Int>
    averageScore_not: Input<'Int', Scalar_Int>
    popularity_greater: Input<'Int', Scalar_Int>
    popularity_lesser: Input<'Int', Scalar_Int>
    popularity_not: Input<'Int', Scalar_Int>
    episode_greater: Input<'Int', Scalar_Int>
    episode_lesser: Input<'Int', Scalar_Int>
    episode_not: Input<'Int', Scalar_Int>
    sort: Input<'[MediaTrendSort]', Enum_MediaTrendSort>
  }>
  notifications: Field<'[NotificationUnion]', Union_NotificationUnion, {
    type: Input<'NotificationType', Enum_NotificationType>
    resetNotificationCount: Input<'Boolean', Scalar_Boolean>
    type_in: Input<'[NotificationType]', Enum_NotificationType>
  }>
  followers: Field<'[User]', Type_User, {
    userId: Input<'Int!', Scalar_Int>
    sort: Input<'[UserSort]', Enum_UserSort>
  }>
  following: Field<'[User]', Type_User, {
    userId: Input<'Int!', Scalar_Int>
    sort: Input<'[UserSort]', Enum_UserSort>
  }>
  activities: Field<'[ActivityUnion]', Union_ActivityUnion, {
    id: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    messengerId: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    type: Input<'ActivityType', Enum_ActivityType>
    isFollowing: Input<'Boolean', Scalar_Boolean>
    hasReplies: Input<'Boolean', Scalar_Boolean>
    hasRepliesOrTypeText: Input<'Boolean', Scalar_Boolean>
    createdAt: Input<'Int', Scalar_Int>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    userId_not: Input<'Int', Scalar_Int>
    userId_in: Input<'[Int]', Scalar_Int>
    userId_not_in: Input<'[Int]', Scalar_Int>
    messengerId_not: Input<'Int', Scalar_Int>
    messengerId_in: Input<'[Int]', Scalar_Int>
    messengerId_not_in: Input<'[Int]', Scalar_Int>
    mediaId_not: Input<'Int', Scalar_Int>
    mediaId_in: Input<'[Int]', Scalar_Int>
    mediaId_not_in: Input<'[Int]', Scalar_Int>
    type_not: Input<'ActivityType', Enum_ActivityType>
    type_in: Input<'[ActivityType]', Enum_ActivityType>
    type_not_in: Input<'[ActivityType]', Enum_ActivityType>
    createdAt_greater: Input<'Int', Scalar_Int>
    createdAt_lesser: Input<'Int', Scalar_Int>
    sort: Input<'[ActivitySort]', Enum_ActivitySort>
  }>
  activityReplies: Field<'[ActivityReply]', Type_ActivityReply, {
    id: Input<'Int', Scalar_Int>
    activityId: Input<'Int', Scalar_Int>
  }>
  threads: Field<'[Thread]', Type_Thread, {
    id: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    replyUserId: Input<'Int', Scalar_Int>
    subscribed: Input<'Boolean', Scalar_Boolean>
    categoryId: Input<'Int', Scalar_Int>
    mediaCategoryId: Input<'Int', Scalar_Int>
    search: Input<'String', Scalar_String>
    id_in: Input<'[Int]', Scalar_Int>
    sort: Input<'[ThreadSort]', Enum_ThreadSort>
  }>
  threadComments: Field<'[ThreadComment]', Type_ThreadComment, {
    id: Input<'Int', Scalar_Int>
    threadId: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    sort: Input<'[ThreadCommentSort]', Enum_ThreadCommentSort>
  }>
  reviews: Field<'[Review]', Type_Review, {
    id: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    mediaType: Input<'MediaType', Enum_MediaType>
    sort: Input<'[ReviewSort]', Enum_ReviewSort>
  }>
  recommendations: Field<'[Recommendation]', Type_Recommendation, {
    id: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    mediaRecommendationId: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    rating: Input<'Int', Scalar_Int>
    onList: Input<'Boolean', Scalar_Boolean>
    rating_greater: Input<'Int', Scalar_Int>
    rating_lesser: Input<'Int', Scalar_Int>
    sort: Input<'[RecommendationSort]', Enum_RecommendationSort>
  }>
  likes: Field<'[User]', Type_User, {
    likeableId: Input<'Int', Scalar_Int>
    type: Input<'LikeableType', Enum_LikeableType>
  }>
}>

type Type_PageInfo = ObjectType<'PageInfo', {
  total: Field<'Int', Scalar_Int>
  perPage: Field<'Int', Scalar_Int>
  currentPage: Field<'Int', Scalar_Int>
  lastPage: Field<'Int', Scalar_Int>
  hasNextPage: Field<'Boolean', Scalar_Boolean>
}>

type Type_User = ObjectType<'User', {
  id: Field<'Int!', Scalar_Int>
  name: Field<'String!', Scalar_String>
  about: Field<'String', Scalar_String, {
    asHtml: Input<'Boolean', Scalar_Boolean>
  }>
  avatar: Field<'UserAvatar', Type_UserAvatar>
  bannerImage: Field<'String', Scalar_String>
  isFollowing: Field<'Boolean', Scalar_Boolean>
  isFollower: Field<'Boolean', Scalar_Boolean>
  isBlocked: Field<'Boolean', Scalar_Boolean>
  bans: Field<'Json', Scalar_Json>
  options: Field<'UserOptions', Type_UserOptions>
  mediaListOptions: Field<'MediaListOptions', Type_MediaListOptions>
  favourites: Field<'Favourites', Type_Favourites, {
    page: Input<'Int', Scalar_Int>
  }>
  statistics: Field<'UserStatisticTypes', Type_UserStatisticTypes>
  unreadNotificationCount: Field<'Int', Scalar_Int>
  siteUrl: Field<'String', Scalar_String>
  donatorTier: Field<'Int', Scalar_Int>
  donatorBadge: Field<'String', Scalar_String>
  moderatorRoles: Field<'[ModRole]', Enum_ModRole>
  createdAt: Field<'Int', Scalar_Int>
  updatedAt: Field<'Int', Scalar_Int>
  stats: Field<'UserStats', Type_UserStats>
  moderatorStatus: Field<'String', Scalar_String>
  previousNames: Field<'[UserPreviousName]', Type_UserPreviousName>
}>

type Type_UserAvatar = ObjectType<'UserAvatar', {
  large: Field<'String', Scalar_String>
  medium: Field<'String', Scalar_String>
}>

type Type_UserOptions = ObjectType<'UserOptions', {
  titleLanguage: Field<'UserTitleLanguage', Enum_UserTitleLanguage>
  displayAdultContent: Field<'Boolean', Scalar_Boolean>
  airingNotifications: Field<'Boolean', Scalar_Boolean>
  profileColor: Field<'String', Scalar_String>
  notificationOptions: Field<'[NotificationOption]', Type_NotificationOption>
  timezone: Field<'String', Scalar_String>
  activityMergeTime: Field<'Int', Scalar_Int>
  staffNameLanguage: Field<'UserStaffNameLanguage', Enum_UserStaffNameLanguage>
  restrictMessagesToFollowing: Field<'Boolean', Scalar_Boolean>
  disabledListActivity: Field<'[ListActivityOption]', Type_ListActivityOption>
}>

type Type_NotificationOption = ObjectType<'NotificationOption', {
  type: Field<'NotificationType', Enum_NotificationType>
  enabled: Field<'Boolean', Scalar_Boolean>
}>

type Type_ListActivityOption = ObjectType<'ListActivityOption', {
  disabled: Field<'Boolean', Scalar_Boolean>
  type: Field<'MediaListStatus', Enum_MediaListStatus>
}>

type Type_MediaListOptions = ObjectType<'MediaListOptions', {
  scoreFormat: Field<'ScoreFormat', Enum_ScoreFormat>
  rowOrder: Field<'String', Scalar_String>
  useLegacyLists: Field<'Boolean', Scalar_Boolean>
  animeList: Field<'MediaListTypeOptions', Type_MediaListTypeOptions>
  mangaList: Field<'MediaListTypeOptions', Type_MediaListTypeOptions>
  sharedTheme: Field<'Json', Scalar_Json>
  sharedThemeEnabled: Field<'Boolean', Scalar_Boolean>
}>

type Type_MediaListTypeOptions = ObjectType<'MediaListTypeOptions', {
  sectionOrder: Field<'[String]', Scalar_String>
  splitCompletedSectionByFormat: Field<'Boolean', Scalar_Boolean>
  theme: Field<'Json', Scalar_Json>
  customLists: Field<'[String]', Scalar_String>
  advancedScoring: Field<'[String]', Scalar_String>
  advancedScoringEnabled: Field<'Boolean', Scalar_Boolean>
}>

type Type_Favourites = ObjectType<'Favourites', {
  anime: Field<'MediaConnection', Type_MediaConnection, {
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  manga: Field<'MediaConnection', Type_MediaConnection, {
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  characters: Field<'CharacterConnection', Type_CharacterConnection, {
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  staff: Field<'StaffConnection', Type_StaffConnection, {
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  studios: Field<'StudioConnection', Type_StudioConnection, {
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
}>

type Type_MediaConnection = ObjectType<'MediaConnection', {
  edges: Field<'[MediaEdge]', Type_MediaEdge>
  nodes: Field<'[Media]', Type_Media>
  pageInfo: Field<'PageInfo', Type_PageInfo>
}>

type Type_MediaEdge = ObjectType<'MediaEdge', {
  node: Field<'Media', Type_Media>
  id: Field<'Int', Scalar_Int>
  relationType: Field<'MediaRelation', Enum_MediaRelation, {
    version: Input<'Int', Scalar_Int>
  }>
  isMainStudio: Field<'Boolean!', Scalar_Boolean>
  characters: Field<'[Character]', Type_Character>
  characterRole: Field<'CharacterRole', Enum_CharacterRole>
  characterName: Field<'String', Scalar_String>
  roleNotes: Field<'String', Scalar_String>
  dubGroup: Field<'String', Scalar_String>
  staffRole: Field<'String', Scalar_String>
  voiceActors: Field<'[Staff]', Type_Staff, {
    language: Input<'StaffLanguage', Enum_StaffLanguage>
    sort: Input<'[StaffSort]', Enum_StaffSort>
  }>
  voiceActorRoles: Field<'[StaffRoleType]', Type_StaffRoleType, {
    language: Input<'StaffLanguage', Enum_StaffLanguage>
    sort: Input<'[StaffSort]', Enum_StaffSort>
  }>
  favouriteOrder: Field<'Int', Scalar_Int>
}>

type Type_Media = ObjectType<'Media', {
  id: Field<'Int!', Scalar_Int>
  idMal: Field<'Int', Scalar_Int>
  title: Field<'MediaTitle', Type_MediaTitle>
  type: Field<'MediaType', Enum_MediaType>
  format: Field<'MediaFormat', Enum_MediaFormat>
  status: Field<'MediaStatus', Enum_MediaStatus, {
    version: Input<'Int', Scalar_Int>
  }>
  description: Field<'String', Scalar_String, {
    asHtml: Input<'Boolean', Scalar_Boolean>
  }>
  startDate: Field<'FuzzyDate', Type_FuzzyDate>
  endDate: Field<'FuzzyDate', Type_FuzzyDate>
  season: Field<'MediaSeason', Enum_MediaSeason>
  seasonYear: Field<'Int', Scalar_Int>
  seasonInt: Field<'Int', Scalar_Int>
  episodes: Field<'Int', Scalar_Int>
  duration: Field<'Int', Scalar_Int>
  chapters: Field<'Int', Scalar_Int>
  volumes: Field<'Int', Scalar_Int>
  countryOfOrigin: Field<'CountryCode', Scalar_CountryCode>
  isLicensed: Field<'Boolean', Scalar_Boolean>
  source: Field<'MediaSource', Enum_MediaSource, {
    version: Input<'Int', Scalar_Int>
  }>
  hashtag: Field<'String', Scalar_String>
  trailer: Field<'MediaTrailer', Type_MediaTrailer>
  updatedAt: Field<'Int', Scalar_Int>
  coverImage: Field<'MediaCoverImage', Type_MediaCoverImage>
  bannerImage: Field<'String', Scalar_String>
  genres: Field<'[String]', Scalar_String>
  synonyms: Field<'[String]', Scalar_String>
  averageScore: Field<'Int', Scalar_Int>
  meanScore: Field<'Int', Scalar_Int>
  popularity: Field<'Int', Scalar_Int>
  isLocked: Field<'Boolean', Scalar_Boolean>
  trending: Field<'Int', Scalar_Int>
  favourites: Field<'Int', Scalar_Int>
  tags: Field<'[MediaTag]', Type_MediaTag>
  relations: Field<'MediaConnection', Type_MediaConnection>
  characters: Field<'CharacterConnection', Type_CharacterConnection, {
    sort: Input<'[CharacterSort]', Enum_CharacterSort>
    role: Input<'CharacterRole', Enum_CharacterRole>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  staff: Field<'StaffConnection', Type_StaffConnection, {
    sort: Input<'[StaffSort]', Enum_StaffSort>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  studios: Field<'StudioConnection', Type_StudioConnection, {
    sort: Input<'[StudioSort]', Enum_StudioSort>
    isMain: Input<'Boolean', Scalar_Boolean>
  }>
  isFavourite: Field<'Boolean!', Scalar_Boolean>
  isFavouriteBlocked: Field<'Boolean!', Scalar_Boolean>
  isAdult: Field<'Boolean', Scalar_Boolean>
  nextAiringEpisode: Field<'AiringSchedule', Type_AiringSchedule>
  airingSchedule: Field<'AiringScheduleConnection', Type_AiringScheduleConnection, {
    notYetAired: Input<'Boolean', Scalar_Boolean>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  trends: Field<'MediaTrendConnection', Type_MediaTrendConnection, {
    sort: Input<'[MediaTrendSort]', Enum_MediaTrendSort>
    releasing: Input<'Boolean', Scalar_Boolean>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  externalLinks: Field<'[MediaExternalLink]', Type_MediaExternalLink>
  streamingEpisodes: Field<'[MediaStreamingEpisode]', Type_MediaStreamingEpisode>
  rankings: Field<'[MediaRank]', Type_MediaRank>
  mediaListEntry: Field<'MediaList', Type_MediaList>
  reviews: Field<'ReviewConnection', Type_ReviewConnection, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'[ReviewSort]', Enum_ReviewSort>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  recommendations: Field<'RecommendationConnection', Type_RecommendationConnection, {
    sort: Input<'[RecommendationSort]', Enum_RecommendationSort>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  stats: Field<'MediaStats', Type_MediaStats>
  siteUrl: Field<'String', Scalar_String>
  autoCreateForumThread: Field<'Boolean', Scalar_Boolean>
  isRecommendationBlocked: Field<'Boolean', Scalar_Boolean>
  isReviewBlocked: Field<'Boolean', Scalar_Boolean>
  modNotes: Field<'String', Scalar_String>
}>

type Type_MediaTitle = ObjectType<'MediaTitle', {
  romaji: Field<'String', Scalar_String, {
    stylised: Input<'Boolean', Scalar_Boolean>
  }>
  english: Field<'String', Scalar_String, {
    stylised: Input<'Boolean', Scalar_Boolean>
  }>
  native: Field<'String', Scalar_String, {
    stylised: Input<'Boolean', Scalar_Boolean>
  }>
  userPreferred: Field<'String', Scalar_String>
}>

type Type_FuzzyDate = ObjectType<'FuzzyDate', {
  year: Field<'Int', Scalar_Int>
  month: Field<'Int', Scalar_Int>
  day: Field<'Int', Scalar_Int>
}>

type Type_MediaTrailer = ObjectType<'MediaTrailer', {
  id: Field<'String', Scalar_String>
  site: Field<'String', Scalar_String>
  thumbnail: Field<'String', Scalar_String>
}>

type Type_MediaCoverImage = ObjectType<'MediaCoverImage', {
  extraLarge: Field<'String', Scalar_String>
  large: Field<'String', Scalar_String>
  medium: Field<'String', Scalar_String>
  color: Field<'String', Scalar_String>
}>

type Type_MediaTag = ObjectType<'MediaTag', {
  id: Field<'Int!', Scalar_Int>
  name: Field<'String!', Scalar_String>
  description: Field<'String', Scalar_String>
  category: Field<'String', Scalar_String>
  rank: Field<'Int', Scalar_Int>
  isGeneralSpoiler: Field<'Boolean', Scalar_Boolean>
  isMediaSpoiler: Field<'Boolean', Scalar_Boolean>
  isAdult: Field<'Boolean', Scalar_Boolean>
  userId: Field<'Int', Scalar_Int>
}>

type Type_CharacterConnection = ObjectType<'CharacterConnection', {
  edges: Field<'[CharacterEdge]', Type_CharacterEdge>
  nodes: Field<'[Character]', Type_Character>
  pageInfo: Field<'PageInfo', Type_PageInfo>
}>

type Type_CharacterEdge = ObjectType<'CharacterEdge', {
  node: Field<'Character', Type_Character>
  id: Field<'Int', Scalar_Int>
  role: Field<'CharacterRole', Enum_CharacterRole>
  name: Field<'String', Scalar_String>
  voiceActors: Field<'[Staff]', Type_Staff, {
    language: Input<'StaffLanguage', Enum_StaffLanguage>
    sort: Input<'[StaffSort]', Enum_StaffSort>
  }>
  voiceActorRoles: Field<'[StaffRoleType]', Type_StaffRoleType, {
    language: Input<'StaffLanguage', Enum_StaffLanguage>
    sort: Input<'[StaffSort]', Enum_StaffSort>
  }>
  media: Field<'[Media]', Type_Media>
  favouriteOrder: Field<'Int', Scalar_Int>
}>

type Type_Character = ObjectType<'Character', {
  id: Field<'Int!', Scalar_Int>
  name: Field<'CharacterName', Type_CharacterName>
  image: Field<'CharacterImage', Type_CharacterImage>
  description: Field<'String', Scalar_String, {
    asHtml: Input<'Boolean', Scalar_Boolean>
  }>
  gender: Field<'String', Scalar_String>
  dateOfBirth: Field<'FuzzyDate', Type_FuzzyDate>
  age: Field<'String', Scalar_String>
  bloodType: Field<'String', Scalar_String>
  isFavourite: Field<'Boolean!', Scalar_Boolean>
  isFavouriteBlocked: Field<'Boolean!', Scalar_Boolean>
  siteUrl: Field<'String', Scalar_String>
  media: Field<'MediaConnection', Type_MediaConnection, {
    sort: Input<'[MediaSort]', Enum_MediaSort>
    type: Input<'MediaType', Enum_MediaType>
    onList: Input<'Boolean', Scalar_Boolean>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  updatedAt: Field<'Int', Scalar_Int>
  favourites: Field<'Int', Scalar_Int>
  modNotes: Field<'String', Scalar_String>
}>

type Type_CharacterName = ObjectType<'CharacterName', {
  first: Field<'String', Scalar_String>
  middle: Field<'String', Scalar_String>
  last: Field<'String', Scalar_String>
  full: Field<'String', Scalar_String>
  native: Field<'String', Scalar_String>
  alternative: Field<'[String]', Scalar_String>
  alternativeSpoiler: Field<'[String]', Scalar_String>
  userPreferred: Field<'String', Scalar_String>
}>

type Type_CharacterImage = ObjectType<'CharacterImage', {
  large: Field<'String', Scalar_String>
  medium: Field<'String', Scalar_String>
}>

type Type_Staff = ObjectType<'Staff', {
  id: Field<'Int!', Scalar_Int>
  name: Field<'StaffName', Type_StaffName>
  language: Field<'StaffLanguage', Enum_StaffLanguage>
  languageV2: Field<'String', Scalar_String>
  image: Field<'StaffImage', Type_StaffImage>
  description: Field<'String', Scalar_String, {
    asHtml: Input<'Boolean', Scalar_Boolean>
  }>
  primaryOccupations: Field<'[String]', Scalar_String>
  gender: Field<'String', Scalar_String>
  dateOfBirth: Field<'FuzzyDate', Type_FuzzyDate>
  dateOfDeath: Field<'FuzzyDate', Type_FuzzyDate>
  age: Field<'Int', Scalar_Int>
  yearsActive: Field<'[Int]', Scalar_Int>
  homeTown: Field<'String', Scalar_String>
  bloodType: Field<'String', Scalar_String>
  isFavourite: Field<'Boolean!', Scalar_Boolean>
  isFavouriteBlocked: Field<'Boolean!', Scalar_Boolean>
  siteUrl: Field<'String', Scalar_String>
  staffMedia: Field<'MediaConnection', Type_MediaConnection, {
    sort: Input<'[MediaSort]', Enum_MediaSort>
    type: Input<'MediaType', Enum_MediaType>
    onList: Input<'Boolean', Scalar_Boolean>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  characters: Field<'CharacterConnection', Type_CharacterConnection, {
    sort: Input<'[CharacterSort]', Enum_CharacterSort>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  characterMedia: Field<'MediaConnection', Type_MediaConnection, {
    sort: Input<'[MediaSort]', Enum_MediaSort>
    onList: Input<'Boolean', Scalar_Boolean>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  updatedAt: Field<'Int', Scalar_Int>
  staff: Field<'Staff', Type_Staff>
  submitter: Field<'User', Type_User>
  submissionStatus: Field<'Int', Scalar_Int>
  submissionNotes: Field<'String', Scalar_String>
  favourites: Field<'Int', Scalar_Int>
  modNotes: Field<'String', Scalar_String>
}>

type Type_StaffName = ObjectType<'StaffName', {
  first: Field<'String', Scalar_String>
  middle: Field<'String', Scalar_String>
  last: Field<'String', Scalar_String>
  full: Field<'String', Scalar_String>
  native: Field<'String', Scalar_String>
  alternative: Field<'[String]', Scalar_String>
  userPreferred: Field<'String', Scalar_String>
}>

type Type_StaffImage = ObjectType<'StaffImage', {
  large: Field<'String', Scalar_String>
  medium: Field<'String', Scalar_String>
}>

type Type_StaffRoleType = ObjectType<'StaffRoleType', {
  voiceActor: Field<'Staff', Type_Staff>
  roleNotes: Field<'String', Scalar_String>
  dubGroup: Field<'String', Scalar_String>
}>

type Type_StaffConnection = ObjectType<'StaffConnection', {
  edges: Field<'[StaffEdge]', Type_StaffEdge>
  nodes: Field<'[Staff]', Type_Staff>
  pageInfo: Field<'PageInfo', Type_PageInfo>
}>

type Type_StaffEdge = ObjectType<'StaffEdge', {
  node: Field<'Staff', Type_Staff>
  id: Field<'Int', Scalar_Int>
  role: Field<'String', Scalar_String>
  favouriteOrder: Field<'Int', Scalar_Int>
}>

type Type_StudioConnection = ObjectType<'StudioConnection', {
  edges: Field<'[StudioEdge]', Type_StudioEdge>
  nodes: Field<'[Studio]', Type_Studio>
  pageInfo: Field<'PageInfo', Type_PageInfo>
}>

type Type_StudioEdge = ObjectType<'StudioEdge', {
  node: Field<'Studio', Type_Studio>
  id: Field<'Int', Scalar_Int>
  isMain: Field<'Boolean!', Scalar_Boolean>
  favouriteOrder: Field<'Int', Scalar_Int>
}>

type Type_Studio = ObjectType<'Studio', {
  id: Field<'Int!', Scalar_Int>
  name: Field<'String!', Scalar_String>
  isAnimationStudio: Field<'Boolean!', Scalar_Boolean>
  media: Field<'MediaConnection', Type_MediaConnection, {
    sort: Input<'[MediaSort]', Enum_MediaSort>
    isMain: Input<'Boolean', Scalar_Boolean>
    onList: Input<'Boolean', Scalar_Boolean>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  siteUrl: Field<'String', Scalar_String>
  isFavourite: Field<'Boolean!', Scalar_Boolean>
  favourites: Field<'Int', Scalar_Int>
}>

type Type_AiringSchedule = ObjectType<'AiringSchedule', {
  id: Field<'Int!', Scalar_Int>
  airingAt: Field<'Int!', Scalar_Int>
  timeUntilAiring: Field<'Int!', Scalar_Int>
  episode: Field<'Int!', Scalar_Int>
  mediaId: Field<'Int!', Scalar_Int>
  media: Field<'Media', Type_Media>
}>

type Type_AiringScheduleConnection = ObjectType<'AiringScheduleConnection', {
  edges: Field<'[AiringScheduleEdge]', Type_AiringScheduleEdge>
  nodes: Field<'[AiringSchedule]', Type_AiringSchedule>
  pageInfo: Field<'PageInfo', Type_PageInfo>
}>

type Type_AiringScheduleEdge = ObjectType<'AiringScheduleEdge', {
  node: Field<'AiringSchedule', Type_AiringSchedule>
  id: Field<'Int', Scalar_Int>
}>

type Type_MediaTrendConnection = ObjectType<'MediaTrendConnection', {
  edges: Field<'[MediaTrendEdge]', Type_MediaTrendEdge>
  nodes: Field<'[MediaTrend]', Type_MediaTrend>
  pageInfo: Field<'PageInfo', Type_PageInfo>
}>

type Type_MediaTrendEdge = ObjectType<'MediaTrendEdge', {
  node: Field<'MediaTrend', Type_MediaTrend>
}>

type Type_MediaTrend = ObjectType<'MediaTrend', {
  mediaId: Field<'Int!', Scalar_Int>
  date: Field<'Int!', Scalar_Int>
  trending: Field<'Int!', Scalar_Int>
  averageScore: Field<'Int', Scalar_Int>
  popularity: Field<'Int', Scalar_Int>
  inProgress: Field<'Int', Scalar_Int>
  releasing: Field<'Boolean!', Scalar_Boolean>
  episode: Field<'Int', Scalar_Int>
  media: Field<'Media', Type_Media>
}>

type Type_MediaExternalLink = ObjectType<'MediaExternalLink', {
  id: Field<'Int!', Scalar_Int>
  url: Field<'String', Scalar_String>
  site: Field<'String!', Scalar_String>
  siteId: Field<'Int', Scalar_Int>
  type: Field<'ExternalLinkType', Enum_ExternalLinkType>
  language: Field<'String', Scalar_String>
  color: Field<'String', Scalar_String>
  icon: Field<'String', Scalar_String>
  notes: Field<'String', Scalar_String>
  isDisabled: Field<'Boolean', Scalar_Boolean>
}>

type Type_MediaStreamingEpisode = ObjectType<'MediaStreamingEpisode', {
  title: Field<'String', Scalar_String>
  thumbnail: Field<'String', Scalar_String>
  url: Field<'String', Scalar_String>
  site: Field<'String', Scalar_String>
}>

type Type_MediaRank = ObjectType<'MediaRank', {
  id: Field<'Int!', Scalar_Int>
  rank: Field<'Int!', Scalar_Int>
  type: Field<'MediaRankType!', Enum_MediaRankType>
  format: Field<'MediaFormat!', Enum_MediaFormat>
  year: Field<'Int', Scalar_Int>
  season: Field<'MediaSeason', Enum_MediaSeason>
  allTime: Field<'Boolean', Scalar_Boolean>
  context: Field<'String!', Scalar_String>
}>

type Type_MediaList = ObjectType<'MediaList', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  mediaId: Field<'Int!', Scalar_Int>
  status: Field<'MediaListStatus', Enum_MediaListStatus>
  score: Field<'Float', Scalar_Float, {
    format: Input<'ScoreFormat', Enum_ScoreFormat>
  }>
  progress: Field<'Int', Scalar_Int>
  progressVolumes: Field<'Int', Scalar_Int>
  repeat: Field<'Int', Scalar_Int>
  priority: Field<'Int', Scalar_Int>
  private: Field<'Boolean', Scalar_Boolean>
  notes: Field<'String', Scalar_String>
  hiddenFromStatusLists: Field<'Boolean', Scalar_Boolean>
  customLists: Field<'Json', Scalar_Json, {
    asArray: Input<'Boolean', Scalar_Boolean>
  }>
  advancedScores: Field<'Json', Scalar_Json>
  startedAt: Field<'FuzzyDate', Type_FuzzyDate>
  completedAt: Field<'FuzzyDate', Type_FuzzyDate>
  updatedAt: Field<'Int', Scalar_Int>
  createdAt: Field<'Int', Scalar_Int>
  media: Field<'Media', Type_Media>
  user: Field<'User', Type_User>
}>

type Type_ReviewConnection = ObjectType<'ReviewConnection', {
  edges: Field<'[ReviewEdge]', Type_ReviewEdge>
  nodes: Field<'[Review]', Type_Review>
  pageInfo: Field<'PageInfo', Type_PageInfo>
}>

type Type_ReviewEdge = ObjectType<'ReviewEdge', {
  node: Field<'Review', Type_Review>
}>

type Type_Review = ObjectType<'Review', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  mediaId: Field<'Int!', Scalar_Int>
  mediaType: Field<'MediaType', Enum_MediaType>
  summary: Field<'String', Scalar_String>
  body: Field<'String', Scalar_String, {
    asHtml: Input<'Boolean', Scalar_Boolean>
  }>
  rating: Field<'Int', Scalar_Int>
  ratingAmount: Field<'Int', Scalar_Int>
  userRating: Field<'ReviewRating', Enum_ReviewRating>
  score: Field<'Int', Scalar_Int>
  private: Field<'Boolean', Scalar_Boolean>
  siteUrl: Field<'String', Scalar_String>
  createdAt: Field<'Int!', Scalar_Int>
  updatedAt: Field<'Int!', Scalar_Int>
  user: Field<'User', Type_User>
  media: Field<'Media', Type_Media>
}>

type Type_RecommendationConnection = ObjectType<'RecommendationConnection', {
  edges: Field<'[RecommendationEdge]', Type_RecommendationEdge>
  nodes: Field<'[Recommendation]', Type_Recommendation>
  pageInfo: Field<'PageInfo', Type_PageInfo>
}>

type Type_RecommendationEdge = ObjectType<'RecommendationEdge', {
  node: Field<'Recommendation', Type_Recommendation>
}>

type Type_Recommendation = ObjectType<'Recommendation', {
  id: Field<'Int!', Scalar_Int>
  rating: Field<'Int', Scalar_Int>
  userRating: Field<'RecommendationRating', Enum_RecommendationRating>
  media: Field<'Media', Type_Media>
  mediaRecommendation: Field<'Media', Type_Media>
  user: Field<'User', Type_User>
}>

type Type_MediaStats = ObjectType<'MediaStats', {
  scoreDistribution: Field<'[ScoreDistribution]', Type_ScoreDistribution>
  statusDistribution: Field<'[StatusDistribution]', Type_StatusDistribution>
  airingProgression: Field<'[AiringProgression]', Type_AiringProgression>
}>

type Type_ScoreDistribution = ObjectType<'ScoreDistribution', {
  score: Field<'Int', Scalar_Int>
  amount: Field<'Int', Scalar_Int>
}>

type Type_StatusDistribution = ObjectType<'StatusDistribution', {
  status: Field<'MediaListStatus', Enum_MediaListStatus>
  amount: Field<'Int', Scalar_Int>
}>

type Type_AiringProgression = ObjectType<'AiringProgression', {
  episode: Field<'Float', Scalar_Float>
  score: Field<'Float', Scalar_Float>
  watching: Field<'Int', Scalar_Int>
}>

type Type_UserStatisticTypes = ObjectType<'UserStatisticTypes', {
  anime: Field<'UserStatistics', Type_UserStatistics>
  manga: Field<'UserStatistics', Type_UserStatistics>
}>

type Type_UserStatistics = ObjectType<'UserStatistics', {
  count: Field<'Int!', Scalar_Int>
  meanScore: Field<'Float!', Scalar_Float>
  standardDeviation: Field<'Float!', Scalar_Float>
  minutesWatched: Field<'Int!', Scalar_Int>
  episodesWatched: Field<'Int!', Scalar_Int>
  chaptersRead: Field<'Int!', Scalar_Int>
  volumesRead: Field<'Int!', Scalar_Int>
  formats: Field<'[UserFormatStatistic]', Type_UserFormatStatistic, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'[UserStatisticsSort]', Enum_UserStatisticsSort>
  }>
  statuses: Field<'[UserStatusStatistic]', Type_UserStatusStatistic, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'[UserStatisticsSort]', Enum_UserStatisticsSort>
  }>
  scores: Field<'[UserScoreStatistic]', Type_UserScoreStatistic, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'[UserStatisticsSort]', Enum_UserStatisticsSort>
  }>
  lengths: Field<'[UserLengthStatistic]', Type_UserLengthStatistic, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'[UserStatisticsSort]', Enum_UserStatisticsSort>
  }>
  releaseYears: Field<'[UserReleaseYearStatistic]', Type_UserReleaseYearStatistic, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'[UserStatisticsSort]', Enum_UserStatisticsSort>
  }>
  startYears: Field<'[UserStartYearStatistic]', Type_UserStartYearStatistic, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'[UserStatisticsSort]', Enum_UserStatisticsSort>
  }>
  genres: Field<'[UserGenreStatistic]', Type_UserGenreStatistic, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'[UserStatisticsSort]', Enum_UserStatisticsSort>
  }>
  tags: Field<'[UserTagStatistic]', Type_UserTagStatistic, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'[UserStatisticsSort]', Enum_UserStatisticsSort>
  }>
  countries: Field<'[UserCountryStatistic]', Type_UserCountryStatistic, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'[UserStatisticsSort]', Enum_UserStatisticsSort>
  }>
  voiceActors: Field<'[UserVoiceActorStatistic]', Type_UserVoiceActorStatistic, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'[UserStatisticsSort]', Enum_UserStatisticsSort>
  }>
  staff: Field<'[UserStaffStatistic]', Type_UserStaffStatistic, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'[UserStatisticsSort]', Enum_UserStatisticsSort>
  }>
  studios: Field<'[UserStudioStatistic]', Type_UserStudioStatistic, {
    limit: Input<'Int', Scalar_Int>
    sort: Input<'[UserStatisticsSort]', Enum_UserStatisticsSort>
  }>
}>

type Type_UserFormatStatistic = ObjectType<'UserFormatStatistic', {
  count: Field<'Int!', Scalar_Int>
  meanScore: Field<'Float!', Scalar_Float>
  minutesWatched: Field<'Int!', Scalar_Int>
  chaptersRead: Field<'Int!', Scalar_Int>
  mediaIds: Field<'[Int]!', Scalar_Int>
  format: Field<'MediaFormat', Enum_MediaFormat>
}>

type Type_UserStatusStatistic = ObjectType<'UserStatusStatistic', {
  count: Field<'Int!', Scalar_Int>
  meanScore: Field<'Float!', Scalar_Float>
  minutesWatched: Field<'Int!', Scalar_Int>
  chaptersRead: Field<'Int!', Scalar_Int>
  mediaIds: Field<'[Int]!', Scalar_Int>
  status: Field<'MediaListStatus', Enum_MediaListStatus>
}>

type Type_UserScoreStatistic = ObjectType<'UserScoreStatistic', {
  count: Field<'Int!', Scalar_Int>
  meanScore: Field<'Float!', Scalar_Float>
  minutesWatched: Field<'Int!', Scalar_Int>
  chaptersRead: Field<'Int!', Scalar_Int>
  mediaIds: Field<'[Int]!', Scalar_Int>
  score: Field<'Int', Scalar_Int>
}>

type Type_UserLengthStatistic = ObjectType<'UserLengthStatistic', {
  count: Field<'Int!', Scalar_Int>
  meanScore: Field<'Float!', Scalar_Float>
  minutesWatched: Field<'Int!', Scalar_Int>
  chaptersRead: Field<'Int!', Scalar_Int>
  mediaIds: Field<'[Int]!', Scalar_Int>
  length: Field<'String', Scalar_String>
}>

type Type_UserReleaseYearStatistic = ObjectType<'UserReleaseYearStatistic', {
  count: Field<'Int!', Scalar_Int>
  meanScore: Field<'Float!', Scalar_Float>
  minutesWatched: Field<'Int!', Scalar_Int>
  chaptersRead: Field<'Int!', Scalar_Int>
  mediaIds: Field<'[Int]!', Scalar_Int>
  releaseYear: Field<'Int', Scalar_Int>
}>

type Type_UserStartYearStatistic = ObjectType<'UserStartYearStatistic', {
  count: Field<'Int!', Scalar_Int>
  meanScore: Field<'Float!', Scalar_Float>
  minutesWatched: Field<'Int!', Scalar_Int>
  chaptersRead: Field<'Int!', Scalar_Int>
  mediaIds: Field<'[Int]!', Scalar_Int>
  startYear: Field<'Int', Scalar_Int>
}>

type Type_UserGenreStatistic = ObjectType<'UserGenreStatistic', {
  count: Field<'Int!', Scalar_Int>
  meanScore: Field<'Float!', Scalar_Float>
  minutesWatched: Field<'Int!', Scalar_Int>
  chaptersRead: Field<'Int!', Scalar_Int>
  mediaIds: Field<'[Int]!', Scalar_Int>
  genre: Field<'String', Scalar_String>
}>

type Type_UserTagStatistic = ObjectType<'UserTagStatistic', {
  count: Field<'Int!', Scalar_Int>
  meanScore: Field<'Float!', Scalar_Float>
  minutesWatched: Field<'Int!', Scalar_Int>
  chaptersRead: Field<'Int!', Scalar_Int>
  mediaIds: Field<'[Int]!', Scalar_Int>
  tag: Field<'MediaTag', Type_MediaTag>
}>

type Type_UserCountryStatistic = ObjectType<'UserCountryStatistic', {
  count: Field<'Int!', Scalar_Int>
  meanScore: Field<'Float!', Scalar_Float>
  minutesWatched: Field<'Int!', Scalar_Int>
  chaptersRead: Field<'Int!', Scalar_Int>
  mediaIds: Field<'[Int]!', Scalar_Int>
  country: Field<'CountryCode', Scalar_CountryCode>
}>

type Type_UserVoiceActorStatistic = ObjectType<'UserVoiceActorStatistic', {
  count: Field<'Int!', Scalar_Int>
  meanScore: Field<'Float!', Scalar_Float>
  minutesWatched: Field<'Int!', Scalar_Int>
  chaptersRead: Field<'Int!', Scalar_Int>
  mediaIds: Field<'[Int]!', Scalar_Int>
  voiceActor: Field<'Staff', Type_Staff>
  characterIds: Field<'[Int]!', Scalar_Int>
}>

type Type_UserStaffStatistic = ObjectType<'UserStaffStatistic', {
  count: Field<'Int!', Scalar_Int>
  meanScore: Field<'Float!', Scalar_Float>
  minutesWatched: Field<'Int!', Scalar_Int>
  chaptersRead: Field<'Int!', Scalar_Int>
  mediaIds: Field<'[Int]!', Scalar_Int>
  staff: Field<'Staff', Type_Staff>
}>

type Type_UserStudioStatistic = ObjectType<'UserStudioStatistic', {
  count: Field<'Int!', Scalar_Int>
  meanScore: Field<'Float!', Scalar_Float>
  minutesWatched: Field<'Int!', Scalar_Int>
  chaptersRead: Field<'Int!', Scalar_Int>
  mediaIds: Field<'[Int]!', Scalar_Int>
  studio: Field<'Studio', Type_Studio>
}>

type Type_UserStats = ObjectType<'UserStats', {
  watchedTime: Field<'Int', Scalar_Int>
  chaptersRead: Field<'Int', Scalar_Int>
  activityHistory: Field<'[UserActivityHistory]', Type_UserActivityHistory>
  animeStatusDistribution: Field<'[StatusDistribution]', Type_StatusDistribution>
  mangaStatusDistribution: Field<'[StatusDistribution]', Type_StatusDistribution>
  animeScoreDistribution: Field<'[ScoreDistribution]', Type_ScoreDistribution>
  mangaScoreDistribution: Field<'[ScoreDistribution]', Type_ScoreDistribution>
  animeListScores: Field<'ListScoreStats', Type_ListScoreStats>
  mangaListScores: Field<'ListScoreStats', Type_ListScoreStats>
  favouredGenresOverview: Field<'[GenreStats]', Type_GenreStats>
  favouredGenres: Field<'[GenreStats]', Type_GenreStats>
  favouredTags: Field<'[TagStats]', Type_TagStats>
  favouredActors: Field<'[StaffStats]', Type_StaffStats>
  favouredStaff: Field<'[StaffStats]', Type_StaffStats>
  favouredStudios: Field<'[StudioStats]', Type_StudioStats>
  favouredYears: Field<'[YearStats]', Type_YearStats>
  favouredFormats: Field<'[FormatStats]', Type_FormatStats>
}>

type Type_UserActivityHistory = ObjectType<'UserActivityHistory', {
  date: Field<'Int', Scalar_Int>
  amount: Field<'Int', Scalar_Int>
  level: Field<'Int', Scalar_Int>
}>

type Type_ListScoreStats = ObjectType<'ListScoreStats', {
  meanScore: Field<'Int', Scalar_Int>
  standardDeviation: Field<'Int', Scalar_Int>
}>

type Type_GenreStats = ObjectType<'GenreStats', {
  genre: Field<'String', Scalar_String>
  amount: Field<'Int', Scalar_Int>
  meanScore: Field<'Int', Scalar_Int>
  timeWatched: Field<'Int', Scalar_Int>
}>

type Type_TagStats = ObjectType<'TagStats', {
  tag: Field<'MediaTag', Type_MediaTag>
  amount: Field<'Int', Scalar_Int>
  meanScore: Field<'Int', Scalar_Int>
  timeWatched: Field<'Int', Scalar_Int>
}>

type Type_StaffStats = ObjectType<'StaffStats', {
  staff: Field<'Staff', Type_Staff>
  amount: Field<'Int', Scalar_Int>
  meanScore: Field<'Int', Scalar_Int>
  timeWatched: Field<'Int', Scalar_Int>
}>

type Type_StudioStats = ObjectType<'StudioStats', {
  studio: Field<'Studio', Type_Studio>
  amount: Field<'Int', Scalar_Int>
  meanScore: Field<'Int', Scalar_Int>
  timeWatched: Field<'Int', Scalar_Int>
}>

type Type_YearStats = ObjectType<'YearStats', {
  year: Field<'Int', Scalar_Int>
  amount: Field<'Int', Scalar_Int>
  meanScore: Field<'Int', Scalar_Int>
}>

type Type_FormatStats = ObjectType<'FormatStats', {
  format: Field<'MediaFormat', Enum_MediaFormat>
  amount: Field<'Int', Scalar_Int>
}>

type Type_UserPreviousName = ObjectType<'UserPreviousName', {
  name: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  updatedAt: Field<'Int', Scalar_Int>
}>

type Type_AiringNotification = ObjectType<'AiringNotification', {
  id: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  animeId: Field<'Int!', Scalar_Int>
  episode: Field<'Int!', Scalar_Int>
  contexts: Field<'[String]', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  media: Field<'Media', Type_Media>
}>

type Type_FollowingNotification = ObjectType<'FollowingNotification', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  context: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  user: Field<'User', Type_User>
}>

type Type_ActivityMessageNotification = ObjectType<'ActivityMessageNotification', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  activityId: Field<'Int!', Scalar_Int>
  context: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  message: Field<'MessageActivity', Type_MessageActivity>
  user: Field<'User', Type_User>
}>

type Type_MessageActivity = ObjectType<'MessageActivity', {
  id: Field<'Int!', Scalar_Int>
  recipientId: Field<'Int', Scalar_Int>
  messengerId: Field<'Int', Scalar_Int>
  type: Field<'ActivityType', Enum_ActivityType>
  replyCount: Field<'Int!', Scalar_Int>
  message: Field<'String', Scalar_String, {
    asHtml: Input<'Boolean', Scalar_Boolean>
  }>
  isLocked: Field<'Boolean', Scalar_Boolean>
  isSubscribed: Field<'Boolean', Scalar_Boolean>
  likeCount: Field<'Int!', Scalar_Int>
  isLiked: Field<'Boolean', Scalar_Boolean>
  isPrivate: Field<'Boolean', Scalar_Boolean>
  siteUrl: Field<'String', Scalar_String>
  createdAt: Field<'Int!', Scalar_Int>
  recipient: Field<'User', Type_User>
  messenger: Field<'User', Type_User>
  replies: Field<'[ActivityReply]', Type_ActivityReply>
  likes: Field<'[User]', Type_User>
}>

type Type_ActivityReply = ObjectType<'ActivityReply', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int', Scalar_Int>
  activityId: Field<'Int', Scalar_Int>
  text: Field<'String', Scalar_String, {
    asHtml: Input<'Boolean', Scalar_Boolean>
  }>
  likeCount: Field<'Int!', Scalar_Int>
  isLiked: Field<'Boolean', Scalar_Boolean>
  createdAt: Field<'Int!', Scalar_Int>
  user: Field<'User', Type_User>
  likes: Field<'[User]', Type_User>
}>

type Type_ActivityMentionNotification = ObjectType<'ActivityMentionNotification', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  activityId: Field<'Int!', Scalar_Int>
  context: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  activity: Field<'ActivityUnion', Union_ActivityUnion>
  user: Field<'User', Type_User>
}>

type Type_TextActivity = ObjectType<'TextActivity', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int', Scalar_Int>
  type: Field<'ActivityType', Enum_ActivityType>
  replyCount: Field<'Int!', Scalar_Int>
  text: Field<'String', Scalar_String, {
    asHtml: Input<'Boolean', Scalar_Boolean>
  }>
  siteUrl: Field<'String', Scalar_String>
  isLocked: Field<'Boolean', Scalar_Boolean>
  isSubscribed: Field<'Boolean', Scalar_Boolean>
  likeCount: Field<'Int!', Scalar_Int>
  isLiked: Field<'Boolean', Scalar_Boolean>
  isPinned: Field<'Boolean', Scalar_Boolean>
  createdAt: Field<'Int!', Scalar_Int>
  user: Field<'User', Type_User>
  replies: Field<'[ActivityReply]', Type_ActivityReply>
  likes: Field<'[User]', Type_User>
}>

type Type_ListActivity = ObjectType<'ListActivity', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int', Scalar_Int>
  type: Field<'ActivityType', Enum_ActivityType>
  replyCount: Field<'Int!', Scalar_Int>
  status: Field<'String', Scalar_String>
  progress: Field<'String', Scalar_String>
  isLocked: Field<'Boolean', Scalar_Boolean>
  isSubscribed: Field<'Boolean', Scalar_Boolean>
  likeCount: Field<'Int!', Scalar_Int>
  isLiked: Field<'Boolean', Scalar_Boolean>
  isPinned: Field<'Boolean', Scalar_Boolean>
  siteUrl: Field<'String', Scalar_String>
  createdAt: Field<'Int!', Scalar_Int>
  user: Field<'User', Type_User>
  media: Field<'Media', Type_Media>
  replies: Field<'[ActivityReply]', Type_ActivityReply>
  likes: Field<'[User]', Type_User>
}>

type Type_ActivityReplyNotification = ObjectType<'ActivityReplyNotification', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  activityId: Field<'Int!', Scalar_Int>
  context: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  activity: Field<'ActivityUnion', Union_ActivityUnion>
  user: Field<'User', Type_User>
}>

type Type_ActivityReplySubscribedNotification = ObjectType<'ActivityReplySubscribedNotification', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  activityId: Field<'Int!', Scalar_Int>
  context: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  activity: Field<'ActivityUnion', Union_ActivityUnion>
  user: Field<'User', Type_User>
}>

type Type_ActivityLikeNotification = ObjectType<'ActivityLikeNotification', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  activityId: Field<'Int!', Scalar_Int>
  context: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  activity: Field<'ActivityUnion', Union_ActivityUnion>
  user: Field<'User', Type_User>
}>

type Type_ActivityReplyLikeNotification = ObjectType<'ActivityReplyLikeNotification', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  activityId: Field<'Int!', Scalar_Int>
  context: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  activity: Field<'ActivityUnion', Union_ActivityUnion>
  user: Field<'User', Type_User>
}>

type Type_ThreadCommentMentionNotification = ObjectType<'ThreadCommentMentionNotification', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  commentId: Field<'Int!', Scalar_Int>
  context: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  thread: Field<'Thread', Type_Thread>
  comment: Field<'ThreadComment', Type_ThreadComment>
  user: Field<'User', Type_User>
}>

type Type_Thread = ObjectType<'Thread', {
  id: Field<'Int!', Scalar_Int>
  title: Field<'String', Scalar_String>
  body: Field<'String', Scalar_String, {
    asHtml: Input<'Boolean', Scalar_Boolean>
  }>
  userId: Field<'Int!', Scalar_Int>
  replyUserId: Field<'Int', Scalar_Int>
  replyCommentId: Field<'Int', Scalar_Int>
  replyCount: Field<'Int', Scalar_Int>
  viewCount: Field<'Int', Scalar_Int>
  isLocked: Field<'Boolean', Scalar_Boolean>
  isSticky: Field<'Boolean', Scalar_Boolean>
  isSubscribed: Field<'Boolean', Scalar_Boolean>
  likeCount: Field<'Int!', Scalar_Int>
  isLiked: Field<'Boolean', Scalar_Boolean>
  repliedAt: Field<'Int', Scalar_Int>
  createdAt: Field<'Int!', Scalar_Int>
  updatedAt: Field<'Int!', Scalar_Int>
  user: Field<'User', Type_User>
  replyUser: Field<'User', Type_User>
  likes: Field<'[User]', Type_User>
  siteUrl: Field<'String', Scalar_String>
  categories: Field<'[ThreadCategory]', Type_ThreadCategory>
  mediaCategories: Field<'[Media]', Type_Media>
}>

type Type_ThreadCategory = ObjectType<'ThreadCategory', {
  id: Field<'Int!', Scalar_Int>
  name: Field<'String!', Scalar_String>
}>

type Type_ThreadComment = ObjectType<'ThreadComment', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int', Scalar_Int>
  threadId: Field<'Int', Scalar_Int>
  comment: Field<'String', Scalar_String, {
    asHtml: Input<'Boolean', Scalar_Boolean>
  }>
  likeCount: Field<'Int!', Scalar_Int>
  isLiked: Field<'Boolean', Scalar_Boolean>
  siteUrl: Field<'String', Scalar_String>
  createdAt: Field<'Int!', Scalar_Int>
  updatedAt: Field<'Int!', Scalar_Int>
  thread: Field<'Thread', Type_Thread>
  user: Field<'User', Type_User>
  likes: Field<'[User]', Type_User>
  childComments: Field<'Json', Scalar_Json>
  isLocked: Field<'Boolean', Scalar_Boolean>
}>

type Type_ThreadCommentReplyNotification = ObjectType<'ThreadCommentReplyNotification', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  commentId: Field<'Int!', Scalar_Int>
  context: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  thread: Field<'Thread', Type_Thread>
  comment: Field<'ThreadComment', Type_ThreadComment>
  user: Field<'User', Type_User>
}>

type Type_ThreadCommentSubscribedNotification = ObjectType<'ThreadCommentSubscribedNotification', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  commentId: Field<'Int!', Scalar_Int>
  context: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  thread: Field<'Thread', Type_Thread>
  comment: Field<'ThreadComment', Type_ThreadComment>
  user: Field<'User', Type_User>
}>

type Type_ThreadCommentLikeNotification = ObjectType<'ThreadCommentLikeNotification', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  commentId: Field<'Int!', Scalar_Int>
  context: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  thread: Field<'Thread', Type_Thread>
  comment: Field<'ThreadComment', Type_ThreadComment>
  user: Field<'User', Type_User>
}>

type Type_ThreadLikeNotification = ObjectType<'ThreadLikeNotification', {
  id: Field<'Int!', Scalar_Int>
  userId: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  threadId: Field<'Int!', Scalar_Int>
  context: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  thread: Field<'Thread', Type_Thread>
  comment: Field<'ThreadComment', Type_ThreadComment>
  user: Field<'User', Type_User>
}>

type Type_RelatedMediaAdditionNotification = ObjectType<'RelatedMediaAdditionNotification', {
  id: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  mediaId: Field<'Int!', Scalar_Int>
  context: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  media: Field<'Media', Type_Media>
}>

type Type_MediaDataChangeNotification = ObjectType<'MediaDataChangeNotification', {
  id: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  mediaId: Field<'Int!', Scalar_Int>
  context: Field<'String', Scalar_String>
  reason: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  media: Field<'Media', Type_Media>
}>

type Type_MediaMergeNotification = ObjectType<'MediaMergeNotification', {
  id: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  mediaId: Field<'Int!', Scalar_Int>
  deletedMediaTitles: Field<'[String]', Scalar_String>
  context: Field<'String', Scalar_String>
  reason: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  media: Field<'Media', Type_Media>
}>

type Type_MediaDeletionNotification = ObjectType<'MediaDeletionNotification', {
  id: Field<'Int!', Scalar_Int>
  type: Field<'NotificationType', Enum_NotificationType>
  deletedMediaTitle: Field<'String', Scalar_String>
  context: Field<'String', Scalar_String>
  reason: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
}>

type Type_MediaListCollection = ObjectType<'MediaListCollection', {
  lists: Field<'[MediaListGroup]', Type_MediaListGroup>
  user: Field<'User', Type_User>
  hasNextChunk: Field<'Boolean', Scalar_Boolean>
  statusLists: Field<'[[MediaList]]', Type_MediaList, {
    asArray: Input<'Boolean', Scalar_Boolean>
  }>
  customLists: Field<'[[MediaList]]', Type_MediaList, {
    asArray: Input<'Boolean', Scalar_Boolean>
  }>
}>

type Type_MediaListGroup = ObjectType<'MediaListGroup', {
  entries: Field<'[MediaList]', Type_MediaList>
  name: Field<'String', Scalar_String>
  isCustomList: Field<'Boolean', Scalar_Boolean>
  isSplitCompletedList: Field<'Boolean', Scalar_Boolean>
  status: Field<'MediaListStatus', Enum_MediaListStatus>
}>

type Type_ParsedMarkdown = ObjectType<'ParsedMarkdown', {
  html: Field<'String', Scalar_String>
}>

type Type_AniChartUser = ObjectType<'AniChartUser', {
  user: Field<'User', Type_User>
  settings: Field<'Json', Scalar_Json>
  highlights: Field<'Json', Scalar_Json>
}>

type Type_SiteStatistics = ObjectType<'SiteStatistics', {
  users: Field<'SiteTrendConnection', Type_SiteTrendConnection, {
    sort: Input<'[SiteTrendSort]', Enum_SiteTrendSort>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  anime: Field<'SiteTrendConnection', Type_SiteTrendConnection, {
    sort: Input<'[SiteTrendSort]', Enum_SiteTrendSort>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  manga: Field<'SiteTrendConnection', Type_SiteTrendConnection, {
    sort: Input<'[SiteTrendSort]', Enum_SiteTrendSort>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  characters: Field<'SiteTrendConnection', Type_SiteTrendConnection, {
    sort: Input<'[SiteTrendSort]', Enum_SiteTrendSort>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  staff: Field<'SiteTrendConnection', Type_SiteTrendConnection, {
    sort: Input<'[SiteTrendSort]', Enum_SiteTrendSort>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  studios: Field<'SiteTrendConnection', Type_SiteTrendConnection, {
    sort: Input<'[SiteTrendSort]', Enum_SiteTrendSort>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
  reviews: Field<'SiteTrendConnection', Type_SiteTrendConnection, {
    sort: Input<'[SiteTrendSort]', Enum_SiteTrendSort>
    page: Input<'Int', Scalar_Int>
    perPage: Input<'Int', Scalar_Int>
  }>
}>

type Type_SiteTrendConnection = ObjectType<'SiteTrendConnection', {
  edges: Field<'[SiteTrendEdge]', Type_SiteTrendEdge>
  nodes: Field<'[SiteTrend]', Type_SiteTrend>
  pageInfo: Field<'PageInfo', Type_PageInfo>
}>

type Type_SiteTrendEdge = ObjectType<'SiteTrendEdge', {
  node: Field<'SiteTrend', Type_SiteTrend>
}>

type Type_SiteTrend = ObjectType<'SiteTrend', {
  date: Field<'Int!', Scalar_Int>
  count: Field<'Int!', Scalar_Int>
  change: Field<'Int!', Scalar_Int>
}>

type Type_Mutation = ObjectType<'Mutation', {
  UpdateUser: Field<'User', Type_User, {
    about: Input<'String', Scalar_String>
    titleLanguage: Input<'UserTitleLanguage', Enum_UserTitleLanguage>
    displayAdultContent: Input<'Boolean', Scalar_Boolean>
    airingNotifications: Input<'Boolean', Scalar_Boolean>
    scoreFormat: Input<'ScoreFormat', Enum_ScoreFormat>
    rowOrder: Input<'String', Scalar_String>
    profileColor: Input<'String', Scalar_String>
    donatorBadge: Input<'String', Scalar_String>
    notificationOptions: Input<'[NotificationOptionInput]', Input_NotificationOptionInput>
    timezone: Input<'String', Scalar_String>
    activityMergeTime: Input<'Int', Scalar_Int>
    animeListOptions: Input<'MediaListOptionsInput', Input_MediaListOptionsInput>
    mangaListOptions: Input<'MediaListOptionsInput', Input_MediaListOptionsInput>
    staffNameLanguage: Input<'UserStaffNameLanguage', Enum_UserStaffNameLanguage>
    restrictMessagesToFollowing: Input<'Boolean', Scalar_Boolean>
    disabledListActivity: Input<'[ListActivityOptionInput]', Input_ListActivityOptionInput>
  }>
  SaveMediaListEntry: Field<'MediaList', Type_MediaList, {
    id: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    status: Input<'MediaListStatus', Enum_MediaListStatus>
    score: Input<'Float', Scalar_Float>
    scoreRaw: Input<'Int', Scalar_Int>
    progress: Input<'Int', Scalar_Int>
    progressVolumes: Input<'Int', Scalar_Int>
    repeat: Input<'Int', Scalar_Int>
    priority: Input<'Int', Scalar_Int>
    private: Input<'Boolean', Scalar_Boolean>
    notes: Input<'String', Scalar_String>
    hiddenFromStatusLists: Input<'Boolean', Scalar_Boolean>
    customLists: Input<'[String]', Scalar_String>
    advancedScores: Input<'[Float]', Scalar_Float>
    startedAt: Input<'FuzzyDateInput', Input_FuzzyDateInput>
    completedAt: Input<'FuzzyDateInput', Input_FuzzyDateInput>
  }>
  UpdateMediaListEntries: Field<'[MediaList]', Type_MediaList, {
    status: Input<'MediaListStatus', Enum_MediaListStatus>
    score: Input<'Float', Scalar_Float>
    scoreRaw: Input<'Int', Scalar_Int>
    progress: Input<'Int', Scalar_Int>
    progressVolumes: Input<'Int', Scalar_Int>
    repeat: Input<'Int', Scalar_Int>
    priority: Input<'Int', Scalar_Int>
    private: Input<'Boolean', Scalar_Boolean>
    notes: Input<'String', Scalar_String>
    hiddenFromStatusLists: Input<'Boolean', Scalar_Boolean>
    advancedScores: Input<'[Float]', Scalar_Float>
    startedAt: Input<'FuzzyDateInput', Input_FuzzyDateInput>
    completedAt: Input<'FuzzyDateInput', Input_FuzzyDateInput>
    ids: Input<'[Int]', Scalar_Int>
  }>
  DeleteMediaListEntry: Field<'Deleted', Type_Deleted, {
    id: Input<'Int', Scalar_Int>
  }>
  DeleteCustomList: Field<'Deleted', Type_Deleted, {
    customList: Input<'String', Scalar_String>
    type: Input<'MediaType', Enum_MediaType>
  }>
  SaveTextActivity: Field<'TextActivity', Type_TextActivity, {
    id: Input<'Int', Scalar_Int>
    text: Input<'String', Scalar_String>
    locked: Input<'Boolean', Scalar_Boolean>
  }>
  SaveMessageActivity: Field<'MessageActivity', Type_MessageActivity, {
    id: Input<'Int', Scalar_Int>
    message: Input<'String', Scalar_String>
    recipientId: Input<'Int', Scalar_Int>
    private: Input<'Boolean', Scalar_Boolean>
    locked: Input<'Boolean', Scalar_Boolean>
    asMod: Input<'Boolean', Scalar_Boolean>
  }>
  SaveListActivity: Field<'ListActivity', Type_ListActivity, {
    id: Input<'Int', Scalar_Int>
    locked: Input<'Boolean', Scalar_Boolean>
  }>
  DeleteActivity: Field<'Deleted', Type_Deleted, {
    id: Input<'Int', Scalar_Int>
  }>
  ToggleActivityPin: Field<'ActivityUnion', Union_ActivityUnion, {
    id: Input<'Int', Scalar_Int>
    pinned: Input<'Boolean', Scalar_Boolean>
  }>
  ToggleActivitySubscription: Field<'ActivityUnion', Union_ActivityUnion, {
    activityId: Input<'Int', Scalar_Int>
    subscribe: Input<'Boolean', Scalar_Boolean>
  }>
  SaveActivityReply: Field<'ActivityReply', Type_ActivityReply, {
    id: Input<'Int', Scalar_Int>
    activityId: Input<'Int', Scalar_Int>
    text: Input<'String', Scalar_String>
    asMod: Input<'Boolean', Scalar_Boolean>
  }>
  DeleteActivityReply: Field<'Deleted', Type_Deleted, {
    id: Input<'Int', Scalar_Int>
  }>
  ToggleLike: Field<'[User]', Type_User, {
    id: Input<'Int', Scalar_Int>
    type: Input<'LikeableType', Enum_LikeableType>
  }>
  ToggleLikeV2: Field<'LikeableUnion', Union_LikeableUnion, {
    id: Input<'Int', Scalar_Int>
    type: Input<'LikeableType', Enum_LikeableType>
  }>
  ToggleFollow: Field<'User', Type_User, {
    userId: Input<'Int', Scalar_Int>
  }>
  ToggleFavourite: Field<'Favourites', Type_Favourites, {
    animeId: Input<'Int', Scalar_Int>
    mangaId: Input<'Int', Scalar_Int>
    characterId: Input<'Int', Scalar_Int>
    staffId: Input<'Int', Scalar_Int>
    studioId: Input<'Int', Scalar_Int>
  }>
  UpdateFavouriteOrder: Field<'Favourites', Type_Favourites, {
    animeIds: Input<'[Int]', Scalar_Int>
    mangaIds: Input<'[Int]', Scalar_Int>
    characterIds: Input<'[Int]', Scalar_Int>
    staffIds: Input<'[Int]', Scalar_Int>
    studioIds: Input<'[Int]', Scalar_Int>
    animeOrder: Input<'[Int]', Scalar_Int>
    mangaOrder: Input<'[Int]', Scalar_Int>
    characterOrder: Input<'[Int]', Scalar_Int>
    staffOrder: Input<'[Int]', Scalar_Int>
    studioOrder: Input<'[Int]', Scalar_Int>
  }>
  SaveReview: Field<'Review', Type_Review, {
    id: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    body: Input<'String', Scalar_String>
    summary: Input<'String', Scalar_String>
    score: Input<'Int', Scalar_Int>
    private: Input<'Boolean', Scalar_Boolean>
  }>
  DeleteReview: Field<'Deleted', Type_Deleted, {
    id: Input<'Int', Scalar_Int>
  }>
  RateReview: Field<'Review', Type_Review, {
    reviewId: Input<'Int', Scalar_Int>
    rating: Input<'ReviewRating', Enum_ReviewRating>
  }>
  SaveRecommendation: Field<'Recommendation', Type_Recommendation, {
    mediaId: Input<'Int', Scalar_Int>
    mediaRecommendationId: Input<'Int', Scalar_Int>
    rating: Input<'RecommendationRating', Enum_RecommendationRating>
  }>
  SaveThread: Field<'Thread', Type_Thread, {
    id: Input<'Int', Scalar_Int>
    title: Input<'String', Scalar_String>
    body: Input<'String', Scalar_String>
    categories: Input<'[Int]', Scalar_Int>
    mediaCategories: Input<'[Int]', Scalar_Int>
    sticky: Input<'Boolean', Scalar_Boolean>
    locked: Input<'Boolean', Scalar_Boolean>
  }>
  DeleteThread: Field<'Deleted', Type_Deleted, {
    id: Input<'Int', Scalar_Int>
  }>
  ToggleThreadSubscription: Field<'Thread', Type_Thread, {
    threadId: Input<'Int', Scalar_Int>
    subscribe: Input<'Boolean', Scalar_Boolean>
  }>
  SaveThreadComment: Field<'ThreadComment', Type_ThreadComment, {
    id: Input<'Int', Scalar_Int>
    threadId: Input<'Int', Scalar_Int>
    parentCommentId: Input<'Int', Scalar_Int>
    comment: Input<'String', Scalar_String>
    locked: Input<'Boolean', Scalar_Boolean>
  }>
  DeleteThreadComment: Field<'Deleted', Type_Deleted, {
    id: Input<'Int', Scalar_Int>
  }>
  UpdateAniChartSettings: Field<'Json', Scalar_Json, {
    titleLanguage: Input<'String', Scalar_String>
    outgoingLinkProvider: Input<'String', Scalar_String>
    theme: Input<'String', Scalar_String>
    sort: Input<'String', Scalar_String>
  }>
  UpdateAniChartHighlights: Field<'Json', Scalar_Json, {
    highlights: Input<'[AniChartHighlightInput]', Input_AniChartHighlightInput>
  }>
}>

type Type_Deleted = ObjectType<'Deleted', {
  deleted: Field<'Boolean', Scalar_Boolean>
}>

type Type_InternalPage = ObjectType<'InternalPage', {
  mediaSubmissions: Field<'[MediaSubmission]', Type_MediaSubmission, {
    mediaId: Input<'Int', Scalar_Int>
    submissionId: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    assigneeId: Input<'Int', Scalar_Int>
    status: Input<'SubmissionStatus', Enum_SubmissionStatus>
    type: Input<'MediaType', Enum_MediaType>
    sort: Input<'[SubmissionSort]', Enum_SubmissionSort>
  }>
  characterSubmissions: Field<'[CharacterSubmission]', Type_CharacterSubmission, {
    characterId: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    assigneeId: Input<'Int', Scalar_Int>
    status: Input<'SubmissionStatus', Enum_SubmissionStatus>
    sort: Input<'[SubmissionSort]', Enum_SubmissionSort>
  }>
  staffSubmissions: Field<'[StaffSubmission]', Type_StaffSubmission, {
    staffId: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    assigneeId: Input<'Int', Scalar_Int>
    status: Input<'SubmissionStatus', Enum_SubmissionStatus>
    sort: Input<'[SubmissionSort]', Enum_SubmissionSort>
  }>
  revisionHistory: Field<'[RevisionHistory]', Type_RevisionHistory, {
    userId: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    characterId: Input<'Int', Scalar_Int>
    staffId: Input<'Int', Scalar_Int>
    studioId: Input<'Int', Scalar_Int>
  }>
  reports: Field<'[Report]', Type_Report, {
    reporterId: Input<'Int', Scalar_Int>
    reportedId: Input<'Int', Scalar_Int>
  }>
  modActions: Field<'[ModAction]', Type_ModAction, {
    userId: Input<'Int', Scalar_Int>
    modId: Input<'Int', Scalar_Int>
  }>
  userBlockSearch: Field<'[User]', Type_User, {
    search: Input<'String', Scalar_String>
  }>
  pageInfo: Field<'PageInfo', Type_PageInfo>
  users: Field<'[User]', Type_User, {
    id: Input<'Int', Scalar_Int>
    name: Input<'String', Scalar_String>
    isModerator: Input<'Boolean', Scalar_Boolean>
    search: Input<'String', Scalar_String>
    sort: Input<'[UserSort]', Enum_UserSort>
  }>
  media: Field<'[Media]', Type_Media, {
    id: Input<'Int', Scalar_Int>
    idMal: Input<'Int', Scalar_Int>
    startDate: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    endDate: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    season: Input<'MediaSeason', Enum_MediaSeason>
    seasonYear: Input<'Int', Scalar_Int>
    type: Input<'MediaType', Enum_MediaType>
    format: Input<'MediaFormat', Enum_MediaFormat>
    status: Input<'MediaStatus', Enum_MediaStatus>
    episodes: Input<'Int', Scalar_Int>
    duration: Input<'Int', Scalar_Int>
    chapters: Input<'Int', Scalar_Int>
    volumes: Input<'Int', Scalar_Int>
    isAdult: Input<'Boolean', Scalar_Boolean>
    genre: Input<'String', Scalar_String>
    tag: Input<'String', Scalar_String>
    minimumTagRank: Input<'Int', Scalar_Int>
    tagCategory: Input<'String', Scalar_String>
    onList: Input<'Boolean', Scalar_Boolean>
    licensedBy: Input<'String', Scalar_String>
    licensedById: Input<'Int', Scalar_Int>
    averageScore: Input<'Int', Scalar_Int>
    popularity: Input<'Int', Scalar_Int>
    source: Input<'MediaSource', Enum_MediaSource>
    countryOfOrigin: Input<'CountryCode', Scalar_CountryCode>
    isLicensed: Input<'Boolean', Scalar_Boolean>
    search: Input<'String', Scalar_String>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    idMal_not: Input<'Int', Scalar_Int>
    idMal_in: Input<'[Int]', Scalar_Int>
    idMal_not_in: Input<'[Int]', Scalar_Int>
    startDate_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startDate_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startDate_like: Input<'String', Scalar_String>
    endDate_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    endDate_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    endDate_like: Input<'String', Scalar_String>
    format_in: Input<'[MediaFormat]', Enum_MediaFormat>
    format_not: Input<'MediaFormat', Enum_MediaFormat>
    format_not_in: Input<'[MediaFormat]', Enum_MediaFormat>
    status_in: Input<'[MediaStatus]', Enum_MediaStatus>
    status_not: Input<'MediaStatus', Enum_MediaStatus>
    status_not_in: Input<'[MediaStatus]', Enum_MediaStatus>
    episodes_greater: Input<'Int', Scalar_Int>
    episodes_lesser: Input<'Int', Scalar_Int>
    duration_greater: Input<'Int', Scalar_Int>
    duration_lesser: Input<'Int', Scalar_Int>
    chapters_greater: Input<'Int', Scalar_Int>
    chapters_lesser: Input<'Int', Scalar_Int>
    volumes_greater: Input<'Int', Scalar_Int>
    volumes_lesser: Input<'Int', Scalar_Int>
    genre_in: Input<'[String]', Scalar_String>
    genre_not_in: Input<'[String]', Scalar_String>
    tag_in: Input<'[String]', Scalar_String>
    tag_not_in: Input<'[String]', Scalar_String>
    tagCategory_in: Input<'[String]', Scalar_String>
    tagCategory_not_in: Input<'[String]', Scalar_String>
    licensedBy_in: Input<'[String]', Scalar_String>
    licensedById_in: Input<'[Int]', Scalar_Int>
    averageScore_not: Input<'Int', Scalar_Int>
    averageScore_greater: Input<'Int', Scalar_Int>
    averageScore_lesser: Input<'Int', Scalar_Int>
    popularity_not: Input<'Int', Scalar_Int>
    popularity_greater: Input<'Int', Scalar_Int>
    popularity_lesser: Input<'Int', Scalar_Int>
    source_in: Input<'[MediaSource]', Enum_MediaSource>
    sort: Input<'[MediaSort]', Enum_MediaSort>
  }>
  characters: Field<'[Character]', Type_Character, {
    id: Input<'Int', Scalar_Int>
    isBirthday: Input<'Boolean', Scalar_Boolean>
    search: Input<'String', Scalar_String>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    sort: Input<'[CharacterSort]', Enum_CharacterSort>
  }>
  staff: Field<'[Staff]', Type_Staff, {
    id: Input<'Int', Scalar_Int>
    isBirthday: Input<'Boolean', Scalar_Boolean>
    search: Input<'String', Scalar_String>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    sort: Input<'[StaffSort]', Enum_StaffSort>
  }>
  studios: Field<'[Studio]', Type_Studio, {
    id: Input<'Int', Scalar_Int>
    search: Input<'String', Scalar_String>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    sort: Input<'[StudioSort]', Enum_StudioSort>
  }>
  mediaList: Field<'[MediaList]', Type_MediaList, {
    id: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    userName: Input<'String', Scalar_String>
    type: Input<'MediaType', Enum_MediaType>
    status: Input<'MediaListStatus', Enum_MediaListStatus>
    mediaId: Input<'Int', Scalar_Int>
    isFollowing: Input<'Boolean', Scalar_Boolean>
    notes: Input<'String', Scalar_String>
    startedAt: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    completedAt: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    compareWithAuthList: Input<'Boolean', Scalar_Boolean>
    userId_in: Input<'[Int]', Scalar_Int>
    status_in: Input<'[MediaListStatus]', Enum_MediaListStatus>
    status_not_in: Input<'[MediaListStatus]', Enum_MediaListStatus>
    status_not: Input<'MediaListStatus', Enum_MediaListStatus>
    mediaId_in: Input<'[Int]', Scalar_Int>
    mediaId_not_in: Input<'[Int]', Scalar_Int>
    notes_like: Input<'String', Scalar_String>
    startedAt_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startedAt_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    startedAt_like: Input<'String', Scalar_String>
    completedAt_greater: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    completedAt_lesser: Input<'FuzzyDateInt', Scalar_FuzzyDateInt>
    completedAt_like: Input<'String', Scalar_String>
    sort: Input<'[MediaListSort]', Enum_MediaListSort>
  }>
  airingSchedules: Field<'[AiringSchedule]', Type_AiringSchedule, {
    id: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    episode: Input<'Int', Scalar_Int>
    airingAt: Input<'Int', Scalar_Int>
    notYetAired: Input<'Boolean', Scalar_Boolean>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    mediaId_not: Input<'Int', Scalar_Int>
    mediaId_in: Input<'[Int]', Scalar_Int>
    mediaId_not_in: Input<'[Int]', Scalar_Int>
    episode_not: Input<'Int', Scalar_Int>
    episode_in: Input<'[Int]', Scalar_Int>
    episode_not_in: Input<'[Int]', Scalar_Int>
    episode_greater: Input<'Int', Scalar_Int>
    episode_lesser: Input<'Int', Scalar_Int>
    airingAt_greater: Input<'Int', Scalar_Int>
    airingAt_lesser: Input<'Int', Scalar_Int>
    sort: Input<'[AiringSort]', Enum_AiringSort>
  }>
  mediaTrends: Field<'[MediaTrend]', Type_MediaTrend, {
    mediaId: Input<'Int', Scalar_Int>
    date: Input<'Int', Scalar_Int>
    trending: Input<'Int', Scalar_Int>
    averageScore: Input<'Int', Scalar_Int>
    popularity: Input<'Int', Scalar_Int>
    episode: Input<'Int', Scalar_Int>
    releasing: Input<'Boolean', Scalar_Boolean>
    mediaId_not: Input<'Int', Scalar_Int>
    mediaId_in: Input<'[Int]', Scalar_Int>
    mediaId_not_in: Input<'[Int]', Scalar_Int>
    date_greater: Input<'Int', Scalar_Int>
    date_lesser: Input<'Int', Scalar_Int>
    trending_greater: Input<'Int', Scalar_Int>
    trending_lesser: Input<'Int', Scalar_Int>
    trending_not: Input<'Int', Scalar_Int>
    averageScore_greater: Input<'Int', Scalar_Int>
    averageScore_lesser: Input<'Int', Scalar_Int>
    averageScore_not: Input<'Int', Scalar_Int>
    popularity_greater: Input<'Int', Scalar_Int>
    popularity_lesser: Input<'Int', Scalar_Int>
    popularity_not: Input<'Int', Scalar_Int>
    episode_greater: Input<'Int', Scalar_Int>
    episode_lesser: Input<'Int', Scalar_Int>
    episode_not: Input<'Int', Scalar_Int>
    sort: Input<'[MediaTrendSort]', Enum_MediaTrendSort>
  }>
  notifications: Field<'[NotificationUnion]', Union_NotificationUnion, {
    type: Input<'NotificationType', Enum_NotificationType>
    resetNotificationCount: Input<'Boolean', Scalar_Boolean>
    type_in: Input<'[NotificationType]', Enum_NotificationType>
  }>
  followers: Field<'[User]', Type_User, {
    userId: Input<'Int!', Scalar_Int>
    sort: Input<'[UserSort]', Enum_UserSort>
  }>
  following: Field<'[User]', Type_User, {
    userId: Input<'Int!', Scalar_Int>
    sort: Input<'[UserSort]', Enum_UserSort>
  }>
  activities: Field<'[ActivityUnion]', Union_ActivityUnion, {
    id: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    messengerId: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    type: Input<'ActivityType', Enum_ActivityType>
    isFollowing: Input<'Boolean', Scalar_Boolean>
    hasReplies: Input<'Boolean', Scalar_Boolean>
    hasRepliesOrTypeText: Input<'Boolean', Scalar_Boolean>
    createdAt: Input<'Int', Scalar_Int>
    id_not: Input<'Int', Scalar_Int>
    id_in: Input<'[Int]', Scalar_Int>
    id_not_in: Input<'[Int]', Scalar_Int>
    userId_not: Input<'Int', Scalar_Int>
    userId_in: Input<'[Int]', Scalar_Int>
    userId_not_in: Input<'[Int]', Scalar_Int>
    messengerId_not: Input<'Int', Scalar_Int>
    messengerId_in: Input<'[Int]', Scalar_Int>
    messengerId_not_in: Input<'[Int]', Scalar_Int>
    mediaId_not: Input<'Int', Scalar_Int>
    mediaId_in: Input<'[Int]', Scalar_Int>
    mediaId_not_in: Input<'[Int]', Scalar_Int>
    type_not: Input<'ActivityType', Enum_ActivityType>
    type_in: Input<'[ActivityType]', Enum_ActivityType>
    type_not_in: Input<'[ActivityType]', Enum_ActivityType>
    createdAt_greater: Input<'Int', Scalar_Int>
    createdAt_lesser: Input<'Int', Scalar_Int>
    sort: Input<'[ActivitySort]', Enum_ActivitySort>
  }>
  activityReplies: Field<'[ActivityReply]', Type_ActivityReply, {
    id: Input<'Int', Scalar_Int>
    activityId: Input<'Int', Scalar_Int>
  }>
  threads: Field<'[Thread]', Type_Thread, {
    id: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    replyUserId: Input<'Int', Scalar_Int>
    subscribed: Input<'Boolean', Scalar_Boolean>
    categoryId: Input<'Int', Scalar_Int>
    mediaCategoryId: Input<'Int', Scalar_Int>
    search: Input<'String', Scalar_String>
    id_in: Input<'[Int]', Scalar_Int>
    sort: Input<'[ThreadSort]', Enum_ThreadSort>
  }>
  threadComments: Field<'[ThreadComment]', Type_ThreadComment, {
    id: Input<'Int', Scalar_Int>
    threadId: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    sort: Input<'[ThreadCommentSort]', Enum_ThreadCommentSort>
  }>
  reviews: Field<'[Review]', Type_Review, {
    id: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    mediaType: Input<'MediaType', Enum_MediaType>
    sort: Input<'[ReviewSort]', Enum_ReviewSort>
  }>
  recommendations: Field<'[Recommendation]', Type_Recommendation, {
    id: Input<'Int', Scalar_Int>
    mediaId: Input<'Int', Scalar_Int>
    mediaRecommendationId: Input<'Int', Scalar_Int>
    userId: Input<'Int', Scalar_Int>
    rating: Input<'Int', Scalar_Int>
    onList: Input<'Boolean', Scalar_Boolean>
    rating_greater: Input<'Int', Scalar_Int>
    rating_lesser: Input<'Int', Scalar_Int>
    sort: Input<'[RecommendationSort]', Enum_RecommendationSort>
  }>
  likes: Field<'[User]', Type_User, {
    likeableId: Input<'Int', Scalar_Int>
    type: Input<'LikeableType', Enum_LikeableType>
  }>
}>

type Type_MediaSubmission = ObjectType<'MediaSubmission', {
  id: Field<'Int!', Scalar_Int>
  submitter: Field<'User', Type_User>
  assignee: Field<'User', Type_User>
  status: Field<'SubmissionStatus', Enum_SubmissionStatus>
  submitterStats: Field<'Json', Scalar_Json>
  notes: Field<'String', Scalar_String>
  source: Field<'String', Scalar_String>
  changes: Field<'[String]', Scalar_String>
  locked: Field<'Boolean', Scalar_Boolean>
  media: Field<'Media', Type_Media>
  submission: Field<'Media', Type_Media>
  characters: Field<'[MediaSubmissionComparison]', Type_MediaSubmissionComparison>
  staff: Field<'[MediaSubmissionComparison]', Type_MediaSubmissionComparison>
  studios: Field<'[MediaSubmissionComparison]', Type_MediaSubmissionComparison>
  relations: Field<'[MediaEdge]', Type_MediaEdge>
  externalLinks: Field<'[MediaSubmissionComparison]', Type_MediaSubmissionComparison>
  createdAt: Field<'Int', Scalar_Int>
}>

type Type_MediaSubmissionComparison = ObjectType<'MediaSubmissionComparison', {
  submission: Field<'MediaSubmissionEdge', Type_MediaSubmissionEdge>
  character: Field<'MediaCharacter', Type_MediaCharacter>
  staff: Field<'StaffEdge', Type_StaffEdge>
  studio: Field<'StudioEdge', Type_StudioEdge>
  externalLink: Field<'MediaExternalLink', Type_MediaExternalLink>
}>

type Type_MediaSubmissionEdge = ObjectType<'MediaSubmissionEdge', {
  id: Field<'Int', Scalar_Int>
  characterRole: Field<'CharacterRole', Enum_CharacterRole>
  staffRole: Field<'String', Scalar_String>
  roleNotes: Field<'String', Scalar_String>
  dubGroup: Field<'String', Scalar_String>
  characterName: Field<'String', Scalar_String>
  isMain: Field<'Boolean', Scalar_Boolean>
  character: Field<'Character', Type_Character>
  characterSubmission: Field<'Character', Type_Character>
  voiceActor: Field<'Staff', Type_Staff>
  voiceActorSubmission: Field<'Staff', Type_Staff>
  staff: Field<'Staff', Type_Staff>
  staffSubmission: Field<'Staff', Type_Staff>
  studio: Field<'Studio', Type_Studio>
  externalLink: Field<'MediaExternalLink', Type_MediaExternalLink>
  media: Field<'Media', Type_Media>
}>

type Type_MediaCharacter = ObjectType<'MediaCharacter', {
  id: Field<'Int', Scalar_Int>
  role: Field<'CharacterRole', Enum_CharacterRole>
  roleNotes: Field<'String', Scalar_String>
  dubGroup: Field<'String', Scalar_String>
  characterName: Field<'String', Scalar_String>
  character: Field<'Character', Type_Character>
  voiceActor: Field<'Staff', Type_Staff>
}>

type Type_CharacterSubmission = ObjectType<'CharacterSubmission', {
  id: Field<'Int!', Scalar_Int>
  character: Field<'Character', Type_Character>
  submission: Field<'Character', Type_Character>
  submitter: Field<'User', Type_User>
  assignee: Field<'User', Type_User>
  status: Field<'SubmissionStatus', Enum_SubmissionStatus>
  notes: Field<'String', Scalar_String>
  source: Field<'String', Scalar_String>
  locked: Field<'Boolean', Scalar_Boolean>
  createdAt: Field<'Int', Scalar_Int>
}>

type Type_StaffSubmission = ObjectType<'StaffSubmission', {
  id: Field<'Int!', Scalar_Int>
  staff: Field<'Staff', Type_Staff>
  submission: Field<'Staff', Type_Staff>
  submitter: Field<'User', Type_User>
  assignee: Field<'User', Type_User>
  status: Field<'SubmissionStatus', Enum_SubmissionStatus>
  notes: Field<'String', Scalar_String>
  source: Field<'String', Scalar_String>
  locked: Field<'Boolean', Scalar_Boolean>
  createdAt: Field<'Int', Scalar_Int>
}>

type Type_RevisionHistory = ObjectType<'RevisionHistory', {
  id: Field<'Int!', Scalar_Int>
  action: Field<'RevisionHistoryAction', Enum_RevisionHistoryAction>
  changes: Field<'Json', Scalar_Json>
  user: Field<'User', Type_User>
  media: Field<'Media', Type_Media>
  character: Field<'Character', Type_Character>
  staff: Field<'Staff', Type_Staff>
  studio: Field<'Studio', Type_Studio>
  externalLink: Field<'MediaExternalLink', Type_MediaExternalLink>
  createdAt: Field<'Int', Scalar_Int>
}>

type Type_Report = ObjectType<'Report', {
  id: Field<'Int!', Scalar_Int>
  reporter: Field<'User', Type_User>
  reported: Field<'User', Type_User>
  reason: Field<'String', Scalar_String>
  createdAt: Field<'Int', Scalar_Int>
  cleared: Field<'Boolean', Scalar_Boolean>
}>

type Type_ModAction = ObjectType<'ModAction', {
  id: Field<'Int!', Scalar_Int>
  user: Field<'User', Type_User>
  mod: Field<'User', Type_User>
  type: Field<'ModActionType', Enum_ModActionType>
  objectId: Field<'Int', Scalar_Int>
  objectType: Field<'String', Scalar_String>
  data: Field<'String', Scalar_String>
  createdAt: Field<'Int!', Scalar_Int>
}>

type Type_CharacterSubmissionConnection = ObjectType<'CharacterSubmissionConnection', {
  edges: Field<'[CharacterSubmissionEdge]', Type_CharacterSubmissionEdge>
  nodes: Field<'[CharacterSubmission]', Type_CharacterSubmission>
  pageInfo: Field<'PageInfo', Type_PageInfo>
}>

type Type_CharacterSubmissionEdge = ObjectType<'CharacterSubmissionEdge', {
  node: Field<'CharacterSubmission', Type_CharacterSubmission>
  role: Field<'CharacterRole', Enum_CharacterRole>
  voiceActors: Field<'[Staff]', Type_Staff>
  submittedVoiceActors: Field<'[StaffSubmission]', Type_StaffSubmission>
}>

type Type_UserModData = ObjectType<'UserModData', {
  alts: Field<'[User]', Type_User>
  bans: Field<'Json', Scalar_Json>
  ip: Field<'Json', Scalar_Json>
  counts: Field<'Json', Scalar_Json>
  privacy: Field<'Int', Scalar_Int>
  email: Field<'String', Scalar_String>
}>

type Union_NotificationUnion = UnionType<'NotificationUnion', {
  AiringNotification: Type_AiringNotification
  FollowingNotification: Type_FollowingNotification
  ActivityMessageNotification: Type_ActivityMessageNotification
  ActivityMentionNotification: Type_ActivityMentionNotification
  ActivityReplyNotification: Type_ActivityReplyNotification
  ActivityReplySubscribedNotification: Type_ActivityReplySubscribedNotification
  ActivityLikeNotification: Type_ActivityLikeNotification
  ActivityReplyLikeNotification: Type_ActivityReplyLikeNotification
  ThreadCommentMentionNotification: Type_ThreadCommentMentionNotification
  ThreadCommentReplyNotification: Type_ThreadCommentReplyNotification
  ThreadCommentSubscribedNotification: Type_ThreadCommentSubscribedNotification
  ThreadCommentLikeNotification: Type_ThreadCommentLikeNotification
  ThreadLikeNotification: Type_ThreadLikeNotification
  RelatedMediaAdditionNotification: Type_RelatedMediaAdditionNotification
  MediaDataChangeNotification: Type_MediaDataChangeNotification
  MediaMergeNotification: Type_MediaMergeNotification
  MediaDeletionNotification: Type_MediaDeletionNotification
}>

type Union_ActivityUnion = UnionType<'ActivityUnion', {
  TextActivity: Type_TextActivity
  ListActivity: Type_ListActivity
  MessageActivity: Type_MessageActivity
}>

type Union_LikeableUnion = UnionType<'LikeableUnion', {
  ListActivity: Type_ListActivity
  TextActivity: Type_TextActivity
  MessageActivity: Type_MessageActivity
  ActivityReply: Type_ActivityReply
  Thread: Type_Thread
  ThreadComment: Type_ThreadComment
}>

export type Schema = DefineSchema<{
  Json: Scalar_Json
  CountryCode: Scalar_CountryCode
  FuzzyDateInt: Scalar_FuzzyDateInt
  Int: Scalar_Int
  Float: Scalar_Float
  String: Scalar_String
  Boolean: Scalar_Boolean
  ID: Scalar_ID
  UserSort: Enum_UserSort
  UserTitleLanguage: Enum_UserTitleLanguage
  NotificationType: Enum_NotificationType
  UserStaffNameLanguage: Enum_UserStaffNameLanguage
  MediaListStatus: Enum_MediaListStatus
  ScoreFormat: Enum_ScoreFormat
  MediaType: Enum_MediaType
  MediaFormat: Enum_MediaFormat
  MediaStatus: Enum_MediaStatus
  MediaSeason: Enum_MediaSeason
  MediaSource: Enum_MediaSource
  CharacterSort: Enum_CharacterSort
  CharacterRole: Enum_CharacterRole
  MediaSort: Enum_MediaSort
  StaffLanguage: Enum_StaffLanguage
  StaffSort: Enum_StaffSort
  StudioSort: Enum_StudioSort
  MediaTrendSort: Enum_MediaTrendSort
  ExternalLinkType: Enum_ExternalLinkType
  MediaRankType: Enum_MediaRankType
  ReviewSort: Enum_ReviewSort
  ReviewRating: Enum_ReviewRating
  RecommendationSort: Enum_RecommendationSort
  RecommendationRating: Enum_RecommendationRating
  MediaRelation: Enum_MediaRelation
  UserStatisticsSort: Enum_UserStatisticsSort
  ModRole: Enum_ModRole
  MediaListSort: Enum_MediaListSort
  AiringSort: Enum_AiringSort
  ActivityType: Enum_ActivityType
  ActivitySort: Enum_ActivitySort
  ThreadSort: Enum_ThreadSort
  ThreadCommentSort: Enum_ThreadCommentSort
  LikeableType: Enum_LikeableType
  SiteTrendSort: Enum_SiteTrendSort
  ExternalLinkMediaType: Enum_ExternalLinkMediaType
  SubmissionStatus: Enum_SubmissionStatus
  SubmissionSort: Enum_SubmissionSort
  RevisionHistoryAction: Enum_RevisionHistoryAction
  ModActionType: Enum_ModActionType
  NotificationOptionInput: Input_NotificationOptionInput
  MediaListOptionsInput: Input_MediaListOptionsInput
  ListActivityOptionInput: Input_ListActivityOptionInput
  FuzzyDateInput: Input_FuzzyDateInput
  AniChartHighlightInput: Input_AniChartHighlightInput
  MediaTitleInput: Input_MediaTitleInput
  AiringScheduleInput: Input_AiringScheduleInput
  MediaExternalLinkInput: Input_MediaExternalLinkInput
  CharacterNameInput: Input_CharacterNameInput
  StaffNameInput: Input_StaffNameInput
  Query: Type_Query
  Page: Type_Page
  PageInfo: Type_PageInfo
  User: Type_User
  UserAvatar: Type_UserAvatar
  UserOptions: Type_UserOptions
  NotificationOption: Type_NotificationOption
  ListActivityOption: Type_ListActivityOption
  MediaListOptions: Type_MediaListOptions
  MediaListTypeOptions: Type_MediaListTypeOptions
  Favourites: Type_Favourites
  MediaConnection: Type_MediaConnection
  MediaEdge: Type_MediaEdge
  Media: Type_Media
  MediaTitle: Type_MediaTitle
  FuzzyDate: Type_FuzzyDate
  MediaTrailer: Type_MediaTrailer
  MediaCoverImage: Type_MediaCoverImage
  MediaTag: Type_MediaTag
  CharacterConnection: Type_CharacterConnection
  CharacterEdge: Type_CharacterEdge
  Character: Type_Character
  CharacterName: Type_CharacterName
  CharacterImage: Type_CharacterImage
  Staff: Type_Staff
  StaffName: Type_StaffName
  StaffImage: Type_StaffImage
  StaffRoleType: Type_StaffRoleType
  StaffConnection: Type_StaffConnection
  StaffEdge: Type_StaffEdge
  StudioConnection: Type_StudioConnection
  StudioEdge: Type_StudioEdge
  Studio: Type_Studio
  AiringSchedule: Type_AiringSchedule
  AiringScheduleConnection: Type_AiringScheduleConnection
  AiringScheduleEdge: Type_AiringScheduleEdge
  MediaTrendConnection: Type_MediaTrendConnection
  MediaTrendEdge: Type_MediaTrendEdge
  MediaTrend: Type_MediaTrend
  MediaExternalLink: Type_MediaExternalLink
  MediaStreamingEpisode: Type_MediaStreamingEpisode
  MediaRank: Type_MediaRank
  MediaList: Type_MediaList
  ReviewConnection: Type_ReviewConnection
  ReviewEdge: Type_ReviewEdge
  Review: Type_Review
  RecommendationConnection: Type_RecommendationConnection
  RecommendationEdge: Type_RecommendationEdge
  Recommendation: Type_Recommendation
  MediaStats: Type_MediaStats
  ScoreDistribution: Type_ScoreDistribution
  StatusDistribution: Type_StatusDistribution
  AiringProgression: Type_AiringProgression
  UserStatisticTypes: Type_UserStatisticTypes
  UserStatistics: Type_UserStatistics
  UserFormatStatistic: Type_UserFormatStatistic
  UserStatusStatistic: Type_UserStatusStatistic
  UserScoreStatistic: Type_UserScoreStatistic
  UserLengthStatistic: Type_UserLengthStatistic
  UserReleaseYearStatistic: Type_UserReleaseYearStatistic
  UserStartYearStatistic: Type_UserStartYearStatistic
  UserGenreStatistic: Type_UserGenreStatistic
  UserTagStatistic: Type_UserTagStatistic
  UserCountryStatistic: Type_UserCountryStatistic
  UserVoiceActorStatistic: Type_UserVoiceActorStatistic
  UserStaffStatistic: Type_UserStaffStatistic
  UserStudioStatistic: Type_UserStudioStatistic
  UserStats: Type_UserStats
  UserActivityHistory: Type_UserActivityHistory
  ListScoreStats: Type_ListScoreStats
  GenreStats: Type_GenreStats
  TagStats: Type_TagStats
  StaffStats: Type_StaffStats
  StudioStats: Type_StudioStats
  YearStats: Type_YearStats
  FormatStats: Type_FormatStats
  UserPreviousName: Type_UserPreviousName
  AiringNotification: Type_AiringNotification
  FollowingNotification: Type_FollowingNotification
  ActivityMessageNotification: Type_ActivityMessageNotification
  MessageActivity: Type_MessageActivity
  ActivityReply: Type_ActivityReply
  ActivityMentionNotification: Type_ActivityMentionNotification
  TextActivity: Type_TextActivity
  ListActivity: Type_ListActivity
  ActivityReplyNotification: Type_ActivityReplyNotification
  ActivityReplySubscribedNotification: Type_ActivityReplySubscribedNotification
  ActivityLikeNotification: Type_ActivityLikeNotification
  ActivityReplyLikeNotification: Type_ActivityReplyLikeNotification
  ThreadCommentMentionNotification: Type_ThreadCommentMentionNotification
  Thread: Type_Thread
  ThreadCategory: Type_ThreadCategory
  ThreadComment: Type_ThreadComment
  ThreadCommentReplyNotification: Type_ThreadCommentReplyNotification
  ThreadCommentSubscribedNotification: Type_ThreadCommentSubscribedNotification
  ThreadCommentLikeNotification: Type_ThreadCommentLikeNotification
  ThreadLikeNotification: Type_ThreadLikeNotification
  RelatedMediaAdditionNotification: Type_RelatedMediaAdditionNotification
  MediaDataChangeNotification: Type_MediaDataChangeNotification
  MediaMergeNotification: Type_MediaMergeNotification
  MediaDeletionNotification: Type_MediaDeletionNotification
  MediaListCollection: Type_MediaListCollection
  MediaListGroup: Type_MediaListGroup
  ParsedMarkdown: Type_ParsedMarkdown
  AniChartUser: Type_AniChartUser
  SiteStatistics: Type_SiteStatistics
  SiteTrendConnection: Type_SiteTrendConnection
  SiteTrendEdge: Type_SiteTrendEdge
  SiteTrend: Type_SiteTrend
  Mutation: Type_Mutation
  Deleted: Type_Deleted
  InternalPage: Type_InternalPage
  MediaSubmission: Type_MediaSubmission
  MediaSubmissionComparison: Type_MediaSubmissionComparison
  MediaSubmissionEdge: Type_MediaSubmissionEdge
  MediaCharacter: Type_MediaCharacter
  CharacterSubmission: Type_CharacterSubmission
  StaffSubmission: Type_StaffSubmission
  RevisionHistory: Type_RevisionHistory
  Report: Type_Report
  ModAction: Type_ModAction
  CharacterSubmissionConnection: Type_CharacterSubmissionConnection
  CharacterSubmissionEdge: Type_CharacterSubmissionEdge
  UserModData: Type_UserModData
  NotificationUnion: Union_NotificationUnion
  ActivityUnion: Union_ActivityUnion
  LikeableUnion: Union_LikeableUnion
}>

declare module '@gqfn/core/schema' {
  interface Schemas {
    'https://graphql.anilist.co': Schema
  }
}
