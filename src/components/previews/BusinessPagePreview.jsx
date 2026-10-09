import Shape from '../ui/Shapes'
import { radii } from '../ui/shapeRadii'

/**
 * Prévia de "uma página de negócio" usada na seção Solução. Mostra a página
 * inteira com marcadores numerados; `markers` mapeia cada parte (por nome)
 * ao número que aparece na legenda ao lado.
 */
function Marker({ n, className = '' }) {
  if (!n) return null
  return (
    <span
      aria-hidden="true"
      className={`absolute z-10 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[11px] font-extrabold text-white ring-4 ring-surface ${className}`}
    >
      {n}
    </span>
  )
}

export default function BusinessPagePreview({ markers = {}, className = '' }) {
  return (
    <div
      className={`relative rounded-3xl bg-white p-6 shadow-lift sm:p-8 ${className}`}
      role="img"
      aria-label="Prévia de uma página de negócio criada pela AliCria, com fotos, serviços, diferenciais, localização, orçamento e botão de WhatsApp"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-extrabold text-ink">Seu Negócio</p>
        <div className="flex gap-3 text-[10px] font-semibold text-ink-muted">
          <span>Serviços</span>
          <span className="hidden sm:inline">Sobre</span>
          <span>Contato</span>
        </div>
      </div>

      <div className="relative mt-7 grid grid-cols-1 items-end gap-6 sm:grid-cols-5">
        <div className="sm:col-span-3">
          <p className="text-xl font-light leading-tight text-brand sm:text-2xl">Nome do seu negócio,</p>
          <p className="text-xl font-extrabold leading-tight text-ink sm:text-2xl">o que você faz de melhor.</p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-brand px-4 py-1.5 text-[11px] font-bold text-white">Pedir orçamento</span>
            <span className="rounded-full border border-line px-4 py-1.5 text-[11px] font-bold text-ink-soft">Ver trabalhos</span>
          </div>
        </div>
        <div className="relative sm:col-span-2">
          <div className="mx-auto aspect-[4/5] w-3/5 bg-lilac sm:w-full" style={{ borderRadius: radii.arch }} />
          <Shape kind="petal" className="absolute -left-3 bottom-4 h-10 w-10 bg-brand-bright" />
          <Marker n={markers.photo} className="-right-1 top-2" />
        </div>
      </div>

      <div className="relative mt-8 grid grid-cols-1 gap-4 border-t border-line pt-6 sm:grid-cols-3">
        {['Serviço um', 'Serviço dois', 'Serviço três'].map((t) => (
          <div key={t}>
            <p className="text-sm font-bold text-ink">{t}</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-ink/10" />
            <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-ink/10" />
          </div>
        ))}
        <Marker n={markers.services} className="-top-3 right-0" />
      </div>

      <div className="relative mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
        {['Atendimento rápido', 'Garantia', 'Feito sob medida', 'Equipe própria'].map((t) => (
          <span key={t} className="rounded-full bg-surface px-3 py-1.5 text-[11px] font-semibold text-brand">
            {t}
          </span>
        ))}
        <Marker n={markers.differentials} className="-top-3 right-0" />
      </div>

      <div className="relative mt-6 flex items-center gap-3 border-t border-line pt-6">
        <Shape kind="petal" className="h-5 w-5 shrink-0 bg-brand" />
        <p className="text-xs font-semibold text-ink-soft">Rua do seu negócio, 123 — sua cidade</p>
        <Marker n={markers.location} className="-top-3 right-0" />
      </div>

      <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-line pt-6">
        <p className="text-xs font-semibold text-ink-soft">Conte o que você precisa e receba um orçamento.</p>
        <span className="shrink-0 rounded-full border-2 border-ink px-4 py-1.5 text-[11px] font-bold text-ink">Orçamento</span>
        <Marker n={markers.budget} className="-top-3 right-0" />
      </div>

      <div className="relative mt-5 flex items-center justify-end gap-3">
        <p className="text-xs font-semibold text-ink-muted">Fale agora pelo WhatsApp</p>
        <Shape kind="disc" className="h-9 w-9 shrink-0 bg-brand" />
        <Marker n={markers.whatsapp} className="-top-2 -right-1" />
      </div>
    </div>
  )
}
