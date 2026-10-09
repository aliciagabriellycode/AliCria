import { Images, MessageCircle, Search } from 'lucide-react'
import { problem } from '../../data/site'
import Reveal from '../ui/Reveal'
import Shape from '../ui/Shapes'

const icons = { gallery: Images, chat: MessageCircle, search: Search }
const placement = ['sm:ml-0', 'sm:ml-16', 'sm:ml-6']

export default function Problem() {
  return (
    <section data-theme="dark" className="relative overflow-hidden bg-brand py-20 text-white sm:py-28">
      <Shape kind="disc" className="absolute -right-24 -top-24 h-72 w-72 bg-brand-bright/40" />
      <Shape kind="quarterTR" className="absolute -bottom-px -left-px h-40 w-40 bg-brand-deep" />

      <div className="container-page relative grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <Reveal>
          <h2 className="max-w-md text-3xl leading-tight sm:text-5xl">
            {problem.lines.map((line, i) => (
              <span
                key={line}
                className={`block ${i === problem.lines.length - 1 ? 'font-extrabold text-white' : 'font-light text-lilac'}`}
              >
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-7 max-w-sm text-base leading-relaxed text-lilac">{problem.caption}</p>
        </Reveal>

        <Reveal delay={120} className="relative flex flex-col items-start gap-4 pt-2">
          {problem.fragments.map((fragment, i) => {
            const Icon = icons[fragment.icon]
            return (
              <div
                key={fragment.label}
                className={`flex w-full max-w-xs items-start gap-3 rounded-2xl bg-white p-4 text-ink shadow-lift ${placement[i]}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-brand">
                  <Icon size={16} strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold">{fragment.label}</p>
                  <p className="mt-0.5 text-xs text-ink-muted">{fragment.hint}</p>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
