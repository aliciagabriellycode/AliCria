const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 ease-soft focus-visible:outline-offset-4 text-center sm:whitespace-nowrap'

const variants = {
  primary:
    'bg-brand text-white shadow-lift hover:bg-brand-deep hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-transparent text-ink border border-line hover:border-brand/40 hover:text-brand hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'bg-white text-ink border border-line hover:border-brand/40 hover:text-brand',
}

export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
