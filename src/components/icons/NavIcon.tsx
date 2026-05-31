import type { NavIconName } from '../../data/navigation'

const attrs = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
} as const

export function NavIcon({ name }: { name: NavIconName }) {
  switch (name) {
    case 'home':
      return (
        <svg {...attrs}>
          <path d="M4 11.5L12 5l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z" />
        </svg>
      )
    case 'search':
      return (
        <svg {...attrs}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.2-4.2" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...attrs}>
          <path d="M21 15a4 4 0 01-4 4H8l-5 3V9a4 4 0 014-4h10a4 4 0 014 4v6z" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...attrs}>
          <path d="M17 21v-7M12 21V3M7 21v-4" />
        </svg>
      )
    default:
      return null
  }
}
