import { process } from '../../data/site'
import Reveal from '../ui/Reveal'

export default function Process() {
  return (
    <section id="processo" className="border-t border-line bg-paper-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="max-w-lg">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">{process.headline}</h2>
        </Reveal>

        <ol className="mt-16 space-y-10 sm:space-y-0">
          {process.steps.map((step, i) => (
            <Reveal
              key={step.number}
              as="li"
              delay={i * 90}
              className={`relative border-t border-line pt-6 sm:flex sm:items-baseline sm:gap-8 sm:py-8 ${
                i % 2 === 1 ? 'sm:pl-[18%]' : ''
              }`}
            >
              <span className="text-sm font-bold tracking-wide text-brand/60 sm:w-10 sm:shrink-0">
                {step.number}
              </span>
              <div className="mt-2 sm:mt-0 sm:flex sm:flex-1 sm:items-baseline sm:justify-between sm:gap-8">
                <h3 className="text-xl font-bold text-ink sm:w-64 sm:shrink-0">{step.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted sm:mt-0">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
