import { customProjects } from '../../data/site'
import { whatsappLink } from '../../lib/whatsapp'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function CustomProjects() {
  const whatsappHref = whatsappLink('Olá! Gostaria de solicitar um orçamento para o meu negócio.')

  return (
    <section id="orcamento" className="border-t border-line bg-paper-white py-20 sm:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              {customProjects.headline}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
              {customProjects.text}
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
              {customProjects.complement}
            </p>

            <div className="mt-9">
              <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="primary">
                {customProjects.cta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-muted">
              {customProjects.examplesLabel}
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {customProjects.examples.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              {customProjects.examplesNote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
