import { MAIN_NAV } from '../../data/navigation'
import { NavIcon } from '../icons/NavIcon'
import { LogoWordmark } from '../brand/LogoWordmark'
import logo from '../../assets/logo.png'

export function LeftRail() {
  return (
    <aside className="rail-left" aria-label="Navegación principal">
      <div className="logo-block">
        <div className="logo-mark" aria-hidden="true" style={{ overflow: 'hidden', padding: 0 }}>
          <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <LogoWordmark />
        <p className="tagline">
          Conectar. Picotear ideas. Escarbar la verdad.
        </p>
      </div>
      <nav className="rail-nav">
        {MAIN_NAV.map((item) => (
          <a
            key={item.label}
            className="nav-item"
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
          >
            <NavIcon name={item.icon} />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
