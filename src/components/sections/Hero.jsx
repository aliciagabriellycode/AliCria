import { hero } from '../../data/site'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import BusinessPagePreview from '../previews/BusinessPagePreview'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-24 lg:pt-24">
      <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_0.92fr] lg:gap-10">
        <div className="max-w-xl">
          <Reveal>
            <h1 className="text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              <span className="block text-ink-soft font-semibold">{hero.headlineLines[0]}</span>
              <span className="mt-1 block">{hero.headlineLines[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={90}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">{hero.subheadline}</p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={hero.ctaPrimary.href} variant="primary">
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="secondary">
                {hero.ctaSecondary.label}
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rotate-[1.2deg]">
            <BusinessPagePreview variant="compact" />
          </div>
          <p className="mt-4 text-center text-sm text-ink-muted lg:text-left">
            É mais ou menos assim que a página do seu negócio pode ficar.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
