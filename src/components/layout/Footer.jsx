import { MessageCircle, Mail } from 'lucide-react'
import { footer, brand } from '../../data/site'
import { whatsappLink } from '../../lib/whatsapp'
import alicriaIcon from '../../assets/brand/alicria-icon.png'

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
  const whatsappHref = whatsappLink('Olá! Quero saber mais sobre a AliCria.')

  const socials = [
    // TODO(AliCria): confirmar o usuário real do Instagram antes de publicar
    { icon: InstagramIcon, label: 'Instagram', href: `https://instagram.com/${brand.instagram.replace('@', '')}` },
    { icon: MessageCircle, label: 'WhatsApp', href: whatsappHref },
    { icon: Mail, label: 'E-mail', href: `mailto:${brand.email}` },
  ]

  return (
    <footer className="border-t border-line bg-white py-14">
      <div className="container-page">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={alicriaIcon} alt="" className="h-9 w-9" aria-hidden="true" />
            <div>
              <p className="text-lg font-extrabold text-ink">{brand.name}</p>
              <p className="mt-0.5 text-sm text-ink-muted">{footer.tagline}</p>
            </div>
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

        {/* TODO(AliCria): Instagram e e-mail seguem com dados provisórios até a confirmação oficial. */}
        <div className="mt-10 border-t border-line pt-6 text-xs text-ink-muted">
          <p>{footer.legal}</p>
        </div>
      </div>
    </footer>
  )
}
