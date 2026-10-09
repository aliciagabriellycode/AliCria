/**
 * Studio Bella — projeto demonstrativo (fictício). Claro, blush, com serifa
 * e miniaturas circulares: tom editorial, comum em beleza e estética.
 */
export default function BeautyPreview() {
  return (
    <div
      className="overflow-hidden rounded-3xl bg-[#FBF3EF]"
      role="img"
      aria-label="Prévia da página fictícia do Studio Bella, com tipografia solta e miniaturas de serviços"
    >
      <div className="px-6 pt-6">
        <p className="font-serif text-sm italic text-[#8B5B4F]">Studio Bella</p>
        <p className="mt-5 font-serif text-3xl leading-[1.05] text-[#3D2A26] sm:text-4xl">
          Cuidar de você
          <br />
          <span className="italic text-[#8B5B4F]">com calma.</span>
        </p>
      </div>

      <div className="flex gap-3 px-6 py-6">
        {['Cílios', 'Unhas', 'Pele', 'Cabelo'].map((t, i) => (
          <div key={t} className="text-center">
            <div
              className="h-14 w-14 rounded-full bg-gradient-to-br from-[#E8C7BA] to-[#D9A896]"
              style={{ opacity: 1 - i * 0.1 }}
            />
            <p className="mt-1.5 font-serif text-[11px] text-[#3D2A26]/70">{t}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-[#3D2A26]/10 px-6 py-4">
        <p className="font-serif text-xs italic text-[#3D2A26]/60">Horários pelo WhatsApp</p>
        <span className="rounded-full bg-[#8B5B4F] px-4 py-1.5 font-serif text-xs text-white">Agendar</span>
      </div>
    </div>
  )
}
