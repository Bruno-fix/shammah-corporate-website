/**
 * Configuração central do site — SHAMMAH Estruturas Metálicas.
 *
 * Altere aqui: textos institucionais, contato, redes sociais, métricas,
 * serviços, segmentos, diferenciais e clientes.
 *
 * Para trocar imagens, veja `config/images.ts`.
 * Para trocar cores/tema, veja `app/globals.css` (tokens em :root e [data-theme]).
 */

export const siteConfig = {
  name: "SHAMMAH Estruturas Metálicas",
  shortName: "Shammah",
  tagline: "Projeto, fabricação e montagem de estruturas metálicas.",
  description:
    "Há 39 anos transformando aço em escala: mais de 1,3 milhão de m² construídos em galpões industriais, logísticos, prédios, hangares e fábricas em Goiás e em todo o Brasil.",
  url: "https://www.shammah.com.br",

  // ---------------------------------------------------------------------
  // CONTATO — altere telefone, e-mail e endereço aqui
  // ---------------------------------------------------------------------
  contact: {
    phoneDisplay: "(62) 3287-7300",
    phoneHref: "tel:+556232877300",
    address: {
      line1: "Estrada de Itumbiara, 77 — Vila São Dimas",
      line2: "Abadia de Goiás — Região Metropolitana de Goiânia / GO",
      cep: "CEP 75.327-512",
      mapsHref:
        "https://www.google.com/maps/search/?api=1&query=Estrada+de+Itumbiara+77+Abadia+de+Goi%C3%A1s+GO",
    },
  },

  // ---------------------------------------------------------------------
  // REDES SOCIAIS — altere links aqui
  // ---------------------------------------------------------------------
  social: {
    instagram: "https://www.instagram.com/shammah.estruturasmetalicas",
    linkedin: "https://www.linkedin.com/company/shammah-estruturas-metalicas/",
  },

  // ---------------------------------------------------------------------
  // WHATSAPP — número e mensagem padrão. Veja também `lib/whatsapp.ts`
  // ---------------------------------------------------------------------
  whatsapp: {
    // ATENÇÃO: número placeholder = telefone fixo principal em formato
    // internacional (55 62 3287-7300). Troque pelo número de WhatsApp
    // comercial real assim que disponível.
    number: "556232877300",
    defaultMessage:
      "Olá! Vim pelo site da Shammah e gostaria de solicitar um orçamento para um projeto de estrutura metálica.",
  },

  // ---------------------------------------------------------------------
  // NAVEGAÇÃO
  // ---------------------------------------------------------------------
  nav: [
    { label: "Empresa", href: "#empresa" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Segmentos", href: "#segmentos" },
    { label: "Contato", href: "#contato" },
  ],

  // ---------------------------------------------------------------------
  // MÉTRICAS DE AUTORIDADE
  // ---------------------------------------------------------------------
  stats: [
    {
      value: "39",
      unit: "anos",
      label: "de experiência em projeto, fabricação e montagem de estruturas metálicas",
    },
    {
      value: "1,3M",
      unit: "m²",
      label: "de área construída entregue em obras por todo o país",
    },
    {
      value: "03",
      unit: "frentes",
      label: "integradas: projeto, fabricação e montagem sob a mesma equipe",
    },
    {
      value: "GO",
      unit: "sede",
      label: "Abadia de Goiás, Região Metropolitana de Goiânia",
    },
  ],

  // ---------------------------------------------------------------------
  // SERVIÇOS
  // ---------------------------------------------------------------------
  services: [
    {
      code: "01",
      title: "Projetos",
      description:
        "Engenharia estrutural própria, do estudo de viabilidade ao detalhamento executivo — cálculo, modelagem e compatibilização para fabricação.",
    },
    {
      code: "02",
      title: "Fabricação",
      description:
        "Parque fabril com processos controlados, corte, solda e pintura industrial, garantindo precisão dimensional e prazo de entrega.",
    },
    {
      code: "03",
      title: "Montagem",
      description:
        "Equipes próprias de montagem em campo, com planejamento de logística e içamento para obras de grande porte em todo o Brasil.",
    },
  ],

  // ---------------------------------------------------------------------
  // SEGMENTOS ATENDIDOS
  // ---------------------------------------------------------------------
  segments: [
    { title: "Galpões Industriais", code: "GI" },
    { title: "Galpões Logísticos", code: "GL" },
    { title: "Prédios Industriais", code: "PI" },
    { title: "Prédios Multiandares", code: "PM" },
    { title: "Shopping Centers", code: "SC" },
    { title: "Hangares", code: "HG" },
    { title: "Armazéns Climatizados", code: "AC" },
    { title: "Fábricas de Automóveis", code: "FA" },
  ],

  // ---------------------------------------------------------------------
  // DIFERENCIAIS
  // ---------------------------------------------------------------------
  differentials: [
    {
      title: "39 anos de experiência",
      description: "Quatro décadas dedicadas exclusivamente a estruturas metálicas.",
    },
    {
      title: "Mais de 1,3 milhão de m²",
      description: "Volume executado que comprova capacidade de entrega em larga escala.",
    },
    {
      title: "Engenharia qualificada",
      description: "Equipe técnica própria, da concepção do projeto à entrega final.",
    },
    {
      title: "Soluções sob medida",
      description: "Projetos personalizados do estudo inicial ao fechamento da obra.",
    },
    {
      title: "Processo produtivo ágil",
      description: "Fabricação planejada para cumprir prazos contratuais.",
    },
    {
      title: "Materiais de alta qualidade",
      description: "Aço e insumos certificados, com controle rígido de qualidade.",
    },
    {
      title: "Tecnologia atualizada",
      description: "Investimento constante em equipamentos e processos de fabricação.",
    },
  ],

  // ---------------------------------------------------------------------
  // CLIENTES
  // ---------------------------------------------------------------------
  clients: ["Ford", "Anglo American", "Comigo", "Bravo", "Neo", "América"],
} as const;

export type SiteConfig = typeof siteConfig;
