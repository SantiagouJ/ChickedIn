import { ComposeCard } from '../feed/ComposeCard'
import { FeedFootnote } from '../feed/FeedFootnote'
import { FeedPosts } from '../feed/FeedPosts'
import { MobileTopBar } from '../feed/MobileTopBar'
import { LeftRail } from './LeftRail'
import { RightRail } from './RightRail'

export function AppLayout() {
  return (
    <div className="app">
      <LeftRail />
      <main id="feed" className="feed-wrap">
        <MobileTopBar />
        <ComposeCard />
        <FeedPosts />
        <FeedFootnote />
      </main>
      <RightRail />
    </div>
  )
}
