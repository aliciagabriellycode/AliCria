# AliCria — Landing Page (V2)

Segunda versão da landing page oficial da AliCria. Construída em **React + Vite + Tailwind CSS**, pensada para evoluir para um template mestre reaproveitável em projetos de clientes.

## Rodando o projeto

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # gera a versão de produção em /dist
npm run preview   # serve a versão de produção localmente
```

## Estrutura

```
src/
  data/site.js          # todo o copy e conteúdo da página, centralizado
  components/
    layout/              # Navbar e Footer
    sections/            # Hero, Problem, Solution, Projects, Process, Differential, Benefits, FinalCta
    previews/             # "páginas de negócio" simuladas em CSS (Hero, Solução e os 3 projetos)
    ui/                   # peças reutilizáveis (Button, Reveal)
  hooks/useReveal.js     # animação de entrada no viewport (sem libs externas)
  index.css              # tokens globais, foco de teclado, prefers-reduced-motion
```

### Por que essa organização

- **`data/site.js` concentra todo o texto.** Para reaproveitar este projeto como template
  para um cliente futuro, a ideia é trocar apenas esse arquivo (e as cores/tokens do
  `tailwind.config.js`), sem tocar nos componentes.
- **Componentes de seção não têm texto hardcoded** — todos recebem o conteúdo de `data/site.js`.
- **`previews/`** substitui o antigo mockup genérico de notebook/celular da V1. São "páginas de
  negócio" simuladas inteiramente em CSS: `BusinessPagePreview` (Hero e Solução, com anotações)
  e três previews com identidades visuais próprias — `StonePreview` (JR Porcelanato),
  `AutoPreview` (Prime Auto) e `BeautyPreview` (Studio Bella).

## O que mudou da V1 para a V2

- Nova narrativa: Hero → Problema → Solução → Projetos → Processo → Diferencial → Benefícios → CTA.
- Removida a seção "Para quem" (Audience) — fora da nova estrutura solicitada.
- Removido o mockup genérico de notebook/celular.
- Seção de Solução deixou de ser uma grade de 6 cards iguais; agora é uma única página-exemplo anotada.
- Seção de Diferencial passou a usar o roxo profundo da marca como fundo (antes era grafite quase-preto).
- Nova seção de Benefícios, honesta e sem prometer aumento de vendas/faturamento.
- Projetos: de 2 para 3 cases, cada um com uma identidade visual própria (não é o mesmo template recolorido).

## Conteúdo que ainda precisa de dados reais

- **JR Porcelanato**: totalmente integrado com dados reais — fotos, símbolo da marca,
  foto e nome do fundador (Vicente Júnior), categoria real, e a URL pública confirmada
  do site (`https://jrporcelanato.netlify.app/`). O botão "Ver projeto" já aponta pra lá.
- Pontos marcados com `TODO(AliCria)` no código:
  - `src/data/site.js` → número de WhatsApp (`brand.whatsapp.number`) e e-mail de contato
    da própria AliCria (não confundir com os dados da JR, que já são reais)
  - `src/components/layout/Footer.jsx` → link do Instagram da AliCria
  - `index.html` → URL final (`og:url`) e imagem de Open Graph (`og:image`, 1200x630)

## Identidade visual

- **Cores da marca:** off-white (`#FBFAF8`), grafite (`#211F26`), roxo AliCria (`#4B2A7A`),
  roxo profundo para seções dark (`#331D57`), lavanda sutil (`#F5F2FA`)
- **Cores dos projetos demonstrativos:** cada preview de projeto tem paleta própria (pedra/grafite
  no JR Porcelanato, escuro+âmbar na Prime Auto, blush/terracota no Studio Bella) — deliberadamente
  diferentes da paleta da AliCria, pra mostrar que a marca não aplica o mesmo template em tudo.
- **Tipografia:** Manrope (carregada via Google Fonts no `index.html`)
- **Animações:** fade + leve deslocamento ao entrar no viewport, feito com `IntersectionObserver`
  nativo (sem biblioteca de animação) — respeita `prefers-reduced-motion` automaticamente, e tem
  fallback via `<noscript>` para quando JavaScript está desabilitado.

## Acessibilidade

- HTML semântico (`header`, `nav`, `main`, `footer`, `section`)
- Hierarquia de headings: um único `h1` (Hero), `h2` por seção, `h3` em subitens
- Link "Pular para o conteúdo" para navegação por teclado
- Estados de foco visíveis (`:focus-visible`)
- `role="img"` + `aria-label` descritivo em todos os previews de página (não são imagens reais,
  mas comunicam o que representam a leitores de tela)
- Contraste de texto revisado (mínimo AA em todas as combinações de cor usadas)

## Responsividade

Testado programaticamente (Playwright) sem overflow horizontal em larguras de 300px a 1920px,
incluindo dispositivos pequenos (iPhone SE / Android antigo). Dois bugs de overflow foram
encontrados e corrigidos nesta versão — ver histórico de commits/notas de revisão.

