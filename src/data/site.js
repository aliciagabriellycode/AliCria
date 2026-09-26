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
    { label: 'Orçamento', href: '#orcamento' },
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

export const customProjects = {
  headline: 'Seu projeto, do seu jeito.',
  text: 'Cada negócio tem necessidades diferentes. Por isso, criamos projetos personalizados, estruturados de acordo com os objetivos, necessidades e momento de cada cliente.',
  complement:
    'Do planejamento à publicação, cuidamos da estrutura necessária para criar uma presença digital profissional, estratégica e alinhada à sua marca.',
  examplesLabel: 'O que pode fazer parte do seu projeto',
  examplesNote: 'Cada projeto é montado sob medida — a combinação de itens varia de negócio para negócio.',
  examples: [
    'Landing pages',
    'Sites institucionais',
    'Portfólios',
    'Páginas de serviços',
    'Integração com WhatsApp',
    'Formulários de contato',
    'SEO básico',
    'Domínio e hospedagem',
    'Manutenção e suporte',
  ],
  cta: { label: 'Solicitar orçamento' },
}

export const footer = {
  tagline: 'Web • Design • Digital',
  links: [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Como funciona', href: '#processo' },
    { label: 'Diferencial', href: '#diferencial' },
    { label: 'Orçamento', href: '#orcamento' },
    { label: 'Contato', href: '#contato' },
  ],
  legal: `© ${new Date().getFullYear()} AliCria. Todos os direitos reservados.`,
}

