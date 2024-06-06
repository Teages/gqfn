/* eslint-ignore */
import type { ArgOf, DefineSchema, EnumType, Field, InputObject, InterfaceObject, ResOf, ScalarType, TypeObject, Union} from '@teages/gqf/schema'

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

export type UserTitleLanguage =
  | 'ROMAJI'
  | 'ENGLISH'
  | 'NATIVE'
  | 'ROMAJI_STYLISED'
  | 'ENGLISH_STYLISED'
  | 'NATIVE_STYLISED'

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

export type UserStaffNameLanguage =
  | 'ROMAJI_WESTERN'
  | 'ROMAJI'
  | 'NATIVE'

export type MediaListStatus =
  | 'CURRENT'
  | 'PLANNING'
  | 'COMPLETED'
  | 'DROPPED'
  | 'PAUSED'
  | 'REPEATING'

export type ScoreFormat =
  | 'POINT_100'
  | 'POINT_10_DECIMAL'
  | 'POINT_10'
  | 'POINT_5'
  | 'POINT_3'

export type MediaType =
  | 'ANIME'
  | 'MANGA'

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

export type MediaStatus =
  | 'FINISHED'
  | 'RELEASING'
  | 'NOT_YET_RELEASED'
  | 'CANCELLED'
  | 'HIATUS'

export type MediaSeason =
  | 'WINTER'
  | 'SPRING'
  | 'SUMMER'
  | 'FALL'

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

export type CharacterSort =
  | 'ID'
  | 'ID_DESC'
  | 'ROLE'
  | 'ROLE_DESC'
  | 'SEARCH_MATCH'
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'
  | 'RELEVANCE'

export type CharacterRole =
  | 'MAIN'
  | 'SUPPORTING'
  | 'BACKGROUND'

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

export type StudioSort =
  | 'ID'
  | 'ID_DESC'
  | 'NAME'
  | 'NAME_DESC'
  | 'SEARCH_MATCH'
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'

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

export type ExternalLinkType =
  | 'INFO'
  | 'STREAMING'
  | 'SOCIAL'

export type MediaRankType =
  | 'RATED'
  | 'POPULAR'

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

export type ReviewRating =
  | 'NO_VOTE'
  | 'UP_VOTE'
  | 'DOWN_VOTE'

export type RecommendationSort =
  | 'ID'
  | 'ID_DESC'
  | 'RATING'
  | 'RATING_DESC'

export type RecommendationRating =
  | 'NO_RATING'
  | 'RATE_UP'
  | 'RATE_DOWN'

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

export type UserStatisticsSort =
  | 'ID'
  | 'ID_DESC'
  | 'COUNT'
  | 'COUNT_DESC'
  | 'PROGRESS'
  | 'PROGRESS_DESC'
  | 'MEAN_SCORE'
  | 'MEAN_SCORE_DESC'

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

export type AiringSort =
  | 'ID'
  | 'ID_DESC'
  | 'MEDIA_ID'
  | 'MEDIA_ID_DESC'
  | 'TIME'
  | 'TIME_DESC'
  | 'EPISODE'
  | 'EPISODE_DESC'

export type ActivityType =
  | 'TEXT'
  | 'ANIME_LIST'
  | 'MANGA_LIST'
  | 'MESSAGE'
  | 'MEDIA_LIST'

export type ActivitySort =
  | 'ID'
  | 'ID_DESC'
  | 'PINNED'

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

export type ThreadCommentSort =
  | 'ID'
  | 'ID_DESC'

export type LikeableType =
  | 'THREAD'
  | 'THREAD_COMMENT'
  | 'ACTIVITY'
  | 'ACTIVITY_REPLY'

export type SiteTrendSort =
  | 'DATE'
  | 'DATE_DESC'
  | 'COUNT'
  | 'COUNT_DESC'
  | 'CHANGE'
  | 'CHANGE_DESC'

export type ExternalLinkMediaType =
  | 'ANIME'
  | 'MANGA'
  | 'STAFF'

export type SubmissionStatus =
  | 'PENDING'
  | 'REJECTED'
  | 'PARTIALLY_ACCEPTED'
  | 'ACCEPTED'

export type SubmissionSort =
  | 'ID'
  | 'ID_DESC'

export type RevisionHistoryAction =
  | 'CREATE'
  | 'EDIT'

export type ModActionType =
  | 'NOTE'
  | 'BAN'
  | 'DELETE'
  | 'EDIT'
  | 'EXPIRE'
  | 'REPORT'
  | 'RESET'
  | 'ANON'

type NotificationOptionInput = InputObject<'NotificationOptionInput', {
  type: Arg<'NotificationType'>
  enabled: Arg<'Boolean'>
}>

type MediaListOptionsInput = InputObject<'MediaListOptionsInput', {
  sectionOrder: Arg<'[String]'>
  splitCompletedSectionByFormat: Arg<'Boolean'>
  customLists: Arg<'[String]'>
  advancedScoring: Arg<'[String]'>
  advancedScoringEnabled: Arg<'Boolean'>
  theme: Arg<'String'>
}>

type ListActivityOptionInput = InputObject<'ListActivityOptionInput', {
  disabled: Arg<'Boolean'>
  type: Arg<'MediaListStatus'>
}>

type FuzzyDateInput = InputObject<'FuzzyDateInput', {
  year: Arg<'Int'>
  month: Arg<'Int'>
  day: Arg<'Int'>
}>

type AniChartHighlightInput = InputObject<'AniChartHighlightInput', {
  mediaId: Arg<'Int'>
  highlight: Arg<'String'>
}>

type MediaTitleInput = InputObject<'MediaTitleInput', {
  romaji: Arg<'String'>
  english: Arg<'String'>
  native: Arg<'String'>
}>

type AiringScheduleInput = InputObject<'AiringScheduleInput', {
  airingAt: Arg<'Int'>
  episode: Arg<'Int'>
  timeUntilAiring: Arg<'Int'>
}>

type MediaExternalLinkInput = InputObject<'MediaExternalLinkInput', {
  id: Arg<'Int!'>
  url: Arg<'String!'>
  site: Arg<'String!'>
}>

type CharacterNameInput = InputObject<'CharacterNameInput', {
  first: Arg<'String'>
  middle: Arg<'String'>
  last: Arg<'String'>
  native: Arg<'String'>
  alternative: Arg<'[String]'>
  alternativeSpoiler: Arg<'[String]'>
}>

type StaffNameInput = InputObject<'StaffNameInput', {
  first: Arg<'String'>
  middle: Arg<'String'>
  last: Arg<'String'>
  native: Arg<'String'>
  alternative: Arg<'[String]'>
}>

type NotificationUnion = Union<'NotificationUnion', {
  AiringNotification: AiringNotification
  FollowingNotification: FollowingNotification
  ActivityMessageNotification: ActivityMessageNotification
  ActivityMentionNotification: ActivityMentionNotification
  ActivityReplyNotification: ActivityReplyNotification
  ActivityReplySubscribedNotification: ActivityReplySubscribedNotification
  ActivityLikeNotification: ActivityLikeNotification
  ActivityReplyLikeNotification: ActivityReplyLikeNotification
  ThreadCommentMentionNotification: ThreadCommentMentionNotification
  ThreadCommentReplyNotification: ThreadCommentReplyNotification
  ThreadCommentSubscribedNotification: ThreadCommentSubscribedNotification
  ThreadCommentLikeNotification: ThreadCommentLikeNotification
  ThreadLikeNotification: ThreadLikeNotification
  RelatedMediaAdditionNotification: RelatedMediaAdditionNotification
  MediaDataChangeNotification: MediaDataChangeNotification
  MediaMergeNotification: MediaMergeNotification
  MediaDeletionNotification: MediaDeletionNotification
}>

type ActivityUnion = Union<'ActivityUnion', {
  TextActivity: TextActivity
  ListActivity: ListActivity
  MessageActivity: MessageActivity
}>

type LikeableUnion = Union<'LikeableUnion', {
  ListActivity: ListActivity
  TextActivity: TextActivity
  MessageActivity: MessageActivity
  ActivityReply: ActivityReply
  Thread: Thread
  ThreadComment: ThreadComment
}>

