import type { ReactNode } from 'react'

const INLINE_TOKEN =
  /(\*[^*]+\*|#[\w\u00C0-\u017F]+|@[\w\u00C0-\u017F]+)/gi

export function parseInlineText(text: string): ReactNode[] {
  return text.split(INLINE_TOKEN).map((part, index) => {
    if (!part) return null
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>
    }
    if (part.startsWith('#')) {
      return (
        <span key={index} className="text-hashtag">
          {part}
        </span>
      )
    }
    if (part.startsWith('@')) {
      return (
        <span key={index} className="text-mention">
          {part}
        </span>
      )
    }
    return part
  })
}
