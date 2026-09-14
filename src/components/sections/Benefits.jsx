import { benefits } from '../../data/site'
import Reveal from '../ui/Reveal'

export default function Benefits() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="max-w-lg">
          <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">{benefits.headline}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{benefits.body}</p>
        </Reveal>

        <Reveal delay={100} className="mt-12 grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-3 sm:divide-x sm:divide-line">
          {benefits.items.map((item, i) => (
            <p key={item} className={`text-lg font-semibold leading-snug text-ink ${i > 0 ? 'sm:pl-8' : ''}`}>
              {item}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
