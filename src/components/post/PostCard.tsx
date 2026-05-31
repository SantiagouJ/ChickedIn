import type { FeedPost } from '../../types/feed'
import { Avatar } from './Avatar'
import { PostBody } from './PostBody'
import { PostCommentsPanel } from './PostCommentsPanel'
import { PostMetrics } from './PostMetrics'
import { PostPhotoBlock } from './PostVisual'

export function PostCard({ post, index }: { post: FeedPost; index: number }) {
  return (
    <article className="post" style={{ animationDelay: `${(index + 1) * 0.08}s` }}>
      <div className="post-layout">
        <div className="post-main">
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
          <PostBody text={post.body} />
          <PostPhotoBlock photo={post.photo} />
          <PostMetrics lines={post.metrics} />
        </div>
        <PostCommentsPanel
          postId={post.id}
          headingCountLabel={post.commentsHeadingCount}
          comments={post.comments}
        />
      </div>
    </article>
  )
}