type Query = TypeObject<'Query', {
  Page: Field<'Page', Res<'Page'>, {
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  Media: Field<'Media', Res<'Media'>, {
    id: Arg<'Int'>
    idMal: Arg<'Int'>
    startDate: Arg<'FuzzyDateInt'>
    endDate: Arg<'FuzzyDateInt'>
    season: Arg<'MediaSeason'>
    seasonYear: Arg<'Int'>
    type: Arg<'MediaType'>
    format: Arg<'MediaFormat'>
    status: Arg<'MediaStatus'>
    episodes: Arg<'Int'>
    duration: Arg<'Int'>
    chapters: Arg<'Int'>
    volumes: Arg<'Int'>
    isAdult: Arg<'Boolean'>
    genre: Arg<'String'>
    tag: Arg<'String'>
    minimumTagRank: Arg<'Int'>
    tagCategory: Arg<'String'>
    onList: Arg<'Boolean'>
    licensedBy: Arg<'String'>
    licensedById: Arg<'Int'>
    averageScore: Arg<'Int'>
    popularity: Arg<'Int'>
    source: Arg<'MediaSource'>
    countryOfOrigin: Arg<'CountryCode'>
    isLicensed: Arg<'Boolean'>
    search: Arg<'String'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    idMal_not: Arg<'Int'>
    idMal_in: Arg<'[Int]'>
    idMal_not_in: Arg<'[Int]'>
    startDate_greater: Arg<'FuzzyDateInt'>
    startDate_lesser: Arg<'FuzzyDateInt'>
    startDate_like: Arg<'String'>
    endDate_greater: Arg<'FuzzyDateInt'>
    endDate_lesser: Arg<'FuzzyDateInt'>
    endDate_like: Arg<'String'>
    format_in: Arg<'[MediaFormat]'>
    format_not: Arg<'MediaFormat'>
    format_not_in: Arg<'[MediaFormat]'>
    status_in: Arg<'[MediaStatus]'>
    status_not: Arg<'MediaStatus'>
    status_not_in: Arg<'[MediaStatus]'>
    episodes_greater: Arg<'Int'>
    episodes_lesser: Arg<'Int'>
    duration_greater: Arg<'Int'>
    duration_lesser: Arg<'Int'>
    chapters_greater: Arg<'Int'>
    chapters_lesser: Arg<'Int'>
    volumes_greater: Arg<'Int'>
    volumes_lesser: Arg<'Int'>
    genre_in: Arg<'[String]'>
    genre_not_in: Arg<'[String]'>
    tag_in: Arg<'[String]'>
    tag_not_in: Arg<'[String]'>
    tagCategory_in: Arg<'[String]'>
    tagCategory_not_in: Arg<'[String]'>
    licensedBy_in: Arg<'[String]'>
    licensedById_in: Arg<'[Int]'>
    averageScore_not: Arg<'Int'>
    averageScore_greater: Arg<'Int'>
    averageScore_lesser: Arg<'Int'>
    popularity_not: Arg<'Int'>
    popularity_greater: Arg<'Int'>
    popularity_lesser: Arg<'Int'>
    source_in: Arg<'[MediaSource]'>
    sort: Arg<'[MediaSort]'>
  }>
  MediaTrend: Field<'MediaTrend', Res<'MediaTrend'>, {
    mediaId: Arg<'Int'>
    date: Arg<'Int'>
    trending: Arg<'Int'>
    averageScore: Arg<'Int'>
    popularity: Arg<'Int'>
    episode: Arg<'Int'>
    releasing: Arg<'Boolean'>
    mediaId_not: Arg<'Int'>
    mediaId_in: Arg<'[Int]'>
    mediaId_not_in: Arg<'[Int]'>
    date_greater: Arg<'Int'>
    date_lesser: Arg<'Int'>
    trending_greater: Arg<'Int'>
    trending_lesser: Arg<'Int'>
    trending_not: Arg<'Int'>
    averageScore_greater: Arg<'Int'>
    averageScore_lesser: Arg<'Int'>
    averageScore_not: Arg<'Int'>
    popularity_greater: Arg<'Int'>
    popularity_lesser: Arg<'Int'>
    popularity_not: Arg<'Int'>
    episode_greater: Arg<'Int'>
    episode_lesser: Arg<'Int'>
    episode_not: Arg<'Int'>
    sort: Arg<'[MediaTrendSort]'>
  }>
  AiringSchedule: Field<'AiringSchedule', Res<'AiringSchedule'>, {
    id: Arg<'Int'>
    mediaId: Arg<'Int'>
    episode: Arg<'Int'>
    airingAt: Arg<'Int'>
    notYetAired: Arg<'Boolean'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    mediaId_not: Arg<'Int'>
    mediaId_in: Arg<'[Int]'>
    mediaId_not_in: Arg<'[Int]'>
    episode_not: Arg<'Int'>
    episode_in: Arg<'[Int]'>
    episode_not_in: Arg<'[Int]'>
    episode_greater: Arg<'Int'>
    episode_lesser: Arg<'Int'>
    airingAt_greater: Arg<'Int'>
    airingAt_lesser: Arg<'Int'>
    sort: Arg<'[AiringSort]'>
  }>
  Character: Field<'Character', Res<'Character'>, {
    id: Arg<'Int'>
    isBirthday: Arg<'Boolean'>
    search: Arg<'String'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    sort: Arg<'[CharacterSort]'>
  }>
  Staff: Field<'Staff', Res<'Staff'>, {
    id: Arg<'Int'>
    isBirthday: Arg<'Boolean'>
    search: Arg<'String'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    sort: Arg<'[StaffSort]'>
  }>
  MediaList: Field<'MediaList', Res<'MediaList'>, {
    id: Arg<'Int'>
    userId: Arg<'Int'>
    userName: Arg<'String'>
    type: Arg<'MediaType'>
    status: Arg<'MediaListStatus'>
    mediaId: Arg<'Int'>
    isFollowing: Arg<'Boolean'>
    notes: Arg<'String'>
    startedAt: Arg<'FuzzyDateInt'>
    completedAt: Arg<'FuzzyDateInt'>
    compareWithAuthList: Arg<'Boolean'>
    userId_in: Arg<'[Int]'>
    status_in: Arg<'[MediaListStatus]'>
    status_not_in: Arg<'[MediaListStatus]'>
    status_not: Arg<'MediaListStatus'>
    mediaId_in: Arg<'[Int]'>
    mediaId_not_in: Arg<'[Int]'>
    notes_like: Arg<'String'>
    startedAt_greater: Arg<'FuzzyDateInt'>
    startedAt_lesser: Arg<'FuzzyDateInt'>
    startedAt_like: Arg<'String'>
    completedAt_greater: Arg<'FuzzyDateInt'>
    completedAt_lesser: Arg<'FuzzyDateInt'>
    completedAt_like: Arg<'String'>
    sort: Arg<'[MediaListSort]'>
  }>
  MediaListCollection: Field<'MediaListCollection', Res<'MediaListCollection'>, {
    userId: Arg<'Int'>
    userName: Arg<'String'>
    type: Arg<'MediaType'>
    status: Arg<'MediaListStatus'>
    notes: Arg<'String'>
    startedAt: Arg<'FuzzyDateInt'>
    completedAt: Arg<'FuzzyDateInt'>
    forceSingleCompletedList: Arg<'Boolean'>
    chunk: Arg<'Int'>
    perChunk: Arg<'Int'>
    status_in: Arg<'[MediaListStatus]'>
    status_not_in: Arg<'[MediaListStatus]'>
    status_not: Arg<'MediaListStatus'>
    notes_like: Arg<'String'>
    startedAt_greater: Arg<'FuzzyDateInt'>
    startedAt_lesser: Arg<'FuzzyDateInt'>
    startedAt_like: Arg<'String'>
    completedAt_greater: Arg<'FuzzyDateInt'>
    completedAt_lesser: Arg<'FuzzyDateInt'>
    completedAt_like: Arg<'String'>
    sort: Arg<'[MediaListSort]'>
  }>
  GenreCollection: Field<'GenreCollection', Res<'[String]'>>
  MediaTagCollection: Field<'MediaTagCollection', Res<'[MediaTag]'>, {
    status: Arg<'Int'>
  }>
  User: Field<'User', Res<'User'>, {
    id: Arg<'Int'>
    name: Arg<'String'>
    isModerator: Arg<'Boolean'>
    search: Arg<'String'>
    sort: Arg<'[UserSort]'>
  }>
  Viewer: Field<'Viewer', Res<'User'>>
  Notification: Field<'Notification', Res<'NotificationUnion'>, {
    type: Arg<'NotificationType'>
    resetNotificationCount: Arg<'Boolean'>
    type_in: Arg<'[NotificationType]'>
  }>
  Studio: Field<'Studio', Res<'Studio'>, {
    id: Arg<'Int'>
    search: Arg<'String'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    sort: Arg<'[StudioSort]'>
  }>
  Review: Field<'Review', Res<'Review'>, {
    id: Arg<'Int'>
    mediaId: Arg<'Int'>
    userId: Arg<'Int'>
    mediaType: Arg<'MediaType'>
    sort: Arg<'[ReviewSort]'>
  }>
  Activity: Field<'Activity', Res<'ActivityUnion'>, {
    id: Arg<'Int'>
    userId: Arg<'Int'>
    messengerId: Arg<'Int'>
    mediaId: Arg<'Int'>
    type: Arg<'ActivityType'>
    isFollowing: Arg<'Boolean'>
    hasReplies: Arg<'Boolean'>
    hasRepliesOrTypeText: Arg<'Boolean'>
    createdAt: Arg<'Int'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    userId_not: Arg<'Int'>
    userId_in: Arg<'[Int]'>
    userId_not_in: Arg<'[Int]'>
    messengerId_not: Arg<'Int'>
    messengerId_in: Arg<'[Int]'>
    messengerId_not_in: Arg<'[Int]'>
    mediaId_not: Arg<'Int'>
    mediaId_in: Arg<'[Int]'>
    mediaId_not_in: Arg<'[Int]'>
    type_not: Arg<'ActivityType'>
    type_in: Arg<'[ActivityType]'>
    type_not_in: Arg<'[ActivityType]'>
    createdAt_greater: Arg<'Int'>
    createdAt_lesser: Arg<'Int'>
    sort: Arg<'[ActivitySort]'>
  }>
  ActivityReply: Field<'ActivityReply', Res<'ActivityReply'>, {
    id: Arg<'Int'>
    activityId: Arg<'Int'>
  }>
  Following: Field<'Following', Res<'User'>, {
    userId: Arg<'Int!'>
    sort: Arg<'[UserSort]'>
  }>
  Follower: Field<'Follower', Res<'User'>, {
    userId: Arg<'Int!'>
    sort: Arg<'[UserSort]'>
  }>
  Thread: Field<'Thread', Res<'Thread'>, {
    id: Arg<'Int'>
    userId: Arg<'Int'>
    replyUserId: Arg<'Int'>
    subscribed: Arg<'Boolean'>
    categoryId: Arg<'Int'>
    mediaCategoryId: Arg<'Int'>
    search: Arg<'String'>
    id_in: Arg<'[Int]'>
    sort: Arg<'[ThreadSort]'>
  }>
  ThreadComment: Field<'ThreadComment', Res<'[ThreadComment]'>, {
    id: Arg<'Int'>
    threadId: Arg<'Int'>
    userId: Arg<'Int'>
    sort: Arg<'[ThreadCommentSort]'>
  }>
  Recommendation: Field<'Recommendation', Res<'Recommendation'>, {
    id: Arg<'Int'>
    mediaId: Arg<'Int'>
    mediaRecommendationId: Arg<'Int'>
    userId: Arg<'Int'>
    rating: Arg<'Int'>
    onList: Arg<'Boolean'>
    rating_greater: Arg<'Int'>
    rating_lesser: Arg<'Int'>
    sort: Arg<'[RecommendationSort]'>
  }>
  Like: Field<'Like', Res<'User'>, {
    likeableId: Arg<'Int'>
    type: Arg<'LikeableType'>
  }>
  Markdown: Field<'Markdown', Res<'ParsedMarkdown'>, {
    markdown: Arg<'String!'>
  }>
  AniChartUser: Field<'AniChartUser', Res<'AniChartUser'>>
  SiteStatistics: Field<'SiteStatistics', Res<'SiteStatistics'>>
  ExternalLinkSourceCollection: Field<'ExternalLinkSourceCollection', Res<'[MediaExternalLink]'>, {
    id: Arg<'Int'>
    type: Arg<'ExternalLinkType'>
    mediaType: Arg<'ExternalLinkMediaType'>
  }>
}>

type Page = TypeObject<'Page', {
  pageInfo: Field<'pageInfo', Res<'PageInfo'>>
  users: Field<'users', Res<'[User]'>, {
    id: Arg<'Int'>
    name: Arg<'String'>
    isModerator: Arg<'Boolean'>
    search: Arg<'String'>
    sort: Arg<'[UserSort]'>
  }>
  media: Field<'media', Res<'[Media]'>, {
    id: Arg<'Int'>
    idMal: Arg<'Int'>
    startDate: Arg<'FuzzyDateInt'>
    endDate: Arg<'FuzzyDateInt'>
    season: Arg<'MediaSeason'>
    seasonYear: Arg<'Int'>
    type: Arg<'MediaType'>
    format: Arg<'MediaFormat'>
    status: Arg<'MediaStatus'>
    episodes: Arg<'Int'>
    duration: Arg<'Int'>
    chapters: Arg<'Int'>
    volumes: Arg<'Int'>
    isAdult: Arg<'Boolean'>
    genre: Arg<'String'>
    tag: Arg<'String'>
    minimumTagRank: Arg<'Int'>
    tagCategory: Arg<'String'>
    onList: Arg<'Boolean'>
    licensedBy: Arg<'String'>
    licensedById: Arg<'Int'>
    averageScore: Arg<'Int'>
    popularity: Arg<'Int'>
    source: Arg<'MediaSource'>
    countryOfOrigin: Arg<'CountryCode'>
    isLicensed: Arg<'Boolean'>
    search: Arg<'String'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    idMal_not: Arg<'Int'>
    idMal_in: Arg<'[Int]'>
    idMal_not_in: Arg<'[Int]'>
    startDate_greater: Arg<'FuzzyDateInt'>
    startDate_lesser: Arg<'FuzzyDateInt'>
    startDate_like: Arg<'String'>
    endDate_greater: Arg<'FuzzyDateInt'>
    endDate_lesser: Arg<'FuzzyDateInt'>
    endDate_like: Arg<'String'>
    format_in: Arg<'[MediaFormat]'>
    format_not: Arg<'MediaFormat'>
    format_not_in: Arg<'[MediaFormat]'>
    status_in: Arg<'[MediaStatus]'>
    status_not: Arg<'MediaStatus'>
    status_not_in: Arg<'[MediaStatus]'>
    episodes_greater: Arg<'Int'>
    episodes_lesser: Arg<'Int'>
    duration_greater: Arg<'Int'>
    duration_lesser: Arg<'Int'>
    chapters_greater: Arg<'Int'>
    chapters_lesser: Arg<'Int'>
    volumes_greater: Arg<'Int'>
    volumes_lesser: Arg<'Int'>
    genre_in: Arg<'[String]'>
    genre_not_in: Arg<'[String]'>
    tag_in: Arg<'[String]'>
    tag_not_in: Arg<'[String]'>
    tagCategory_in: Arg<'[String]'>
    tagCategory_not_in: Arg<'[String]'>
    licensedBy_in: Arg<'[String]'>
    licensedById_in: Arg<'[Int]'>
    averageScore_not: Arg<'Int'>
    averageScore_greater: Arg<'Int'>
    averageScore_lesser: Arg<'Int'>
    popularity_not: Arg<'Int'>
    popularity_greater: Arg<'Int'>
    popularity_lesser: Arg<'Int'>
    source_in: Arg<'[MediaSource]'>
    sort: Arg<'[MediaSort]'>
  }>
  characters: Field<'characters', Res<'[Character]'>, {
    id: Arg<'Int'>
    isBirthday: Arg<'Boolean'>
    search: Arg<'String'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    sort: Arg<'[CharacterSort]'>
  }>
  staff: Field<'staff', Res<'[Staff]'>, {
    id: Arg<'Int'>
    isBirthday: Arg<'Boolean'>
    search: Arg<'String'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    sort: Arg<'[StaffSort]'>
  }>
  studios: Field<'studios', Res<'[Studio]'>, {
    id: Arg<'Int'>
    search: Arg<'String'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    sort: Arg<'[StudioSort]'>
  }>
  mediaList: Field<'mediaList', Res<'[MediaList]'>, {
    id: Arg<'Int'>
    userId: Arg<'Int'>
    userName: Arg<'String'>
    type: Arg<'MediaType'>
    status: Arg<'MediaListStatus'>
    mediaId: Arg<'Int'>
    isFollowing: Arg<'Boolean'>
    notes: Arg<'String'>
    startedAt: Arg<'FuzzyDateInt'>
    completedAt: Arg<'FuzzyDateInt'>
    compareWithAuthList: Arg<'Boolean'>
    userId_in: Arg<'[Int]'>
    status_in: Arg<'[MediaListStatus]'>
    status_not_in: Arg<'[MediaListStatus]'>
    status_not: Arg<'MediaListStatus'>
    mediaId_in: Arg<'[Int]'>
    mediaId_not_in: Arg<'[Int]'>
    notes_like: Arg<'String'>
    startedAt_greater: Arg<'FuzzyDateInt'>
    startedAt_lesser: Arg<'FuzzyDateInt'>
    startedAt_like: Arg<'String'>
    completedAt_greater: Arg<'FuzzyDateInt'>
    completedAt_lesser: Arg<'FuzzyDateInt'>
    completedAt_like: Arg<'String'>
    sort: Arg<'[MediaListSort]'>
  }>
  airingSchedules: Field<'airingSchedules', Res<'[AiringSchedule]'>, {
    id: Arg<'Int'>
    mediaId: Arg<'Int'>
    episode: Arg<'Int'>
    airingAt: Arg<'Int'>
    notYetAired: Arg<'Boolean'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    mediaId_not: Arg<'Int'>
    mediaId_in: Arg<'[Int]'>
    mediaId_not_in: Arg<'[Int]'>
    episode_not: Arg<'Int'>
    episode_in: Arg<'[Int]'>
    episode_not_in: Arg<'[Int]'>
    episode_greater: Arg<'Int'>
    episode_lesser: Arg<'Int'>
    airingAt_greater: Arg<'Int'>
    airingAt_lesser: Arg<'Int'>
    sort: Arg<'[AiringSort]'>
  }>
  mediaTrends: Field<'mediaTrends', Res<'[MediaTrend]'>, {
    mediaId: Arg<'Int'>
    date: Arg<'Int'>
    trending: Arg<'Int'>
    averageScore: Arg<'Int'>
    popularity: Arg<'Int'>
    episode: Arg<'Int'>
    releasing: Arg<'Boolean'>
    mediaId_not: Arg<'Int'>
    mediaId_in: Arg<'[Int]'>
    mediaId_not_in: Arg<'[Int]'>
    date_greater: Arg<'Int'>
    date_lesser: Arg<'Int'>
    trending_greater: Arg<'Int'>
    trending_lesser: Arg<'Int'>
    trending_not: Arg<'Int'>
    averageScore_greater: Arg<'Int'>
    averageScore_lesser: Arg<'Int'>
    averageScore_not: Arg<'Int'>
    popularity_greater: Arg<'Int'>
    popularity_lesser: Arg<'Int'>
    popularity_not: Arg<'Int'>
    episode_greater: Arg<'Int'>
    episode_lesser: Arg<'Int'>
    episode_not: Arg<'Int'>
    sort: Arg<'[MediaTrendSort]'>
  }>
  notifications: Field<'notifications', Res<'[NotificationUnion]'>, {
    type: Arg<'NotificationType'>
    resetNotificationCount: Arg<'Boolean'>
    type_in: Arg<'[NotificationType]'>
  }>
  followers: Field<'followers', Res<'[User]'>, {
    userId: Arg<'Int!'>
    sort: Arg<'[UserSort]'>
  }>
  following: Field<'following', Res<'[User]'>, {
    userId: Arg<'Int!'>
    sort: Arg<'[UserSort]'>
  }>
  activities: Field<'activities', Res<'[ActivityUnion]'>, {
    id: Arg<'Int'>
    userId: Arg<'Int'>
    messengerId: Arg<'Int'>
    mediaId: Arg<'Int'>
    type: Arg<'ActivityType'>
    isFollowing: Arg<'Boolean'>
    hasReplies: Arg<'Boolean'>
    hasRepliesOrTypeText: Arg<'Boolean'>
    createdAt: Arg<'Int'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    userId_not: Arg<'Int'>
    userId_in: Arg<'[Int]'>
    userId_not_in: Arg<'[Int]'>
    messengerId_not: Arg<'Int'>
    messengerId_in: Arg<'[Int]'>
    messengerId_not_in: Arg<'[Int]'>
    mediaId_not: Arg<'Int'>
    mediaId_in: Arg<'[Int]'>
    mediaId_not_in: Arg<'[Int]'>
    type_not: Arg<'ActivityType'>
    type_in: Arg<'[ActivityType]'>
    type_not_in: Arg<'[ActivityType]'>
    createdAt_greater: Arg<'Int'>
    createdAt_lesser: Arg<'Int'>
    sort: Arg<'[ActivitySort]'>
  }>
  activityReplies: Field<'activityReplies', Res<'[ActivityReply]'>, {
    id: Arg<'Int'>
    activityId: Arg<'Int'>
  }>
  threads: Field<'threads', Res<'[Thread]'>, {
    id: Arg<'Int'>
    userId: Arg<'Int'>
    replyUserId: Arg<'Int'>
    subscribed: Arg<'Boolean'>
    categoryId: Arg<'Int'>
    mediaCategoryId: Arg<'Int'>
    search: Arg<'String'>
    id_in: Arg<'[Int]'>
    sort: Arg<'[ThreadSort]'>
  }>
  threadComments: Field<'threadComments', Res<'[ThreadComment]'>, {
    id: Arg<'Int'>
    threadId: Arg<'Int'>
    userId: Arg<'Int'>
    sort: Arg<'[ThreadCommentSort]'>
  }>
  reviews: Field<'reviews', Res<'[Review]'>, {
    id: Arg<'Int'>
    mediaId: Arg<'Int'>
    userId: Arg<'Int'>
    mediaType: Arg<'MediaType'>
    sort: Arg<'[ReviewSort]'>
  }>
  recommendations: Field<'recommendations', Res<'[Recommendation]'>, {
    id: Arg<'Int'>
    mediaId: Arg<'Int'>
    mediaRecommendationId: Arg<'Int'>
    userId: Arg<'Int'>
    rating: Arg<'Int'>
    onList: Arg<'Boolean'>
    rating_greater: Arg<'Int'>
    rating_lesser: Arg<'Int'>
    sort: Arg<'[RecommendationSort]'>
  }>
  likes: Field<'likes', Res<'[User]'>, {
    likeableId: Arg<'Int'>
    type: Arg<'LikeableType'>
  }>
}>

type PageInfo = TypeObject<'PageInfo', {
  total: Field<'total', Res<'Int'>>
  perPage: Field<'perPage', Res<'Int'>>
  currentPage: Field<'currentPage', Res<'Int'>>
  lastPage: Field<'lastPage', Res<'Int'>>
  hasNextPage: Field<'hasNextPage', Res<'Boolean'>>
}>

type User = TypeObject<'User', {
  id: Field<'id', Res<'Int!'>>
  name: Field<'name', Res<'String!'>>
  about: Field<'about', Res<'String'>, {
    asHtml: Arg<'Boolean'>
  }>
  avatar: Field<'avatar', Res<'UserAvatar'>>
  bannerImage: Field<'bannerImage', Res<'String'>>
  isFollowing: Field<'isFollowing', Res<'Boolean'>>
  isFollower: Field<'isFollower', Res<'Boolean'>>
  isBlocked: Field<'isBlocked', Res<'Boolean'>>
  bans: Field<'bans', Res<'Json'>>
  options: Field<'options', Res<'UserOptions'>>
  mediaListOptions: Field<'mediaListOptions', Res<'MediaListOptions'>>
  favourites: Field<'favourites', Res<'Favourites'>, {
    page: Arg<'Int'>
  }>
  statistics: Field<'statistics', Res<'UserStatisticTypes'>>
  unreadNotificationCount: Field<'unreadNotificationCount', Res<'Int'>>
  siteUrl: Field<'siteUrl', Res<'String'>>
  donatorTier: Field<'donatorTier', Res<'Int'>>
  donatorBadge: Field<'donatorBadge', Res<'String'>>
  moderatorRoles: Field<'moderatorRoles', Res<'[ModRole]'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  updatedAt: Field<'updatedAt', Res<'Int'>>
  stats: Field<'stats', Res<'UserStats'>>
  moderatorStatus: Field<'moderatorStatus', Res<'String'>>
  previousNames: Field<'previousNames', Res<'[UserPreviousName]'>>
}>

type UserAvatar = TypeObject<'UserAvatar', {
  large: Field<'large', Res<'String'>>
  medium: Field<'medium', Res<'String'>>
}>

type UserOptions = TypeObject<'UserOptions', {
  titleLanguage: Field<'titleLanguage', Res<'UserTitleLanguage'>>
  displayAdultContent: Field<'displayAdultContent', Res<'Boolean'>>
  airingNotifications: Field<'airingNotifications', Res<'Boolean'>>
  profileColor: Field<'profileColor', Res<'String'>>
  notificationOptions: Field<'notificationOptions', Res<'[NotificationOption]'>>
  timezone: Field<'timezone', Res<'String'>>
  activityMergeTime: Field<'activityMergeTime', Res<'Int'>>
  staffNameLanguage: Field<'staffNameLanguage', Res<'UserStaffNameLanguage'>>
  restrictMessagesToFollowing: Field<'restrictMessagesToFollowing', Res<'Boolean'>>
  disabledListActivity: Field<'disabledListActivity', Res<'[ListActivityOption]'>>
}>

type NotificationOption = TypeObject<'NotificationOption', {
  type: Field<'type', Res<'NotificationType'>>
  enabled: Field<'enabled', Res<'Boolean'>>
}>

type ListActivityOption = TypeObject<'ListActivityOption', {
  disabled: Field<'disabled', Res<'Boolean'>>
  type: Field<'type', Res<'MediaListStatus'>>
}>

type MediaListOptions = TypeObject<'MediaListOptions', {
  scoreFormat: Field<'scoreFormat', Res<'ScoreFormat'>>
  rowOrder: Field<'rowOrder', Res<'String'>>
  useLegacyLists: Field<'useLegacyLists', Res<'Boolean'>>
  animeList: Field<'animeList', Res<'MediaListTypeOptions'>>
  mangaList: Field<'mangaList', Res<'MediaListTypeOptions'>>
  sharedTheme: Field<'sharedTheme', Res<'Json'>>
  sharedThemeEnabled: Field<'sharedThemeEnabled', Res<'Boolean'>>
}>

type MediaListTypeOptions = TypeObject<'MediaListTypeOptions', {
  sectionOrder: Field<'sectionOrder', Res<'[String]'>>
  splitCompletedSectionByFormat: Field<'splitCompletedSectionByFormat', Res<'Boolean'>>
  theme: Field<'theme', Res<'Json'>>
  customLists: Field<'customLists', Res<'[String]'>>
  advancedScoring: Field<'advancedScoring', Res<'[String]'>>
  advancedScoringEnabled: Field<'advancedScoringEnabled', Res<'Boolean'>>
}>

type Favourites = TypeObject<'Favourites', {
  anime: Field<'anime', Res<'MediaConnection'>, {
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  manga: Field<'manga', Res<'MediaConnection'>, {
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  characters: Field<'characters', Res<'CharacterConnection'>, {
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  staff: Field<'staff', Res<'StaffConnection'>, {
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  studios: Field<'studios', Res<'StudioConnection'>, {
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
}>

type MediaConnection = TypeObject<'MediaConnection', {
  edges: Field<'edges', Res<'[MediaEdge]'>>
  nodes: Field<'nodes', Res<'[Media]'>>
  pageInfo: Field<'pageInfo', Res<'PageInfo'>>
}>

type MediaEdge = TypeObject<'MediaEdge', {
  node: Field<'node', Res<'Media'>>
  id: Field<'id', Res<'Int'>>
  relationType: Field<'relationType', Res<'MediaRelation'>, {
    version: Arg<'Int'>
  }>
  isMainStudio: Field<'isMainStudio', Res<'Boolean!'>>
  characters: Field<'characters', Res<'[Character]'>>
  characterRole: Field<'characterRole', Res<'CharacterRole'>>
  characterName: Field<'characterName', Res<'String'>>
  roleNotes: Field<'roleNotes', Res<'String'>>
  dubGroup: Field<'dubGroup', Res<'String'>>
  staffRole: Field<'staffRole', Res<'String'>>
  voiceActors: Field<'voiceActors', Res<'[Staff]'>, {
    language: Arg<'StaffLanguage'>
    sort: Arg<'[StaffSort]'>
  }>
  voiceActorRoles: Field<'voiceActorRoles', Res<'[StaffRoleType]'>, {
    language: Arg<'StaffLanguage'>
    sort: Arg<'[StaffSort]'>
  }>
  favouriteOrder: Field<'favouriteOrder', Res<'Int'>>
}>

type Media = TypeObject<'Media', {
  id: Field<'id', Res<'Int!'>>
  idMal: Field<'idMal', Res<'Int'>>
  title: Field<'title', Res<'MediaTitle'>>
  type: Field<'type', Res<'MediaType'>>
  format: Field<'format', Res<'MediaFormat'>>
  status: Field<'status', Res<'MediaStatus'>, {
    version: Arg<'Int'>
  }>
  description: Field<'description', Res<'String'>, {
    asHtml: Arg<'Boolean'>
  }>
  startDate: Field<'startDate', Res<'FuzzyDate'>>
  endDate: Field<'endDate', Res<'FuzzyDate'>>
  season: Field<'season', Res<'MediaSeason'>>
  seasonYear: Field<'seasonYear', Res<'Int'>>
  seasonInt: Field<'seasonInt', Res<'Int'>>
  episodes: Field<'episodes', Res<'Int'>>
  duration: Field<'duration', Res<'Int'>>
  chapters: Field<'chapters', Res<'Int'>>
  volumes: Field<'volumes', Res<'Int'>>
  countryOfOrigin: Field<'countryOfOrigin', Res<'CountryCode'>>
  isLicensed: Field<'isLicensed', Res<'Boolean'>>
  source: Field<'source', Res<'MediaSource'>, {
    version: Arg<'Int'>
  }>
  hashtag: Field<'hashtag', Res<'String'>>
  trailer: Field<'trailer', Res<'MediaTrailer'>>
  updatedAt: Field<'updatedAt', Res<'Int'>>
  coverImage: Field<'coverImage', Res<'MediaCoverImage'>>
  bannerImage: Field<'bannerImage', Res<'String'>>
  genres: Field<'genres', Res<'[String]'>>
  synonyms: Field<'synonyms', Res<'[String]'>>
  averageScore: Field<'averageScore', Res<'Int'>>
  meanScore: Field<'meanScore', Res<'Int'>>
  popularity: Field<'popularity', Res<'Int'>>
  isLocked: Field<'isLocked', Res<'Boolean'>>
  trending: Field<'trending', Res<'Int'>>
  favourites: Field<'favourites', Res<'Int'>>
  tags: Field<'tags', Res<'[MediaTag]'>>
  relations: Field<'relations', Res<'MediaConnection'>>
  characters: Field<'characters', Res<'CharacterConnection'>, {
    sort: Arg<'[CharacterSort]'>
    role: Arg<'CharacterRole'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  staff: Field<'staff', Res<'StaffConnection'>, {
    sort: Arg<'[StaffSort]'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  studios: Field<'studios', Res<'StudioConnection'>, {
    sort: Arg<'[StudioSort]'>
    isMain: Arg<'Boolean'>
  }>
  isFavourite: Field<'isFavourite', Res<'Boolean!'>>
  isFavouriteBlocked: Field<'isFavouriteBlocked', Res<'Boolean!'>>
  isAdult: Field<'isAdult', Res<'Boolean'>>
  nextAiringEpisode: Field<'nextAiringEpisode', Res<'AiringSchedule'>>
  airingSchedule: Field<'airingSchedule', Res<'AiringScheduleConnection'>, {
    notYetAired: Arg<'Boolean'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  trends: Field<'trends', Res<'MediaTrendConnection'>, {
    sort: Arg<'[MediaTrendSort]'>
    releasing: Arg<'Boolean'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  externalLinks: Field<'externalLinks', Res<'[MediaExternalLink]'>>
  streamingEpisodes: Field<'streamingEpisodes', Res<'[MediaStreamingEpisode]'>>
  rankings: Field<'rankings', Res<'[MediaRank]'>>
  mediaListEntry: Field<'mediaListEntry', Res<'MediaList'>>
  reviews: Field<'reviews', Res<'ReviewConnection'>, {
    limit: Arg<'Int'>
    sort: Arg<'[ReviewSort]'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  recommendations: Field<'recommendations', Res<'RecommendationConnection'>, {
    sort: Arg<'[RecommendationSort]'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  stats: Field<'stats', Res<'MediaStats'>>
  siteUrl: Field<'siteUrl', Res<'String'>>
  autoCreateForumThread: Field<'autoCreateForumThread', Res<'Boolean'>>
  isRecommendationBlocked: Field<'isRecommendationBlocked', Res<'Boolean'>>
  isReviewBlocked: Field<'isReviewBlocked', Res<'Boolean'>>
  modNotes: Field<'modNotes', Res<'String'>>
}>

type MediaTitle = TypeObject<'MediaTitle', {
  romaji: Field<'romaji', Res<'String'>, {
    stylised: Arg<'Boolean'>
  }>
  english: Field<'english', Res<'String'>, {
    stylised: Arg<'Boolean'>
  }>
  native: Field<'native', Res<'String'>, {
    stylised: Arg<'Boolean'>
  }>
  userPreferred: Field<'userPreferred', Res<'String'>>
}>

type FuzzyDate = TypeObject<'FuzzyDate', {
  year: Field<'year', Res<'Int'>>
  month: Field<'month', Res<'Int'>>
  day: Field<'day', Res<'Int'>>
}>

type MediaTrailer = TypeObject<'MediaTrailer', {
  id: Field<'id', Res<'String'>>
  site: Field<'site', Res<'String'>>
  thumbnail: Field<'thumbnail', Res<'String'>>
}>

type MediaCoverImage = TypeObject<'MediaCoverImage', {
  extraLarge: Field<'extraLarge', Res<'String'>>
  large: Field<'large', Res<'String'>>
  medium: Field<'medium', Res<'String'>>
  color: Field<'color', Res<'String'>>
}>

type MediaTag = TypeObject<'MediaTag', {
  id: Field<'id', Res<'Int!'>>
  name: Field<'name', Res<'String!'>>
  description: Field<'description', Res<'String'>>
  category: Field<'category', Res<'String'>>
  rank: Field<'rank', Res<'Int'>>
  isGeneralSpoiler: Field<'isGeneralSpoiler', Res<'Boolean'>>
  isMediaSpoiler: Field<'isMediaSpoiler', Res<'Boolean'>>
  isAdult: Field<'isAdult', Res<'Boolean'>>
  userId: Field<'userId', Res<'Int'>>
}>

type CharacterConnection = TypeObject<'CharacterConnection', {
  edges: Field<'edges', Res<'[CharacterEdge]'>>
  nodes: Field<'nodes', Res<'[Character]'>>
  pageInfo: Field<'pageInfo', Res<'PageInfo'>>
}>

type CharacterEdge = TypeObject<'CharacterEdge', {
  node: Field<'node', Res<'Character'>>
  id: Field<'id', Res<'Int'>>
  role: Field<'role', Res<'CharacterRole'>>
  name: Field<'name', Res<'String'>>
  voiceActors: Field<'voiceActors', Res<'[Staff]'>, {
    language: Arg<'StaffLanguage'>
    sort: Arg<'[StaffSort]'>
  }>
  voiceActorRoles: Field<'voiceActorRoles', Res<'[StaffRoleType]'>, {
    language: Arg<'StaffLanguage'>
    sort: Arg<'[StaffSort]'>
  }>
  media: Field<'media', Res<'[Media]'>>
  favouriteOrder: Field<'favouriteOrder', Res<'Int'>>
}>

type Character = TypeObject<'Character', {
  id: Field<'id', Res<'Int!'>>
  name: Field<'name', Res<'CharacterName'>>
  image: Field<'image', Res<'CharacterImage'>>
  description: Field<'description', Res<'String'>, {
    asHtml: Arg<'Boolean'>
  }>
  gender: Field<'gender', Res<'String'>>
  dateOfBirth: Field<'dateOfBirth', Res<'FuzzyDate'>>
  age: Field<'age', Res<'String'>>
  bloodType: Field<'bloodType', Res<'String'>>
  isFavourite: Field<'isFavourite', Res<'Boolean!'>>
  isFavouriteBlocked: Field<'isFavouriteBlocked', Res<'Boolean!'>>
  siteUrl: Field<'siteUrl', Res<'String'>>
  media: Field<'media', Res<'MediaConnection'>, {
    sort: Arg<'[MediaSort]'>
    type: Arg<'MediaType'>
    onList: Arg<'Boolean'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  updatedAt: Field<'updatedAt', Res<'Int'>>
  favourites: Field<'favourites', Res<'Int'>>
  modNotes: Field<'modNotes', Res<'String'>>
}>

type CharacterName = TypeObject<'CharacterName', {
  first: Field<'first', Res<'String'>>
  middle: Field<'middle', Res<'String'>>
  last: Field<'last', Res<'String'>>
  full: Field<'full', Res<'String'>>
  native: Field<'native', Res<'String'>>
  alternative: Field<'alternative', Res<'[String]'>>
  alternativeSpoiler: Field<'alternativeSpoiler', Res<'[String]'>>
  userPreferred: Field<'userPreferred', Res<'String'>>
}>

type CharacterImage = TypeObject<'CharacterImage', {
  large: Field<'large', Res<'String'>>
  medium: Field<'medium', Res<'String'>>
}>

type Staff = TypeObject<'Staff', {
  id: Field<'id', Res<'Int!'>>
  name: Field<'name', Res<'StaffName'>>
  language: Field<'language', Res<'StaffLanguage'>>
  languageV2: Field<'languageV2', Res<'String'>>
  image: Field<'image', Res<'StaffImage'>>
  description: Field<'description', Res<'String'>, {
    asHtml: Arg<'Boolean'>
  }>
  primaryOccupations: Field<'primaryOccupations', Res<'[String]'>>
  gender: Field<'gender', Res<'String'>>
  dateOfBirth: Field<'dateOfBirth', Res<'FuzzyDate'>>
  dateOfDeath: Field<'dateOfDeath', Res<'FuzzyDate'>>
  age: Field<'age', Res<'Int'>>
  yearsActive: Field<'yearsActive', Res<'[Int]'>>
  homeTown: Field<'homeTown', Res<'String'>>
  bloodType: Field<'bloodType', Res<'String'>>
  isFavourite: Field<'isFavourite', Res<'Boolean!'>>
  isFavouriteBlocked: Field<'isFavouriteBlocked', Res<'Boolean!'>>
  siteUrl: Field<'siteUrl', Res<'String'>>
  staffMedia: Field<'staffMedia', Res<'MediaConnection'>, {
    sort: Arg<'[MediaSort]'>
    type: Arg<'MediaType'>
    onList: Arg<'Boolean'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  characters: Field<'characters', Res<'CharacterConnection'>, {
    sort: Arg<'[CharacterSort]'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  characterMedia: Field<'characterMedia', Res<'MediaConnection'>, {
    sort: Arg<'[MediaSort]'>
    onList: Arg<'Boolean'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  updatedAt: Field<'updatedAt', Res<'Int'>>
  staff: Field<'staff', Res<'Staff'>>
  submitter: Field<'submitter', Res<'User'>>
  submissionStatus: Field<'submissionStatus', Res<'Int'>>
  submissionNotes: Field<'submissionNotes', Res<'String'>>
  favourites: Field<'favourites', Res<'Int'>>
  modNotes: Field<'modNotes', Res<'String'>>
}>

type StaffName = TypeObject<'StaffName', {
  first: Field<'first', Res<'String'>>
  middle: Field<'middle', Res<'String'>>
  last: Field<'last', Res<'String'>>
  full: Field<'full', Res<'String'>>
  native: Field<'native', Res<'String'>>
  alternative: Field<'alternative', Res<'[String]'>>
  userPreferred: Field<'userPreferred', Res<'String'>>
}>

type StaffImage = TypeObject<'StaffImage', {
  large: Field<'large', Res<'String'>>
  medium: Field<'medium', Res<'String'>>
}>

type StaffRoleType = TypeObject<'StaffRoleType', {
  voiceActor: Field<'voiceActor', Res<'Staff'>>
  roleNotes: Field<'roleNotes', Res<'String'>>
  dubGroup: Field<'dubGroup', Res<'String'>>
}>

type StaffConnection = TypeObject<'StaffConnection', {
  edges: Field<'edges', Res<'[StaffEdge]'>>
  nodes: Field<'nodes', Res<'[Staff]'>>
  pageInfo: Field<'pageInfo', Res<'PageInfo'>>
}>

type StaffEdge = TypeObject<'StaffEdge', {
  node: Field<'node', Res<'Staff'>>
  id: Field<'id', Res<'Int'>>
  role: Field<'role', Res<'String'>>
  favouriteOrder: Field<'favouriteOrder', Res<'Int'>>
}>

type StudioConnection = TypeObject<'StudioConnection', {
  edges: Field<'edges', Res<'[StudioEdge]'>>
  nodes: Field<'nodes', Res<'[Studio]'>>
  pageInfo: Field<'pageInfo', Res<'PageInfo'>>
}>

type StudioEdge = TypeObject<'StudioEdge', {
  node: Field<'node', Res<'Studio'>>
  id: Field<'id', Res<'Int'>>
  isMain: Field<'isMain', Res<'Boolean!'>>
  favouriteOrder: Field<'favouriteOrder', Res<'Int'>>
}>

type Studio = TypeObject<'Studio', {
  id: Field<'id', Res<'Int!'>>
  name: Field<'name', Res<'String!'>>
  isAnimationStudio: Field<'isAnimationStudio', Res<'Boolean!'>>
  media: Field<'media', Res<'MediaConnection'>, {
    sort: Arg<'[MediaSort]'>
    isMain: Arg<'Boolean'>
    onList: Arg<'Boolean'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  siteUrl: Field<'siteUrl', Res<'String'>>
  isFavourite: Field<'isFavourite', Res<'Boolean!'>>
  favourites: Field<'favourites', Res<'Int'>>
}>

type AiringSchedule = TypeObject<'AiringSchedule', {
  id: Field<'id', Res<'Int!'>>
  airingAt: Field<'airingAt', Res<'Int!'>>
  timeUntilAiring: Field<'timeUntilAiring', Res<'Int!'>>
  episode: Field<'episode', Res<'Int!'>>
  mediaId: Field<'mediaId', Res<'Int!'>>
  media: Field<'media', Res<'Media'>>
}>

type AiringScheduleConnection = TypeObject<'AiringScheduleConnection', {
  edges: Field<'edges', Res<'[AiringScheduleEdge]'>>
  nodes: Field<'nodes', Res<'[AiringSchedule]'>>
  pageInfo: Field<'pageInfo', Res<'PageInfo'>>
}>

type AiringScheduleEdge = TypeObject<'AiringScheduleEdge', {
  node: Field<'node', Res<'AiringSchedule'>>
  id: Field<'id', Res<'Int'>>
}>

type MediaTrendConnection = TypeObject<'MediaTrendConnection', {
  edges: Field<'edges', Res<'[MediaTrendEdge]'>>
  nodes: Field<'nodes', Res<'[MediaTrend]'>>
  pageInfo: Field<'pageInfo', Res<'PageInfo'>>
}>

type MediaTrendEdge = TypeObject<'MediaTrendEdge', {
  node: Field<'node', Res<'MediaTrend'>>
}>

type MediaTrend = TypeObject<'MediaTrend', {
  mediaId: Field<'mediaId', Res<'Int!'>>
  date: Field<'date', Res<'Int!'>>
  trending: Field<'trending', Res<'Int!'>>
  averageScore: Field<'averageScore', Res<'Int'>>
  popularity: Field<'popularity', Res<'Int'>>
  inProgress: Field<'inProgress', Res<'Int'>>
  releasing: Field<'releasing', Res<'Boolean!'>>
  episode: Field<'episode', Res<'Int'>>
  media: Field<'media', Res<'Media'>>
}>

type MediaExternalLink = TypeObject<'MediaExternalLink', {
  id: Field<'id', Res<'Int!'>>
  url: Field<'url', Res<'String'>>
  site: Field<'site', Res<'String!'>>
  siteId: Field<'siteId', Res<'Int'>>
  type: Field<'type', Res<'ExternalLinkType'>>
  language: Field<'language', Res<'String'>>
  color: Field<'color', Res<'String'>>
  icon: Field<'icon', Res<'String'>>
  notes: Field<'notes', Res<'String'>>
  isDisabled: Field<'isDisabled', Res<'Boolean'>>
}>

type MediaStreamingEpisode = TypeObject<'MediaStreamingEpisode', {
  title: Field<'title', Res<'String'>>
  thumbnail: Field<'thumbnail', Res<'String'>>
  url: Field<'url', Res<'String'>>
  site: Field<'site', Res<'String'>>
}>

type MediaRank = TypeObject<'MediaRank', {
  id: Field<'id', Res<'Int!'>>
  rank: Field<'rank', Res<'Int!'>>
  type: Field<'type', Res<'MediaRankType!'>>
  format: Field<'format', Res<'MediaFormat!'>>
  year: Field<'year', Res<'Int'>>
  season: Field<'season', Res<'MediaSeason'>>
  allTime: Field<'allTime', Res<'Boolean'>>
  context: Field<'context', Res<'String!'>>
}>

type MediaList = TypeObject<'MediaList', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  mediaId: Field<'mediaId', Res<'Int!'>>
  status: Field<'status', Res<'MediaListStatus'>>
  score: Field<'score', Res<'Float'>, {
    format: Arg<'ScoreFormat'>
  }>
  progress: Field<'progress', Res<'Int'>>
  progressVolumes: Field<'progressVolumes', Res<'Int'>>
  repeat: Field<'repeat', Res<'Int'>>
  priority: Field<'priority', Res<'Int'>>
  private: Field<'private', Res<'Boolean'>>
  notes: Field<'notes', Res<'String'>>
  hiddenFromStatusLists: Field<'hiddenFromStatusLists', Res<'Boolean'>>
  customLists: Field<'customLists', Res<'Json'>, {
    asArray: Arg<'Boolean'>
  }>
  advancedScores: Field<'advancedScores', Res<'Json'>>
  startedAt: Field<'startedAt', Res<'FuzzyDate'>>
  completedAt: Field<'completedAt', Res<'FuzzyDate'>>
  updatedAt: Field<'updatedAt', Res<'Int'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  media: Field<'media', Res<'Media'>>
  user: Field<'user', Res<'User'>>
}>

type ReviewConnection = TypeObject<'ReviewConnection', {
  edges: Field<'edges', Res<'[ReviewEdge]'>>
  nodes: Field<'nodes', Res<'[Review]'>>
  pageInfo: Field<'pageInfo', Res<'PageInfo'>>
}>

type ReviewEdge = TypeObject<'ReviewEdge', {
  node: Field<'node', Res<'Review'>>
}>

type Review = TypeObject<'Review', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  mediaId: Field<'mediaId', Res<'Int!'>>
  mediaType: Field<'mediaType', Res<'MediaType'>>
  summary: Field<'summary', Res<'String'>>
  body: Field<'body', Res<'String'>, {
    asHtml: Arg<'Boolean'>
  }>
  rating: Field<'rating', Res<'Int'>>
  ratingAmount: Field<'ratingAmount', Res<'Int'>>
  userRating: Field<'userRating', Res<'ReviewRating'>>
  score: Field<'score', Res<'Int'>>
  private: Field<'private', Res<'Boolean'>>
  siteUrl: Field<'siteUrl', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int!'>>
  updatedAt: Field<'updatedAt', Res<'Int!'>>
  user: Field<'user', Res<'User'>>
  media: Field<'media', Res<'Media'>>
}>

type RecommendationConnection = TypeObject<'RecommendationConnection', {
  edges: Field<'edges', Res<'[RecommendationEdge]'>>
  nodes: Field<'nodes', Res<'[Recommendation]'>>
  pageInfo: Field<'pageInfo', Res<'PageInfo'>>
}>

type RecommendationEdge = TypeObject<'RecommendationEdge', {
  node: Field<'node', Res<'Recommendation'>>
}>

type Recommendation = TypeObject<'Recommendation', {
  id: Field<'id', Res<'Int!'>>
  rating: Field<'rating', Res<'Int'>>
  userRating: Field<'userRating', Res<'RecommendationRating'>>
  media: Field<'media', Res<'Media'>>
  mediaRecommendation: Field<'mediaRecommendation', Res<'Media'>>
  user: Field<'user', Res<'User'>>
}>

type MediaStats = TypeObject<'MediaStats', {
  scoreDistribution: Field<'scoreDistribution', Res<'[ScoreDistribution]'>>
  statusDistribution: Field<'statusDistribution', Res<'[StatusDistribution]'>>
  airingProgression: Field<'airingProgression', Res<'[AiringProgression]'>>
}>

type ScoreDistribution = TypeObject<'ScoreDistribution', {
  score: Field<'score', Res<'Int'>>
  amount: Field<'amount', Res<'Int'>>
}>

type StatusDistribution = TypeObject<'StatusDistribution', {
  status: Field<'status', Res<'MediaListStatus'>>
  amount: Field<'amount', Res<'Int'>>
}>

type AiringProgression = TypeObject<'AiringProgression', {
  episode: Field<'episode', Res<'Float'>>
  score: Field<'score', Res<'Float'>>
  watching: Field<'watching', Res<'Int'>>
}>

type UserStatisticTypes = TypeObject<'UserStatisticTypes', {
  anime: Field<'anime', Res<'UserStatistics'>>
  manga: Field<'manga', Res<'UserStatistics'>>
}>

type UserStatistics = TypeObject<'UserStatistics', {
  count: Field<'count', Res<'Int!'>>
  meanScore: Field<'meanScore', Res<'Float!'>>
  standardDeviation: Field<'standardDeviation', Res<'Float!'>>
  minutesWatched: Field<'minutesWatched', Res<'Int!'>>
  episodesWatched: Field<'episodesWatched', Res<'Int!'>>
  chaptersRead: Field<'chaptersRead', Res<'Int!'>>
  volumesRead: Field<'volumesRead', Res<'Int!'>>
  formats: Field<'formats', Res<'[UserFormatStatistic]'>, {
    limit: Arg<'Int'>
    sort: Arg<'[UserStatisticsSort]'>
  }>
  statuses: Field<'statuses', Res<'[UserStatusStatistic]'>, {
    limit: Arg<'Int'>
    sort: Arg<'[UserStatisticsSort]'>
  }>
  scores: Field<'scores', Res<'[UserScoreStatistic]'>, {
    limit: Arg<'Int'>
    sort: Arg<'[UserStatisticsSort]'>
  }>
  lengths: Field<'lengths', Res<'[UserLengthStatistic]'>, {
    limit: Arg<'Int'>
    sort: Arg<'[UserStatisticsSort]'>
  }>
  releaseYears: Field<'releaseYears', Res<'[UserReleaseYearStatistic]'>, {
    limit: Arg<'Int'>
    sort: Arg<'[UserStatisticsSort]'>
  }>
  startYears: Field<'startYears', Res<'[UserStartYearStatistic]'>, {
    limit: Arg<'Int'>
    sort: Arg<'[UserStatisticsSort]'>
  }>
  genres: Field<'genres', Res<'[UserGenreStatistic]'>, {
    limit: Arg<'Int'>
    sort: Arg<'[UserStatisticsSort]'>
  }>
  tags: Field<'tags', Res<'[UserTagStatistic]'>, {
    limit: Arg<'Int'>
    sort: Arg<'[UserStatisticsSort]'>
  }>
  countries: Field<'countries', Res<'[UserCountryStatistic]'>, {
    limit: Arg<'Int'>
    sort: Arg<'[UserStatisticsSort]'>
  }>
  voiceActors: Field<'voiceActors', Res<'[UserVoiceActorStatistic]'>, {
    limit: Arg<'Int'>
    sort: Arg<'[UserStatisticsSort]'>
  }>
  staff: Field<'staff', Res<'[UserStaffStatistic]'>, {
    limit: Arg<'Int'>
    sort: Arg<'[UserStatisticsSort]'>
  }>
  studios: Field<'studios', Res<'[UserStudioStatistic]'>, {
    limit: Arg<'Int'>
    sort: Arg<'[UserStatisticsSort]'>
  }>
}>

type UserFormatStatistic = TypeObject<'UserFormatStatistic', {
  count: Field<'count', Res<'Int!'>>
  meanScore: Field<'meanScore', Res<'Float!'>>
  minutesWatched: Field<'minutesWatched', Res<'Int!'>>
  chaptersRead: Field<'chaptersRead', Res<'Int!'>>
  mediaIds: Field<'mediaIds', Res<'[Int]!'>>
  format: Field<'format', Res<'MediaFormat'>>
}>

type UserStatusStatistic = TypeObject<'UserStatusStatistic', {
  count: Field<'count', Res<'Int!'>>
  meanScore: Field<'meanScore', Res<'Float!'>>
  minutesWatched: Field<'minutesWatched', Res<'Int!'>>
  chaptersRead: Field<'chaptersRead', Res<'Int!'>>
  mediaIds: Field<'mediaIds', Res<'[Int]!'>>
  status: Field<'status', Res<'MediaListStatus'>>
}>

type UserScoreStatistic = TypeObject<'UserScoreStatistic', {
  count: Field<'count', Res<'Int!'>>
  meanScore: Field<'meanScore', Res<'Float!'>>
  minutesWatched: Field<'minutesWatched', Res<'Int!'>>
  chaptersRead: Field<'chaptersRead', Res<'Int!'>>
  mediaIds: Field<'mediaIds', Res<'[Int]!'>>
  score: Field<'score', Res<'Int'>>
}>

type UserLengthStatistic = TypeObject<'UserLengthStatistic', {
  count: Field<'count', Res<'Int!'>>
  meanScore: Field<'meanScore', Res<'Float!'>>
  minutesWatched: Field<'minutesWatched', Res<'Int!'>>
  chaptersRead: Field<'chaptersRead', Res<'Int!'>>
  mediaIds: Field<'mediaIds', Res<'[Int]!'>>
  length: Field<'length', Res<'String'>>
}>

type UserReleaseYearStatistic = TypeObject<'UserReleaseYearStatistic', {
  count: Field<'count', Res<'Int!'>>
  meanScore: Field<'meanScore', Res<'Float!'>>
  minutesWatched: Field<'minutesWatched', Res<'Int!'>>
  chaptersRead: Field<'chaptersRead', Res<'Int!'>>
  mediaIds: Field<'mediaIds', Res<'[Int]!'>>
  releaseYear: Field<'releaseYear', Res<'Int'>>
}>

type UserStartYearStatistic = TypeObject<'UserStartYearStatistic', {
  count: Field<'count', Res<'Int!'>>
  meanScore: Field<'meanScore', Res<'Float!'>>
  minutesWatched: Field<'minutesWatched', Res<'Int!'>>
  chaptersRead: Field<'chaptersRead', Res<'Int!'>>
  mediaIds: Field<'mediaIds', Res<'[Int]!'>>
  startYear: Field<'startYear', Res<'Int'>>
}>

type UserGenreStatistic = TypeObject<'UserGenreStatistic', {
  count: Field<'count', Res<'Int!'>>
  meanScore: Field<'meanScore', Res<'Float!'>>
  minutesWatched: Field<'minutesWatched', Res<'Int!'>>
  chaptersRead: Field<'chaptersRead', Res<'Int!'>>
  mediaIds: Field<'mediaIds', Res<'[Int]!'>>
  genre: Field<'genre', Res<'String'>>
}>

type UserTagStatistic = TypeObject<'UserTagStatistic', {
  count: Field<'count', Res<'Int!'>>
  meanScore: Field<'meanScore', Res<'Float!'>>
  minutesWatched: Field<'minutesWatched', Res<'Int!'>>
  chaptersRead: Field<'chaptersRead', Res<'Int!'>>
  mediaIds: Field<'mediaIds', Res<'[Int]!'>>
  tag: Field<'tag', Res<'MediaTag'>>
}>

type UserCountryStatistic = TypeObject<'UserCountryStatistic', {
  count: Field<'count', Res<'Int!'>>
  meanScore: Field<'meanScore', Res<'Float!'>>
  minutesWatched: Field<'minutesWatched', Res<'Int!'>>
  chaptersRead: Field<'chaptersRead', Res<'Int!'>>
  mediaIds: Field<'mediaIds', Res<'[Int]!'>>
  country: Field<'country', Res<'CountryCode'>>
}>

type UserVoiceActorStatistic = TypeObject<'UserVoiceActorStatistic', {
  count: Field<'count', Res<'Int!'>>
  meanScore: Field<'meanScore', Res<'Float!'>>
  minutesWatched: Field<'minutesWatched', Res<'Int!'>>
  chaptersRead: Field<'chaptersRead', Res<'Int!'>>
  mediaIds: Field<'mediaIds', Res<'[Int]!'>>
  voiceActor: Field<'voiceActor', Res<'Staff'>>
  characterIds: Field<'characterIds', Res<'[Int]!'>>
}>

type UserStaffStatistic = TypeObject<'UserStaffStatistic', {
  count: Field<'count', Res<'Int!'>>
  meanScore: Field<'meanScore', Res<'Float!'>>
  minutesWatched: Field<'minutesWatched', Res<'Int!'>>
  chaptersRead: Field<'chaptersRead', Res<'Int!'>>
  mediaIds: Field<'mediaIds', Res<'[Int]!'>>
  staff: Field<'staff', Res<'Staff'>>
}>

type UserStudioStatistic = TypeObject<'UserStudioStatistic', {
  count: Field<'count', Res<'Int!'>>
  meanScore: Field<'meanScore', Res<'Float!'>>
  minutesWatched: Field<'minutesWatched', Res<'Int!'>>
  chaptersRead: Field<'chaptersRead', Res<'Int!'>>
  mediaIds: Field<'mediaIds', Res<'[Int]!'>>
  studio: Field<'studio', Res<'Studio'>>
}>

type UserStats = TypeObject<'UserStats', {
  watchedTime: Field<'watchedTime', Res<'Int'>>
  chaptersRead: Field<'chaptersRead', Res<'Int'>>
  activityHistory: Field<'activityHistory', Res<'[UserActivityHistory]'>>
  animeStatusDistribution: Field<'animeStatusDistribution', Res<'[StatusDistribution]'>>
  mangaStatusDistribution: Field<'mangaStatusDistribution', Res<'[StatusDistribution]'>>
  animeScoreDistribution: Field<'animeScoreDistribution', Res<'[ScoreDistribution]'>>
  mangaScoreDistribution: Field<'mangaScoreDistribution', Res<'[ScoreDistribution]'>>
  animeListScores: Field<'animeListScores', Res<'ListScoreStats'>>
  mangaListScores: Field<'mangaListScores', Res<'ListScoreStats'>>
  favouredGenresOverview: Field<'favouredGenresOverview', Res<'[GenreStats]'>>
  favouredGenres: Field<'favouredGenres', Res<'[GenreStats]'>>
  favouredTags: Field<'favouredTags', Res<'[TagStats]'>>
  favouredActors: Field<'favouredActors', Res<'[StaffStats]'>>
  favouredStaff: Field<'favouredStaff', Res<'[StaffStats]'>>
  favouredStudios: Field<'favouredStudios', Res<'[StudioStats]'>>
  favouredYears: Field<'favouredYears', Res<'[YearStats]'>>
  favouredFormats: Field<'favouredFormats', Res<'[FormatStats]'>>
}>

type UserActivityHistory = TypeObject<'UserActivityHistory', {
  date: Field<'date', Res<'Int'>>
  amount: Field<'amount', Res<'Int'>>
  level: Field<'level', Res<'Int'>>
}>

type ListScoreStats = TypeObject<'ListScoreStats', {
  meanScore: Field<'meanScore', Res<'Int'>>
  standardDeviation: Field<'standardDeviation', Res<'Int'>>
}>

type GenreStats = TypeObject<'GenreStats', {
  genre: Field<'genre', Res<'String'>>
  amount: Field<'amount', Res<'Int'>>
  meanScore: Field<'meanScore', Res<'Int'>>
  timeWatched: Field<'timeWatched', Res<'Int'>>
}>

type TagStats = TypeObject<'TagStats', {
  tag: Field<'tag', Res<'MediaTag'>>
  amount: Field<'amount', Res<'Int'>>
  meanScore: Field<'meanScore', Res<'Int'>>
  timeWatched: Field<'timeWatched', Res<'Int'>>
}>

type StaffStats = TypeObject<'StaffStats', {
  staff: Field<'staff', Res<'Staff'>>
  amount: Field<'amount', Res<'Int'>>
  meanScore: Field<'meanScore', Res<'Int'>>
  timeWatched: Field<'timeWatched', Res<'Int'>>
}>

type StudioStats = TypeObject<'StudioStats', {
  studio: Field<'studio', Res<'Studio'>>
  amount: Field<'amount', Res<'Int'>>
  meanScore: Field<'meanScore', Res<'Int'>>
  timeWatched: Field<'timeWatched', Res<'Int'>>
}>

type YearStats = TypeObject<'YearStats', {
  year: Field<'year', Res<'Int'>>
  amount: Field<'amount', Res<'Int'>>
  meanScore: Field<'meanScore', Res<'Int'>>
}>

type FormatStats = TypeObject<'FormatStats', {
  format: Field<'format', Res<'MediaFormat'>>
  amount: Field<'amount', Res<'Int'>>
}>

type UserPreviousName = TypeObject<'UserPreviousName', {
  name: Field<'name', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  updatedAt: Field<'updatedAt', Res<'Int'>>
}>

type AiringNotification = TypeObject<'AiringNotification', {
  id: Field<'id', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  animeId: Field<'animeId', Res<'Int!'>>
  episode: Field<'episode', Res<'Int!'>>
  contexts: Field<'contexts', Res<'[String]'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  media: Field<'media', Res<'Media'>>
}>

type FollowingNotification = TypeObject<'FollowingNotification', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  context: Field<'context', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  user: Field<'user', Res<'User'>>
}>

type ActivityMessageNotification = TypeObject<'ActivityMessageNotification', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  activityId: Field<'activityId', Res<'Int!'>>
  context: Field<'context', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  message: Field<'message', Res<'MessageActivity'>>
  user: Field<'user', Res<'User'>>
}>

type MessageActivity = TypeObject<'MessageActivity', {
  id: Field<'id', Res<'Int!'>>
  recipientId: Field<'recipientId', Res<'Int'>>
  messengerId: Field<'messengerId', Res<'Int'>>
  type: Field<'type', Res<'ActivityType'>>
  replyCount: Field<'replyCount', Res<'Int!'>>
  message: Field<'message', Res<'String'>, {
    asHtml: Arg<'Boolean'>
  }>
  isLocked: Field<'isLocked', Res<'Boolean'>>
  isSubscribed: Field<'isSubscribed', Res<'Boolean'>>
  likeCount: Field<'likeCount', Res<'Int!'>>
  isLiked: Field<'isLiked', Res<'Boolean'>>
  isPrivate: Field<'isPrivate', Res<'Boolean'>>
  siteUrl: Field<'siteUrl', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int!'>>
  recipient: Field<'recipient', Res<'User'>>
  messenger: Field<'messenger', Res<'User'>>
  replies: Field<'replies', Res<'[ActivityReply]'>>
  likes: Field<'likes', Res<'[User]'>>
}>

type ActivityReply = TypeObject<'ActivityReply', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int'>>
  activityId: Field<'activityId', Res<'Int'>>
  text: Field<'text', Res<'String'>, {
    asHtml: Arg<'Boolean'>
  }>
  likeCount: Field<'likeCount', Res<'Int!'>>
  isLiked: Field<'isLiked', Res<'Boolean'>>
  createdAt: Field<'createdAt', Res<'Int!'>>
  user: Field<'user', Res<'User'>>
  likes: Field<'likes', Res<'[User]'>>
}>

type ActivityMentionNotification = TypeObject<'ActivityMentionNotification', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  activityId: Field<'activityId', Res<'Int!'>>
  context: Field<'context', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  activity: Field<'activity', Res<'ActivityUnion'>>
  user: Field<'user', Res<'User'>>
}>

type TextActivity = TypeObject<'TextActivity', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int'>>
  type: Field<'type', Res<'ActivityType'>>
  replyCount: Field<'replyCount', Res<'Int!'>>
  text: Field<'text', Res<'String'>, {
    asHtml: Arg<'Boolean'>
  }>
  siteUrl: Field<'siteUrl', Res<'String'>>
  isLocked: Field<'isLocked', Res<'Boolean'>>
  isSubscribed: Field<'isSubscribed', Res<'Boolean'>>
  likeCount: Field<'likeCount', Res<'Int!'>>
  isLiked: Field<'isLiked', Res<'Boolean'>>
  isPinned: Field<'isPinned', Res<'Boolean'>>
  createdAt: Field<'createdAt', Res<'Int!'>>
  user: Field<'user', Res<'User'>>
  replies: Field<'replies', Res<'[ActivityReply]'>>
  likes: Field<'likes', Res<'[User]'>>
}>

type ListActivity = TypeObject<'ListActivity', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int'>>
  type: Field<'type', Res<'ActivityType'>>
  replyCount: Field<'replyCount', Res<'Int!'>>
  status: Field<'status', Res<'String'>>
  progress: Field<'progress', Res<'String'>>
  isLocked: Field<'isLocked', Res<'Boolean'>>
  isSubscribed: Field<'isSubscribed', Res<'Boolean'>>
  likeCount: Field<'likeCount', Res<'Int!'>>
  isLiked: Field<'isLiked', Res<'Boolean'>>
  isPinned: Field<'isPinned', Res<'Boolean'>>
  siteUrl: Field<'siteUrl', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int!'>>
  user: Field<'user', Res<'User'>>
  media: Field<'media', Res<'Media'>>
  replies: Field<'replies', Res<'[ActivityReply]'>>
  likes: Field<'likes', Res<'[User]'>>
}>

type ActivityReplyNotification = TypeObject<'ActivityReplyNotification', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  activityId: Field<'activityId', Res<'Int!'>>
  context: Field<'context', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  activity: Field<'activity', Res<'ActivityUnion'>>
  user: Field<'user', Res<'User'>>
}>

type ActivityReplySubscribedNotification = TypeObject<'ActivityReplySubscribedNotification', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  activityId: Field<'activityId', Res<'Int!'>>
  context: Field<'context', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  activity: Field<'activity', Res<'ActivityUnion'>>
  user: Field<'user', Res<'User'>>
}>

type ActivityLikeNotification = TypeObject<'ActivityLikeNotification', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  activityId: Field<'activityId', Res<'Int!'>>
  context: Field<'context', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  activity: Field<'activity', Res<'ActivityUnion'>>
  user: Field<'user', Res<'User'>>
}>

type ActivityReplyLikeNotification = TypeObject<'ActivityReplyLikeNotification', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  activityId: Field<'activityId', Res<'Int!'>>
  context: Field<'context', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  activity: Field<'activity', Res<'ActivityUnion'>>
  user: Field<'user', Res<'User'>>
}>

type ThreadCommentMentionNotification = TypeObject<'ThreadCommentMentionNotification', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  commentId: Field<'commentId', Res<'Int!'>>
  context: Field<'context', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  thread: Field<'thread', Res<'Thread'>>
  comment: Field<'comment', Res<'ThreadComment'>>
  user: Field<'user', Res<'User'>>
}>

type Thread = TypeObject<'Thread', {
  id: Field<'id', Res<'Int!'>>
  title: Field<'title', Res<'String'>>
  body: Field<'body', Res<'String'>, {
    asHtml: Arg<'Boolean'>
  }>
  userId: Field<'userId', Res<'Int!'>>
  replyUserId: Field<'replyUserId', Res<'Int'>>
  replyCommentId: Field<'replyCommentId', Res<'Int'>>
  replyCount: Field<'replyCount', Res<'Int'>>
  viewCount: Field<'viewCount', Res<'Int'>>
  isLocked: Field<'isLocked', Res<'Boolean'>>
  isSticky: Field<'isSticky', Res<'Boolean'>>
  isSubscribed: Field<'isSubscribed', Res<'Boolean'>>
  likeCount: Field<'likeCount', Res<'Int!'>>
  isLiked: Field<'isLiked', Res<'Boolean'>>
  repliedAt: Field<'repliedAt', Res<'Int'>>
  createdAt: Field<'createdAt', Res<'Int!'>>
  updatedAt: Field<'updatedAt', Res<'Int!'>>
  user: Field<'user', Res<'User'>>
  replyUser: Field<'replyUser', Res<'User'>>
  likes: Field<'likes', Res<'[User]'>>
  siteUrl: Field<'siteUrl', Res<'String'>>
  categories: Field<'categories', Res<'[ThreadCategory]'>>
  mediaCategories: Field<'mediaCategories', Res<'[Media]'>>
}>

type ThreadCategory = TypeObject<'ThreadCategory', {
  id: Field<'id', Res<'Int!'>>
  name: Field<'name', Res<'String!'>>
}>

type ThreadComment = TypeObject<'ThreadComment', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int'>>
  threadId: Field<'threadId', Res<'Int'>>
  comment: Field<'comment', Res<'String'>, {
    asHtml: Arg<'Boolean'>
  }>
  likeCount: Field<'likeCount', Res<'Int!'>>
  isLiked: Field<'isLiked', Res<'Boolean'>>
  siteUrl: Field<'siteUrl', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int!'>>
  updatedAt: Field<'updatedAt', Res<'Int!'>>
  thread: Field<'thread', Res<'Thread'>>
  user: Field<'user', Res<'User'>>
  likes: Field<'likes', Res<'[User]'>>
  childComments: Field<'childComments', Res<'Json'>>
  isLocked: Field<'isLocked', Res<'Boolean'>>
}>

type ThreadCommentReplyNotification = TypeObject<'ThreadCommentReplyNotification', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  commentId: Field<'commentId', Res<'Int!'>>
  context: Field<'context', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  thread: Field<'thread', Res<'Thread'>>
  comment: Field<'comment', Res<'ThreadComment'>>
  user: Field<'user', Res<'User'>>
}>

type ThreadCommentSubscribedNotification = TypeObject<'ThreadCommentSubscribedNotification', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  commentId: Field<'commentId', Res<'Int!'>>
  context: Field<'context', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  thread: Field<'thread', Res<'Thread'>>
  comment: Field<'comment', Res<'ThreadComment'>>
  user: Field<'user', Res<'User'>>
}>

type ThreadCommentLikeNotification = TypeObject<'ThreadCommentLikeNotification', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  commentId: Field<'commentId', Res<'Int!'>>
  context: Field<'context', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  thread: Field<'thread', Res<'Thread'>>
  comment: Field<'comment', Res<'ThreadComment'>>
  user: Field<'user', Res<'User'>>
}>

