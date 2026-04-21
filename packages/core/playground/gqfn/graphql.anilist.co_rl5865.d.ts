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
  type: Input<Enum_NotificationType | null>
  enabled: Input<Scalar_Boolean | null>
}>

type Input_MediaListOptionsInput = InputObjectType<'MediaListOptionsInput', {
  sectionOrder: Input<[Scalar_String | null] | null>
  splitCompletedSectionByFormat: Input<Scalar_Boolean | null>
  customLists: Input<[Scalar_String | null] | null>
  advancedScoring: Input<[Scalar_String | null] | null>
  advancedScoringEnabled: Input<Scalar_Boolean | null>
  theme: Input<Scalar_String | null>
}>

type Input_ListActivityOptionInput = InputObjectType<'ListActivityOptionInput', {
  disabled: Input<Scalar_Boolean | null>
  type: Input<Enum_MediaListStatus | null>
}>

type Input_FuzzyDateInput = InputObjectType<'FuzzyDateInput', {
  year: Input<Scalar_Int | null>
  month: Input<Scalar_Int | null>
  day: Input<Scalar_Int | null>
}>

type Input_AniChartHighlightInput = InputObjectType<'AniChartHighlightInput', {
  mediaId: Input<Scalar_Int | null>
  highlight: Input<Scalar_String | null>
}>

type Input_MediaTitleInput = InputObjectType<'MediaTitleInput', {
  romaji: Input<Scalar_String | null>
  english: Input<Scalar_String | null>
  native: Input<Scalar_String | null>
}>

type Input_AiringScheduleInput = InputObjectType<'AiringScheduleInput', {
  airingAt: Input<Scalar_Int | null>
  episode: Input<Scalar_Int | null>
  timeUntilAiring: Input<Scalar_Int | null>
}>

type Input_MediaExternalLinkInput = InputObjectType<'MediaExternalLinkInput', {
  id: Input<Scalar_Int>
  url: Input<Scalar_String>
  site: Input<Scalar_String>
}>

type Input_CharacterNameInput = InputObjectType<'CharacterNameInput', {
  first: Input<Scalar_String | null>
  middle: Input<Scalar_String | null>
  last: Input<Scalar_String | null>
  native: Input<Scalar_String | null>
  alternative: Input<[Scalar_String | null] | null>
  alternativeSpoiler: Input<[Scalar_String | null] | null>
}>

type Input_StaffNameInput = InputObjectType<'StaffNameInput', {
  first: Input<Scalar_String | null>
  middle: Input<Scalar_String | null>
  last: Input<Scalar_String | null>
  native: Input<Scalar_String | null>
  alternative: Input<[Scalar_String | null] | null>
}>

