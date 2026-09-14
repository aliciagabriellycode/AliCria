/**
 * Prévia estilizada de "uma página de negócio real" — não é um mockup de
 * notebook/celular. É o próprio conteúdo da página, tratado como o elemento
 * visual central do Hero e da seção de Solução. Usa apenas formas/CSS
 * (sem fotos de banco de imagens), para não prometer visualmente algo que
 * não existe ainda.
 *
 * variant:
 *  - "compact": usado no Hero — cortado/esmaecido na base, como se a página
 *    continuasse rolando.
 *  - "full": usado na seção de Solução — mostra a página inteira e aceita
 *    anotações (annotate) que nomeiam cada parte.
 */
function Annotation({ children, className = '' }) {
  return (
    <div className={`absolute left-full hidden items-center gap-2.5 lg:flex ${className}`}>
      <span className="h-px w-6 bg-brand/35" />
      <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.08em] text-brand">
        {children}
      </span>
    </div>
  )
}

export default function BusinessPagePreview({ variant = 'compact', annotate = null, className = '' }) {
  const isFull = variant === 'full'

  return (
    <div className={`relative ${className}`}>
      <div
        className={`relative rounded-2xl border border-line bg-paper-white shadow-lift ${
          isFull ? '' : 'max-h-[420px] overflow-hidden'
        }`}
        role="img"
        aria-label="Prévia de uma página de negócio criada pela AliCria, com serviços, fotos, diferenciais, localização e botão de WhatsApp"
      >
        <div className="p-6 sm:p-7">
          {/* topo: nome do negócio + menu simples, sem cromo de navegador */}
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-28 rounded-full bg-ink/75" />
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-8 rounded-full bg-ink/15" />
              <span className="h-1.5 w-8 rounded-full bg-ink/15" />
              <span className="h-1.5 w-8 rounded-full bg-ink/15" />
            </div>
          </div>

          {/* hero da página-exemplo */}
          <div className="relative mt-6 grid grid-cols-1 gap-5 sm:grid-cols-5">
            <div className="sm:col-span-3 flex flex-col justify-center gap-3">
              <div className="h-3.5 w-full max-w-[220px] rounded-full bg-ink/85" />
              <div className="h-3.5 w-3/4 max-w-[180px] rounded-full bg-ink/85" />
              <div className="mt-1 h-2 w-full max-w-[210px] rounded-full bg-ink/15" />
              <div className="h-2 w-2/3 max-w-[160px] rounded-full bg-ink/15" />
              <div className="mt-3 flex gap-2">
                <div className="h-8 w-32 rounded-full bg-brand" />
                <div className="h-8 w-24 rounded-full border border-line" />
              </div>
            </div>
            <div className="sm:col-span-2 aspect-[4/3] rounded-xl bg-gradient-to-br from-stone-200 via-stone-100 to-neutral-300" />
            {annotate && <Annotation className="ml-2 top-2">{annotate.photo}</Annotation>}
          </div>

          {/* serviços — linha de texto, não cards de ícone */}
          <div className="relative mt-7 grid grid-cols-3 gap-4 border-t border-line pt-5">
            {[0, 1, 2].map((i) => (
              <div key={i}>
                <div className="h-2 w-3/4 rounded-full bg-ink/70" />
                <div className="mt-2 h-1.5 w-full rounded-full bg-ink/12" />
                <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-ink/12" />
              </div>
            ))}
            {annotate && <Annotation className="ml-2 top-1/2 -translate-y-1/2">{annotate.services}</Annotation>}
          </div>

          {isFull && (
            <>
              {/* diferenciais */}
              <div className="relative mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="h-6 w-20 rounded-full bg-surface" />
                ))}
                {annotate && <Annotation className="ml-2 top-1/2 -translate-y-1/2">{annotate.differentials}</Annotation>}
              </div>

              {/* localização */}
              <div className="relative mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="h-4 w-4 shrink-0 rounded-full border-2 border-ink/30" />
                <div className="h-2 w-40 rounded-full bg-ink/15" />
                {annotate && <Annotation className="ml-2 top-1/2 -translate-y-1/2">{annotate.location}</Annotation>}
              </div>
            </>
          )}

          {/* orçamento */}
          <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
            <div className="h-2 w-32 rounded-full bg-ink/20" />
            <div className="h-8 w-28 rounded-full border border-line" />
            {annotate && (
              <Annotation className="ml-2 top-1/2 -translate-y-1/2">
                {annotate.budget}
              </Annotation>
            )}
          </div>

          {/* whatsapp */}
          <div className="relative mt-4 flex items-center justify-between gap-3">
            <div className="h-2 w-24 rounded-full bg-ink/20" />
            <div className="h-8 w-8 shrink-0 rounded-full bg-brand" />
            {annotate && (
              <Annotation className="ml-2 top-1/2 -translate-y-1/2">
                {annotate.whatsapp}
              </Annotation>
            )}
          </div>
        </div>

        {!isFull && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper-white to-transparent"
          />
        )}
      </div>
    </div>
  )
}
