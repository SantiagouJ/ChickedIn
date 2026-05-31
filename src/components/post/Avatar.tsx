import { useState } from 'react'
import type { Person } from '../../types/feed'

const toneClass = (tone: Person['avatarTone']) => {
  if (tone === 'warm') return 'avatar avatar--warm'
  if (tone === 'muted') return 'avatar avatar--muted'
  return 'avatar'
}

export function Avatar({
  person,
  size = 'md',
}: {
  person: Pick<Person, 'name' | 'initials' | 'avatarSrc' | 'avatarTone'>
  size?: 'md' | 'xs' | 'suggestion'
}) {
  const [imageFailed, setImageFailed] = useState(false)
  const showPhoto = Boolean(person.avatarSrc) && !imageFailed

  const cls = [
    toneClass(person.avatarTone),
    size === 'xs' ? 'avatar--xs' : '',
    size === 'suggestion' ? 'avatar--suggestion' : '',
    showPhoto ? 'avatar--photo' : '',
  ]
    .filter(Boolean)
    .join(' ')

  if (showPhoto) {
    return (
      <div className={cls}>
        <img
          className="avatar__img"
          src={person.avatarSrc}
          alt={person.name}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      </div>
    )
  }

  return (
    <div className={cls} aria-hidden="true">
      {person.initials}
    </div>
  )
}
