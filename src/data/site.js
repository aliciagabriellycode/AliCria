// Conteúdo central da marca e dos textos "fixos" da página.
// Pensado para que, no futuro, cada cliente/projeto tenha o seu
// próprio arquivo de dados reutilizando os mesmos componentes.

export const brand = {
  name: 'AliCria',
  tagline: 'Web • Design • Digital',
  whatsapp: {
    number: '5511927395328',
    label: '(11) 92739-5328',
  },
  email: 'contato@alicria.com.br', // TODO(AliCria): confirmar e-mail definitivo
  instagram: '@alicria', // TODO(AliCria): confirmar usuário definitivo
}

export const nav = {
  links: [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Como funciona', href: '#processo' },
    { label: 'Diferencial', href: '#diferencial' },
    { label: 'Planos', href: '#planos' },
  ],
  // O href é montado em Navbar.jsx (link direto para o WhatsApp).
  cta: { label: 'Falar com a gente' },
}

export const hero = {
  headlineLines: ['Seu negócio já faz um bom trabalho.', 'A internet só precisa mostrar isso.'],
  subheadline:
    'A gente cria páginas profissionais para pequenos negócios — pensadas para explicar rápido o que você oferece, passar confiança e facilitar o contato.',
  // O href do CTA primário é montado em Hero.jsx (link direto para o WhatsApp).
  ctaPrimary: { label: 'Quero apresentar melhor meu negócio' },
  ctaSecondary: { label: 'Ver projetos', href: '#projetos' },
}

export const problem = {
  lines: ['Seu cliente procura.', 'Encontra seu Instagram.', 'Vê algumas fotos.', 'Mas ainda fica com dúvida.'],
  caption: 'Isso não é falta de qualidade no seu trabalho. É falta de um lugar que explique ele direito.',
  fragments: [
    { icon: 'gallery', label: '@seunegocio', hint: 'fotos soltas, sem contexto' },
    { icon: 'chat', label: 'Vocês fazem orçamento?', hint: 'pergunta que se repete' },
    { icon: 'search', label: 'nome do negócio + cidade', hint: 'e a busca não leva a lugar nenhum' },
  ],
}

export const solution = {
  headline: 'A gente organiza o que seu cliente precisa saber.',
  body: 'Serviços, diferenciais, fotos, localização e contato — tudo em um lugar só, na ordem que faz sentido pra quem está decidindo se vai falar com você.',
  annotations: [
    { label: 'Serviços', text: 'O que você oferece, sem letra miúda.' },
    { label: 'Fotos', text: 'O trabalho falando por si.' },
    { label: 'Diferenciais', text: 'Por que escolher você.' },
    { label: 'Localização', text: 'Pra quem procura perto.' },
    { label: 'WhatsApp', text: 'Contato a um toque de distância.' },
    { label: 'Orçamento', text: 'Um pedido claro, sem enrolação.' },
  ],
}

export const projects = {
  headline: 'Três negócios. Três formas diferentes de apresentar.',
  body: 'Cada página é pensada pro negócio que ela representa — não é o mesmo modelo com as cores trocadas.',
  featured: {
    id: 'jr-porcelanato',
    status: 'real',
    badge: 'Projeto real',
    category: 'Peças e projetos sob medida em porcelanato',
    name: 'JR Porcelanato',
    description:
      'Uma presença digital criada para apresentar o trabalho da JR Porcelanato, mostrar seus projetos e facilitar o contato com novos clientes.',
    url: 'https://jrporcelanato.netlify.app/',
  },
  demos: [
    {
      id: 'prime-auto',
      status: 'demo',
      badge: 'Projeto demonstrativo',
      badgeNote: 'Empresa fictícia, criada para mostrar como a AliCria aplicaria isso no segmento automotivo.',
      category: 'Estética automotiva',
      name: 'Prime Auto',
      description:
        'Página pensada para mostrar serviços e pacotes, e facilitar o agendamento pelo WhatsApp.',
      theme: 'auto',
    },
    {
      id: 'studio-bella',
      status: 'demo',
      badge: 'Projeto demonstrativo',
      badgeNote: 'Empresa fictícia, criada para mostrar como a AliCria aplicaria isso no segmento de beleza e estética.',
      category: 'Beleza e estética',
      name: 'Studio Bella',
      description:
        'Página pensada para apresentar serviços e ambiente, e facilitar o agendamento de horários.',
      theme: 'beauty',
    },
  ],
}

