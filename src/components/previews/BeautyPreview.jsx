/**
 * Studio Bella — projeto demonstrativo (fictício). Paleta clara terracota/
 * blush, layout "text-led": tipografia solta e miniaturas circulares, tom
 * mais editorial, comum em marcas de beleza e estética.
 */
export default function BeautyPreview() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-[#FBF3EF]"
      role="img"
      aria-label="Prévia da página fictícia do Studio Bella, com tipografia solta e miniaturas de serviços"
    >
      <div className="px-6 pt-6">
        <div className="h-2.5 w-24 rounded-full bg-[#8B5B4F]" />
        <div className="mt-4 h-4 w-4/5 rounded-full bg-[#3D2A26]" />
        <div className="mt-2 h-4 w-2/3 rounded-full bg-[#3D2A26]" />
        <div className="mt-3 h-2 w-1/2 rounded-full bg-[#3D2A26]/25" />
      </div>

      <div className="flex gap-3 px-6 py-6">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-[#E8C7BA] to-[#D9A896]"
          />
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-[#3D2A26]/10 px-6 py-4">
        <div className="h-2 w-24 rounded-full bg-[#3D2A26]/20" />
        <div className="h-7 w-28 rounded-full bg-[#8B5B4F]" />
      </div>
    </div>
  )
}
