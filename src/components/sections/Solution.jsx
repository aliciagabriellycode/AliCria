import { solution } from '../../data/site'
import Reveal from '../ui/Reveal'
import BusinessPagePreview from '../previews/BusinessPagePreview'

// Mapeia cada anotação ao ponto correspondente no preview pelo texto do
// label (não pela posição no array), pra nunca desalinhar se a ordem em
// `solution.annotations` mudar.
const byLabel = Object.fromEntries(solution.annotations.map((item) => [item.label, item.label]))

export default function Solution() {
  const annotate = {
    services: byLabel['Serviços'],
    photo: byLabel['Fotos'],
    differentials: byLabel['Diferenciais'],
    location: byLabel['Localização'],
    budget: byLabel['Orçamento'],
    whatsapp: byLabel['WhatsApp'],
  }

  return (
    <section id="solucao" className="bg-surface py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="max-w-lg">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">{solution.headline}</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">{solution.body}</p>
        </Reveal>

        <Reveal delay={120} className="mt-14 lg:pr-44">
          <BusinessPagePreview variant="full" annotate={annotate} />
        </Reveal>

        {/* Lista de apoio para telas menores, onde as anotações ao lado do preview ficam ocultas. */}
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:hidden">
          {solution.annotations.map((item) => (
            <li key={item.label}>
              <p className="text-sm font-semibold text-ink">{item.label}</p>
              <p className="text-xs text-ink-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
