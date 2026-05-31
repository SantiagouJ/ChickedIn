import type { TrendItem } from '../../types/feed'

export function TrendsPanel({ items }: { items: TrendItem[] }) {
  return (
    <div className="panel">
      <h2 className="panel-title">Tendencias en el corral</h2>
      {items.map((t) => (
        <a key={t.num} href="#feed" className="trend-row">
          <span className="trend-num">{t.num}</span>
          <div className="trend-text">
            <strong>{t.title}</strong>
            <span>{t.description}</span>
          </div>
        </a>
      ))}
    </div>
  )
}
