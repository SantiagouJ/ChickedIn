export type NavIconName = 'home' | 'search' | 'mail' | 'chart'

export interface NavItem {
  label: string
  href: string
  icon: NavIconName
  current?: boolean
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Inicio', href: '#feed', icon: 'home', current: true },
  { label: 'Explore el corral', href: '#feed', icon: 'search' },
  { label: 'Correo del gallinero', href: '#feed', icon: 'mail' },
  { label: 'Insights pico a pico', href: '#feed', icon: 'chart' },
]
