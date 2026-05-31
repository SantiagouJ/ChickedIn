import type { MetricLine } from '../../types/feed'

export function PostMetrics({ lines }: { lines: [MetricLine, MetricLine] }) {
  return (
    <footer className="post-metrics">
      <span>
        <strong>{lines[0].value}</strong> {lines[0].label}
      </span>
      <span>
        <strong>{lines[1].value}</strong> {lines[1].label}
      </span>
    </footer>
  )
}
