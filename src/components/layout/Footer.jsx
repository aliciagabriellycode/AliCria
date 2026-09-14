import { MessageCircle, Mail } from 'lucide-react'
import { footer, brand } from '../../data/site'

// lucide-react não inclui ícones de marca (Instagram); um traço simples
// mantém a mesma linguagem visual dos demais ícones (stroke, sem preenchimento).
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  const message = encodeURIComponent('Olá! Quero saber mais sobre a landing page da AliCria.')
  const whatsappHref = `https://wa.me/${brand.whatsapp.number}?text=${message}`

  const socials = [
    // TODO(AliCria): substituir os placeholders pelos links reais das redes
    { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/alicria' },
    { icon: MessageCircle, label: 'WhatsApp', href: whatsappHref },
    { icon: Mail, label: 'E-mail', href: `mailto:${brand.email}` },
  ]

  return (
    <footer className="border-t border-line bg-white py-14">
      <div className="container-page">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-extrabold text-ink">{brand.name}</p>
            <p className="mt-1.5 text-sm text-ink-muted">{footer.tagline}</p>
          </div>

          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-ink-soft transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.legal}</p>
          <p>
            {/* TODO(AliCria): links de redes sociais e e-mail ainda são placeholders */}
            Links de contato temporários — a atualizar.
          </p>
        </div>
      </div>
    </footer>
  )
}
