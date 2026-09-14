import { plans, brand } from '../../data/site'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

function waLink(planName) {
  const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planName} da AliCria.`)
  return `https://wa.me/${brand.whatsapp.number}?text=${message}`
}

export default function Plans() {
  return (
    <section id="planos" className="border-t border-line bg-paper-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">{plans.headline}</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">{plans.subheadline}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {plans.items.map((plan, i) => {
            const isHighlighted = plan.id === 'presenca'

            return (
              <Reveal
                key={plan.id}
                delay={i * 90}
                className={`flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 ease-soft sm:p-8 ${
                  isHighlighted
                    ? 'border-brand/30 bg-surface shadow-lift lg:-translate-y-3'
                    : 'border-line bg-white hover:border-brand/25 hover:-translate-y-1'
                }`}
              >
                {plan.highlight && (
                  <span
                    className={`mb-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold ${
                      isHighlighted
                        ? 'bg-brand text-white'
                        : 'border border-line bg-paper-white text-ink-muted'
                    }`}
                  >
                    {plan.highlight}
                  </span>
                )}

                <h3 className="text-2xl font-extrabold text-ink">{plan.name}</h3>

                <p className="mt-2 text-sm font-semibold leading-snug text-brand">
                  {plan.audience}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{plan.text}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-ink">{plan.price}</span>
                </div>
                {plan.priceNote && (
                  <p className="mt-1 text-xs text-ink-muted">{plan.priceNote}</p>
                )}

                <div className="mt-6 border-t border-line pt-6">
                  {plan.includesFrom && (
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.06em] text-ink-muted">
                      Tudo do {plan.includesFrom}, mais:
                    </p>
                  )}
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Button
                    href={waLink(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={isHighlighted ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200} className="mx-auto mt-12 max-w-2xl space-y-2 text-center">
          {plans.notes.map((note) => (
            <p key={note} className="text-xs leading-relaxed text-ink-muted">
              {note}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
