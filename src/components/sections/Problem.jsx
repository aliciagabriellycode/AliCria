import { Images, MessageCircle, Search } from 'lucide-react'
import { problem } from '../../data/site'
import Reveal from '../ui/Reveal'

const icons = { gallery: Images, chat: MessageCircle, search: Search }
const rotations = ['-rotate-3', 'rotate-2', '-rotate-1']

export default function Problem() {
  return (
    <section className="border-t border-line bg-paper-white py-20 sm:py-28">
      <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <Reveal>
          <h2 className="max-w-md text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            {problem.lines.map((line, i) => (
              <span key={line} className={`block ${i === problem.lines.length - 1 ? 'text-ink-muted font-semibold' : ''}`}>
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-muted">{problem.caption}</p>
        </Reveal>

        <Reveal delay={120} className="relative flex flex-col items-start gap-5 pt-2 sm:pl-6">
          {problem.fragments.map((fragment, i) => {
            const Icon = icons[fragment.icon]
            return (
              <div
                key={fragment.label}
                className={`flex w-full max-w-xs items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-card ${rotations[i % rotations.length]}`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-brand">
                  <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{fragment.label}</p>
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
