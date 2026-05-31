import { ComposeCard } from '../feed/ComposeCard'
import { FeedFootnote } from '../feed/FeedFootnote'
import { FeedPosts } from '../feed/FeedPosts'
import { ProfileCard } from './ProfileCard'
import { RightRail } from './RightRail'
import { SiteFooter } from './SiteFooter'
import { TopHeader } from './TopHeader'

export function AppLayout() {
  return (
    <div className="app-shell">
      <TopHeader />
      <div className="app">
        <ProfileCard />
        <main id="feed" className="feed-wrap">
          <ComposeCard />
          <FeedPosts />
          <FeedFootnote />
        </main>
        <RightRail />
      </div>
      <SiteFooter />
    </div>
  )
}
