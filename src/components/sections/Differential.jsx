import { differential } from '../../data/site'
import Reveal from '../ui/Reveal'

export default function Differential() {
  return (
    <section id="diferencial" className="bg-brand-deep py-20 text-white sm:py-28">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            {differential.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">{differential.body}</p>
        </Reveal>

        <Reveal delay={120} className="flex flex-wrap content-start gap-2.5 lg:pt-2">
          {differential.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/85"
            >
              {topic}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
