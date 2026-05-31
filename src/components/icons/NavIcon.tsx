import type { NavIconName } from '../../data/navigation'

const attrs = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
} as const

export function NavIcon({ name }: { name: NavIconName | 'search' }) {
  switch (name) {
    case 'home':
      return (
        <svg {...attrs}>
          <path d="M4 11.5L12 5l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z" />
        </svg>
      )
    case 'network':
      return (
        <svg {...attrs}>
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.2 1.8-4.5 4-4.5" />
        </svg>
      )
    case 'jobs':
      return (
        <svg {...attrs}>
          <rect x="3" y="7" width="18" height="13" rx="1" />
          <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
        </svg>
      )
    case 'messaging':
      return (
        <svg {...attrs}>
          <path d="M21 15a4 4 0 01-4 4H8l-5 3V9a4 4 0 014-4h10a4 4 0 014 4v6z" />
        </svg>
      )
    case 'notifications':
      return (
        <svg {...attrs}>
          <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7M13.7 21a2 2 0 01-3.4 0" />
        </svg>
      )
    case 'search':
      return (
        <svg {...attrs}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.2-4.2" />
        </svg>
      )
    default:
      return null
  }
}
