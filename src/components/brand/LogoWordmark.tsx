export function LogoWordmark({
  variant = 'full',
}: {
  variant?: 'full' | 'mobile' | 'header'
}) {
  if (variant === 'header') {
    return <span className="header-wordmark">ChickedIn</span>
  }
  if (variant === 'mobile') {
    return <span className="mobile-logo">ChickedIn</span>
  }
  return <div className="logo-word">ChickedIn</div>
}
