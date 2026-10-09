import { finalCta, brand } from '../../data/site'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import Shape from '../ui/Shapes'

export default function FinalCta() {
  const message = encodeURIComponent('Olá! Quero saber mais sobre a landing page da AliCria.')
  const whatsappHref = `https://wa.me/${brand.whatsapp.number}?text=${message}`

  return (
    <section id="contato" data-theme="dark" className="bg-brand py-20 text-white sm:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <h2 className="text-3xl leading-tight sm:text-5xl">
            <span className="block font-light text-lilac">{finalCta.headlineLines[0]}</span>
            <span className="block font-extrabold">{finalCta.headlineLines[1]}</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-lilac">{finalCta.body}</p>
          <div className="mt-9">
            <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="light" arrow>
              {finalCta.cta.label}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="mx-auto grid w-48 grid-cols-2 gap-3 sm:w-64 sm:gap-4">
          <Shape kind="arch" className="aspect-square bg-white" />
          <Shape kind="disc" className="aspect-square bg-lilac" />
          <Shape kind="petal" className="aspect-square bg-brand-bright" />
          <Shape kind="quarterBR" className="aspect-square bg-brand-deep" />
        </Reveal>
      </div>
    </section>
  )
}
