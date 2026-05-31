import type { FeedPost } from '../../types/feed'
import { Avatar } from './Avatar'
import { PostBody } from './PostBody'
import { PostActions } from './PostActions'
import { PostCommentsPanel } from './PostCommentsPanel'
import { PostPhotoBlock } from './PostVisual'
import { ProblemTag } from './ProblemTag'

export function PostCard({ post, index }: { post: FeedPost; index: number }) {
  return (
    <article
      className="post"
      style={{ animationDelay: `${(index + 1) * 0.06}s` }}
    >
      <header className="post-header">
        <Avatar person={post.author} />
        <div className="post-meta">
          <div className="post-name-row">
            <span className="post-name">{post.author.name}</span>
            {post.verified ? (
              <span
                className="post-verified"
                title="Verificada en avicultura intensiva"
              >
                ✓
              </span>
            ) : null}
            <span className="post-time" title="Tiempo desde la publicación">
              {post.timeRelative}
            </span>
          </div>
          <p className="post-role">{post.role}</p>
        </div>
      </header>
      {post.problemTag ? <ProblemTag label={post.problemTag} /> : null}
      <PostBody text={post.body} />
      <PostPhotoBlock photo={post.photo} />
      <PostActions />
      {post.comments.length > 0 ? (
        <PostCommentsPanel
          postId={post.id}
          headingCountLabel={post.commentsHeadingCount}
          comments={post.comments}
        />
      ) : null}
    </article>
  )
}