type ThreadLikeNotification = TypeObject<'ThreadLikeNotification', {
  id: Field<'id', Res<'Int!'>>
  userId: Field<'userId', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  threadId: Field<'threadId', Res<'Int!'>>
  context: Field<'context', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  thread: Field<'thread', Res<'Thread'>>
  comment: Field<'comment', Res<'ThreadComment'>>
  user: Field<'user', Res<'User'>>
}>

type RelatedMediaAdditionNotification = TypeObject<'RelatedMediaAdditionNotification', {
  id: Field<'id', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  mediaId: Field<'mediaId', Res<'Int!'>>
  context: Field<'context', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  media: Field<'media', Res<'Media'>>
}>

type MediaDataChangeNotification = TypeObject<'MediaDataChangeNotification', {
  id: Field<'id', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  mediaId: Field<'mediaId', Res<'Int!'>>
  context: Field<'context', Res<'String'>>
  reason: Field<'reason', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  media: Field<'media', Res<'Media'>>
}>

type MediaMergeNotification = TypeObject<'MediaMergeNotification', {
  id: Field<'id', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  mediaId: Field<'mediaId', Res<'Int!'>>
  deletedMediaTitles: Field<'deletedMediaTitles', Res<'[String]'>>
  context: Field<'context', Res<'String'>>
  reason: Field<'reason', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  media: Field<'media', Res<'Media'>>
}>

