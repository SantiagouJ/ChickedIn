import { NEARBY_HENS, TRENDS } from '../../data/sidebar'
import { NearbyHensPanel } from '../sidebar/NearbyHensPanel'
import { TrendsPanel } from '../sidebar/TrendsPanel'

export function RightRail() {
  return (
    <aside className="rail-right" aria-label="Sugerencias y tendencias">
      <NearbyHensPanel hens={NEARBY_HENS} />
      <TrendsPanel items={TRENDS} />
    </aside>
  )
}
