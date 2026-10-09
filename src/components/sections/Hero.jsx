import { hero } from '../../data/site'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import Shape from '../ui/Shapes'
import mainPhoto from '../../assets/jr-porcelanato/jr-bancada-principal.jpg'
import secondPhoto from '../../assets/jr-porcelanato/jr-pia-escultural-branca.jpg'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-24 lg:pt-20">
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="max-w-2xl">
          <Reveal>
            <h1 className="text-[clamp(2.2rem,5vw,3.9rem)] leading-[1.04] tracking-tight">
              <span className="block font-light text-brand">{hero.headlineLines[0]}</span>
              <span className="mt-2 block font-extrabold text-ink">{hero.headlineLines[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={90}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">{hero.subheadline}</p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={hero.ctaPrimary.href} variant="primary" arrow>
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="secondary">
                {hero.ctaSecondary.label}
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-[5/6] w-full max-w-[460px]">
            <Shape kind="arch" className="absolute inset-x-[8%] bottom-0 top-[6%] bg-brand" />
            <img
              src={mainPhoto}
              alt="Bancada de porcelanato feita pela JR Porcelanato, cliente real da AliCria"
              width={685}
              height={913}
              className="absolute inset-x-[15%] bottom-0 top-[12%] h-[88%] w-[70%] object-cover"
              style={{ borderRadius: '999px 999px 0 0' }}
            />
            <img
              src={secondPhoto}
              alt="Pia esculpida em porcelanato branco da JR Porcelanato"
              width={350}
              height={464}
              className="absolute -left-[2%] top-[56%] h-[34%] w-[34%] rounded-full border-[6px] border-paper object-cover"
            />
            <Shape kind="petal" className="absolute -right-[2%] top-0 h-[22%] w-[22%] bg-lilac" />
            <Shape kind="quarterBL" className="absolute -right-[2%] bottom-[8%] h-[16%] w-[16%] bg-brand-bright" />
            <div className="absolute bottom-[3%] right-0 rounded-2xl bg-white px-4 py-3 shadow-lift">
              <p className="text-xs font-bold text-brand">Projeto real</p>
              <p className="text-sm font-extrabold text-ink">JR Porcelanato</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
