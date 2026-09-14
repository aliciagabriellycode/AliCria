/**
 * Prime Auto — projeto demonstrativo (fictício). Paleta escura com destaque
 * âmbar, layout "image-led": um banner amplo dominando a página, como é
 * comum em sites do segmento automotivo.
 */
export default function AutoPreview() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900"
      role="img"
      aria-label="Prévia da página fictícia da Prime Auto, com banner amplo e destaque para os serviços"
    >
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="h-2.5 w-20 rounded-full bg-white/90" />
        <div className="h-6 w-16 rounded-full bg-amber-500" />
      </div>

      <div className="relative mt-4 aspect-[16/9] bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900">
        <div className="absolute bottom-4 left-5 h-3 w-2/3 max-w-[180px] rounded-full bg-white/90" />
        <div className="absolute bottom-[-2px] left-5 h-1.5 w-1/3 max-w-[110px] translate-y-6 rounded-full bg-amber-500" />
      </div>

      <div className="grid grid-cols-3 gap-2 px-5 py-5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-6 rounded-md border border-white/15" />
        ))}
      </div>
    </div>
  )
}
