import { customProjects, brand } from '../../data/site'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function CustomProjects() {
  const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para o meu negócio.')
  const whatsappHref = `https://wa.me/${brand.whatsapp.number}?text=${message}`

  return (
    <section id="orcamento" className="bg-surface py-20 sm:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-5xl">
              {customProjects.headline}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              {customProjects.text}
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              {customProjects.complement}
            </p>

            <div className="mt-9">
              <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="primary" arrow>
                {customProjects.cta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-base font-extrabold text-ink">
              {customProjects.examplesLabel}
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {customProjects.examples.map((item, i) => (
                <span
                  key={item}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    ['bg-brand text-white', 'bg-lilac text-brand-deep', 'border-2 border-brand text-brand'][i % 3]
                  }`}
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
