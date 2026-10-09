import { process } from '../../data/site'
import Reveal from '../ui/Reveal'
import Shape from '../ui/Shapes'

const shapes = ['quarterTL', 'disc', 'petal', 'arch']

export default function Process() {
  return (
    <section id="processo" className="bg-paper-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="max-w-lg">
          <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">{process.headline}</h2>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {process.steps.map((step, i) => (
            <Reveal key={step.number} as="li" delay={i * 90} className="relative">
              <div className="h-1.5 w-full rounded-full bg-surface">
                <div className="h-full rounded-full bg-brand" style={{ width: `${(i + 1) * 25}%` }} />
              </div>
              <div className="mt-6 flex items-end justify-between">
                <span className="text-outline text-6xl font-extrabold leading-none">{step.number}</span>
                <Shape kind={shapes[i]} className="h-10 w-10 bg-brand-bright" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