export const process = {
  headline: 'Do primeiro contato à página publicada.',
  steps: [
    { number: '01', title: 'Você conta', text: 'Sobre o seu negócio, os serviços e pra quem você atende.' },
    { number: '02', title: 'A gente pensa', text: 'Organizamos as informações, a estrutura e o conteúdo.' },
    { number: '03', title: 'Você aprova', text: 'Você revisa tudo antes de qualquer coisa ir pro ar.' },
    { number: '04', title: 'Colocamos no ar', text: 'Sua página fica pronta pros seus clientes acessarem.' },
  ],
}

export const differential = {
  headline: ['Não começamos pelo layout.', 'Começamos pelo seu negócio.'],
  body: 'Antes de montar qualquer página, a gente entende o negócio: o que você faz, pra quem, o que te diferencia e quais dúvidas seus clientes sempre têm. Só depois disso a gente pensa em estrutura e conteúdo.',
  topics: ['Negócio', 'Público', 'Serviços', 'Diferenciais', 'Dúvidas dos clientes', 'Informações importantes'],
}

export const benefits = {
  headline: 'O que a gente consegue prometer, com honestidade.',
  body: 'Sem prometer aumento de vendas ou faturamento — isso depende de muita coisa que vai além de uma página.',
  items: [
    'Seu negócio fica mais profissional.',
    'Seu cliente entende mais rápido o que você oferece.',
    'Fica mais fácil entrar em contato ou pedir orçamento.',
  ],
}

export const finalCta = {
  headlineLines: ['Seu negócio não precisa parecer maior.', 'Precisa ser apresentado melhor.'],
  body: 'Manda uma mensagem contando um pouco sobre o seu negócio. A gente responde e explica como funciona o processo.',
  cta: { label: 'Vamos conversar' },
}

export const plans = {
  headline: 'Escolha a presença que faz sentido para o seu negócio.',
  subheadline:
    'Do primeiro passo à presença digital completa, a AliCria cuida da apresentação do seu negócio.',
  items: [
    {
      id: 'essencial',
      name: 'Essencial',
      price: 'R$ 697',
      priceNote: null,
      audience: 'Para quem está começando a apresentar o negócio na internet.',
      text: 'Você ainda não tem uma página profissional e quer um lugar organizado para apresentar sua empresa, seus serviços e facilitar o contato com novos clientes.',
      includesFrom: null,
      features: [
        'Página profissional personalizada',
        'Apresentação da empresa',
        'Produtos ou serviços',
        'Galeria de imagens',
        'Botões de contato',
        'Versão para celular',
        'Publicação da página',
        'Até 2 rodadas de ajustes',
      ],
      cta: 'Quero começar',
      highlight: null,
    },
    {
      id: 'presenca',
      name: 'Presença',
      price: 'R$ 897',
      priceNote: 'R$ 59/mês após a publicação',
      audience: 'Para quem já divulga o negócio, mas quer uma presença online mais organizada e profissional.',
      text: 'Seus clientes encontram você no Instagram ou WhatsApp, mas as informações ficam espalhadas? A gente organiza tudo em uma página pensada para apresentar melhor o seu negócio.',
      includesFrom: 'Essencial',
      features: [
        'Estrutura mais completa',
        'Organização estratégica do conteúdo',
        'Galeria de projetos ou produtos',
        'Configuração do domínio',
        'Manutenção da página',
        'Pequenas atualizações',
      ],
      cta: 'Quero melhorar minha presença',
      highlight: 'Mais escolhido',
    },
    {
      id: 'completa',
      name: 'Completa',
      price: 'R$ 1.297',
      priceNote: 'R$ 99/mês após a publicação',
      audience: 'Para quem quer ter uma presença profissional sem precisar se preocupar com a parte técnica.',
      text: 'Você cuida do seu negócio. A AliCria cuida da parte digital.',
      includesFrom: 'Presença',
      features: [
        'Domínio personalizado',
        'Hospedagem',
        'Configuração técnica',
        'Manutenção contínua',
        'Pequenas atualizações',
        'Suporte relacionado à página',
      ],
      cta: 'Quero deixar tudo com a AliCria',
      highlight: 'Mais completo',
    },
  ],
  notes: [
    'Todos os projetos incluem até 2 rodadas de ajustes. Alterações que mudem significativamente a estrutura da página ou adicionem novas funcionalidades podem ser orçadas separadamente.',
    'Prazo estimado: até 7 dias úteis após o recebimento de todas as informações e materiais necessários.',
  ],
}

export const footer = {
  tagline: 'Web • Design • Digital',
  links: [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Como funciona', href: '#processo' },
    { label: 'Diferencial', href: '#diferencial' },
    { label: 'Planos', href: '#planos' },
    { label: 'Contato', href: '#contato' },
  ],
  legal: `© ${new Date().getFullYear()} AliCria. Todos os direitos reservados.`,
}