type MediaDeletionNotification = TypeObject<'MediaDeletionNotification', {
  id: Field<'id', Res<'Int!'>>
  type: Field<'type', Res<'NotificationType'>>
  deletedMediaTitle: Field<'deletedMediaTitle', Res<'String'>>
  context: Field<'context', Res<'String'>>
  reason: Field<'reason', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
}>

type MediaListCollection = TypeObject<'MediaListCollection', {
  lists: Field<'lists', Res<'[MediaListGroup]'>>
  user: Field<'user', Res<'User'>>
  hasNextChunk: Field<'hasNextChunk', Res<'Boolean'>>
  statusLists: Field<'statusLists', Res<'[[MediaList]]'>, {
    asArray: Arg<'Boolean'>
  }>
  customLists: Field<'customLists', Res<'[[MediaList]]'>, {
    asArray: Arg<'Boolean'>
  }>
}>

type MediaListGroup = TypeObject<'MediaListGroup', {
  entries: Field<'entries', Res<'[MediaList]'>>
  name: Field<'name', Res<'String'>>
  isCustomList: Field<'isCustomList', Res<'Boolean'>>
  isSplitCompletedList: Field<'isSplitCompletedList', Res<'Boolean'>>
  status: Field<'status', Res<'MediaListStatus'>>
}>

