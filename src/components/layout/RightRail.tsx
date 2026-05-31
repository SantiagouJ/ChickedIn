import { NEARBY_HENS, TRENDS } from '../../data/sidebar'
import { NearbyHensPanel } from '../sidebar/NearbyHensPanel'
import { TrendsPanel } from '../sidebar/TrendsPanel'

export function RightRail() {
  return (
    <aside className="rail-right" aria-label="Tendencias y contexto">
      <TrendsPanel items={TRENDS} />
      <NearbyHensPanel hens={NEARBY_HENS} />
    </aside>
  )
}
