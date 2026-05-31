export function PostActions() {
  return (
    <footer className="post-actions">
      <button type="button" className="post-action">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M7 10v12l5-3 5 3V10M12 3l7 4v7l-7-4-7 4V7l7-4z" />
        </svg>
        Me gusta
      </button>
      <button type="button" className="post-action">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M21 15a4 4 0 01-4 4H8l-5 3V9a4 4 0 014-4h10a4 4 0 014 4v6z" />
        </svg>
        Comentar
      </button>
      <button type="button" className="post-action">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M4 12v7a1 1 0 001 1h3m10-8l-4-4m4 4l-4 4m4-4H9a4 4 0 00-4 4v1" />
        </svg>
        Compartir
      </button>
    </footer>
  )
}
