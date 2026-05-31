import type { FeedPost } from '../../types/feed'
import { CommentItem } from './CommentItem'

export function PostCommentsPanel({
  postId,
  headingCountLabel,
  comments,
}: Pick<FeedPost, 'comments'> & {
  postId: string
  headingCountLabel: string
}) {
  const headingId = `comments-${postId}-heading`
  return (
    <aside className="post-comments" aria-labelledby={headingId}>
      <h3 id={headingId} className="post-comments-heading">
        Comentarios · {headingCountLabel}
      </h3>
      <ul className="comment-list">
        {comments.map((c) => (
          <CommentItem key={c.id} comment={c} />
        ))}
      </ul>
    </aside>
  )
}
