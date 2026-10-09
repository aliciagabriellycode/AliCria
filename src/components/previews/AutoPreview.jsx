/**
 * Prime Auto — projeto demonstrativo (fictício). Escuro, com destaque âmbar
 * e tipografia em caixa alta: layout "image-led" comum no segmento automotivo.
 */
export default function AutoPreview() {
  return (
    <div
      className="overflow-hidden rounded-3xl bg-neutral-900"
      role="img"
      aria-label="Prévia da página fictícia da Prime Auto, com banner amplo e destaque para os serviços"
    >
      <div className="flex items-center justify-between px-6 pt-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">Prime Auto</p>
        <span className="rounded-sm bg-amber-500 px-3 py-1.5 text-[10px] font-extrabold uppercase text-neutral-900">Agendar</span>
      </div>

      <div className="relative mt-5 aspect-[16/9] bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900">
        <div
          className="absolute -right-10 -bottom-14 h-40 w-40 border-[14px] border-amber-500/80"
          style={{ borderRadius: '50%' }}
        />
        <p className="absolute bottom-4 left-6 max-w-[70%] text-xl font-extrabold uppercase leading-none text-white sm:text-2xl">
          Brilho de <span className="text-amber-500">zero km</span>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 px-6 py-5">
        {['Polimento', 'Vitrificação', 'Higienização'].map((t) => (
          <p key={t} className="border-t-2 border-amber-500 pt-2 text-[10px] font-bold uppercase tracking-wider text-white/80">
            {t}
          </p>
        ))}
      </div>
    </div>
  )
}
