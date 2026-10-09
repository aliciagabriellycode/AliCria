import { solution } from '../../data/site'
import Reveal from '../ui/Reveal'
import BusinessPagePreview from '../previews/BusinessPagePreview'

// Ordem da legenda e dos marcadores; cada item é buscado pelo nome do label
// em `solution.annotations`, nunca pela posição no array.
const order = ['Fotos', 'Serviços', 'Diferenciais', 'Localização', 'Orçamento', 'WhatsApp']
const keys = {
  Fotos: 'photo',
  Serviços: 'services',
  Diferenciais: 'differentials',
  Localização: 'location',
  Orçamento: 'budget',
  WhatsApp: 'whatsapp',
}

export default function Solution() {
  const byLabel = Object.fromEntries(solution.annotations.map((a) => [a.label, a]))
  const items = order.map((label, i) => ({ ...byLabel[label], n: i + 1 })).filter((it) => it.label)
  const markers = Object.fromEntries(items.map((it) => [keys[it.label], it.n]))

  return (
    <section id="solucao" className="bg-surface py-20 sm:py-28">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <h2 className="max-w-md text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            {solution.headline}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">{solution.body}</p>

          <ol className="mt-9 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-[11px] font-extrabold text-white">
                  {item.n}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{item.label}</p>
                  <p className="text-xs text-ink-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={120}>
          <BusinessPagePreview markers={markers} />
        </Reveal>
      </div>
    </section>
  )
}
