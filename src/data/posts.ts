import postsData from './posts.json'
import { resolveFeedPosts } from './resolveMedia'
import type { FeedPost } from '../types/feed'

export const FEED_POSTS = resolveFeedPosts(postsData as unknown as FeedPost[])
