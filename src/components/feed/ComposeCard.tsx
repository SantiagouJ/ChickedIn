import { useState } from 'react'
import pfpollo from '../../assets/pfpollo.png'
import { Avatar } from '../post/Avatar'

const EMPTY_HINT =
  'Escribe algo antes: cada detalle cuenta en la auditoría abierta.'
const DEMO_MSG =
  'Gracias. Tu post quedó en cola de revisión editorial del gallinero (demo estática).'

export function ComposeCard() {
  const [value, setValue] = useState('')
  const [placeholder, setPlaceholder] = useState(
    'Comparte datos (espacio disponible, acceso al perchero, silencios incómodos en la línea...)',
  )

  function publish() {
    const next = value.trim()
    if (next) {
      setValue('')
      window.alert(DEMO_MSG)
      return
    }
    setPlaceholder(EMPTY_HINT)
  }

  return (
    <section className="compose-card" aria-labelledby="compose-label">
      <div className="compose-inner">
        <Avatar
          person={{
            name: 'Yo',
            initials: 'Yo',
            avatarSrc: pfpollo,
          }}
        />
        <div className="compose-field-wrap">
          <p id="compose-label" className="compose-label">
            ¿Qué problemática observaste en el turno?
          </p>
          <label className="visually-hidden" htmlFor="compose">
            Escribir publicación
          </label>
          <textarea
            id="compose"
            className="compose-input"
            rows={2}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
          />
        </div>
      </div>
      <div className="compose-actions">
        <button type="button" className="btn-publish" onClick={publish}>
          Publicar en la bandada
        </button>
      </div>
    </section>
  )
}
