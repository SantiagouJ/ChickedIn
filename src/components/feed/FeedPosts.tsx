import { FEED_POSTS } from '../../data/posts'
import { PostCard } from '../post/PostCard'

export function FeedPosts() {
  return (
    <section className="posts" aria-label="Publicaciones">
      {FEED_POSTS.map((post, index) => (
        <PostCard key={post.id} post={post} index={index} />
      ))}
    </section>
  )
}
