import { differential } from '../../data/site'
import Reveal from '../ui/Reveal'
import Shape from '../ui/Shapes'

const glyphs = ['disc', 'arch', 'petal', 'quarterTL', 'disc', 'quarterBR']

export default function Differential() {
  return (
    <section id="diferencial" data-theme="dark" className="relative overflow-hidden bg-brand-deep py-20 text-white sm:py-28">
      <Shape
        kind="arch"
        className="pointer-events-none absolute -right-16 -bottom-px hidden h-[26rem] w-80 border-[3px] border-b-0 border-brand-bright/50 lg:block"
      />
      <div className="container-page relative grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <Reveal>
          <h2 className="text-3xl leading-tight sm:text-5xl">
            <span className="block font-light text-lilac">{differential.headline[0]}</span>
            <span className="block font-extrabold">{differential.headline[1]}</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-lilac">{differential.body}</p>
        </Reveal>

        <Reveal delay={120} className="flex flex-wrap content-start gap-2.5 lg:pt-2">
          {differential.topics.map((topic, i) => (
            <span
              key={topic}
              className="inline-flex items-center gap-2.5 rounded-full border border-lilac/40 py-2 pl-3 pr-4 text-sm font-semibold text-white"
            >
              <Shape kind={glyphs[i % glyphs.length]} className="h-3.5 w-3.5 bg-brand-bright" />
              {topic}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
