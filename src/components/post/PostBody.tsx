import { Fragment } from 'react'
import { parseInlineText } from '../../utils/parseInlineText'

export function PostBody({ text }: { text: string }) {
  const paragraphs = text.split('\n\n').filter(Boolean)

  return (
    <div className="post-body">
      {paragraphs.map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex}>
          {paragraph.split('\n').map((line, lineIndex, lines) => (
            <Fragment key={lineIndex}>
              {parseInlineText(line)}
              {lineIndex < lines.length - 1 ? <br /> : null}
            </Fragment>
          ))}
        </p>
      ))}
    </div>
  )
}