type ParsedMarkdown = TypeObject<'ParsedMarkdown', {
  html: Field<'html', Res<'String'>>
}>

type AniChartUser = TypeObject<'AniChartUser', {
  user: Field<'user', Res<'User'>>
  settings: Field<'settings', Res<'Json'>>
  highlights: Field<'highlights', Res<'Json'>>
}>

type SiteStatistics = TypeObject<'SiteStatistics', {
  users: Field<'users', Res<'SiteTrendConnection'>, {
    sort: Arg<'[SiteTrendSort]'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  anime: Field<'anime', Res<'SiteTrendConnection'>, {
    sort: Arg<'[SiteTrendSort]'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  manga: Field<'manga', Res<'SiteTrendConnection'>, {
    sort: Arg<'[SiteTrendSort]'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  characters: Field<'characters', Res<'SiteTrendConnection'>, {
    sort: Arg<'[SiteTrendSort]'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  staff: Field<'staff', Res<'SiteTrendConnection'>, {
    sort: Arg<'[SiteTrendSort]'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  studios: Field<'studios', Res<'SiteTrendConnection'>, {
    sort: Arg<'[SiteTrendSort]'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
  reviews: Field<'reviews', Res<'SiteTrendConnection'>, {
    sort: Arg<'[SiteTrendSort]'>
    page: Arg<'Int'>
    perPage: Arg<'Int'>
  }>
}>

type SiteTrendConnection = TypeObject<'SiteTrendConnection', {
  edges: Field<'edges', Res<'[SiteTrendEdge]'>>
  nodes: Field<'nodes', Res<'[SiteTrend]'>>
  pageInfo: Field<'pageInfo', Res<'PageInfo'>>
}>

type SiteTrendEdge = TypeObject<'SiteTrendEdge', {
  node: Field<'node', Res<'SiteTrend'>>
}>

type SiteTrend = TypeObject<'SiteTrend', {
  date: Field<'date', Res<'Int!'>>
  count: Field<'count', Res<'Int!'>>
  change: Field<'change', Res<'Int!'>>
}>

type Mutation = TypeObject<'Mutation', {
  UpdateUser: Field<'UpdateUser', Res<'User'>, {
    about: Arg<'String'>
    titleLanguage: Arg<'UserTitleLanguage'>
    displayAdultContent: Arg<'Boolean'>
    airingNotifications: Arg<'Boolean'>
    scoreFormat: Arg<'ScoreFormat'>
    rowOrder: Arg<'String'>
    profileColor: Arg<'String'>
    donatorBadge: Arg<'String'>
    notificationOptions: Arg<'[NotificationOptionInput]'>
    timezone: Arg<'String'>
    activityMergeTime: Arg<'Int'>
    animeListOptions: Arg<'MediaListOptionsInput'>
    mangaListOptions: Arg<'MediaListOptionsInput'>
    staffNameLanguage: Arg<'UserStaffNameLanguage'>
    restrictMessagesToFollowing: Arg<'Boolean'>
    disabledListActivity: Arg<'[ListActivityOptionInput]'>
  }>
  SaveMediaListEntry: Field<'SaveMediaListEntry', Res<'MediaList'>, {
    id: Arg<'Int'>
    mediaId: Arg<'Int'>
    status: Arg<'MediaListStatus'>
    score: Arg<'Float'>
    scoreRaw: Arg<'Int'>
    progress: Arg<'Int'>
    progressVolumes: Arg<'Int'>
    repeat: Arg<'Int'>
    priority: Arg<'Int'>
    private: Arg<'Boolean'>
    notes: Arg<'String'>
    hiddenFromStatusLists: Arg<'Boolean'>
    customLists: Arg<'[String]'>
    advancedScores: Arg<'[Float]'>
    startedAt: Arg<'FuzzyDateInput'>
    completedAt: Arg<'FuzzyDateInput'>
  }>
  UpdateMediaListEntries: Field<'UpdateMediaListEntries', Res<'[MediaList]'>, {
    status: Arg<'MediaListStatus'>
    score: Arg<'Float'>
    scoreRaw: Arg<'Int'>
    progress: Arg<'Int'>
    progressVolumes: Arg<'Int'>
    repeat: Arg<'Int'>
    priority: Arg<'Int'>
    private: Arg<'Boolean'>
    notes: Arg<'String'>
    hiddenFromStatusLists: Arg<'Boolean'>
    advancedScores: Arg<'[Float]'>
    startedAt: Arg<'FuzzyDateInput'>
    completedAt: Arg<'FuzzyDateInput'>
    ids: Arg<'[Int]'>
  }>
  DeleteMediaListEntry: Field<'DeleteMediaListEntry', Res<'Deleted'>, {
    id: Arg<'Int'>
  }>
  DeleteCustomList: Field<'DeleteCustomList', Res<'Deleted'>, {
    customList: Arg<'String'>
    type: Arg<'MediaType'>
  }>
  SaveTextActivity: Field<'SaveTextActivity', Res<'TextActivity'>, {
    id: Arg<'Int'>
    text: Arg<'String'>
    locked: Arg<'Boolean'>
  }>
  SaveMessageActivity: Field<'SaveMessageActivity', Res<'MessageActivity'>, {
    id: Arg<'Int'>
    message: Arg<'String'>
    recipientId: Arg<'Int'>
    private: Arg<'Boolean'>
    locked: Arg<'Boolean'>
    asMod: Arg<'Boolean'>
  }>
  SaveListActivity: Field<'SaveListActivity', Res<'ListActivity'>, {
    id: Arg<'Int'>
    locked: Arg<'Boolean'>
  }>
  DeleteActivity: Field<'DeleteActivity', Res<'Deleted'>, {
    id: Arg<'Int'>
  }>
  ToggleActivityPin: Field<'ToggleActivityPin', Res<'ActivityUnion'>, {
    id: Arg<'Int'>
    pinned: Arg<'Boolean'>
  }>
  ToggleActivitySubscription: Field<'ToggleActivitySubscription', Res<'ActivityUnion'>, {
    activityId: Arg<'Int'>
    subscribe: Arg<'Boolean'>
  }>
  SaveActivityReply: Field<'SaveActivityReply', Res<'ActivityReply'>, {
    id: Arg<'Int'>
    activityId: Arg<'Int'>
    text: Arg<'String'>
    asMod: Arg<'Boolean'>
  }>
  DeleteActivityReply: Field<'DeleteActivityReply', Res<'Deleted'>, {
    id: Arg<'Int'>
  }>
  ToggleLike: Field<'ToggleLike', Res<'[User]'>, {
    id: Arg<'Int'>
    type: Arg<'LikeableType'>
  }>
  ToggleLikeV2: Field<'ToggleLikeV2', Res<'LikeableUnion'>, {
    id: Arg<'Int'>
    type: Arg<'LikeableType'>
  }>
  ToggleFollow: Field<'ToggleFollow', Res<'User'>, {
    userId: Arg<'Int'>
  }>
  ToggleFavourite: Field<'ToggleFavourite', Res<'Favourites'>, {
    animeId: Arg<'Int'>
    mangaId: Arg<'Int'>
    characterId: Arg<'Int'>
    staffId: Arg<'Int'>
    studioId: Arg<'Int'>
  }>
  UpdateFavouriteOrder: Field<'UpdateFavouriteOrder', Res<'Favourites'>, {
    animeIds: Arg<'[Int]'>
    mangaIds: Arg<'[Int]'>
    characterIds: Arg<'[Int]'>
    staffIds: Arg<'[Int]'>
    studioIds: Arg<'[Int]'>
    animeOrder: Arg<'[Int]'>
    mangaOrder: Arg<'[Int]'>
    characterOrder: Arg<'[Int]'>
    staffOrder: Arg<'[Int]'>
    studioOrder: Arg<'[Int]'>
  }>
  SaveReview: Field<'SaveReview', Res<'Review'>, {
    id: Arg<'Int'>
    mediaId: Arg<'Int'>
    body: Arg<'String'>
    summary: Arg<'String'>
    score: Arg<'Int'>
    private: Arg<'Boolean'>
  }>
  DeleteReview: Field<'DeleteReview', Res<'Deleted'>, {
    id: Arg<'Int'>
  }>
  RateReview: Field<'RateReview', Res<'Review'>, {
    reviewId: Arg<'Int'>
    rating: Arg<'ReviewRating'>
  }>
  SaveRecommendation: Field<'SaveRecommendation', Res<'Recommendation'>, {
    mediaId: Arg<'Int'>
    mediaRecommendationId: Arg<'Int'>
    rating: Arg<'RecommendationRating'>
  }>
  SaveThread: Field<'SaveThread', Res<'Thread'>, {
    id: Arg<'Int'>
    title: Arg<'String'>
    body: Arg<'String'>
    categories: Arg<'[Int]'>
    mediaCategories: Arg<'[Int]'>
    sticky: Arg<'Boolean'>
    locked: Arg<'Boolean'>
  }>
  DeleteThread: Field<'DeleteThread', Res<'Deleted'>, {
    id: Arg<'Int'>
  }>
  ToggleThreadSubscription: Field<'ToggleThreadSubscription', Res<'Thread'>, {
    threadId: Arg<'Int'>
    subscribe: Arg<'Boolean'>
  }>
  SaveThreadComment: Field<'SaveThreadComment', Res<'ThreadComment'>, {
    id: Arg<'Int'>
    threadId: Arg<'Int'>
    parentCommentId: Arg<'Int'>
    comment: Arg<'String'>
    locked: Arg<'Boolean'>
  }>
  DeleteThreadComment: Field<'DeleteThreadComment', Res<'Deleted'>, {
    id: Arg<'Int'>
  }>
  UpdateAniChartSettings: Field<'UpdateAniChartSettings', Res<'Json'>, {
    titleLanguage: Arg<'String'>
    outgoingLinkProvider: Arg<'String'>
    theme: Arg<'String'>
    sort: Arg<'String'>
  }>
  UpdateAniChartHighlights: Field<'UpdateAniChartHighlights', Res<'Json'>, {
    highlights: Arg<'[AniChartHighlightInput]'>
  }>
}>

type Deleted = TypeObject<'Deleted', {
  deleted: Field<'deleted', Res<'Boolean'>>
}>

type InternalPage = TypeObject<'InternalPage', {
  mediaSubmissions: Field<'mediaSubmissions', Res<'[MediaSubmission]'>, {
    mediaId: Arg<'Int'>
    submissionId: Arg<'Int'>
    userId: Arg<'Int'>
    assigneeId: Arg<'Int'>
    status: Arg<'SubmissionStatus'>
    type: Arg<'MediaType'>
    sort: Arg<'[SubmissionSort]'>
  }>
  characterSubmissions: Field<'characterSubmissions', Res<'[CharacterSubmission]'>, {
    characterId: Arg<'Int'>
    userId: Arg<'Int'>
    assigneeId: Arg<'Int'>
    status: Arg<'SubmissionStatus'>
    sort: Arg<'[SubmissionSort]'>
  }>
  staffSubmissions: Field<'staffSubmissions', Res<'[StaffSubmission]'>, {
    staffId: Arg<'Int'>
    userId: Arg<'Int'>
    assigneeId: Arg<'Int'>
    status: Arg<'SubmissionStatus'>
    sort: Arg<'[SubmissionSort]'>
  }>
  revisionHistory: Field<'revisionHistory', Res<'[RevisionHistory]'>, {
    userId: Arg<'Int'>
    mediaId: Arg<'Int'>
    characterId: Arg<'Int'>
    staffId: Arg<'Int'>
    studioId: Arg<'Int'>
  }>
  reports: Field<'reports', Res<'[Report]'>, {
    reporterId: Arg<'Int'>
    reportedId: Arg<'Int'>
  }>
  modActions: Field<'modActions', Res<'[ModAction]'>, {
    userId: Arg<'Int'>
    modId: Arg<'Int'>
  }>
  userBlockSearch: Field<'userBlockSearch', Res<'[User]'>, {
    search: Arg<'String'>
  }>
  pageInfo: Field<'pageInfo', Res<'PageInfo'>>
  users: Field<'users', Res<'[User]'>, {
    id: Arg<'Int'>
    name: Arg<'String'>
    isModerator: Arg<'Boolean'>
    search: Arg<'String'>
    sort: Arg<'[UserSort]'>
  }>
  media: Field<'media', Res<'[Media]'>, {
    id: Arg<'Int'>
    idMal: Arg<'Int'>
    startDate: Arg<'FuzzyDateInt'>
    endDate: Arg<'FuzzyDateInt'>
    season: Arg<'MediaSeason'>
    seasonYear: Arg<'Int'>
    type: Arg<'MediaType'>
    format: Arg<'MediaFormat'>
    status: Arg<'MediaStatus'>
    episodes: Arg<'Int'>
    duration: Arg<'Int'>
    chapters: Arg<'Int'>
    volumes: Arg<'Int'>
    isAdult: Arg<'Boolean'>
    genre: Arg<'String'>
    tag: Arg<'String'>
    minimumTagRank: Arg<'Int'>
    tagCategory: Arg<'String'>
    onList: Arg<'Boolean'>
    licensedBy: Arg<'String'>
    licensedById: Arg<'Int'>
    averageScore: Arg<'Int'>
    popularity: Arg<'Int'>
    source: Arg<'MediaSource'>
    countryOfOrigin: Arg<'CountryCode'>
    isLicensed: Arg<'Boolean'>
    search: Arg<'String'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    idMal_not: Arg<'Int'>
    idMal_in: Arg<'[Int]'>
    idMal_not_in: Arg<'[Int]'>
    startDate_greater: Arg<'FuzzyDateInt'>
    startDate_lesser: Arg<'FuzzyDateInt'>
    startDate_like: Arg<'String'>
    endDate_greater: Arg<'FuzzyDateInt'>
    endDate_lesser: Arg<'FuzzyDateInt'>
    endDate_like: Arg<'String'>
    format_in: Arg<'[MediaFormat]'>
    format_not: Arg<'MediaFormat'>
    format_not_in: Arg<'[MediaFormat]'>
    status_in: Arg<'[MediaStatus]'>
    status_not: Arg<'MediaStatus'>
    status_not_in: Arg<'[MediaStatus]'>
    episodes_greater: Arg<'Int'>
    episodes_lesser: Arg<'Int'>
    duration_greater: Arg<'Int'>
    duration_lesser: Arg<'Int'>
    chapters_greater: Arg<'Int'>
    chapters_lesser: Arg<'Int'>
    volumes_greater: Arg<'Int'>
    volumes_lesser: Arg<'Int'>
    genre_in: Arg<'[String]'>
    genre_not_in: Arg<'[String]'>
    tag_in: Arg<'[String]'>
    tag_not_in: Arg<'[String]'>
    tagCategory_in: Arg<'[String]'>
    tagCategory_not_in: Arg<'[String]'>
    licensedBy_in: Arg<'[String]'>
    licensedById_in: Arg<'[Int]'>
    averageScore_not: Arg<'Int'>
    averageScore_greater: Arg<'Int'>
    averageScore_lesser: Arg<'Int'>
    popularity_not: Arg<'Int'>
    popularity_greater: Arg<'Int'>
    popularity_lesser: Arg<'Int'>
    source_in: Arg<'[MediaSource]'>
    sort: Arg<'[MediaSort]'>
  }>
  characters: Field<'characters', Res<'[Character]'>, {
    id: Arg<'Int'>
    isBirthday: Arg<'Boolean'>
    search: Arg<'String'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    sort: Arg<'[CharacterSort]'>
  }>
  staff: Field<'staff', Res<'[Staff]'>, {
    id: Arg<'Int'>
    isBirthday: Arg<'Boolean'>
    search: Arg<'String'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    sort: Arg<'[StaffSort]'>
  }>
  studios: Field<'studios', Res<'[Studio]'>, {
    id: Arg<'Int'>
    search: Arg<'String'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    sort: Arg<'[StudioSort]'>
  }>
  mediaList: Field<'mediaList', Res<'[MediaList]'>, {
    id: Arg<'Int'>
    userId: Arg<'Int'>
    userName: Arg<'String'>
    type: Arg<'MediaType'>
    status: Arg<'MediaListStatus'>
    mediaId: Arg<'Int'>
    isFollowing: Arg<'Boolean'>
    notes: Arg<'String'>
    startedAt: Arg<'FuzzyDateInt'>
    completedAt: Arg<'FuzzyDateInt'>
    compareWithAuthList: Arg<'Boolean'>
    userId_in: Arg<'[Int]'>
    status_in: Arg<'[MediaListStatus]'>
    status_not_in: Arg<'[MediaListStatus]'>
    status_not: Arg<'MediaListStatus'>
    mediaId_in: Arg<'[Int]'>
    mediaId_not_in: Arg<'[Int]'>
    notes_like: Arg<'String'>
    startedAt_greater: Arg<'FuzzyDateInt'>
    startedAt_lesser: Arg<'FuzzyDateInt'>
    startedAt_like: Arg<'String'>
    completedAt_greater: Arg<'FuzzyDateInt'>
    completedAt_lesser: Arg<'FuzzyDateInt'>
    completedAt_like: Arg<'String'>
    sort: Arg<'[MediaListSort]'>
  }>
  airingSchedules: Field<'airingSchedules', Res<'[AiringSchedule]'>, {
    id: Arg<'Int'>
    mediaId: Arg<'Int'>
    episode: Arg<'Int'>
    airingAt: Arg<'Int'>
    notYetAired: Arg<'Boolean'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    mediaId_not: Arg<'Int'>
    mediaId_in: Arg<'[Int]'>
    mediaId_not_in: Arg<'[Int]'>
    episode_not: Arg<'Int'>
    episode_in: Arg<'[Int]'>
    episode_not_in: Arg<'[Int]'>
    episode_greater: Arg<'Int'>
    episode_lesser: Arg<'Int'>
    airingAt_greater: Arg<'Int'>
    airingAt_lesser: Arg<'Int'>
    sort: Arg<'[AiringSort]'>
  }>
  mediaTrends: Field<'mediaTrends', Res<'[MediaTrend]'>, {
    mediaId: Arg<'Int'>
    date: Arg<'Int'>
    trending: Arg<'Int'>
    averageScore: Arg<'Int'>
    popularity: Arg<'Int'>
    episode: Arg<'Int'>
    releasing: Arg<'Boolean'>
    mediaId_not: Arg<'Int'>
    mediaId_in: Arg<'[Int]'>
    mediaId_not_in: Arg<'[Int]'>
    date_greater: Arg<'Int'>
    date_lesser: Arg<'Int'>
    trending_greater: Arg<'Int'>
    trending_lesser: Arg<'Int'>
    trending_not: Arg<'Int'>
    averageScore_greater: Arg<'Int'>
    averageScore_lesser: Arg<'Int'>
    averageScore_not: Arg<'Int'>
    popularity_greater: Arg<'Int'>
    popularity_lesser: Arg<'Int'>
    popularity_not: Arg<'Int'>
    episode_greater: Arg<'Int'>
    episode_lesser: Arg<'Int'>
    episode_not: Arg<'Int'>
    sort: Arg<'[MediaTrendSort]'>
  }>
  notifications: Field<'notifications', Res<'[NotificationUnion]'>, {
    type: Arg<'NotificationType'>
    resetNotificationCount: Arg<'Boolean'>
    type_in: Arg<'[NotificationType]'>
  }>
  followers: Field<'followers', Res<'[User]'>, {
    userId: Arg<'Int!'>
    sort: Arg<'[UserSort]'>
  }>
  following: Field<'following', Res<'[User]'>, {
    userId: Arg<'Int!'>
    sort: Arg<'[UserSort]'>
  }>
  activities: Field<'activities', Res<'[ActivityUnion]'>, {
    id: Arg<'Int'>
    userId: Arg<'Int'>
    messengerId: Arg<'Int'>
    mediaId: Arg<'Int'>
    type: Arg<'ActivityType'>
    isFollowing: Arg<'Boolean'>
    hasReplies: Arg<'Boolean'>
    hasRepliesOrTypeText: Arg<'Boolean'>
    createdAt: Arg<'Int'>
    id_not: Arg<'Int'>
    id_in: Arg<'[Int]'>
    id_not_in: Arg<'[Int]'>
    userId_not: Arg<'Int'>
    userId_in: Arg<'[Int]'>
    userId_not_in: Arg<'[Int]'>
    messengerId_not: Arg<'Int'>
    messengerId_in: Arg<'[Int]'>
    messengerId_not_in: Arg<'[Int]'>
    mediaId_not: Arg<'Int'>
    mediaId_in: Arg<'[Int]'>
    mediaId_not_in: Arg<'[Int]'>
    type_not: Arg<'ActivityType'>
    type_in: Arg<'[ActivityType]'>
    type_not_in: Arg<'[ActivityType]'>
    createdAt_greater: Arg<'Int'>
    createdAt_lesser: Arg<'Int'>
    sort: Arg<'[ActivitySort]'>
  }>
  activityReplies: Field<'activityReplies', Res<'[ActivityReply]'>, {
    id: Arg<'Int'>
    activityId: Arg<'Int'>
  }>
  threads: Field<'threads', Res<'[Thread]'>, {
    id: Arg<'Int'>
    userId: Arg<'Int'>
    replyUserId: Arg<'Int'>
    subscribed: Arg<'Boolean'>
    categoryId: Arg<'Int'>
    mediaCategoryId: Arg<'Int'>
    search: Arg<'String'>
    id_in: Arg<'[Int]'>
    sort: Arg<'[ThreadSort]'>
  }>
  threadComments: Field<'threadComments', Res<'[ThreadComment]'>, {
    id: Arg<'Int'>
    threadId: Arg<'Int'>
    userId: Arg<'Int'>
    sort: Arg<'[ThreadCommentSort]'>
  }>
  reviews: Field<'reviews', Res<'[Review]'>, {
    id: Arg<'Int'>
    mediaId: Arg<'Int'>
    userId: Arg<'Int'>
    mediaType: Arg<'MediaType'>
    sort: Arg<'[ReviewSort]'>
  }>
  recommendations: Field<'recommendations', Res<'[Recommendation]'>, {
    id: Arg<'Int'>
    mediaId: Arg<'Int'>
    mediaRecommendationId: Arg<'Int'>
    userId: Arg<'Int'>
    rating: Arg<'Int'>
    onList: Arg<'Boolean'>
    rating_greater: Arg<'Int'>
    rating_lesser: Arg<'Int'>
    sort: Arg<'[RecommendationSort]'>
  }>
  likes: Field<'likes', Res<'[User]'>, {
    likeableId: Arg<'Int'>
    type: Arg<'LikeableType'>
  }>
}>

type MediaSubmission = TypeObject<'MediaSubmission', {
  id: Field<'id', Res<'Int!'>>
  submitter: Field<'submitter', Res<'User'>>
  assignee: Field<'assignee', Res<'User'>>
  status: Field<'status', Res<'SubmissionStatus'>>
  submitterStats: Field<'submitterStats', Res<'Json'>>
  notes: Field<'notes', Res<'String'>>
  source: Field<'source', Res<'String'>>
  changes: Field<'changes', Res<'[String]'>>
  locked: Field<'locked', Res<'Boolean'>>
  media: Field<'media', Res<'Media'>>
  submission: Field<'submission', Res<'Media'>>
  characters: Field<'characters', Res<'[MediaSubmissionComparison]'>>
  staff: Field<'staff', Res<'[MediaSubmissionComparison]'>>
  studios: Field<'studios', Res<'[MediaSubmissionComparison]'>>
  relations: Field<'relations', Res<'[MediaEdge]'>>
  externalLinks: Field<'externalLinks', Res<'[MediaSubmissionComparison]'>>
  createdAt: Field<'createdAt', Res<'Int'>>
}>

type MediaSubmissionComparison = TypeObject<'MediaSubmissionComparison', {
  submission: Field<'submission', Res<'MediaSubmissionEdge'>>
  character: Field<'character', Res<'MediaCharacter'>>
  staff: Field<'staff', Res<'StaffEdge'>>
  studio: Field<'studio', Res<'StudioEdge'>>
  externalLink: Field<'externalLink', Res<'MediaExternalLink'>>
}>

type MediaSubmissionEdge = TypeObject<'MediaSubmissionEdge', {
  id: Field<'id', Res<'Int'>>
  characterRole: Field<'characterRole', Res<'CharacterRole'>>
  staffRole: Field<'staffRole', Res<'String'>>
  roleNotes: Field<'roleNotes', Res<'String'>>
  dubGroup: Field<'dubGroup', Res<'String'>>
  characterName: Field<'characterName', Res<'String'>>
  isMain: Field<'isMain', Res<'Boolean'>>
  character: Field<'character', Res<'Character'>>
  characterSubmission: Field<'characterSubmission', Res<'Character'>>
  voiceActor: Field<'voiceActor', Res<'Staff'>>
  voiceActorSubmission: Field<'voiceActorSubmission', Res<'Staff'>>
  staff: Field<'staff', Res<'Staff'>>
  staffSubmission: Field<'staffSubmission', Res<'Staff'>>
  studio: Field<'studio', Res<'Studio'>>
  externalLink: Field<'externalLink', Res<'MediaExternalLink'>>
  media: Field<'media', Res<'Media'>>
}>

type MediaCharacter = TypeObject<'MediaCharacter', {
  id: Field<'id', Res<'Int'>>
  role: Field<'role', Res<'CharacterRole'>>
  roleNotes: Field<'roleNotes', Res<'String'>>
  dubGroup: Field<'dubGroup', Res<'String'>>
  characterName: Field<'characterName', Res<'String'>>
  character: Field<'character', Res<'Character'>>
  voiceActor: Field<'voiceActor', Res<'Staff'>>
}>

type CharacterSubmission = TypeObject<'CharacterSubmission', {
  id: Field<'id', Res<'Int!'>>
  character: Field<'character', Res<'Character'>>
  submission: Field<'submission', Res<'Character'>>
  submitter: Field<'submitter', Res<'User'>>
  assignee: Field<'assignee', Res<'User'>>
  status: Field<'status', Res<'SubmissionStatus'>>
  notes: Field<'notes', Res<'String'>>
  source: Field<'source', Res<'String'>>
  locked: Field<'locked', Res<'Boolean'>>
  createdAt: Field<'createdAt', Res<'Int'>>
}>

type StaffSubmission = TypeObject<'StaffSubmission', {
  id: Field<'id', Res<'Int!'>>
  staff: Field<'staff', Res<'Staff'>>
  submission: Field<'submission', Res<'Staff'>>
  submitter: Field<'submitter', Res<'User'>>
  assignee: Field<'assignee', Res<'User'>>
  status: Field<'status', Res<'SubmissionStatus'>>
  notes: Field<'notes', Res<'String'>>
  source: Field<'source', Res<'String'>>
  locked: Field<'locked', Res<'Boolean'>>
  createdAt: Field<'createdAt', Res<'Int'>>
}>

type RevisionHistory = TypeObject<'RevisionHistory', {
  id: Field<'id', Res<'Int!'>>
  action: Field<'action', Res<'RevisionHistoryAction'>>
  changes: Field<'changes', Res<'Json'>>
  user: Field<'user', Res<'User'>>
  media: Field<'media', Res<'Media'>>
  character: Field<'character', Res<'Character'>>
  staff: Field<'staff', Res<'Staff'>>
  studio: Field<'studio', Res<'Studio'>>
  externalLink: Field<'externalLink', Res<'MediaExternalLink'>>
  createdAt: Field<'createdAt', Res<'Int'>>
}>

type Report = TypeObject<'Report', {
  id: Field<'id', Res<'Int!'>>
  reporter: Field<'reporter', Res<'User'>>
  reported: Field<'reported', Res<'User'>>
  reason: Field<'reason', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int'>>
  cleared: Field<'cleared', Res<'Boolean'>>
}>

type ModAction = TypeObject<'ModAction', {
  id: Field<'id', Res<'Int!'>>
  user: Field<'user', Res<'User'>>
  mod: Field<'mod', Res<'User'>>
  type: Field<'type', Res<'ModActionType'>>
  objectId: Field<'objectId', Res<'Int'>>
  objectType: Field<'objectType', Res<'String'>>
  data: Field<'data', Res<'String'>>
  createdAt: Field<'createdAt', Res<'Int!'>>
}>

type CharacterSubmissionConnection = TypeObject<'CharacterSubmissionConnection', {
  edges: Field<'edges', Res<'[CharacterSubmissionEdge]'>>
  nodes: Field<'nodes', Res<'[CharacterSubmission]'>>
  pageInfo: Field<'pageInfo', Res<'PageInfo'>>
}>

type CharacterSubmissionEdge = TypeObject<'CharacterSubmissionEdge', {
  node: Field<'node', Res<'CharacterSubmission'>>
  role: Field<'role', Res<'CharacterRole'>>
  voiceActors: Field<'voiceActors', Res<'[Staff]'>>
  submittedVoiceActors: Field<'submittedVoiceActors', Res<'[StaffSubmission]'>>
}>

type UserModData = TypeObject<'UserModData', {
  alts: Field<'alts', Res<'[User]'>>
  bans: Field<'bans', Res<'Json'>>
  ip: Field<'ip', Res<'Json'>>
  counts: Field<'counts', Res<'Json'>>
  privacy: Field<'privacy', Res<'Int'>>
  email: Field<'email', Res<'String'>>
}>

export type Schema = DefineSchema<{
  Scalars: {
    Json: ScalarType<'Json', string>
    CountryCode: ScalarType<'CountryCode', string>
    FuzzyDateInt: ScalarType<'FuzzyDateInt', string>
  }
  Enums: {
    UserSort: EnumType<'UserSort', UserSort>
    UserTitleLanguage: EnumType<'UserTitleLanguage', UserTitleLanguage>
    NotificationType: EnumType<'NotificationType', NotificationType>
    UserStaffNameLanguage: EnumType<'UserStaffNameLanguage', UserStaffNameLanguage>
    MediaListStatus: EnumType<'MediaListStatus', MediaListStatus>
    ScoreFormat: EnumType<'ScoreFormat', ScoreFormat>
    MediaType: EnumType<'MediaType', MediaType>
    MediaFormat: EnumType<'MediaFormat', MediaFormat>
    MediaStatus: EnumType<'MediaStatus', MediaStatus>
    MediaSeason: EnumType<'MediaSeason', MediaSeason>
    MediaSource: EnumType<'MediaSource', MediaSource>
    CharacterSort: EnumType<'CharacterSort', CharacterSort>
    CharacterRole: EnumType<'CharacterRole', CharacterRole>
    MediaSort: EnumType<'MediaSort', MediaSort>
    StaffLanguage: EnumType<'StaffLanguage', StaffLanguage>
    StaffSort: EnumType<'StaffSort', StaffSort>
    StudioSort: EnumType<'StudioSort', StudioSort>
    MediaTrendSort: EnumType<'MediaTrendSort', MediaTrendSort>
    ExternalLinkType: EnumType<'ExternalLinkType', ExternalLinkType>
    MediaRankType: EnumType<'MediaRankType', MediaRankType>
    ReviewSort: EnumType<'ReviewSort', ReviewSort>
    ReviewRating: EnumType<'ReviewRating', ReviewRating>
    RecommendationSort: EnumType<'RecommendationSort', RecommendationSort>
    RecommendationRating: EnumType<'RecommendationRating', RecommendationRating>
    MediaRelation: EnumType<'MediaRelation', MediaRelation>
    UserStatisticsSort: EnumType<'UserStatisticsSort', UserStatisticsSort>
    ModRole: EnumType<'ModRole', ModRole>
    MediaListSort: EnumType<'MediaListSort', MediaListSort>
    AiringSort: EnumType<'AiringSort', AiringSort>
    ActivityType: EnumType<'ActivityType', ActivityType>
    ActivitySort: EnumType<'ActivitySort', ActivitySort>
    ThreadSort: EnumType<'ThreadSort', ThreadSort>
    ThreadCommentSort: EnumType<'ThreadCommentSort', ThreadCommentSort>
    LikeableType: EnumType<'LikeableType', LikeableType>
    SiteTrendSort: EnumType<'SiteTrendSort', SiteTrendSort>
    ExternalLinkMediaType: EnumType<'ExternalLinkMediaType', ExternalLinkMediaType>
    SubmissionStatus: EnumType<'SubmissionStatus', SubmissionStatus>
    SubmissionSort: EnumType<'SubmissionSort', SubmissionSort>
    RevisionHistoryAction: EnumType<'RevisionHistoryAction', RevisionHistoryAction>
    ModActionType: EnumType<'ModActionType', ModActionType>
  }
  Inputs: {
    NotificationOptionInput: NotificationOptionInput
    MediaListOptionsInput: MediaListOptionsInput
    ListActivityOptionInput: ListActivityOptionInput
    FuzzyDateInput: FuzzyDateInput
    AniChartHighlightInput: AniChartHighlightInput
    MediaTitleInput: MediaTitleInput
    AiringScheduleInput: AiringScheduleInput
    MediaExternalLinkInput: MediaExternalLinkInput
    CharacterNameInput: CharacterNameInput
    StaffNameInput: StaffNameInput
  }
  Unions: {
    NotificationUnion: NotificationUnion
    ActivityUnion: ActivityUnion
    LikeableUnion: LikeableUnion
  }
  Objects: {
    Query: Query
    Page: Page
    PageInfo: PageInfo
    User: User
    UserAvatar: UserAvatar
    UserOptions: UserOptions
    NotificationOption: NotificationOption
    ListActivityOption: ListActivityOption
    MediaListOptions: MediaListOptions
    MediaListTypeOptions: MediaListTypeOptions
    Favourites: Favourites
    MediaConnection: MediaConnection
    MediaEdge: MediaEdge
    Media: Media
    MediaTitle: MediaTitle
    FuzzyDate: FuzzyDate
    MediaTrailer: MediaTrailer
    MediaCoverImage: MediaCoverImage
    MediaTag: MediaTag
    CharacterConnection: CharacterConnection
    CharacterEdge: CharacterEdge
    Character: Character
    CharacterName: CharacterName
    CharacterImage: CharacterImage
    Staff: Staff
    StaffName: StaffName
    StaffImage: StaffImage
    StaffRoleType: StaffRoleType
    StaffConnection: StaffConnection
    StaffEdge: StaffEdge
    StudioConnection: StudioConnection
    StudioEdge: StudioEdge
    Studio: Studio
    AiringSchedule: AiringSchedule
    AiringScheduleConnection: AiringScheduleConnection
    AiringScheduleEdge: AiringScheduleEdge
    MediaTrendConnection: MediaTrendConnection
    MediaTrendEdge: MediaTrendEdge
    MediaTrend: MediaTrend
    MediaExternalLink: MediaExternalLink
    MediaStreamingEpisode: MediaStreamingEpisode
    MediaRank: MediaRank
    MediaList: MediaList
    ReviewConnection: ReviewConnection
    ReviewEdge: ReviewEdge
    Review: Review
    RecommendationConnection: RecommendationConnection
    RecommendationEdge: RecommendationEdge
    Recommendation: Recommendation
    MediaStats: MediaStats
    ScoreDistribution: ScoreDistribution
    StatusDistribution: StatusDistribution
    AiringProgression: AiringProgression
    UserStatisticTypes: UserStatisticTypes
    UserStatistics: UserStatistics
    UserFormatStatistic: UserFormatStatistic
    UserStatusStatistic: UserStatusStatistic
    UserScoreStatistic: UserScoreStatistic
    UserLengthStatistic: UserLengthStatistic
    UserReleaseYearStatistic: UserReleaseYearStatistic
    UserStartYearStatistic: UserStartYearStatistic
    UserGenreStatistic: UserGenreStatistic
    UserTagStatistic: UserTagStatistic
    UserCountryStatistic: UserCountryStatistic
    UserVoiceActorStatistic: UserVoiceActorStatistic
    UserStaffStatistic: UserStaffStatistic
    UserStudioStatistic: UserStudioStatistic
    UserStats: UserStats
    UserActivityHistory: UserActivityHistory
    ListScoreStats: ListScoreStats
    GenreStats: GenreStats
    TagStats: TagStats
    StaffStats: StaffStats
    StudioStats: StudioStats
    YearStats: YearStats
    FormatStats: FormatStats
    UserPreviousName: UserPreviousName
    AiringNotification: AiringNotification
    FollowingNotification: FollowingNotification
    ActivityMessageNotification: ActivityMessageNotification
    MessageActivity: MessageActivity
    ActivityReply: ActivityReply
    ActivityMentionNotification: ActivityMentionNotification
    TextActivity: TextActivity
    ListActivity: ListActivity
    ActivityReplyNotification: ActivityReplyNotification
    ActivityReplySubscribedNotification: ActivityReplySubscribedNotification
    ActivityLikeNotification: ActivityLikeNotification
    ActivityReplyLikeNotification: ActivityReplyLikeNotification
    ThreadCommentMentionNotification: ThreadCommentMentionNotification
    Thread: Thread
    ThreadCategory: ThreadCategory
    ThreadComment: ThreadComment
    ThreadCommentReplyNotification: ThreadCommentReplyNotification
    ThreadCommentSubscribedNotification: ThreadCommentSubscribedNotification
    ThreadCommentLikeNotification: ThreadCommentLikeNotification
    ThreadLikeNotification: ThreadLikeNotification
    RelatedMediaAdditionNotification: RelatedMediaAdditionNotification
    MediaDataChangeNotification: MediaDataChangeNotification
    MediaMergeNotification: MediaMergeNotification
    MediaDeletionNotification: MediaDeletionNotification
    MediaListCollection: MediaListCollection
    MediaListGroup: MediaListGroup
    ParsedMarkdown: ParsedMarkdown
    AniChartUser: AniChartUser
    SiteStatistics: SiteStatistics
    SiteTrendConnection: SiteTrendConnection
    SiteTrendEdge: SiteTrendEdge
    SiteTrend: SiteTrend
    Mutation: Mutation
    Deleted: Deleted
    InternalPage: InternalPage
    MediaSubmission: MediaSubmission
    MediaSubmissionComparison: MediaSubmissionComparison
    MediaSubmissionEdge: MediaSubmissionEdge
    MediaCharacter: MediaCharacter
    CharacterSubmission: CharacterSubmission
    StaffSubmission: StaffSubmission
    RevisionHistory: RevisionHistory
    Report: Report
    ModAction: ModAction
    CharacterSubmissionConnection: CharacterSubmissionConnection
    CharacterSubmissionEdge: CharacterSubmissionEdge
    UserModData: UserModData
  }
}>

type Arg<T extends string> = ArgOf<Schema, T>
type Res<T extends string> = ResOf<Schema, T>

declare module '@teages/gqf/cli' {
  interface Schemas {
    'https://graphql.anilist.co': Schema
  }
}
