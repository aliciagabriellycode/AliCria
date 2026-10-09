import { benefits } from '../../data/site'
import Reveal from '../ui/Reveal'
import Shape from '../ui/Shapes'

const shapes = ['arch', 'disc', 'petal']

export default function Benefits() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="max-w-lg">
          <h2 className="text-2xl font-extrabold leading-tight text-ink sm:text-4xl">{benefits.headline}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{benefits.body}</p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {benefits.items.map((item, i) => (
            <Reveal key={item} as="li" delay={i * 90}>
              <Shape kind={shapes[i]} className="h-12 w-12 bg-brand" />
              <p className="mt-5 text-lg font-bold leading-snug text-ink">{item}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