type Type_Query = ObjectType<'Query', {
  Page: Field<Type_Page | null, {
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  Media: Field<Type_Media | null, {
    id: Input<Scalar_Int | null>
    idMal: Input<Scalar_Int | null>
    startDate: Input<Scalar_FuzzyDateInt | null>
    endDate: Input<Scalar_FuzzyDateInt | null>
    season: Input<Enum_MediaSeason | null>
    seasonYear: Input<Scalar_Int | null>
    type: Input<Enum_MediaType | null>
    format: Input<Enum_MediaFormat | null>
    status: Input<Enum_MediaStatus | null>
    episodes: Input<Scalar_Int | null>
    duration: Input<Scalar_Int | null>
    chapters: Input<Scalar_Int | null>
    volumes: Input<Scalar_Int | null>
    isAdult: Input<Scalar_Boolean | null>
    genre: Input<Scalar_String | null>
    tag: Input<Scalar_String | null>
    minimumTagRank: Input<Scalar_Int | null>
    tagCategory: Input<Scalar_String | null>
    onList: Input<Scalar_Boolean | null>
    licensedBy: Input<Scalar_String | null>
    licensedById: Input<Scalar_Int | null>
    averageScore: Input<Scalar_Int | null>
    popularity: Input<Scalar_Int | null>
    source: Input<Enum_MediaSource | null>
    countryOfOrigin: Input<Scalar_CountryCode | null>
    isLicensed: Input<Scalar_Boolean | null>
    search: Input<Scalar_String | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    idMal_not: Input<Scalar_Int | null>
    idMal_in: Input<[Scalar_Int | null] | null>
    idMal_not_in: Input<[Scalar_Int | null] | null>
    startDate_greater: Input<Scalar_FuzzyDateInt | null>
    startDate_lesser: Input<Scalar_FuzzyDateInt | null>
    startDate_like: Input<Scalar_String | null>
    endDate_greater: Input<Scalar_FuzzyDateInt | null>
    endDate_lesser: Input<Scalar_FuzzyDateInt | null>
    endDate_like: Input<Scalar_String | null>
    format_in: Input<[Enum_MediaFormat | null] | null>
    format_not: Input<Enum_MediaFormat | null>
    format_not_in: Input<[Enum_MediaFormat | null] | null>
    status_in: Input<[Enum_MediaStatus | null] | null>
    status_not: Input<Enum_MediaStatus | null>
    status_not_in: Input<[Enum_MediaStatus | null] | null>
    episodes_greater: Input<Scalar_Int | null>
    episodes_lesser: Input<Scalar_Int | null>
    duration_greater: Input<Scalar_Int | null>
    duration_lesser: Input<Scalar_Int | null>
    chapters_greater: Input<Scalar_Int | null>
    chapters_lesser: Input<Scalar_Int | null>
    volumes_greater: Input<Scalar_Int | null>
    volumes_lesser: Input<Scalar_Int | null>
    genre_in: Input<[Scalar_String | null] | null>
    genre_not_in: Input<[Scalar_String | null] | null>
    tag_in: Input<[Scalar_String | null] | null>
    tag_not_in: Input<[Scalar_String | null] | null>
    tagCategory_in: Input<[Scalar_String | null] | null>
    tagCategory_not_in: Input<[Scalar_String | null] | null>
    licensedBy_in: Input<[Scalar_String | null] | null>
    licensedById_in: Input<[Scalar_Int | null] | null>
    averageScore_not: Input<Scalar_Int | null>
    averageScore_greater: Input<Scalar_Int | null>
    averageScore_lesser: Input<Scalar_Int | null>
    popularity_not: Input<Scalar_Int | null>
    popularity_greater: Input<Scalar_Int | null>
    popularity_lesser: Input<Scalar_Int | null>
    source_in: Input<[Enum_MediaSource | null] | null>
    sort: Input<[Enum_MediaSort | null] | null>
  }>
  MediaTrend: Field<Type_MediaTrend | null, {
    mediaId: Input<Scalar_Int | null>
    date: Input<Scalar_Int | null>
    trending: Input<Scalar_Int | null>
    averageScore: Input<Scalar_Int | null>
    popularity: Input<Scalar_Int | null>
    episode: Input<Scalar_Int | null>
    releasing: Input<Scalar_Boolean | null>
    mediaId_not: Input<Scalar_Int | null>
    mediaId_in: Input<[Scalar_Int | null] | null>
    mediaId_not_in: Input<[Scalar_Int | null] | null>
    date_greater: Input<Scalar_Int | null>
    date_lesser: Input<Scalar_Int | null>
    trending_greater: Input<Scalar_Int | null>
    trending_lesser: Input<Scalar_Int | null>
    trending_not: Input<Scalar_Int | null>
    averageScore_greater: Input<Scalar_Int | null>
    averageScore_lesser: Input<Scalar_Int | null>
    averageScore_not: Input<Scalar_Int | null>
    popularity_greater: Input<Scalar_Int | null>
    popularity_lesser: Input<Scalar_Int | null>
    popularity_not: Input<Scalar_Int | null>
    episode_greater: Input<Scalar_Int | null>
    episode_lesser: Input<Scalar_Int | null>
    episode_not: Input<Scalar_Int | null>
    sort: Input<[Enum_MediaTrendSort | null] | null>
  }>
  AiringSchedule: Field<Type_AiringSchedule | null, {
    id: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    episode: Input<Scalar_Int | null>
    airingAt: Input<Scalar_Int | null>
    notYetAired: Input<Scalar_Boolean | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    mediaId_not: Input<Scalar_Int | null>
    mediaId_in: Input<[Scalar_Int | null] | null>
    mediaId_not_in: Input<[Scalar_Int | null] | null>
    episode_not: Input<Scalar_Int | null>
    episode_in: Input<[Scalar_Int | null] | null>
    episode_not_in: Input<[Scalar_Int | null] | null>
    episode_greater: Input<Scalar_Int | null>
    episode_lesser: Input<Scalar_Int | null>
    airingAt_greater: Input<Scalar_Int | null>
    airingAt_lesser: Input<Scalar_Int | null>
    sort: Input<[Enum_AiringSort | null] | null>
  }>
  Character: Field<Type_Character | null, {
    id: Input<Scalar_Int | null>
    isBirthday: Input<Scalar_Boolean | null>
    search: Input<Scalar_String | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    sort: Input<[Enum_CharacterSort | null] | null>
  }>
  Staff: Field<Type_Staff | null, {
    id: Input<Scalar_Int | null>
    isBirthday: Input<Scalar_Boolean | null>
    search: Input<Scalar_String | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    sort: Input<[Enum_StaffSort | null] | null>
  }>
  MediaList: Field<Type_MediaList | null, {
    id: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    userName: Input<Scalar_String | null>
    type: Input<Enum_MediaType | null>
    status: Input<Enum_MediaListStatus | null>
    mediaId: Input<Scalar_Int | null>
    isFollowing: Input<Scalar_Boolean | null>
    notes: Input<Scalar_String | null>
    startedAt: Input<Scalar_FuzzyDateInt | null>
    completedAt: Input<Scalar_FuzzyDateInt | null>
    compareWithAuthList: Input<Scalar_Boolean | null>
    userId_in: Input<[Scalar_Int | null] | null>
    status_in: Input<[Enum_MediaListStatus | null] | null>
    status_not_in: Input<[Enum_MediaListStatus | null] | null>
    status_not: Input<Enum_MediaListStatus | null>
    mediaId_in: Input<[Scalar_Int | null] | null>
    mediaId_not_in: Input<[Scalar_Int | null] | null>
    notes_like: Input<Scalar_String | null>
    startedAt_greater: Input<Scalar_FuzzyDateInt | null>
    startedAt_lesser: Input<Scalar_FuzzyDateInt | null>
    startedAt_like: Input<Scalar_String | null>
    completedAt_greater: Input<Scalar_FuzzyDateInt | null>
    completedAt_lesser: Input<Scalar_FuzzyDateInt | null>
    completedAt_like: Input<Scalar_String | null>
    sort: Input<[Enum_MediaListSort | null] | null>
  }>
  MediaListCollection: Field<Type_MediaListCollection | null, {
    userId: Input<Scalar_Int | null>
    userName: Input<Scalar_String | null>
    type: Input<Enum_MediaType | null>
    status: Input<Enum_MediaListStatus | null>
    notes: Input<Scalar_String | null>
    startedAt: Input<Scalar_FuzzyDateInt | null>
    completedAt: Input<Scalar_FuzzyDateInt | null>
    forceSingleCompletedList: Input<Scalar_Boolean | null>
    chunk: Input<Scalar_Int | null>
    perChunk: Input<Scalar_Int | null>
    status_in: Input<[Enum_MediaListStatus | null] | null>
    status_not_in: Input<[Enum_MediaListStatus | null] | null>
    status_not: Input<Enum_MediaListStatus | null>
    notes_like: Input<Scalar_String | null>
    startedAt_greater: Input<Scalar_FuzzyDateInt | null>
    startedAt_lesser: Input<Scalar_FuzzyDateInt | null>
    startedAt_like: Input<Scalar_String | null>
    completedAt_greater: Input<Scalar_FuzzyDateInt | null>
    completedAt_lesser: Input<Scalar_FuzzyDateInt | null>
    completedAt_like: Input<Scalar_String | null>
    sort: Input<[Enum_MediaListSort | null] | null>
  }>
  GenreCollection: Field<[Scalar_String | null] | null>
  MediaTagCollection: Field<[Type_MediaTag | null] | null, {
    status: Input<Scalar_Int | null>
  }>
  User: Field<Type_User | null, {
    id: Input<Scalar_Int | null>
    name: Input<Scalar_String | null>
    isModerator: Input<Scalar_Boolean | null>
    search: Input<Scalar_String | null>
    sort: Input<[Enum_UserSort | null] | null>
  }>
  Viewer: Field<Type_User | null>
  Notification: Field<Union_NotificationUnion | null, {
    type: Input<Enum_NotificationType | null>
    resetNotificationCount: Input<Scalar_Boolean | null>
    type_in: Input<[Enum_NotificationType | null] | null>
  }>
  Studio: Field<Type_Studio | null, {
    id: Input<Scalar_Int | null>
    search: Input<Scalar_String | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    sort: Input<[Enum_StudioSort | null] | null>
  }>
  Review: Field<Type_Review | null, {
    id: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    mediaType: Input<Enum_MediaType | null>
    sort: Input<[Enum_ReviewSort | null] | null>
  }>
  Activity: Field<Union_ActivityUnion | null, {
    id: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    messengerId: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    type: Input<Enum_ActivityType | null>
    isFollowing: Input<Scalar_Boolean | null>
    hasReplies: Input<Scalar_Boolean | null>
    hasRepliesOrTypeText: Input<Scalar_Boolean | null>
    createdAt: Input<Scalar_Int | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    userId_not: Input<Scalar_Int | null>
    userId_in: Input<[Scalar_Int | null] | null>
    userId_not_in: Input<[Scalar_Int | null] | null>
    messengerId_not: Input<Scalar_Int | null>
    messengerId_in: Input<[Scalar_Int | null] | null>
    messengerId_not_in: Input<[Scalar_Int | null] | null>
    mediaId_not: Input<Scalar_Int | null>
    mediaId_in: Input<[Scalar_Int | null] | null>
    mediaId_not_in: Input<[Scalar_Int | null] | null>
    type_not: Input<Enum_ActivityType | null>
    type_in: Input<[Enum_ActivityType | null] | null>
    type_not_in: Input<[Enum_ActivityType | null] | null>
    createdAt_greater: Input<Scalar_Int | null>
    createdAt_lesser: Input<Scalar_Int | null>
    sort: Input<[Enum_ActivitySort | null] | null>
  }>
  ActivityReply: Field<Type_ActivityReply | null, {
    id: Input<Scalar_Int | null>
    activityId: Input<Scalar_Int | null>
  }>
  Following: Field<Type_User | null, {
    userId: Input<Scalar_Int>
    sort: Input<[Enum_UserSort | null] | null>
  }>
  Follower: Field<Type_User | null, {
    userId: Input<Scalar_Int>
    sort: Input<[Enum_UserSort | null] | null>
  }>
  Thread: Field<Type_Thread | null, {
    id: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    replyUserId: Input<Scalar_Int | null>
    subscribed: Input<Scalar_Boolean | null>
    categoryId: Input<Scalar_Int | null>
    mediaCategoryId: Input<Scalar_Int | null>
    search: Input<Scalar_String | null>
    id_in: Input<[Scalar_Int | null] | null>
    sort: Input<[Enum_ThreadSort | null] | null>
  }>
  ThreadComment: Field<[Type_ThreadComment | null] | null, {
    id: Input<Scalar_Int | null>
    threadId: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    sort: Input<[Enum_ThreadCommentSort | null] | null>
  }>
  Recommendation: Field<Type_Recommendation | null, {
    id: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    mediaRecommendationId: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    rating: Input<Scalar_Int | null>
    onList: Input<Scalar_Boolean | null>
    rating_greater: Input<Scalar_Int | null>
    rating_lesser: Input<Scalar_Int | null>
    sort: Input<[Enum_RecommendationSort | null] | null>
  }>
  Like: Field<Type_User | null, {
    likeableId: Input<Scalar_Int | null>
    type: Input<Enum_LikeableType | null>
  }>
  Markdown: Field<Type_ParsedMarkdown | null, {
    markdown: Input<Scalar_String>
  }>
  AniChartUser: Field<Type_AniChartUser | null>
  SiteStatistics: Field<Type_SiteStatistics | null>
  ExternalLinkSourceCollection: Field<[Type_MediaExternalLink | null] | null, {
    id: Input<Scalar_Int | null>
    type: Input<Enum_ExternalLinkType | null>
    mediaType: Input<Enum_ExternalLinkMediaType | null>
  }>
}>

type Type_Page = ObjectType<'Page', {
  pageInfo: Field<Type_PageInfo | null>
  users: Field<[Type_User | null] | null, {
    id: Input<Scalar_Int | null>
    name: Input<Scalar_String | null>
    isModerator: Input<Scalar_Boolean | null>
    search: Input<Scalar_String | null>
    sort: Input<[Enum_UserSort | null] | null>
  }>
  media: Field<[Type_Media | null] | null, {
    id: Input<Scalar_Int | null>
    idMal: Input<Scalar_Int | null>
    startDate: Input<Scalar_FuzzyDateInt | null>
    endDate: Input<Scalar_FuzzyDateInt | null>
    season: Input<Enum_MediaSeason | null>
    seasonYear: Input<Scalar_Int | null>
    type: Input<Enum_MediaType | null>
    format: Input<Enum_MediaFormat | null>
    status: Input<Enum_MediaStatus | null>
    episodes: Input<Scalar_Int | null>
    duration: Input<Scalar_Int | null>
    chapters: Input<Scalar_Int | null>
    volumes: Input<Scalar_Int | null>
    isAdult: Input<Scalar_Boolean | null>
    genre: Input<Scalar_String | null>
    tag: Input<Scalar_String | null>
    minimumTagRank: Input<Scalar_Int | null>
    tagCategory: Input<Scalar_String | null>
    onList: Input<Scalar_Boolean | null>
    licensedBy: Input<Scalar_String | null>
    licensedById: Input<Scalar_Int | null>
    averageScore: Input<Scalar_Int | null>
    popularity: Input<Scalar_Int | null>
    source: Input<Enum_MediaSource | null>
    countryOfOrigin: Input<Scalar_CountryCode | null>
    isLicensed: Input<Scalar_Boolean | null>
    search: Input<Scalar_String | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    idMal_not: Input<Scalar_Int | null>
    idMal_in: Input<[Scalar_Int | null] | null>
    idMal_not_in: Input<[Scalar_Int | null] | null>
    startDate_greater: Input<Scalar_FuzzyDateInt | null>
    startDate_lesser: Input<Scalar_FuzzyDateInt | null>
    startDate_like: Input<Scalar_String | null>
    endDate_greater: Input<Scalar_FuzzyDateInt | null>
    endDate_lesser: Input<Scalar_FuzzyDateInt | null>
    endDate_like: Input<Scalar_String | null>
    format_in: Input<[Enum_MediaFormat | null] | null>
    format_not: Input<Enum_MediaFormat | null>
    format_not_in: Input<[Enum_MediaFormat | null] | null>
    status_in: Input<[Enum_MediaStatus | null] | null>
    status_not: Input<Enum_MediaStatus | null>
    status_not_in: Input<[Enum_MediaStatus | null] | null>
    episodes_greater: Input<Scalar_Int | null>
    episodes_lesser: Input<Scalar_Int | null>
    duration_greater: Input<Scalar_Int | null>
    duration_lesser: Input<Scalar_Int | null>
    chapters_greater: Input<Scalar_Int | null>
    chapters_lesser: Input<Scalar_Int | null>
    volumes_greater: Input<Scalar_Int | null>
    volumes_lesser: Input<Scalar_Int | null>
    genre_in: Input<[Scalar_String | null] | null>
    genre_not_in: Input<[Scalar_String | null] | null>
    tag_in: Input<[Scalar_String | null] | null>
    tag_not_in: Input<[Scalar_String | null] | null>
    tagCategory_in: Input<[Scalar_String | null] | null>
    tagCategory_not_in: Input<[Scalar_String | null] | null>
    licensedBy_in: Input<[Scalar_String | null] | null>
    licensedById_in: Input<[Scalar_Int | null] | null>
    averageScore_not: Input<Scalar_Int | null>
    averageScore_greater: Input<Scalar_Int | null>
    averageScore_lesser: Input<Scalar_Int | null>
    popularity_not: Input<Scalar_Int | null>
    popularity_greater: Input<Scalar_Int | null>
    popularity_lesser: Input<Scalar_Int | null>
    source_in: Input<[Enum_MediaSource | null] | null>
    sort: Input<[Enum_MediaSort | null] | null>
  }>
  characters: Field<[Type_Character | null] | null, {
    id: Input<Scalar_Int | null>
    isBirthday: Input<Scalar_Boolean | null>
    search: Input<Scalar_String | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    sort: Input<[Enum_CharacterSort | null] | null>
  }>
  staff: Field<[Type_Staff | null] | null, {
    id: Input<Scalar_Int | null>
    isBirthday: Input<Scalar_Boolean | null>
    search: Input<Scalar_String | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    sort: Input<[Enum_StaffSort | null] | null>
  }>
  studios: Field<[Type_Studio | null] | null, {
    id: Input<Scalar_Int | null>
    search: Input<Scalar_String | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    sort: Input<[Enum_StudioSort | null] | null>
  }>
  mediaList: Field<[Type_MediaList | null] | null, {
    id: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    userName: Input<Scalar_String | null>
    type: Input<Enum_MediaType | null>
    status: Input<Enum_MediaListStatus | null>
    mediaId: Input<Scalar_Int | null>
    isFollowing: Input<Scalar_Boolean | null>
    notes: Input<Scalar_String | null>
    startedAt: Input<Scalar_FuzzyDateInt | null>
    completedAt: Input<Scalar_FuzzyDateInt | null>
    compareWithAuthList: Input<Scalar_Boolean | null>
    userId_in: Input<[Scalar_Int | null] | null>
    status_in: Input<[Enum_MediaListStatus | null] | null>
    status_not_in: Input<[Enum_MediaListStatus | null] | null>
    status_not: Input<Enum_MediaListStatus | null>
    mediaId_in: Input<[Scalar_Int | null] | null>
    mediaId_not_in: Input<[Scalar_Int | null] | null>
    notes_like: Input<Scalar_String | null>
    startedAt_greater: Input<Scalar_FuzzyDateInt | null>
    startedAt_lesser: Input<Scalar_FuzzyDateInt | null>
    startedAt_like: Input<Scalar_String | null>
    completedAt_greater: Input<Scalar_FuzzyDateInt | null>
    completedAt_lesser: Input<Scalar_FuzzyDateInt | null>
    completedAt_like: Input<Scalar_String | null>
    sort: Input<[Enum_MediaListSort | null] | null>
  }>
  airingSchedules: Field<[Type_AiringSchedule | null] | null, {
    id: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    episode: Input<Scalar_Int | null>
    airingAt: Input<Scalar_Int | null>
    notYetAired: Input<Scalar_Boolean | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    mediaId_not: Input<Scalar_Int | null>
    mediaId_in: Input<[Scalar_Int | null] | null>
    mediaId_not_in: Input<[Scalar_Int | null] | null>
    episode_not: Input<Scalar_Int | null>
    episode_in: Input<[Scalar_Int | null] | null>
    episode_not_in: Input<[Scalar_Int | null] | null>
    episode_greater: Input<Scalar_Int | null>
    episode_lesser: Input<Scalar_Int | null>
    airingAt_greater: Input<Scalar_Int | null>
    airingAt_lesser: Input<Scalar_Int | null>
    sort: Input<[Enum_AiringSort | null] | null>
  }>
  mediaTrends: Field<[Type_MediaTrend | null] | null, {
    mediaId: Input<Scalar_Int | null>
    date: Input<Scalar_Int | null>
    trending: Input<Scalar_Int | null>
    averageScore: Input<Scalar_Int | null>
    popularity: Input<Scalar_Int | null>
    episode: Input<Scalar_Int | null>
    releasing: Input<Scalar_Boolean | null>
    mediaId_not: Input<Scalar_Int | null>
    mediaId_in: Input<[Scalar_Int | null] | null>
    mediaId_not_in: Input<[Scalar_Int | null] | null>
    date_greater: Input<Scalar_Int | null>
    date_lesser: Input<Scalar_Int | null>
    trending_greater: Input<Scalar_Int | null>
    trending_lesser: Input<Scalar_Int | null>
    trending_not: Input<Scalar_Int | null>
    averageScore_greater: Input<Scalar_Int | null>
    averageScore_lesser: Input<Scalar_Int | null>
    averageScore_not: Input<Scalar_Int | null>
    popularity_greater: Input<Scalar_Int | null>
    popularity_lesser: Input<Scalar_Int | null>
    popularity_not: Input<Scalar_Int | null>
    episode_greater: Input<Scalar_Int | null>
    episode_lesser: Input<Scalar_Int | null>
    episode_not: Input<Scalar_Int | null>
    sort: Input<[Enum_MediaTrendSort | null] | null>
  }>
  notifications: Field<[Union_NotificationUnion | null] | null, {
    type: Input<Enum_NotificationType | null>
    resetNotificationCount: Input<Scalar_Boolean | null>
    type_in: Input<[Enum_NotificationType | null] | null>
  }>
  followers: Field<[Type_User | null] | null, {
    userId: Input<Scalar_Int>
    sort: Input<[Enum_UserSort | null] | null>
  }>
  following: Field<[Type_User | null] | null, {
    userId: Input<Scalar_Int>
    sort: Input<[Enum_UserSort | null] | null>
  }>
  activities: Field<[Union_ActivityUnion | null] | null, {
    id: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    messengerId: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    type: Input<Enum_ActivityType | null>
    isFollowing: Input<Scalar_Boolean | null>
    hasReplies: Input<Scalar_Boolean | null>
    hasRepliesOrTypeText: Input<Scalar_Boolean | null>
    createdAt: Input<Scalar_Int | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    userId_not: Input<Scalar_Int | null>
    userId_in: Input<[Scalar_Int | null] | null>
    userId_not_in: Input<[Scalar_Int | null] | null>
    messengerId_not: Input<Scalar_Int | null>
    messengerId_in: Input<[Scalar_Int | null] | null>
    messengerId_not_in: Input<[Scalar_Int | null] | null>
    mediaId_not: Input<Scalar_Int | null>
    mediaId_in: Input<[Scalar_Int | null] | null>
    mediaId_not_in: Input<[Scalar_Int | null] | null>
    type_not: Input<Enum_ActivityType | null>
    type_in: Input<[Enum_ActivityType | null] | null>
    type_not_in: Input<[Enum_ActivityType | null] | null>
    createdAt_greater: Input<Scalar_Int | null>
    createdAt_lesser: Input<Scalar_Int | null>
    sort: Input<[Enum_ActivitySort | null] | null>
  }>
  activityReplies: Field<[Type_ActivityReply | null] | null, {
    id: Input<Scalar_Int | null>
    activityId: Input<Scalar_Int | null>
  }>
  threads: Field<[Type_Thread | null] | null, {
    id: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    replyUserId: Input<Scalar_Int | null>
    subscribed: Input<Scalar_Boolean | null>
    categoryId: Input<Scalar_Int | null>
    mediaCategoryId: Input<Scalar_Int | null>
    search: Input<Scalar_String | null>
    id_in: Input<[Scalar_Int | null] | null>
    sort: Input<[Enum_ThreadSort | null] | null>
  }>
  threadComments: Field<[Type_ThreadComment | null] | null, {
    id: Input<Scalar_Int | null>
    threadId: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    sort: Input<[Enum_ThreadCommentSort | null] | null>
  }>
  reviews: Field<[Type_Review | null] | null, {
    id: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    mediaType: Input<Enum_MediaType | null>
    sort: Input<[Enum_ReviewSort | null] | null>
  }>
  recommendations: Field<[Type_Recommendation | null] | null, {
    id: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    mediaRecommendationId: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    rating: Input<Scalar_Int | null>
    onList: Input<Scalar_Boolean | null>
    rating_greater: Input<Scalar_Int | null>
    rating_lesser: Input<Scalar_Int | null>
    sort: Input<[Enum_RecommendationSort | null] | null>
  }>
  likes: Field<[Type_User | null] | null, {
    likeableId: Input<Scalar_Int | null>
    type: Input<Enum_LikeableType | null>
  }>
}>

type Type_PageInfo = ObjectType<'PageInfo', {
  total: Field<Scalar_Int | null>
  perPage: Field<Scalar_Int | null>
  currentPage: Field<Scalar_Int | null>
  lastPage: Field<Scalar_Int | null>
  hasNextPage: Field<Scalar_Boolean | null>
}>

type Type_User = ObjectType<'User', {
  id: Field<Scalar_Int>
  name: Field<Scalar_String>
  about: Field<Scalar_String | null, {
    asHtml: Input<Scalar_Boolean | null>
  }>
  avatar: Field<Type_UserAvatar | null>
  bannerImage: Field<Scalar_String | null>
  isFollowing: Field<Scalar_Boolean | null>
  isFollower: Field<Scalar_Boolean | null>
  isBlocked: Field<Scalar_Boolean | null>
  bans: Field<Scalar_Json | null>
  options: Field<Type_UserOptions | null>
  mediaListOptions: Field<Type_MediaListOptions | null>
  favourites: Field<Type_Favourites | null, {
    page: Input<Scalar_Int | null>
  }>
  statistics: Field<Type_UserStatisticTypes | null>
  unreadNotificationCount: Field<Scalar_Int | null>
  siteUrl: Field<Scalar_String | null>
  donatorTier: Field<Scalar_Int | null>
  donatorBadge: Field<Scalar_String | null>
  moderatorRoles: Field<[Enum_ModRole | null] | null>
  createdAt: Field<Scalar_Int | null>
  updatedAt: Field<Scalar_Int | null>
  stats: Field<Type_UserStats | null>
  moderatorStatus: Field<Scalar_String | null>
  previousNames: Field<[Type_UserPreviousName | null] | null>
}>

type Type_UserAvatar = ObjectType<'UserAvatar', {
  large: Field<Scalar_String | null>
  medium: Field<Scalar_String | null>
}>

type Type_UserOptions = ObjectType<'UserOptions', {
  titleLanguage: Field<Enum_UserTitleLanguage | null>
  displayAdultContent: Field<Scalar_Boolean | null>
  airingNotifications: Field<Scalar_Boolean | null>
  profileColor: Field<Scalar_String | null>
  notificationOptions: Field<[Type_NotificationOption | null] | null>
  timezone: Field<Scalar_String | null>
  activityMergeTime: Field<Scalar_Int | null>
  staffNameLanguage: Field<Enum_UserStaffNameLanguage | null>
  restrictMessagesToFollowing: Field<Scalar_Boolean | null>
  disabledListActivity: Field<[Type_ListActivityOption | null] | null>
}>

type Type_NotificationOption = ObjectType<'NotificationOption', {
  type: Field<Enum_NotificationType | null>
  enabled: Field<Scalar_Boolean | null>
}>

type Type_ListActivityOption = ObjectType<'ListActivityOption', {
  disabled: Field<Scalar_Boolean | null>
  type: Field<Enum_MediaListStatus | null>
}>

type Type_MediaListOptions = ObjectType<'MediaListOptions', {
  scoreFormat: Field<Enum_ScoreFormat | null>
  rowOrder: Field<Scalar_String | null>
  useLegacyLists: Field<Scalar_Boolean | null>
  animeList: Field<Type_MediaListTypeOptions | null>
  mangaList: Field<Type_MediaListTypeOptions | null>
  sharedTheme: Field<Scalar_Json | null>
  sharedThemeEnabled: Field<Scalar_Boolean | null>
}>

type Type_MediaListTypeOptions = ObjectType<'MediaListTypeOptions', {
  sectionOrder: Field<[Scalar_String | null] | null>
  splitCompletedSectionByFormat: Field<Scalar_Boolean | null>
  theme: Field<Scalar_Json | null>
  customLists: Field<[Scalar_String | null] | null>
  advancedScoring: Field<[Scalar_String | null] | null>
  advancedScoringEnabled: Field<Scalar_Boolean | null>
}>

type Type_Favourites = ObjectType<'Favourites', {
  anime: Field<Type_MediaConnection | null, {
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  manga: Field<Type_MediaConnection | null, {
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  characters: Field<Type_CharacterConnection | null, {
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  staff: Field<Type_StaffConnection | null, {
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  studios: Field<Type_StudioConnection | null, {
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
}>

type Type_MediaConnection = ObjectType<'MediaConnection', {
  edges: Field<[Type_MediaEdge | null] | null>
  nodes: Field<[Type_Media | null] | null>
  pageInfo: Field<Type_PageInfo | null>
}>

type Type_MediaEdge = ObjectType<'MediaEdge', {
  node: Field<Type_Media | null>
  id: Field<Scalar_Int | null>
  relationType: Field<Enum_MediaRelation | null, {
    version: Input<Scalar_Int | null>
  }>
  isMainStudio: Field<Scalar_Boolean>
  characters: Field<[Type_Character | null] | null>
  characterRole: Field<Enum_CharacterRole | null>
  characterName: Field<Scalar_String | null>
  roleNotes: Field<Scalar_String | null>
  dubGroup: Field<Scalar_String | null>
  staffRole: Field<Scalar_String | null>
  voiceActors: Field<[Type_Staff | null] | null, {
    language: Input<Enum_StaffLanguage | null>
    sort: Input<[Enum_StaffSort | null] | null>
  }>
  voiceActorRoles: Field<[Type_StaffRoleType | null] | null, {
    language: Input<Enum_StaffLanguage | null>
    sort: Input<[Enum_StaffSort | null] | null>
  }>
  favouriteOrder: Field<Scalar_Int | null>
}>

type Type_Media = ObjectType<'Media', {
  id: Field<Scalar_Int>
  idMal: Field<Scalar_Int | null>
  title: Field<Type_MediaTitle | null>
  type: Field<Enum_MediaType | null>
  format: Field<Enum_MediaFormat | null>
  status: Field<Enum_MediaStatus | null, {
    version: Input<Scalar_Int | null>
  }>
  description: Field<Scalar_String | null, {
    asHtml: Input<Scalar_Boolean | null>
  }>
  startDate: Field<Type_FuzzyDate | null>
  endDate: Field<Type_FuzzyDate | null>
  season: Field<Enum_MediaSeason | null>
  seasonYear: Field<Scalar_Int | null>
  seasonInt: Field<Scalar_Int | null>
  episodes: Field<Scalar_Int | null>
  duration: Field<Scalar_Int | null>
  chapters: Field<Scalar_Int | null>
  volumes: Field<Scalar_Int | null>
  countryOfOrigin: Field<Scalar_CountryCode | null>
  isLicensed: Field<Scalar_Boolean | null>
  source: Field<Enum_MediaSource | null, {
    version: Input<Scalar_Int | null>
  }>
  hashtag: Field<Scalar_String | null>
  trailer: Field<Type_MediaTrailer | null>
  updatedAt: Field<Scalar_Int | null>
  coverImage: Field<Type_MediaCoverImage | null>
  bannerImage: Field<Scalar_String | null>
  genres: Field<[Scalar_String | null] | null>
  synonyms: Field<[Scalar_String | null] | null>
  averageScore: Field<Scalar_Int | null>
  meanScore: Field<Scalar_Int | null>
  popularity: Field<Scalar_Int | null>
  isLocked: Field<Scalar_Boolean | null>
  trending: Field<Scalar_Int | null>
  favourites: Field<Scalar_Int | null>
  tags: Field<[Type_MediaTag | null] | null>
  relations: Field<Type_MediaConnection | null>
  characters: Field<Type_CharacterConnection | null, {
    sort: Input<[Enum_CharacterSort | null] | null>
    role: Input<Enum_CharacterRole | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  staff: Field<Type_StaffConnection | null, {
    sort: Input<[Enum_StaffSort | null] | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  studios: Field<Type_StudioConnection | null, {
    sort: Input<[Enum_StudioSort | null] | null>
    isMain: Input<Scalar_Boolean | null>
  }>
  isFavourite: Field<Scalar_Boolean>
  isFavouriteBlocked: Field<Scalar_Boolean>
  isAdult: Field<Scalar_Boolean | null>
  nextAiringEpisode: Field<Type_AiringSchedule | null>
  airingSchedule: Field<Type_AiringScheduleConnection | null, {
    notYetAired: Input<Scalar_Boolean | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  trends: Field<Type_MediaTrendConnection | null, {
    sort: Input<[Enum_MediaTrendSort | null] | null>
    releasing: Input<Scalar_Boolean | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  externalLinks: Field<[Type_MediaExternalLink | null] | null>
  streamingEpisodes: Field<[Type_MediaStreamingEpisode | null] | null>
  rankings: Field<[Type_MediaRank | null] | null>
  mediaListEntry: Field<Type_MediaList | null>
  reviews: Field<Type_ReviewConnection | null, {
    limit: Input<Scalar_Int | null>
    sort: Input<[Enum_ReviewSort | null] | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  recommendations: Field<Type_RecommendationConnection | null, {
    sort: Input<[Enum_RecommendationSort | null] | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  stats: Field<Type_MediaStats | null>
  siteUrl: Field<Scalar_String | null>
  autoCreateForumThread: Field<Scalar_Boolean | null>
  isRecommendationBlocked: Field<Scalar_Boolean | null>
  isReviewBlocked: Field<Scalar_Boolean | null>
  modNotes: Field<Scalar_String | null>
}>

type Type_MediaTitle = ObjectType<'MediaTitle', {
  romaji: Field<Scalar_String | null, {
    stylised: Input<Scalar_Boolean | null>
  }>
  english: Field<Scalar_String | null, {
    stylised: Input<Scalar_Boolean | null>
  }>
  native: Field<Scalar_String | null, {
    stylised: Input<Scalar_Boolean | null>
  }>
  userPreferred: Field<Scalar_String | null>
}>

type Type_FuzzyDate = ObjectType<'FuzzyDate', {
  year: Field<Scalar_Int | null>
  month: Field<Scalar_Int | null>
  day: Field<Scalar_Int | null>
}>

type Type_MediaTrailer = ObjectType<'MediaTrailer', {
  id: Field<Scalar_String | null>
  site: Field<Scalar_String | null>
  thumbnail: Field<Scalar_String | null>
}>

type Type_MediaCoverImage = ObjectType<'MediaCoverImage', {
  extraLarge: Field<Scalar_String | null>
  large: Field<Scalar_String | null>
  medium: Field<Scalar_String | null>
  color: Field<Scalar_String | null>
}>

type Type_MediaTag = ObjectType<'MediaTag', {
  id: Field<Scalar_Int>
  name: Field<Scalar_String>
  description: Field<Scalar_String | null>
  category: Field<Scalar_String | null>
  rank: Field<Scalar_Int | null>
  isGeneralSpoiler: Field<Scalar_Boolean | null>
  isMediaSpoiler: Field<Scalar_Boolean | null>
  isAdult: Field<Scalar_Boolean | null>
  userId: Field<Scalar_Int | null>
}>

type Type_CharacterConnection = ObjectType<'CharacterConnection', {
  edges: Field<[Type_CharacterEdge | null] | null>
  nodes: Field<[Type_Character | null] | null>
  pageInfo: Field<Type_PageInfo | null>
}>

type Type_CharacterEdge = ObjectType<'CharacterEdge', {
  node: Field<Type_Character | null>
  id: Field<Scalar_Int | null>
  role: Field<Enum_CharacterRole | null>
  name: Field<Scalar_String | null>
  voiceActors: Field<[Type_Staff | null] | null, {
    language: Input<Enum_StaffLanguage | null>
    sort: Input<[Enum_StaffSort | null] | null>
  }>
  voiceActorRoles: Field<[Type_StaffRoleType | null] | null, {
    language: Input<Enum_StaffLanguage | null>
    sort: Input<[Enum_StaffSort | null] | null>
  }>
  media: Field<[Type_Media | null] | null>
  favouriteOrder: Field<Scalar_Int | null>
}>

type Type_Character = ObjectType<'Character', {
  id: Field<Scalar_Int>
  name: Field<Type_CharacterName | null>
  image: Field<Type_CharacterImage | null>
  description: Field<Scalar_String | null, {
    asHtml: Input<Scalar_Boolean | null>
  }>
  gender: Field<Scalar_String | null>
  dateOfBirth: Field<Type_FuzzyDate | null>
  age: Field<Scalar_String | null>
  bloodType: Field<Scalar_String | null>
  isFavourite: Field<Scalar_Boolean>
  isFavouriteBlocked: Field<Scalar_Boolean>
  siteUrl: Field<Scalar_String | null>
  media: Field<Type_MediaConnection | null, {
    sort: Input<[Enum_MediaSort | null] | null>
    type: Input<Enum_MediaType | null>
    onList: Input<Scalar_Boolean | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  updatedAt: Field<Scalar_Int | null>
  favourites: Field<Scalar_Int | null>
  modNotes: Field<Scalar_String | null>
}>

type Type_CharacterName = ObjectType<'CharacterName', {
  first: Field<Scalar_String | null>
  middle: Field<Scalar_String | null>
  last: Field<Scalar_String | null>
  full: Field<Scalar_String | null>
  native: Field<Scalar_String | null>
  alternative: Field<[Scalar_String | null] | null>
  alternativeSpoiler: Field<[Scalar_String | null] | null>
  userPreferred: Field<Scalar_String | null>
}>

type Type_CharacterImage = ObjectType<'CharacterImage', {
  large: Field<Scalar_String | null>
  medium: Field<Scalar_String | null>
}>

type Type_Staff = ObjectType<'Staff', {
  id: Field<Scalar_Int>
  name: Field<Type_StaffName | null>
  language: Field<Enum_StaffLanguage | null>
  languageV2: Field<Scalar_String | null>
  image: Field<Type_StaffImage | null>
  description: Field<Scalar_String | null, {
    asHtml: Input<Scalar_Boolean | null>
  }>
  primaryOccupations: Field<[Scalar_String | null] | null>
  gender: Field<Scalar_String | null>
  dateOfBirth: Field<Type_FuzzyDate | null>
  dateOfDeath: Field<Type_FuzzyDate | null>
  age: Field<Scalar_Int | null>
  yearsActive: Field<[Scalar_Int | null] | null>
  homeTown: Field<Scalar_String | null>
  bloodType: Field<Scalar_String | null>
  isFavourite: Field<Scalar_Boolean>
  isFavouriteBlocked: Field<Scalar_Boolean>
  siteUrl: Field<Scalar_String | null>
  staffMedia: Field<Type_MediaConnection | null, {
    sort: Input<[Enum_MediaSort | null] | null>
    type: Input<Enum_MediaType | null>
    onList: Input<Scalar_Boolean | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  characters: Field<Type_CharacterConnection | null, {
    sort: Input<[Enum_CharacterSort | null] | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  characterMedia: Field<Type_MediaConnection | null, {
    sort: Input<[Enum_MediaSort | null] | null>
    onList: Input<Scalar_Boolean | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  updatedAt: Field<Scalar_Int | null>
  staff: Field<Type_Staff | null>
  submitter: Field<Type_User | null>
  submissionStatus: Field<Scalar_Int | null>
  submissionNotes: Field<Scalar_String | null>
  favourites: Field<Scalar_Int | null>
  modNotes: Field<Scalar_String | null>
}>

type Type_StaffName = ObjectType<'StaffName', {
  first: Field<Scalar_String | null>
  middle: Field<Scalar_String | null>
  last: Field<Scalar_String | null>
  full: Field<Scalar_String | null>
  native: Field<Scalar_String | null>
  alternative: Field<[Scalar_String | null] | null>
  userPreferred: Field<Scalar_String | null>
}>

type Type_StaffImage = ObjectType<'StaffImage', {
  large: Field<Scalar_String | null>
  medium: Field<Scalar_String | null>
}>

type Type_StaffRoleType = ObjectType<'StaffRoleType', {
  voiceActor: Field<Type_Staff | null>
  roleNotes: Field<Scalar_String | null>
  dubGroup: Field<Scalar_String | null>
}>

type Type_StaffConnection = ObjectType<'StaffConnection', {
  edges: Field<[Type_StaffEdge | null] | null>
  nodes: Field<[Type_Staff | null] | null>
  pageInfo: Field<Type_PageInfo | null>
}>

type Type_StaffEdge = ObjectType<'StaffEdge', {
  node: Field<Type_Staff | null>
  id: Field<Scalar_Int | null>
  role: Field<Scalar_String | null>
  favouriteOrder: Field<Scalar_Int | null>
}>

type Type_StudioConnection = ObjectType<'StudioConnection', {
  edges: Field<[Type_StudioEdge | null] | null>
  nodes: Field<[Type_Studio | null] | null>
  pageInfo: Field<Type_PageInfo | null>
}>

type Type_StudioEdge = ObjectType<'StudioEdge', {
  node: Field<Type_Studio | null>
  id: Field<Scalar_Int | null>
  isMain: Field<Scalar_Boolean>
  favouriteOrder: Field<Scalar_Int | null>
}>

type Type_Studio = ObjectType<'Studio', {
  id: Field<Scalar_Int>
  name: Field<Scalar_String>
  isAnimationStudio: Field<Scalar_Boolean>
  media: Field<Type_MediaConnection | null, {
    sort: Input<[Enum_MediaSort | null] | null>
    isMain: Input<Scalar_Boolean | null>
    onList: Input<Scalar_Boolean | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  siteUrl: Field<Scalar_String | null>
  isFavourite: Field<Scalar_Boolean>
  favourites: Field<Scalar_Int | null>
}>

type Type_AiringSchedule = ObjectType<'AiringSchedule', {
  id: Field<Scalar_Int>
  airingAt: Field<Scalar_Int>
  timeUntilAiring: Field<Scalar_Int>
  episode: Field<Scalar_Int>
  mediaId: Field<Scalar_Int>
  media: Field<Type_Media | null>
}>

type Type_AiringScheduleConnection = ObjectType<'AiringScheduleConnection', {
  edges: Field<[Type_AiringScheduleEdge | null] | null>
  nodes: Field<[Type_AiringSchedule | null] | null>
  pageInfo: Field<Type_PageInfo | null>
}>

type Type_AiringScheduleEdge = ObjectType<'AiringScheduleEdge', {
  node: Field<Type_AiringSchedule | null>
  id: Field<Scalar_Int | null>
}>

type Type_MediaTrendConnection = ObjectType<'MediaTrendConnection', {
  edges: Field<[Type_MediaTrendEdge | null] | null>
  nodes: Field<[Type_MediaTrend | null] | null>
  pageInfo: Field<Type_PageInfo | null>
}>

type Type_MediaTrendEdge = ObjectType<'MediaTrendEdge', {
  node: Field<Type_MediaTrend | null>
}>

type Type_MediaTrend = ObjectType<'MediaTrend', {
  mediaId: Field<Scalar_Int>
  date: Field<Scalar_Int>
  trending: Field<Scalar_Int>
  averageScore: Field<Scalar_Int | null>
  popularity: Field<Scalar_Int | null>
  inProgress: Field<Scalar_Int | null>
  releasing: Field<Scalar_Boolean>
  episode: Field<Scalar_Int | null>
  media: Field<Type_Media | null>
}>

type Type_MediaExternalLink = ObjectType<'MediaExternalLink', {
  id: Field<Scalar_Int>
  url: Field<Scalar_String | null>
  site: Field<Scalar_String>
  siteId: Field<Scalar_Int | null>
  type: Field<Enum_ExternalLinkType | null>
  language: Field<Scalar_String | null>
  color: Field<Scalar_String | null>
  icon: Field<Scalar_String | null>
  notes: Field<Scalar_String | null>
  isDisabled: Field<Scalar_Boolean | null>
}>

type Type_MediaStreamingEpisode = ObjectType<'MediaStreamingEpisode', {
  title: Field<Scalar_String | null>
  thumbnail: Field<Scalar_String | null>
  url: Field<Scalar_String | null>
  site: Field<Scalar_String | null>
}>

type Type_MediaRank = ObjectType<'MediaRank', {
  id: Field<Scalar_Int>
  rank: Field<Scalar_Int>
  type: Field<Enum_MediaRankType>
  format: Field<Enum_MediaFormat>
  year: Field<Scalar_Int | null>
  season: Field<Enum_MediaSeason | null>
  allTime: Field<Scalar_Boolean | null>
  context: Field<Scalar_String>
}>

type Type_MediaList = ObjectType<'MediaList', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  mediaId: Field<Scalar_Int>
  status: Field<Enum_MediaListStatus | null>
  score: Field<Scalar_Float | null, {
    format: Input<Enum_ScoreFormat | null>
  }>
  progress: Field<Scalar_Int | null>
  progressVolumes: Field<Scalar_Int | null>
  repeat: Field<Scalar_Int | null>
  priority: Field<Scalar_Int | null>
  private: Field<Scalar_Boolean | null>
  notes: Field<Scalar_String | null>
  hiddenFromStatusLists: Field<Scalar_Boolean | null>
  customLists: Field<Scalar_Json | null, {
    asArray: Input<Scalar_Boolean | null>
  }>
  advancedScores: Field<Scalar_Json | null>
  startedAt: Field<Type_FuzzyDate | null>
  completedAt: Field<Type_FuzzyDate | null>
  updatedAt: Field<Scalar_Int | null>
  createdAt: Field<Scalar_Int | null>
  media: Field<Type_Media | null>
  user: Field<Type_User | null>
}>

type Type_ReviewConnection = ObjectType<'ReviewConnection', {
  edges: Field<[Type_ReviewEdge | null] | null>
  nodes: Field<[Type_Review | null] | null>
  pageInfo: Field<Type_PageInfo | null>
}>

type Type_ReviewEdge = ObjectType<'ReviewEdge', {
  node: Field<Type_Review | null>
}>

type Type_Review = ObjectType<'Review', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  mediaId: Field<Scalar_Int>
  mediaType: Field<Enum_MediaType | null>
  summary: Field<Scalar_String | null>
  body: Field<Scalar_String | null, {
    asHtml: Input<Scalar_Boolean | null>
  }>
  rating: Field<Scalar_Int | null>
  ratingAmount: Field<Scalar_Int | null>
  userRating: Field<Enum_ReviewRating | null>
  score: Field<Scalar_Int | null>
  private: Field<Scalar_Boolean | null>
  siteUrl: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int>
  updatedAt: Field<Scalar_Int>
  user: Field<Type_User | null>
  media: Field<Type_Media | null>
}>

type Type_RecommendationConnection = ObjectType<'RecommendationConnection', {
  edges: Field<[Type_RecommendationEdge | null] | null>
  nodes: Field<[Type_Recommendation | null] | null>
  pageInfo: Field<Type_PageInfo | null>
}>

type Type_RecommendationEdge = ObjectType<'RecommendationEdge', {
  node: Field<Type_Recommendation | null>
}>

type Type_Recommendation = ObjectType<'Recommendation', {
  id: Field<Scalar_Int>
  rating: Field<Scalar_Int | null>
  userRating: Field<Enum_RecommendationRating | null>
  media: Field<Type_Media | null>
  mediaRecommendation: Field<Type_Media | null>
  user: Field<Type_User | null>
}>

type Type_MediaStats = ObjectType<'MediaStats', {
  scoreDistribution: Field<[Type_ScoreDistribution | null] | null>
  statusDistribution: Field<[Type_StatusDistribution | null] | null>
  airingProgression: Field<[Type_AiringProgression | null] | null>
}>

type Type_ScoreDistribution = ObjectType<'ScoreDistribution', {
  score: Field<Scalar_Int | null>
  amount: Field<Scalar_Int | null>
}>

type Type_StatusDistribution = ObjectType<'StatusDistribution', {
  status: Field<Enum_MediaListStatus | null>
  amount: Field<Scalar_Int | null>
}>

type Type_AiringProgression = ObjectType<'AiringProgression', {
  episode: Field<Scalar_Float | null>
  score: Field<Scalar_Float | null>
  watching: Field<Scalar_Int | null>
}>

type Type_UserStatisticTypes = ObjectType<'UserStatisticTypes', {
  anime: Field<Type_UserStatistics | null>
  manga: Field<Type_UserStatistics | null>
}>

type Type_UserStatistics = ObjectType<'UserStatistics', {
  count: Field<Scalar_Int>
  meanScore: Field<Scalar_Float>
  standardDeviation: Field<Scalar_Float>
  minutesWatched: Field<Scalar_Int>
  episodesWatched: Field<Scalar_Int>
  chaptersRead: Field<Scalar_Int>
  volumesRead: Field<Scalar_Int>
  formats: Field<[Type_UserFormatStatistic | null] | null, {
    limit: Input<Scalar_Int | null>
    sort: Input<[Enum_UserStatisticsSort | null] | null>
  }>
  statuses: Field<[Type_UserStatusStatistic | null] | null, {
    limit: Input<Scalar_Int | null>
    sort: Input<[Enum_UserStatisticsSort | null] | null>
  }>
  scores: Field<[Type_UserScoreStatistic | null] | null, {
    limit: Input<Scalar_Int | null>
    sort: Input<[Enum_UserStatisticsSort | null] | null>
  }>
  lengths: Field<[Type_UserLengthStatistic | null] | null, {
    limit: Input<Scalar_Int | null>
    sort: Input<[Enum_UserStatisticsSort | null] | null>
  }>
  releaseYears: Field<[Type_UserReleaseYearStatistic | null] | null, {
    limit: Input<Scalar_Int | null>
    sort: Input<[Enum_UserStatisticsSort | null] | null>
  }>
  startYears: Field<[Type_UserStartYearStatistic | null] | null, {
    limit: Input<Scalar_Int | null>
    sort: Input<[Enum_UserStatisticsSort | null] | null>
  }>
  genres: Field<[Type_UserGenreStatistic | null] | null, {
    limit: Input<Scalar_Int | null>
    sort: Input<[Enum_UserStatisticsSort | null] | null>
  }>
  tags: Field<[Type_UserTagStatistic | null] | null, {
    limit: Input<Scalar_Int | null>
    sort: Input<[Enum_UserStatisticsSort | null] | null>
  }>
  countries: Field<[Type_UserCountryStatistic | null] | null, {
    limit: Input<Scalar_Int | null>
    sort: Input<[Enum_UserStatisticsSort | null] | null>
  }>
  voiceActors: Field<[Type_UserVoiceActorStatistic | null] | null, {
    limit: Input<Scalar_Int | null>
    sort: Input<[Enum_UserStatisticsSort | null] | null>
  }>
  staff: Field<[Type_UserStaffStatistic | null] | null, {
    limit: Input<Scalar_Int | null>
    sort: Input<[Enum_UserStatisticsSort | null] | null>
  }>
  studios: Field<[Type_UserStudioStatistic | null] | null, {
    limit: Input<Scalar_Int | null>
    sort: Input<[Enum_UserStatisticsSort | null] | null>
  }>
}>

type Type_UserFormatStatistic = ObjectType<'UserFormatStatistic', {
  count: Field<Scalar_Int>
  meanScore: Field<Scalar_Float>
  minutesWatched: Field<Scalar_Int>
  chaptersRead: Field<Scalar_Int>
  mediaIds: Field<[Scalar_Int | null]>
  format: Field<Enum_MediaFormat | null>
}>

type Type_UserStatusStatistic = ObjectType<'UserStatusStatistic', {
  count: Field<Scalar_Int>
  meanScore: Field<Scalar_Float>
  minutesWatched: Field<Scalar_Int>
  chaptersRead: Field<Scalar_Int>
  mediaIds: Field<[Scalar_Int | null]>
  status: Field<Enum_MediaListStatus | null>
}>

type Type_UserScoreStatistic = ObjectType<'UserScoreStatistic', {
  count: Field<Scalar_Int>
  meanScore: Field<Scalar_Float>
  minutesWatched: Field<Scalar_Int>
  chaptersRead: Field<Scalar_Int>
  mediaIds: Field<[Scalar_Int | null]>
  score: Field<Scalar_Int | null>
}>

type Type_UserLengthStatistic = ObjectType<'UserLengthStatistic', {
  count: Field<Scalar_Int>
  meanScore: Field<Scalar_Float>
  minutesWatched: Field<Scalar_Int>
  chaptersRead: Field<Scalar_Int>
  mediaIds: Field<[Scalar_Int | null]>
  length: Field<Scalar_String | null>
}>

type Type_UserReleaseYearStatistic = ObjectType<'UserReleaseYearStatistic', {
  count: Field<Scalar_Int>
  meanScore: Field<Scalar_Float>
  minutesWatched: Field<Scalar_Int>
  chaptersRead: Field<Scalar_Int>
  mediaIds: Field<[Scalar_Int | null]>
  releaseYear: Field<Scalar_Int | null>
}>

type Type_UserStartYearStatistic = ObjectType<'UserStartYearStatistic', {
  count: Field<Scalar_Int>
  meanScore: Field<Scalar_Float>
  minutesWatched: Field<Scalar_Int>
  chaptersRead: Field<Scalar_Int>
  mediaIds: Field<[Scalar_Int | null]>
  startYear: Field<Scalar_Int | null>
}>

type Type_UserGenreStatistic = ObjectType<'UserGenreStatistic', {
  count: Field<Scalar_Int>
  meanScore: Field<Scalar_Float>
  minutesWatched: Field<Scalar_Int>
  chaptersRead: Field<Scalar_Int>
  mediaIds: Field<[Scalar_Int | null]>
  genre: Field<Scalar_String | null>
}>

type Type_UserTagStatistic = ObjectType<'UserTagStatistic', {
  count: Field<Scalar_Int>
  meanScore: Field<Scalar_Float>
  minutesWatched: Field<Scalar_Int>
  chaptersRead: Field<Scalar_Int>
  mediaIds: Field<[Scalar_Int | null]>
  tag: Field<Type_MediaTag | null>
}>

type Type_UserCountryStatistic = ObjectType<'UserCountryStatistic', {
  count: Field<Scalar_Int>
  meanScore: Field<Scalar_Float>
  minutesWatched: Field<Scalar_Int>
  chaptersRead: Field<Scalar_Int>
  mediaIds: Field<[Scalar_Int | null]>
  country: Field<Scalar_CountryCode | null>
}>

type Type_UserVoiceActorStatistic = ObjectType<'UserVoiceActorStatistic', {
  count: Field<Scalar_Int>
  meanScore: Field<Scalar_Float>
  minutesWatched: Field<Scalar_Int>
  chaptersRead: Field<Scalar_Int>
  mediaIds: Field<[Scalar_Int | null]>
  voiceActor: Field<Type_Staff | null>
  characterIds: Field<[Scalar_Int | null]>
}>

type Type_UserStaffStatistic = ObjectType<'UserStaffStatistic', {
  count: Field<Scalar_Int>
  meanScore: Field<Scalar_Float>
  minutesWatched: Field<Scalar_Int>
  chaptersRead: Field<Scalar_Int>
  mediaIds: Field<[Scalar_Int | null]>
  staff: Field<Type_Staff | null>
}>

type Type_UserStudioStatistic = ObjectType<'UserStudioStatistic', {
  count: Field<Scalar_Int>
  meanScore: Field<Scalar_Float>
  minutesWatched: Field<Scalar_Int>
  chaptersRead: Field<Scalar_Int>
  mediaIds: Field<[Scalar_Int | null]>
  studio: Field<Type_Studio | null>
}>

type Type_UserStats = ObjectType<'UserStats', {
  watchedTime: Field<Scalar_Int | null>
  chaptersRead: Field<Scalar_Int | null>
  activityHistory: Field<[Type_UserActivityHistory | null] | null>
  animeStatusDistribution: Field<[Type_StatusDistribution | null] | null>
  mangaStatusDistribution: Field<[Type_StatusDistribution | null] | null>
  animeScoreDistribution: Field<[Type_ScoreDistribution | null] | null>
  mangaScoreDistribution: Field<[Type_ScoreDistribution | null] | null>
  animeListScores: Field<Type_ListScoreStats | null>
  mangaListScores: Field<Type_ListScoreStats | null>
  favouredGenresOverview: Field<[Type_GenreStats | null] | null>
  favouredGenres: Field<[Type_GenreStats | null] | null>
  favouredTags: Field<[Type_TagStats | null] | null>
  favouredActors: Field<[Type_StaffStats | null] | null>
  favouredStaff: Field<[Type_StaffStats | null] | null>
  favouredStudios: Field<[Type_StudioStats | null] | null>
  favouredYears: Field<[Type_YearStats | null] | null>
  favouredFormats: Field<[Type_FormatStats | null] | null>
}>

type Type_UserActivityHistory = ObjectType<'UserActivityHistory', {
  date: Field<Scalar_Int | null>
  amount: Field<Scalar_Int | null>
  level: Field<Scalar_Int | null>
}>

type Type_ListScoreStats = ObjectType<'ListScoreStats', {
  meanScore: Field<Scalar_Int | null>
  standardDeviation: Field<Scalar_Int | null>
}>

type Type_GenreStats = ObjectType<'GenreStats', {
  genre: Field<Scalar_String | null>
  amount: Field<Scalar_Int | null>
  meanScore: Field<Scalar_Int | null>
  timeWatched: Field<Scalar_Int | null>
}>

type Type_TagStats = ObjectType<'TagStats', {
  tag: Field<Type_MediaTag | null>
  amount: Field<Scalar_Int | null>
  meanScore: Field<Scalar_Int | null>
  timeWatched: Field<Scalar_Int | null>
}>

type Type_StaffStats = ObjectType<'StaffStats', {
  staff: Field<Type_Staff | null>
  amount: Field<Scalar_Int | null>
  meanScore: Field<Scalar_Int | null>
  timeWatched: Field<Scalar_Int | null>
}>

type Type_StudioStats = ObjectType<'StudioStats', {
  studio: Field<Type_Studio | null>
  amount: Field<Scalar_Int | null>
  meanScore: Field<Scalar_Int | null>
  timeWatched: Field<Scalar_Int | null>
}>

type Type_YearStats = ObjectType<'YearStats', {
  year: Field<Scalar_Int | null>
  amount: Field<Scalar_Int | null>
  meanScore: Field<Scalar_Int | null>
}>

type Type_FormatStats = ObjectType<'FormatStats', {
  format: Field<Enum_MediaFormat | null>
  amount: Field<Scalar_Int | null>
}>

type Type_UserPreviousName = ObjectType<'UserPreviousName', {
  name: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  updatedAt: Field<Scalar_Int | null>
}>

type Type_AiringNotification = ObjectType<'AiringNotification', {
  id: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  animeId: Field<Scalar_Int>
  episode: Field<Scalar_Int>
  contexts: Field<[Scalar_String | null] | null>
  createdAt: Field<Scalar_Int | null>
  media: Field<Type_Media | null>
}>

type Type_FollowingNotification = ObjectType<'FollowingNotification', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  context: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  user: Field<Type_User | null>
}>

type Type_ActivityMessageNotification = ObjectType<'ActivityMessageNotification', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  activityId: Field<Scalar_Int>
  context: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  message: Field<Type_MessageActivity | null>
  user: Field<Type_User | null>
}>

type Type_MessageActivity = ObjectType<'MessageActivity', {
  id: Field<Scalar_Int>
  recipientId: Field<Scalar_Int | null>
  messengerId: Field<Scalar_Int | null>
  type: Field<Enum_ActivityType | null>
  replyCount: Field<Scalar_Int>
  message: Field<Scalar_String | null, {
    asHtml: Input<Scalar_Boolean | null>
  }>
  isLocked: Field<Scalar_Boolean | null>
  isSubscribed: Field<Scalar_Boolean | null>
  likeCount: Field<Scalar_Int>
  isLiked: Field<Scalar_Boolean | null>
  isPrivate: Field<Scalar_Boolean | null>
  siteUrl: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int>
  recipient: Field<Type_User | null>
  messenger: Field<Type_User | null>
  replies: Field<[Type_ActivityReply | null] | null>
  likes: Field<[Type_User | null] | null>
}>

type Type_ActivityReply = ObjectType<'ActivityReply', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int | null>
  activityId: Field<Scalar_Int | null>
  text: Field<Scalar_String | null, {
    asHtml: Input<Scalar_Boolean | null>
  }>
  likeCount: Field<Scalar_Int>
  isLiked: Field<Scalar_Boolean | null>
  createdAt: Field<Scalar_Int>
  user: Field<Type_User | null>
  likes: Field<[Type_User | null] | null>
}>

type Type_ActivityMentionNotification = ObjectType<'ActivityMentionNotification', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  activityId: Field<Scalar_Int>
  context: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  activity: Field<Union_ActivityUnion | null>
  user: Field<Type_User | null>
}>

type Type_TextActivity = ObjectType<'TextActivity', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int | null>
  type: Field<Enum_ActivityType | null>
  replyCount: Field<Scalar_Int>
  text: Field<Scalar_String | null, {
    asHtml: Input<Scalar_Boolean | null>
  }>
  siteUrl: Field<Scalar_String | null>
  isLocked: Field<Scalar_Boolean | null>
  isSubscribed: Field<Scalar_Boolean | null>
  likeCount: Field<Scalar_Int>
  isLiked: Field<Scalar_Boolean | null>
  isPinned: Field<Scalar_Boolean | null>
  createdAt: Field<Scalar_Int>
  user: Field<Type_User | null>
  replies: Field<[Type_ActivityReply | null] | null>
  likes: Field<[Type_User | null] | null>
}>

type Type_ListActivity = ObjectType<'ListActivity', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int | null>
  type: Field<Enum_ActivityType | null>
  replyCount: Field<Scalar_Int>
  status: Field<Scalar_String | null>
  progress: Field<Scalar_String | null>
  isLocked: Field<Scalar_Boolean | null>
  isSubscribed: Field<Scalar_Boolean | null>
  likeCount: Field<Scalar_Int>
  isLiked: Field<Scalar_Boolean | null>
  isPinned: Field<Scalar_Boolean | null>
  siteUrl: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int>
  user: Field<Type_User | null>
  media: Field<Type_Media | null>
  replies: Field<[Type_ActivityReply | null] | null>
  likes: Field<[Type_User | null] | null>
}>

type Type_ActivityReplyNotification = ObjectType<'ActivityReplyNotification', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  activityId: Field<Scalar_Int>
  context: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  activity: Field<Union_ActivityUnion | null>
  user: Field<Type_User | null>
}>

type Type_ActivityReplySubscribedNotification = ObjectType<'ActivityReplySubscribedNotification', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  activityId: Field<Scalar_Int>
  context: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  activity: Field<Union_ActivityUnion | null>
  user: Field<Type_User | null>
}>

type Type_ActivityLikeNotification = ObjectType<'ActivityLikeNotification', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  activityId: Field<Scalar_Int>
  context: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  activity: Field<Union_ActivityUnion | null>
  user: Field<Type_User | null>
}>

type Type_ActivityReplyLikeNotification = ObjectType<'ActivityReplyLikeNotification', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  activityId: Field<Scalar_Int>
  context: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  activity: Field<Union_ActivityUnion | null>
  user: Field<Type_User | null>
}>

type Type_ThreadCommentMentionNotification = ObjectType<'ThreadCommentMentionNotification', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  commentId: Field<Scalar_Int>
  context: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  thread: Field<Type_Thread | null>
  comment: Field<Type_ThreadComment | null>
  user: Field<Type_User | null>
}>

type Type_Thread = ObjectType<'Thread', {
  id: Field<Scalar_Int>
  title: Field<Scalar_String | null>
  body: Field<Scalar_String | null, {
    asHtml: Input<Scalar_Boolean | null>
  }>
  userId: Field<Scalar_Int>
  replyUserId: Field<Scalar_Int | null>
  replyCommentId: Field<Scalar_Int | null>
  replyCount: Field<Scalar_Int | null>
  viewCount: Field<Scalar_Int | null>
  isLocked: Field<Scalar_Boolean | null>
  isSticky: Field<Scalar_Boolean | null>
  isSubscribed: Field<Scalar_Boolean | null>
  likeCount: Field<Scalar_Int>
  isLiked: Field<Scalar_Boolean | null>
  repliedAt: Field<Scalar_Int | null>
  createdAt: Field<Scalar_Int>
  updatedAt: Field<Scalar_Int>
  user: Field<Type_User | null>
  replyUser: Field<Type_User | null>
  likes: Field<[Type_User | null] | null>
  siteUrl: Field<Scalar_String | null>
  categories: Field<[Type_ThreadCategory | null] | null>
  mediaCategories: Field<[Type_Media | null] | null>
}>

type Type_ThreadCategory = ObjectType<'ThreadCategory', {
  id: Field<Scalar_Int>
  name: Field<Scalar_String>
}>

type Type_ThreadComment = ObjectType<'ThreadComment', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int | null>
  threadId: Field<Scalar_Int | null>
  comment: Field<Scalar_String | null, {
    asHtml: Input<Scalar_Boolean | null>
  }>
  likeCount: Field<Scalar_Int>
  isLiked: Field<Scalar_Boolean | null>
  siteUrl: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int>
  updatedAt: Field<Scalar_Int>
  thread: Field<Type_Thread | null>
  user: Field<Type_User | null>
  likes: Field<[Type_User | null] | null>
  childComments: Field<Scalar_Json | null>
  isLocked: Field<Scalar_Boolean | null>
}>

type Type_ThreadCommentReplyNotification = ObjectType<'ThreadCommentReplyNotification', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  commentId: Field<Scalar_Int>
  context: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  thread: Field<Type_Thread | null>
  comment: Field<Type_ThreadComment | null>
  user: Field<Type_User | null>
}>

type Type_ThreadCommentSubscribedNotification = ObjectType<'ThreadCommentSubscribedNotification', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  commentId: Field<Scalar_Int>
  context: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  thread: Field<Type_Thread | null>
  comment: Field<Type_ThreadComment | null>
  user: Field<Type_User | null>
}>

type Type_ThreadCommentLikeNotification = ObjectType<'ThreadCommentLikeNotification', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  commentId: Field<Scalar_Int>
  context: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  thread: Field<Type_Thread | null>
  comment: Field<Type_ThreadComment | null>
  user: Field<Type_User | null>
}>

