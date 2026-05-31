import { USER_PROFILE } from '../../data/profile'
import pfpollo from '../../assets/pfpollo.png'
import { Avatar } from '../post/Avatar'

export function ProfileCard() {
  return (
    <aside className="rail-left" aria-label="Tu perfil">
      <div className="profile-card">
        <div className="profile-card__banner" aria-hidden="true" />
        <div className="profile-card__avatar-wrap">
          <Avatar
            person={{
              name: USER_PROFILE.name,
              initials: 'PA',
              avatarSrc: pfpollo,
            }}
            size="profile"
          />
        </div>
        <div className="profile-card__body">
          <h2 className="profile-card__name">{USER_PROFILE.name}</h2>
          <p className="profile-card__title">{USER_PROFILE.title}</p>
          <p className="profile-card__connections">
            {USER_PROFILE.connections} conexiones
          </p>
          <div className="profile-card__views">
            <div className="profile-card__viewers" aria-hidden="true">
              {USER_PROFILE.viewers.map((initials) => (
                <span key={initials} className="profile-viewer-dot">
                  {initials}
                </span>
              ))}
            </div>
            <p className="profile-card__views-label">{USER_PROFILE.viewsLabel}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
