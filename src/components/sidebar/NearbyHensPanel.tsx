import type { NearbyHen } from '../../types/feed'
import { Avatar } from '../post/Avatar'
import pfpaloma from '../../assets/pfpaloma.png'
import pffenix from '../../assets/pffenix.png'

export function NearbyHensPanel({ hens }: { hens: NearbyHen[] }) {
  return (
    <div className="panel">
      <h2 className="panel-title">Sugerencias gallinas cercanas</h2>
      {hens.map((h) => {
        const getAvatar = () => {
          if (h.initials === 'PR') return pfpaloma
          if (h.initials === 'AF') return pffenix
          return h.avatarSrc
        }

        return (
          <a key={h.initials + h.name} href="#feed" className="trend-row">
            <Avatar
              person={{
                name: h.name,
                initials: h.initials,
                avatarSrc: getAvatar(),
                avatarTone: h.tone,
              }}
              size="suggestion"
            />
            <div className="trend-text">
              <strong>{h.name}</strong>
              <span>{h.subtitle}</span>
            </div>
          </a>
        )
      })}
    </div>
  )
}
