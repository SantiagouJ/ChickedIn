import { useState } from 'react'
import {
  POST_PHOTO_HEIGHT,
  POST_PHOTO_WIDTH,
  type PostPhoto,
} from '../../types/feed'

function PostPhotoPlaceholder({ alt }: { alt: string }) {
  const dimensionLabel = `${POST_PHOTO_WIDTH} × ${POST_PHOTO_HEIGHT}`

  return (
    <figure className="post-photo post-photo--placeholder" aria-label={alt}>
      <div className="post-photo__placeholder">
        <span className="post-photo__dimension">{dimensionLabel}</span>
      </div>
    </figure>
  )
}

export function PostPhotoBlock({ photo }: { photo: PostPhoto }) {
  const [imageFailed, setImageFailed] = useState(false)

  if (photo.src && !imageFailed) {
    return (
      <figure className="post-photo">
        <img
          className="post-photo__img"
          src={photo.src}
          alt={photo.alt}
          width={POST_PHOTO_WIDTH}
          height={POST_PHOTO_HEIGHT}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      </figure>
    )
  }

  return <PostPhotoPlaceholder alt={photo.alt} />
}
