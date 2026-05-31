import type { CommentItem as CommentItemModel } from '../../types/feed'
import { parseInlineText } from '../../utils/parseInlineText'
import { Avatar } from './Avatar'

export function CommentItem({ comment }: { comment: CommentItemModel }) {
  return (
    <li className="comment">
      <div className="comment-inner">
        <Avatar person={comment.author} size="suggestion" />
        <div className="comment-bubble">
          <p className="comment-author-line">
            <span className="comment-author">{comment.author.name}</span>
            <span className="comment-time">· {comment.timeRelative}</span>
          </p>
          <p className="comment-text">{parseInlineText(comment.text)}</p>
        </div>
      </div>
    </li>
  )
}
