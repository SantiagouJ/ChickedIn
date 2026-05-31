export type NavIconName =
  | 'home'
  | 'network'
  | 'jobs'
  | 'messaging'
  | 'notifications'

export interface NavItem {
  label: string
  href: string
  icon: NavIconName
  current?: boolean
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Inicio', href: '#feed', icon: 'home', current: true },
  { label: 'Mi red', href: '#feed', icon: 'network' },
  { label: 'Empleos', href: '#feed', icon: 'jobs' },
  { label: 'Mensajes', href: '#feed', icon: 'messaging' },
  { label: 'Notificaciones', href: '#feed', icon: 'notifications' },
]
