/**
 * Imagens mockadas do site.
 *
 * Os arquivos atuais em `public/mock/` são ilustrações técnicas (estilo
 * prancha/blueprint) geradas para manter a identidade visual enquanto não
 * há fotos reais de obra.
 *
 * Para substituir por fotos reais:
 * 1. Coloque o arquivo (jpg/png/webp) em `public/mock/` (ou outra pasta).
 * 2. Atualize o campo `src` abaixo para o novo caminho.
 * 3. Mantenha `alt` descritivo para acessibilidade e SEO.
 */

export const projectImages = [
  {
    src: "/mock/project-01.svg",
    alt: "Galpão industrial em estrutura metálica — pórticos e cobertura",
    caption: "Galpão Industrial",
    meta: "Mod-A · Vão 24,00 m",
  },
  {
    src: "/mock/project-02.svg",
    alt: "Cobertura em treliça metálica tipo Warren",
    caption: "Cobertura em Treliça",
    meta: "Banzos paralelos · Nós soldados",
  },
  {
    src: "/mock/project-03.svg",
    alt: "Prédio multiandar em estrutura metálica com contraventamento",
    caption: "Prédio Multiandar",
    meta: "6 pavimentos · Aço estrutural",
  },
  {
    src: "/mock/project-04.svg",
    alt: "Hangar com arco treliçado de grande vão livre",
    caption: "Hangar",
    meta: "Vão livre 80,00 m",
  },
] as const;
