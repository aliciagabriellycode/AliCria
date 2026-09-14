import { projects } from '../../data/site'
import Reveal from '../ui/Reveal'
import JrPorcelanatoShowcase from '../previews/JrPorcelanatoShowcase'
import AutoPreview from '../previews/AutoPreview'
import BeautyPreview from '../previews/BeautyPreview'

const demoPreviews = { auto: AutoPreview, beauty: BeautyPreview }

export default function Projects() {
  return (
    <section id="projetos" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">{projects.headline}</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">{projects.body}</p>
        </Reveal>

        {/* Case real — em destaque, com composição de fotos reais e mais espaço
            do que os projetos demonstrativos, propositalmente. */}
        <Reveal delay={100} className="mt-14">
          <JrPorcelanatoShowcase project={projects.featured} />
        </Reveal>

        {/* Projetos demonstrativos — deliberadamente mais discretos que o case real. */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.demos.map((project, i) => {
            const Preview = demoPreviews[project.theme]
            return (
              <Reveal key={project.id} delay={i * 100} className="flex flex-col">
                <Preview />

                <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                  <span className="rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold text-ink-muted">
                    {project.badge}
                  </span>
                  <span className="text-xs text-ink-muted">{project.category}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-ink">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>

                {project.badgeNote && (
                  <p className="mt-2 text-xs italic leading-relaxed text-ink-muted/80">
                    {project.badgeNote}
                  </p>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
