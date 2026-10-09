const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-bold transition-all duration-300 ease-soft focus-visible:outline-offset-4 text-center sm:whitespace-nowrap'

const variants = {
  primary: 'bg-brand text-white shadow-lift hover:bg-brand-deep hover:-translate-y-0.5 active:translate-y-0',
  secondary: 'border-2 border-ink text-ink hover:bg-ink hover:text-white',
  light: 'bg-white text-brand-deep hover:bg-lilac hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'bg-white text-ink border border-line hover:border-brand/40 hover:text-brand',
}

export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  arrow = false,
  className = '',
  children,
  ...props
}) {
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {arrow && (
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </Tag>
  )
}