type Type_ThreadLikeNotification = ObjectType<'ThreadLikeNotification', {
  id: Field<Scalar_Int>
  userId: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  threadId: Field<Scalar_Int>
  context: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  thread: Field<Type_Thread | null>
  comment: Field<Type_ThreadComment | null>
  user: Field<Type_User | null>
}>

type Type_RelatedMediaAdditionNotification = ObjectType<'RelatedMediaAdditionNotification', {
  id: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  mediaId: Field<Scalar_Int>
  context: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  media: Field<Type_Media | null>
}>

type Type_MediaDataChangeNotification = ObjectType<'MediaDataChangeNotification', {
  id: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  mediaId: Field<Scalar_Int>
  context: Field<Scalar_String | null>
  reason: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  media: Field<Type_Media | null>
}>

type Type_MediaMergeNotification = ObjectType<'MediaMergeNotification', {
  id: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  mediaId: Field<Scalar_Int>
  deletedMediaTitles: Field<[Scalar_String | null] | null>
  context: Field<Scalar_String | null>
  reason: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  media: Field<Type_Media | null>
}>

type Type_MediaDeletionNotification = ObjectType<'MediaDeletionNotification', {
  id: Field<Scalar_Int>
  type: Field<Enum_NotificationType | null>
  deletedMediaTitle: Field<Scalar_String | null>
  context: Field<Scalar_String | null>
  reason: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
}>

