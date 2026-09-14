import { finalCta } from '../../data/site'
import { whatsappLink } from '../../lib/whatsapp'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function FinalCta() {
  const whatsappHref = whatsappLink('Olá! Tenho interesse em criar uma página para o meu negócio.')

  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl rounded-3xl border border-line bg-surface px-8 py-14 text-center sm:px-14 sm:py-16">
          <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            {finalCta.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-muted">
            {finalCta.body}
          </p>
          <div className="mt-9">
            <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="primary">
              {finalCta.cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
