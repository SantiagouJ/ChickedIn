import type { NearbyHen } from '../../types/feed'
import { Avatar } from '../post/Avatar'
import pfpaloma from '../../assets/pfpaloma.png'
import pffenix from '../../assets/pffenix.png'
import pfcresta from '../../assets/pf3.png'


export function NearbyHensPanel({ hens }: { hens: NearbyHen[] }) {
  return (
    <div className="panel">
      <h2 className="panel-title panel-title--plain">Añadir a tu feed</h2>
      <ul className="suggest-list">
        {hens.map((h) => {
          const getAvatar = () => {
            if (h.initials === 'PR') return pfpaloma
            if (h.initials === 'AF') return pffenix
            if (h.initials === 'CF') return pfcresta
            return h.avatarSrc
          }

          return (
            <li key={h.initials + h.name} className="suggest-row">
              <Avatar
                person={{
                  name: h.name,
                  initials: h.initials,
                  avatarSrc: getAvatar(),
                  avatarTone: h.tone,
                }}
                size="suggestion"
              />
              <div className="suggest-text">
                <strong>{h.name}</strong>
                <span>{h.subtitle}</span>
              </div>
              <button type="button" className="btn-add-feed">
                Añadir
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
