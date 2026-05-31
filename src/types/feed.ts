export type AvatarTone = 'default' | 'warm' | 'muted'

export interface Person {
  name: string
  initials: string
  avatarSrc?: string
  avatarTone?: AvatarTone
}

export interface CommentItem {
  id: string
  author: Person
  timeRelative: string
  text: string
}

export const POST_PHOTO_WIDTH = 982
export const POST_PHOTO_HEIGHT = 864

export interface PostPhoto {
  src?: string
  alt: string
}

export interface MetricLine {
  value: string
  label: string
}

export interface FeedPost {
  id: string
  author: Person
  verified?: boolean
  timeRelative: string
  role: string
  problemTag: string
  /** Texto del post. Usa \\n para saltos de línea y *texto* para énfasis. */
  body: string
  photo: PostPhoto
  metrics: [MetricLine, MetricLine]
  commentsHeadingCount: string
  comments: CommentItem[]
}

export interface TrendItem {
  num: string
  title: string
  description: string
}

export interface NearbyHen {
  name: string
  subtitle: string
  initials: string
  avatarSrc?: string
  tone: AvatarTone
}
