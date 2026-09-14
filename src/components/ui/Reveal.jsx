import { useReveal } from '../../hooks/useReveal'

/**
 * Envolve qualquer bloco de conteúdo em uma transição sutil de entrada
 * no viewport (fade + leve deslocamento vertical). Respeita
 * prefers-reduced-motion automaticamente via useReveal.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const { ref, isVisible } = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      {...props}
    >
      {children}
    </Tag>
  )
}
