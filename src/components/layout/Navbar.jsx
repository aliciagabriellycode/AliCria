import { useEffect, useState } from 'react'
import { nav, brand } from '../../data/site'
import { whatsappLink } from '../../lib/whatsapp'
import Button from '../ui/Button'
import alicriaWordmark from '../../assets/brand/alicria-wordmark.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const ctaHref = whatsappLink('Olá! Tenho interesse em conhecer a AliCria e quero apresentar melhor o meu negócio.')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-soft ${
        scrolled
          ? 'bg-paper/90 backdrop-blur-md border-b border-line shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        className="container-page flex h-[72px] items-center justify-between"
        aria-label="Navegação principal"
      >
        <a href="#top" className="shrink-0" aria-label={brand.name}>
          <img src={alicriaWordmark} alt={brand.name} className="h-7 w-auto sm:h-8" />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {nav.links.map((link) => (
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

        <Button
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="hidden md:inline-flex px-5 py-2.5 text-sm"
        >
          {nav.cta.label}
        </Button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-4 bg-ink transition-transform duration-300 ${
                open ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-ink transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[1.5px] w-4 bg-ink transition-transform duration-300 ${
                open ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-b border-line bg-paper transition-[max-height] duration-300 ease-soft md:hidden ${
          open ? 'max-h-72' : 'max-h-0 border-transparent'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-3">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block rounded-lg px-2 py-2.5 text-[15px] font-medium text-ink-soft hover:bg-surface hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              variant="primary"
              className="w-full"
            >
              {nav.cta.label}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
