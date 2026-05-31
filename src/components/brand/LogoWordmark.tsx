export function LogoWordmark({
  variant = 'full',
}: {
  variant?: 'full' | 'mobile'
}) {
  return (
    <div className={variant === 'mobile' ? 'mobile-logo' : 'logo-word'}>
      Chicked<span>In</span>
    </div>
  )
}
