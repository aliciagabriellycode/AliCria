import mainPhoto from '../../assets/jr-porcelanato/jr-bancada-principal.jpg'
import secondaryPhotoDark from '../../assets/jr-porcelanato/jr-pia-preta-marmore.jpg'
import secondaryPhotoWhite from '../../assets/jr-porcelanato/jr-pia-escultural-branca.jpg'
import symbol from '../../assets/jr-porcelanato/jr-symbol.png'
import founderPhoto from '../../assets/jr-porcelanato/jr-fundador-vicente-junior.jpg'

/**
 * Case real do JR Porcelanato — o primeiro projeto real da AliCria.
 * Composição editorial com fotos reais (fornecidas pelo próprio cliente):
 * uma imagem principal maior + duas secundárias menores, em vez de um grid
 * de fotos. O símbolo da marca da JR aparece como um selo discreto, para
 * deixar claro que é um cliente real sendo apresentado — não uma extensão
 * da identidade da AliCria.
 */
export default function JrPorcelanatoShowcase({ project }) {
  return (
    <div className="grid grid-cols-1 gap-8 rounded-3xl border border-line bg-white p-5 shadow-card sm:p-7 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:p-8">
      {/* composição de fotos reais */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-2">
        <img
          src={mainPhoto}
          alt="Bancada e pia de porcelanato feitas pela JR Porcelanato, em ambiente de banheiro com revestimento amadeirado"
          className="col-span-2 aspect-[4/5] w-full rounded-2xl object-cover sm:aspect-[3/4]"
          loading="lazy"
          width={685}
          height={913}
        />
        <img
          src={secondaryPhotoDark}
          alt="Cuba redonda preta sobre bancada de porcelanato com veios, em banheiro de tons escuros"
          className="aspect-square w-full rounded-2xl object-cover"
          loading="lazy"
          width={346}
          height={445}
        />
        <img
          src={secondaryPhotoWhite}
          alt="Pia esculpida em porcelanato branco, com desenho geométrico personalizado"
          className="aspect-square w-full rounded-2xl object-cover"
          loading="lazy"
          width={350}
          height={464}
        />
      </div>

      {/* conteúdo do case */}
      <div className="flex flex-col lg:self-start">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-white">
            {project.badge}
          </span>
          <img src={symbol} alt="" aria-hidden="true" className="h-7 w-auto opacity-90" />
        </div>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.08em] text-ink-muted">
          {project.category}
        </p>
        <h3 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">{project.name}</h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="mt-7 flex items-center gap-3 border-t border-line pt-6">
          <img
            src={founderPhoto}
            alt="Foto de Vicente Júnior"
            className="h-12 w-12 rounded-full object-cover"
            loading="lazy"
            width={240}
            height={240}
          />
          <div>
            <p className="text-sm font-semibold text-ink">Vicente Júnior</p>
            <p className="text-xs text-ink-muted">Fundador da JR Porcelanato</p>
          </div>
        </div>

        <div className="mt-7">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ease-soft hover:bg-brand-deep hover:-translate-y-0.5"
            >
              Ver projeto <span aria-hidden="true">→</span>
            </a>
          ) : (
            <div>
              <span
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink-muted opacity-70"
                aria-disabled="true"
                title="O link do site publicado ainda será adicionado aqui."
              >
                Ver projeto <span aria-hidden="true">→</span>
              </span>
              <p className="mt-2 text-xs text-ink-muted">Link do site em breve.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
