import { MAIN_NAV } from '../../data/navigation'
import logo from '../../assets/logo.png'
import { NavIcon } from '../icons/NavIcon'
import { LogoWordmark } from '../brand/LogoWordmark'

export function TopHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#feed" className="site-header__brand">
          <img src={logo} alt="" className="site-header__logo" width={40} height={40} />
          <LogoWordmark variant="header" />
        </a>

        <div className="site-header__search" role="search">
          <label className="visually-hidden" htmlFor="header-search">
            Buscar en ChickedIn
          </label>
          <input
            id="header-search"
            type="search"
            className="header-search-input"
            placeholder="Buscar"
            autoComplete="off"
          />
          <span className="header-search-icon" aria-hidden="true">
            <NavIcon name="search" />
          </span>
        </div>

        <nav className="site-header__nav" aria-label="Navegación principal">
          {MAIN_NAV.map((item) => (
            <a
              key={item.label}
              className="header-nav-item"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
            >
              <NavIcon name={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
