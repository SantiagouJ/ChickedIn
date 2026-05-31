import type { CommentItem, FeedPost, Person, PostPhoto } from '../types/feed'

const imageModules = import.meta.glob<string>(
  '../assets/**/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' },
)

const imageByFileName = new Map<string, string>()

for (const [path, url] of Object.entries(imageModules)) {
  const fileName = path.split('/').pop()
  if (fileName) imageByFileName.set(fileName.toLowerCase(), url)
}

function fileNameFromRef(ref: string): string {
  return ref
    .replace(/^\.?\/?src\/assets\//, '')
    .replace(/^\/media\/(?:avatars|posts)\//, '')
    .split('/')
    .pop()!
    .toLowerCase()
}

function candidatesFor(ref: string): string[] {
  const base = fileNameFromRef(ref)
  const stem = base.replace(/\.(png|jpe?g|webp)$/i, '')

  return [
    base,
    `${stem}.png`,
    `${stem}.jpg`,
    `${stem}.jpeg`,
    `${stem}.webp`,
  ]
}

export function resolveImageSrc(ref?: string): string | undefined {
  if (!ref) return undefined

  for (const candidate of candidatesFor(ref)) {
    const url = imageByFileName.get(candidate)
    if (url) return url
  }

  return undefined
}

function resolvePerson(person: Person): Person {
  if (!person.avatarSrc) return person
  const avatarSrc = resolveImageSrc(person.avatarSrc)
  return avatarSrc ? { ...person, avatarSrc } : { ...person, avatarSrc: undefined }
}

function resolvePhoto(photo: PostPhoto): PostPhoto {
  const src = resolveImageSrc(photo.src)
  return src ? { ...photo, src } : photo
}

export function resolveFeedPosts(posts: FeedPost[]): FeedPost[] {
  return posts.map((post) => ({
    ...post,
    author: resolvePerson(post.author),
    photo: resolvePhoto(post.photo),
    comments: post.comments.map(
      (comment): CommentItem => ({
        ...comment,
        author: resolvePerson(comment.author),
      }),
    ),
  }))
}
