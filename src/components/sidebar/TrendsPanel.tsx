import type { TrendItem } from '../../types/feed'

export function TrendsPanel({ items }: { items: TrendItem[] }) {
  return (
    <div className="panel">
      <h2 className="panel-title panel-title--plain">Noticias avícolas en tendencia</h2>
      <ul className="news-list">
        {items.map((t, i) => (
          <li key={t.title}>
            <a href="#feed" className="news-row">
              <strong>{t.title}</strong>
              {t.description ? <span>{t.description}</span> : null}
            </a>
            {i < items.length - 1 ? <hr className="news-divider" /> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