type Type_MediaListCollection = ObjectType<'MediaListCollection', {
  lists: Field<[Type_MediaListGroup | null] | null>
  user: Field<Type_User | null>
  hasNextChunk: Field<Scalar_Boolean | null>
  statusLists: Field<[[Type_MediaList | null] | null] | null, {
    asArray: Input<Scalar_Boolean | null>
  }>
  customLists: Field<[[Type_MediaList | null] | null] | null, {
    asArray: Input<Scalar_Boolean | null>
  }>
}>

type Type_MediaListGroup = ObjectType<'MediaListGroup', {
  entries: Field<[Type_MediaList | null] | null>
  name: Field<Scalar_String | null>
  isCustomList: Field<Scalar_Boolean | null>
  isSplitCompletedList: Field<Scalar_Boolean | null>
  status: Field<Enum_MediaListStatus | null>
}>

type Type_ParsedMarkdown = ObjectType<'ParsedMarkdown', {
  html: Field<Scalar_String | null>
}>

type Type_AniChartUser = ObjectType<'AniChartUser', {
  user: Field<Type_User | null>
  settings: Field<Scalar_Json | null>
  highlights: Field<Scalar_Json | null>
}>

type Type_SiteStatistics = ObjectType<'SiteStatistics', {
  users: Field<Type_SiteTrendConnection | null, {
    sort: Input<[Enum_SiteTrendSort | null] | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  anime: Field<Type_SiteTrendConnection | null, {
    sort: Input<[Enum_SiteTrendSort | null] | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  manga: Field<Type_SiteTrendConnection | null, {
    sort: Input<[Enum_SiteTrendSort | null] | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  characters: Field<Type_SiteTrendConnection | null, {
    sort: Input<[Enum_SiteTrendSort | null] | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  staff: Field<Type_SiteTrendConnection | null, {
    sort: Input<[Enum_SiteTrendSort | null] | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  studios: Field<Type_SiteTrendConnection | null, {
    sort: Input<[Enum_SiteTrendSort | null] | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
  reviews: Field<Type_SiteTrendConnection | null, {
    sort: Input<[Enum_SiteTrendSort | null] | null>
    page: Input<Scalar_Int | null>
    perPage: Input<Scalar_Int | null>
  }>
}>

type Type_SiteTrendConnection = ObjectType<'SiteTrendConnection', {
  edges: Field<[Type_SiteTrendEdge | null] | null>
  nodes: Field<[Type_SiteTrend | null] | null>
  pageInfo: Field<Type_PageInfo | null>
}>

type Type_SiteTrendEdge = ObjectType<'SiteTrendEdge', {
  node: Field<Type_SiteTrend | null>
}>

type Type_SiteTrend = ObjectType<'SiteTrend', {
  date: Field<Scalar_Int>
  count: Field<Scalar_Int>
  change: Field<Scalar_Int>
}>

type Type_Mutation = ObjectType<'Mutation', {
  UpdateUser: Field<Type_User | null, {
    about: Input<Scalar_String | null>
    titleLanguage: Input<Enum_UserTitleLanguage | null>
    displayAdultContent: Input<Scalar_Boolean | null>
    airingNotifications: Input<Scalar_Boolean | null>
    scoreFormat: Input<Enum_ScoreFormat | null>
    rowOrder: Input<Scalar_String | null>
    profileColor: Input<Scalar_String | null>
    donatorBadge: Input<Scalar_String | null>
    notificationOptions: Input<[Input_NotificationOptionInput | null] | null>
    timezone: Input<Scalar_String | null>
    activityMergeTime: Input<Scalar_Int | null>
    animeListOptions: Input<Input_MediaListOptionsInput | null>
    mangaListOptions: Input<Input_MediaListOptionsInput | null>
    staffNameLanguage: Input<Enum_UserStaffNameLanguage | null>
    restrictMessagesToFollowing: Input<Scalar_Boolean | null>
    disabledListActivity: Input<[Input_ListActivityOptionInput | null] | null>
  }>
  SaveMediaListEntry: Field<Type_MediaList | null, {
    id: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    status: Input<Enum_MediaListStatus | null>
    score: Input<Scalar_Float | null>
    scoreRaw: Input<Scalar_Int | null>
    progress: Input<Scalar_Int | null>
    progressVolumes: Input<Scalar_Int | null>
    repeat: Input<Scalar_Int | null>
    priority: Input<Scalar_Int | null>
    private: Input<Scalar_Boolean | null>
    notes: Input<Scalar_String | null>
    hiddenFromStatusLists: Input<Scalar_Boolean | null>
    customLists: Input<[Scalar_String | null] | null>
    advancedScores: Input<[Scalar_Float | null] | null>
    startedAt: Input<Input_FuzzyDateInput | null>
    completedAt: Input<Input_FuzzyDateInput | null>
  }>
  UpdateMediaListEntries: Field<[Type_MediaList | null] | null, {
    status: Input<Enum_MediaListStatus | null>
    score: Input<Scalar_Float | null>
    scoreRaw: Input<Scalar_Int | null>
    progress: Input<Scalar_Int | null>
    progressVolumes: Input<Scalar_Int | null>
    repeat: Input<Scalar_Int | null>
    priority: Input<Scalar_Int | null>
    private: Input<Scalar_Boolean | null>
    notes: Input<Scalar_String | null>
    hiddenFromStatusLists: Input<Scalar_Boolean | null>
    advancedScores: Input<[Scalar_Float | null] | null>
    startedAt: Input<Input_FuzzyDateInput | null>
    completedAt: Input<Input_FuzzyDateInput | null>
    ids: Input<[Scalar_Int | null] | null>
  }>
  DeleteMediaListEntry: Field<Type_Deleted | null, {
    id: Input<Scalar_Int | null>
  }>
  DeleteCustomList: Field<Type_Deleted | null, {
    customList: Input<Scalar_String | null>
    type: Input<Enum_MediaType | null>
  }>
  SaveTextActivity: Field<Type_TextActivity | null, {
    id: Input<Scalar_Int | null>
    text: Input<Scalar_String | null>
    locked: Input<Scalar_Boolean | null>
  }>
  SaveMessageActivity: Field<Type_MessageActivity | null, {
    id: Input<Scalar_Int | null>
    message: Input<Scalar_String | null>
    recipientId: Input<Scalar_Int | null>
    private: Input<Scalar_Boolean | null>
    locked: Input<Scalar_Boolean | null>
    asMod: Input<Scalar_Boolean | null>
  }>
  SaveListActivity: Field<Type_ListActivity | null, {
    id: Input<Scalar_Int | null>
    locked: Input<Scalar_Boolean | null>
  }>
  DeleteActivity: Field<Type_Deleted | null, {
    id: Input<Scalar_Int | null>
  }>
  ToggleActivityPin: Field<Union_ActivityUnion | null, {
    id: Input<Scalar_Int | null>
    pinned: Input<Scalar_Boolean | null>
  }>
  ToggleActivitySubscription: Field<Union_ActivityUnion | null, {
    activityId: Input<Scalar_Int | null>
    subscribe: Input<Scalar_Boolean | null>
  }>
  SaveActivityReply: Field<Type_ActivityReply | null, {
    id: Input<Scalar_Int | null>
    activityId: Input<Scalar_Int | null>
    text: Input<Scalar_String | null>
    asMod: Input<Scalar_Boolean | null>
  }>
  DeleteActivityReply: Field<Type_Deleted | null, {
    id: Input<Scalar_Int | null>
  }>
  ToggleLike: Field<[Type_User | null] | null, {
    id: Input<Scalar_Int | null>
    type: Input<Enum_LikeableType | null>
  }>
  ToggleLikeV2: Field<Union_LikeableUnion | null, {
    id: Input<Scalar_Int | null>
    type: Input<Enum_LikeableType | null>
  }>
  ToggleFollow: Field<Type_User | null, {
    userId: Input<Scalar_Int | null>
  }>
  ToggleFavourite: Field<Type_Favourites | null, {
    animeId: Input<Scalar_Int | null>
    mangaId: Input<Scalar_Int | null>
    characterId: Input<Scalar_Int | null>
    staffId: Input<Scalar_Int | null>
    studioId: Input<Scalar_Int | null>
  }>
  UpdateFavouriteOrder: Field<Type_Favourites | null, {
    animeIds: Input<[Scalar_Int | null] | null>
    mangaIds: Input<[Scalar_Int | null] | null>
    characterIds: Input<[Scalar_Int | null] | null>
    staffIds: Input<[Scalar_Int | null] | null>
    studioIds: Input<[Scalar_Int | null] | null>
    animeOrder: Input<[Scalar_Int | null] | null>
    mangaOrder: Input<[Scalar_Int | null] | null>
    characterOrder: Input<[Scalar_Int | null] | null>
    staffOrder: Input<[Scalar_Int | null] | null>
    studioOrder: Input<[Scalar_Int | null] | null>
  }>
  SaveReview: Field<Type_Review | null, {
    id: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    body: Input<Scalar_String | null>
    summary: Input<Scalar_String | null>
    score: Input<Scalar_Int | null>
    private: Input<Scalar_Boolean | null>
  }>
  DeleteReview: Field<Type_Deleted | null, {
    id: Input<Scalar_Int | null>
  }>
  RateReview: Field<Type_Review | null, {
    reviewId: Input<Scalar_Int | null>
    rating: Input<Enum_ReviewRating | null>
  }>
  SaveRecommendation: Field<Type_Recommendation | null, {
    mediaId: Input<Scalar_Int | null>
    mediaRecommendationId: Input<Scalar_Int | null>
    rating: Input<Enum_RecommendationRating | null>
  }>
  SaveThread: Field<Type_Thread | null, {
    id: Input<Scalar_Int | null>
    title: Input<Scalar_String | null>
    body: Input<Scalar_String | null>
    categories: Input<[Scalar_Int | null] | null>
    mediaCategories: Input<[Scalar_Int | null] | null>
    sticky: Input<Scalar_Boolean | null>
    locked: Input<Scalar_Boolean | null>
  }>
  DeleteThread: Field<Type_Deleted | null, {
    id: Input<Scalar_Int | null>
  }>
  ToggleThreadSubscription: Field<Type_Thread | null, {
    threadId: Input<Scalar_Int | null>
    subscribe: Input<Scalar_Boolean | null>
  }>
  SaveThreadComment: Field<Type_ThreadComment | null, {
    id: Input<Scalar_Int | null>
    threadId: Input<Scalar_Int | null>
    parentCommentId: Input<Scalar_Int | null>
    comment: Input<Scalar_String | null>
    locked: Input<Scalar_Boolean | null>
  }>
  DeleteThreadComment: Field<Type_Deleted | null, {
    id: Input<Scalar_Int | null>
  }>
  UpdateAniChartSettings: Field<Scalar_Json | null, {
    titleLanguage: Input<Scalar_String | null>
    outgoingLinkProvider: Input<Scalar_String | null>
    theme: Input<Scalar_String | null>
    sort: Input<Scalar_String | null>
  }>
  UpdateAniChartHighlights: Field<Scalar_Json | null, {
    highlights: Input<[Input_AniChartHighlightInput | null] | null>
  }>
}>

type Type_Deleted = ObjectType<'Deleted', {
  deleted: Field<Scalar_Boolean | null>
}>

type Type_InternalPage = ObjectType<'InternalPage', {
  mediaSubmissions: Field<[Type_MediaSubmission | null] | null, {
    mediaId: Input<Scalar_Int | null>
    submissionId: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    assigneeId: Input<Scalar_Int | null>
    status: Input<Enum_SubmissionStatus | null>
    type: Input<Enum_MediaType | null>
    sort: Input<[Enum_SubmissionSort | null] | null>
  }>
  characterSubmissions: Field<[Type_CharacterSubmission | null] | null, {
    characterId: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    assigneeId: Input<Scalar_Int | null>
    status: Input<Enum_SubmissionStatus | null>
    sort: Input<[Enum_SubmissionSort | null] | null>
  }>
  staffSubmissions: Field<[Type_StaffSubmission | null] | null, {
    staffId: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    assigneeId: Input<Scalar_Int | null>
    status: Input<Enum_SubmissionStatus | null>
    sort: Input<[Enum_SubmissionSort | null] | null>
  }>
  revisionHistory: Field<[Type_RevisionHistory | null] | null, {
    userId: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    characterId: Input<Scalar_Int | null>
    staffId: Input<Scalar_Int | null>
    studioId: Input<Scalar_Int | null>
  }>
  reports: Field<[Type_Report | null] | null, {
    reporterId: Input<Scalar_Int | null>
    reportedId: Input<Scalar_Int | null>
  }>
  modActions: Field<[Type_ModAction | null] | null, {
    userId: Input<Scalar_Int | null>
    modId: Input<Scalar_Int | null>
  }>
  userBlockSearch: Field<[Type_User | null] | null, {
    search: Input<Scalar_String | null>
  }>
  pageInfo: Field<Type_PageInfo | null>
  users: Field<[Type_User | null] | null, {
    id: Input<Scalar_Int | null>
    name: Input<Scalar_String | null>
    isModerator: Input<Scalar_Boolean | null>
    search: Input<Scalar_String | null>
    sort: Input<[Enum_UserSort | null] | null>
  }>
  media: Field<[Type_Media | null] | null, {
    id: Input<Scalar_Int | null>
    idMal: Input<Scalar_Int | null>
    startDate: Input<Scalar_FuzzyDateInt | null>
    endDate: Input<Scalar_FuzzyDateInt | null>
    season: Input<Enum_MediaSeason | null>
    seasonYear: Input<Scalar_Int | null>
    type: Input<Enum_MediaType | null>
    format: Input<Enum_MediaFormat | null>
    status: Input<Enum_MediaStatus | null>
    episodes: Input<Scalar_Int | null>
    duration: Input<Scalar_Int | null>
    chapters: Input<Scalar_Int | null>
    volumes: Input<Scalar_Int | null>
    isAdult: Input<Scalar_Boolean | null>
    genre: Input<Scalar_String | null>
    tag: Input<Scalar_String | null>
    minimumTagRank: Input<Scalar_Int | null>
    tagCategory: Input<Scalar_String | null>
    onList: Input<Scalar_Boolean | null>
    licensedBy: Input<Scalar_String | null>
    licensedById: Input<Scalar_Int | null>
    averageScore: Input<Scalar_Int | null>
    popularity: Input<Scalar_Int | null>
    source: Input<Enum_MediaSource | null>
    countryOfOrigin: Input<Scalar_CountryCode | null>
    isLicensed: Input<Scalar_Boolean | null>
    search: Input<Scalar_String | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    idMal_not: Input<Scalar_Int | null>
    idMal_in: Input<[Scalar_Int | null] | null>
    idMal_not_in: Input<[Scalar_Int | null] | null>
    startDate_greater: Input<Scalar_FuzzyDateInt | null>
    startDate_lesser: Input<Scalar_FuzzyDateInt | null>
    startDate_like: Input<Scalar_String | null>
    endDate_greater: Input<Scalar_FuzzyDateInt | null>
    endDate_lesser: Input<Scalar_FuzzyDateInt | null>
    endDate_like: Input<Scalar_String | null>
    format_in: Input<[Enum_MediaFormat | null] | null>
    format_not: Input<Enum_MediaFormat | null>
    format_not_in: Input<[Enum_MediaFormat | null] | null>
    status_in: Input<[Enum_MediaStatus | null] | null>
    status_not: Input<Enum_MediaStatus | null>
    status_not_in: Input<[Enum_MediaStatus | null] | null>
    episodes_greater: Input<Scalar_Int | null>
    episodes_lesser: Input<Scalar_Int | null>
    duration_greater: Input<Scalar_Int | null>
    duration_lesser: Input<Scalar_Int | null>
    chapters_greater: Input<Scalar_Int | null>
    chapters_lesser: Input<Scalar_Int | null>
    volumes_greater: Input<Scalar_Int | null>
    volumes_lesser: Input<Scalar_Int | null>
    genre_in: Input<[Scalar_String | null] | null>
    genre_not_in: Input<[Scalar_String | null] | null>
    tag_in: Input<[Scalar_String | null] | null>
    tag_not_in: Input<[Scalar_String | null] | null>
    tagCategory_in: Input<[Scalar_String | null] | null>
    tagCategory_not_in: Input<[Scalar_String | null] | null>
    licensedBy_in: Input<[Scalar_String | null] | null>
    licensedById_in: Input<[Scalar_Int | null] | null>
    averageScore_not: Input<Scalar_Int | null>
    averageScore_greater: Input<Scalar_Int | null>
    averageScore_lesser: Input<Scalar_Int | null>
    popularity_not: Input<Scalar_Int | null>
    popularity_greater: Input<Scalar_Int | null>
    popularity_lesser: Input<Scalar_Int | null>
    source_in: Input<[Enum_MediaSource | null] | null>
    sort: Input<[Enum_MediaSort | null] | null>
  }>
  characters: Field<[Type_Character | null] | null, {
    id: Input<Scalar_Int | null>
    isBirthday: Input<Scalar_Boolean | null>
    search: Input<Scalar_String | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    sort: Input<[Enum_CharacterSort | null] | null>
  }>
  staff: Field<[Type_Staff | null] | null, {
    id: Input<Scalar_Int | null>
    isBirthday: Input<Scalar_Boolean | null>
    search: Input<Scalar_String | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    sort: Input<[Enum_StaffSort | null] | null>
  }>
  studios: Field<[Type_Studio | null] | null, {
    id: Input<Scalar_Int | null>
    search: Input<Scalar_String | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    sort: Input<[Enum_StudioSort | null] | null>
  }>
  mediaList: Field<[Type_MediaList | null] | null, {
    id: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    userName: Input<Scalar_String | null>
    type: Input<Enum_MediaType | null>
    status: Input<Enum_MediaListStatus | null>
    mediaId: Input<Scalar_Int | null>
    isFollowing: Input<Scalar_Boolean | null>
    notes: Input<Scalar_String | null>
    startedAt: Input<Scalar_FuzzyDateInt | null>
    completedAt: Input<Scalar_FuzzyDateInt | null>
    compareWithAuthList: Input<Scalar_Boolean | null>
    userId_in: Input<[Scalar_Int | null] | null>
    status_in: Input<[Enum_MediaListStatus | null] | null>
    status_not_in: Input<[Enum_MediaListStatus | null] | null>
    status_not: Input<Enum_MediaListStatus | null>
    mediaId_in: Input<[Scalar_Int | null] | null>
    mediaId_not_in: Input<[Scalar_Int | null] | null>
    notes_like: Input<Scalar_String | null>
    startedAt_greater: Input<Scalar_FuzzyDateInt | null>
    startedAt_lesser: Input<Scalar_FuzzyDateInt | null>
    startedAt_like: Input<Scalar_String | null>
    completedAt_greater: Input<Scalar_FuzzyDateInt | null>
    completedAt_lesser: Input<Scalar_FuzzyDateInt | null>
    completedAt_like: Input<Scalar_String | null>
    sort: Input<[Enum_MediaListSort | null] | null>
  }>
  airingSchedules: Field<[Type_AiringSchedule | null] | null, {
    id: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    episode: Input<Scalar_Int | null>
    airingAt: Input<Scalar_Int | null>
    notYetAired: Input<Scalar_Boolean | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    mediaId_not: Input<Scalar_Int | null>
    mediaId_in: Input<[Scalar_Int | null] | null>
    mediaId_not_in: Input<[Scalar_Int | null] | null>
    episode_not: Input<Scalar_Int | null>
    episode_in: Input<[Scalar_Int | null] | null>
    episode_not_in: Input<[Scalar_Int | null] | null>
    episode_greater: Input<Scalar_Int | null>
    episode_lesser: Input<Scalar_Int | null>
    airingAt_greater: Input<Scalar_Int | null>
    airingAt_lesser: Input<Scalar_Int | null>
    sort: Input<[Enum_AiringSort | null] | null>
  }>
  mediaTrends: Field<[Type_MediaTrend | null] | null, {
    mediaId: Input<Scalar_Int | null>
    date: Input<Scalar_Int | null>
    trending: Input<Scalar_Int | null>
    averageScore: Input<Scalar_Int | null>
    popularity: Input<Scalar_Int | null>
    episode: Input<Scalar_Int | null>
    releasing: Input<Scalar_Boolean | null>
    mediaId_not: Input<Scalar_Int | null>
    mediaId_in: Input<[Scalar_Int | null] | null>
    mediaId_not_in: Input<[Scalar_Int | null] | null>
    date_greater: Input<Scalar_Int | null>
    date_lesser: Input<Scalar_Int | null>
    trending_greater: Input<Scalar_Int | null>
    trending_lesser: Input<Scalar_Int | null>
    trending_not: Input<Scalar_Int | null>
    averageScore_greater: Input<Scalar_Int | null>
    averageScore_lesser: Input<Scalar_Int | null>
    averageScore_not: Input<Scalar_Int | null>
    popularity_greater: Input<Scalar_Int | null>
    popularity_lesser: Input<Scalar_Int | null>
    popularity_not: Input<Scalar_Int | null>
    episode_greater: Input<Scalar_Int | null>
    episode_lesser: Input<Scalar_Int | null>
    episode_not: Input<Scalar_Int | null>
    sort: Input<[Enum_MediaTrendSort | null] | null>
  }>
  notifications: Field<[Union_NotificationUnion | null] | null, {
    type: Input<Enum_NotificationType | null>
    resetNotificationCount: Input<Scalar_Boolean | null>
    type_in: Input<[Enum_NotificationType | null] | null>
  }>
  followers: Field<[Type_User | null] | null, {
    userId: Input<Scalar_Int>
    sort: Input<[Enum_UserSort | null] | null>
  }>
  following: Field<[Type_User | null] | null, {
    userId: Input<Scalar_Int>
    sort: Input<[Enum_UserSort | null] | null>
  }>
  activities: Field<[Union_ActivityUnion | null] | null, {
    id: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    messengerId: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    type: Input<Enum_ActivityType | null>
    isFollowing: Input<Scalar_Boolean | null>
    hasReplies: Input<Scalar_Boolean | null>
    hasRepliesOrTypeText: Input<Scalar_Boolean | null>
    createdAt: Input<Scalar_Int | null>
    id_not: Input<Scalar_Int | null>
    id_in: Input<[Scalar_Int | null] | null>
    id_not_in: Input<[Scalar_Int | null] | null>
    userId_not: Input<Scalar_Int | null>
    userId_in: Input<[Scalar_Int | null] | null>
    userId_not_in: Input<[Scalar_Int | null] | null>
    messengerId_not: Input<Scalar_Int | null>
    messengerId_in: Input<[Scalar_Int | null] | null>
    messengerId_not_in: Input<[Scalar_Int | null] | null>
    mediaId_not: Input<Scalar_Int | null>
    mediaId_in: Input<[Scalar_Int | null] | null>
    mediaId_not_in: Input<[Scalar_Int | null] | null>
    type_not: Input<Enum_ActivityType | null>
    type_in: Input<[Enum_ActivityType | null] | null>
    type_not_in: Input<[Enum_ActivityType | null] | null>
    createdAt_greater: Input<Scalar_Int | null>
    createdAt_lesser: Input<Scalar_Int | null>
    sort: Input<[Enum_ActivitySort | null] | null>
  }>
  activityReplies: Field<[Type_ActivityReply | null] | null, {
    id: Input<Scalar_Int | null>
    activityId: Input<Scalar_Int | null>
  }>
  threads: Field<[Type_Thread | null] | null, {
    id: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    replyUserId: Input<Scalar_Int | null>
    subscribed: Input<Scalar_Boolean | null>
    categoryId: Input<Scalar_Int | null>
    mediaCategoryId: Input<Scalar_Int | null>
    search: Input<Scalar_String | null>
    id_in: Input<[Scalar_Int | null] | null>
    sort: Input<[Enum_ThreadSort | null] | null>
  }>
  threadComments: Field<[Type_ThreadComment | null] | null, {
    id: Input<Scalar_Int | null>
    threadId: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    sort: Input<[Enum_ThreadCommentSort | null] | null>
  }>
  reviews: Field<[Type_Review | null] | null, {
    id: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    mediaType: Input<Enum_MediaType | null>
    sort: Input<[Enum_ReviewSort | null] | null>
  }>
  recommendations: Field<[Type_Recommendation | null] | null, {
    id: Input<Scalar_Int | null>
    mediaId: Input<Scalar_Int | null>
    mediaRecommendationId: Input<Scalar_Int | null>
    userId: Input<Scalar_Int | null>
    rating: Input<Scalar_Int | null>
    onList: Input<Scalar_Boolean | null>
    rating_greater: Input<Scalar_Int | null>
    rating_lesser: Input<Scalar_Int | null>
    sort: Input<[Enum_RecommendationSort | null] | null>
  }>
  likes: Field<[Type_User | null] | null, {
    likeableId: Input<Scalar_Int | null>
    type: Input<Enum_LikeableType | null>
  }>
}>

type Type_MediaSubmission = ObjectType<'MediaSubmission', {
  id: Field<Scalar_Int>
  submitter: Field<Type_User | null>
  assignee: Field<Type_User | null>
  status: Field<Enum_SubmissionStatus | null>
  submitterStats: Field<Scalar_Json | null>
  notes: Field<Scalar_String | null>
  source: Field<Scalar_String | null>
  changes: Field<[Scalar_String | null] | null>
  locked: Field<Scalar_Boolean | null>
  media: Field<Type_Media | null>
  submission: Field<Type_Media | null>
  characters: Field<[Type_MediaSubmissionComparison | null] | null>
  staff: Field<[Type_MediaSubmissionComparison | null] | null>
  studios: Field<[Type_MediaSubmissionComparison | null] | null>
  relations: Field<[Type_MediaEdge | null] | null>
  externalLinks: Field<[Type_MediaSubmissionComparison | null] | null>
  createdAt: Field<Scalar_Int | null>
}>

type Type_MediaSubmissionComparison = ObjectType<'MediaSubmissionComparison', {
  submission: Field<Type_MediaSubmissionEdge | null>
  character: Field<Type_MediaCharacter | null>
  staff: Field<Type_StaffEdge | null>
  studio: Field<Type_StudioEdge | null>
  externalLink: Field<Type_MediaExternalLink | null>
}>

type Type_MediaSubmissionEdge = ObjectType<'MediaSubmissionEdge', {
  id: Field<Scalar_Int | null>
  characterRole: Field<Enum_CharacterRole | null>
  staffRole: Field<Scalar_String | null>
  roleNotes: Field<Scalar_String | null>
  dubGroup: Field<Scalar_String | null>
  characterName: Field<Scalar_String | null>
  isMain: Field<Scalar_Boolean | null>
  character: Field<Type_Character | null>
  characterSubmission: Field<Type_Character | null>
  voiceActor: Field<Type_Staff | null>
  voiceActorSubmission: Field<Type_Staff | null>
  staff: Field<Type_Staff | null>
  staffSubmission: Field<Type_Staff | null>
  studio: Field<Type_Studio | null>
  externalLink: Field<Type_MediaExternalLink | null>
  media: Field<Type_Media | null>
}>

type Type_MediaCharacter = ObjectType<'MediaCharacter', {
  id: Field<Scalar_Int | null>
  role: Field<Enum_CharacterRole | null>
  roleNotes: Field<Scalar_String | null>
  dubGroup: Field<Scalar_String | null>
  characterName: Field<Scalar_String | null>
  character: Field<Type_Character | null>
  voiceActor: Field<Type_Staff | null>
}>

type Type_CharacterSubmission = ObjectType<'CharacterSubmission', {
  id: Field<Scalar_Int>
  character: Field<Type_Character | null>
  submission: Field<Type_Character | null>
  submitter: Field<Type_User | null>
  assignee: Field<Type_User | null>
  status: Field<Enum_SubmissionStatus | null>
  notes: Field<Scalar_String | null>
  source: Field<Scalar_String | null>
  locked: Field<Scalar_Boolean | null>
  createdAt: Field<Scalar_Int | null>
}>

type Type_StaffSubmission = ObjectType<'StaffSubmission', {
  id: Field<Scalar_Int>
  staff: Field<Type_Staff | null>
  submission: Field<Type_Staff | null>
  submitter: Field<Type_User | null>
  assignee: Field<Type_User | null>
  status: Field<Enum_SubmissionStatus | null>
  notes: Field<Scalar_String | null>
  source: Field<Scalar_String | null>
  locked: Field<Scalar_Boolean | null>
  createdAt: Field<Scalar_Int | null>
}>

type Type_RevisionHistory = ObjectType<'RevisionHistory', {
  id: Field<Scalar_Int>
  action: Field<Enum_RevisionHistoryAction | null>
  changes: Field<Scalar_Json | null>
  user: Field<Type_User | null>
  media: Field<Type_Media | null>
  character: Field<Type_Character | null>
  staff: Field<Type_Staff | null>
  studio: Field<Type_Studio | null>
  externalLink: Field<Type_MediaExternalLink | null>
  createdAt: Field<Scalar_Int | null>
}>

type Type_Report = ObjectType<'Report', {
  id: Field<Scalar_Int>
  reporter: Field<Type_User | null>
  reported: Field<Type_User | null>
  reason: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int | null>
  cleared: Field<Scalar_Boolean | null>
}>

type Type_ModAction = ObjectType<'ModAction', {
  id: Field<Scalar_Int>
  user: Field<Type_User | null>
  mod: Field<Type_User | null>
  type: Field<Enum_ModActionType | null>
  objectId: Field<Scalar_Int | null>
  objectType: Field<Scalar_String | null>
  data: Field<Scalar_String | null>
  createdAt: Field<Scalar_Int>
}>

type Type_CharacterSubmissionConnection = ObjectType<'CharacterSubmissionConnection', {
  edges: Field<[Type_CharacterSubmissionEdge | null] | null>
  nodes: Field<[Type_CharacterSubmission | null] | null>
  pageInfo: Field<Type_PageInfo | null>
}>

type Type_CharacterSubmissionEdge = ObjectType<'CharacterSubmissionEdge', {
  node: Field<Type_CharacterSubmission | null>
  role: Field<Enum_CharacterRole | null>
  voiceActors: Field<[Type_Staff | null] | null>
  submittedVoiceActors: Field<[Type_StaffSubmission | null] | null>
}>

type Type_UserModData = ObjectType<'UserModData', {
  alts: Field<[Type_User | null] | null>
  bans: Field<Scalar_Json | null>
  ip: Field<Scalar_Json | null>
  counts: Field<Scalar_Json | null>
  privacy: Field<Scalar_Int | null>
  email: Field<Scalar_String | null>
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
