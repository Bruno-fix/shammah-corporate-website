# Shammah — Site 1 · Impacto

Status do Desenvolvimento: Em andamento

Landing page MVP da **SHAMMAH Estruturas Metálicas**, direção visual **bold / moderna /
cinematográfica**: tema escuro como padrão, tipografia condensada de alto contraste,
grid técnico de fundo, ilustrações estilo "prancha de engenharia" e composição
assimétrica inspirada em memoriais descritivos de projeto estrutural.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (tokens via CSS variables)
- [Motion](https://motion.dev/) (`motion/react`) para animações de entrada e scroll

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run start   # roda o build de produção localmente
```

## Deploy na Vercel

1. Suba este diretório (`site-1-impacto`) como um repositório no GitHub/GitLab/Bitbucket
   (ou use `vercel` CLI direto da pasta).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. Framework preset "Next.js" é detectado automaticamente — não é necessário configurar
   nada adicional. Clique em "Deploy".
4. A cada push na branch principal, a Vercel gera um novo deploy automaticamente.

## Estrutura do projeto

```
app/
  layout.tsx        → fontes, metadata, script de tema, WhatsApp + ThemeSwitcher globais
  globals.css        → tokens de cor (tema), grid/grain, fontes, animações
  page.tsx           → monta a página (Header + seções + Footer)
components/
  layout/            → Header, Footer
  sections/          → cada seção da página (hero, serviços, projetos, etc.)
  ui/                → WhatsAppButton, ThemeSwitcher, SectionHeader
config/
  site.ts            → ⭐ TEXTOS, CONTATO, LINKS, MÉTRICAS, SERVIÇOS, SEGMENTOS, CLIENTES
  images.ts          → ⭐ IMAGENS dos projetos (mock atual + instruções de troca)
lib/
  whatsapp.ts        → monta o link wa.me a partir de config/site.ts
public/mock/         → ilustrações SVG mockadas (estilo blueprint)
```

## O que editar — guia rápido

### 1. Telefone, WhatsApp, endereço, redes sociais e textos institucionais

Tudo fica centralizado em **`config/site.ts`**. Cada bloco tem comentário indicando o
que pode ser alterado:

- `contact.phoneDisplay` / `contact.phoneHref` — telefone exibido e link `tel:`.
- `contact.address` — endereço, CEP e link do Google Maps.
- `social.instagram` / `social.linkedin` — links das redes sociais (Header/Footer).
- `whatsapp.number` — **número usado pelo botão flutuante de WhatsApp**.
  - ⚠️ Atualmente está configurado com o telefone fixo principal convertido para o
    formato internacional (`556232877300`) **como placeholder**, pois não havia um
    número de WhatsApp comercial informado. Assim que a Shammah tiver um número de
    WhatsApp dedicado, troque apenas este valor (formato: código do país + DDD + número,
    sem espaços, traços ou símbolos).
- `whatsapp.defaultMessage` — mensagem pré-preenchida ao abrir o chat.
- `nav`, `stats`, `services`, `segments`, `differentials`, `clients` — todos os textos
  e listas exibidos nas seções da página.

O botão de WhatsApp (`components/ui/WhatsAppButton.tsx`) e o link usado no header/CTA
final são gerados a partir de `lib/whatsapp.ts`, que monta a URL `https://wa.me/...`
usando os valores de `config/site.ts` — não é necessário editar esse arquivo.

### 2. Imagens dos projetos (mock → fotos reais)

As imagens da seção "Projetos" (`components/sections/ProjectsShowcase.tsx`) vêm de
**`config/images.ts`**. Atualmente são ilustrações SVG estilo "prancha técnica"
(`public/mock/project-01.svg` a `project-04.svg`), criadas para manter a identidade
visual enquanto não há fotos reais de obra.

Para trocar por fotos reais:

1. Coloque os arquivos (`.jpg`, `.png` ou `.webp`) em `public/mock/` (ou outra pasta de
   sua preferência dentro de `public/`).
2. Em `config/images.ts`, atualize o campo `src` de cada item para o novo caminho
   (ex.: `/mock/galpao-ford.jpg`).
3. Ajuste `alt` (texto alternativo, importante para acessibilidade/SEO), `caption` e
   `meta` conforme a obra real.

A logo (`logo.png`, na raiz de `public/`) já está pronta e não precisa de alteração —
ela é usada com fundo claro (placa branca) tanto no tema escuro quanto no claro/cinza,
para preservar o contraste do texto "ESTRUTURAS METÁLICAS".

### 3. Cores e tema visual

Os tokens de cor ficam em **`app/globals.css`**, em três blocos:

- `:root` → tema **Escuro** (padrão).
- `[data-theme="light"]` → tema **Claro**.
- `[data-theme="gray"]` → tema **Fundo cinza**.

A cor de destaque (laranja da marca) é `--accent: #fc4c04`. Para ajustar qualquer cor
do site, edite as variáveis CSS nesses blocos — todos os componentes consomem as cores
através de `var(--bg)`, `var(--fg)`, `var(--accent)`, etc. (mapeadas para classes
Tailwind via `@theme inline`, ex. `bg-bg`, `text-fg`, `text-accent`).

### 4. Seletor de tema (Claro / Escuro / Cinza) — **temporário**

O seletor no canto superior direito (`components/ui/ThemeSwitcher.tsx`) foi incluído
para que o cliente possa avaliar as três variações de cor durante a aprovação do site.
**Ele é temporário** e deve ser removido antes (ou pouco depois) do lançamento
definitivo, fixando o tema escolhido.

Para remover, siga os passos descritos em comentário no topo de
`components/ui/ThemeSwitcher.tsx`:

1. Apague o arquivo `components/ui/ThemeSwitcher.tsx`.
2. Em `app/layout.tsx`, remova o import e o uso de `<ThemeSwitcher />`.
3. Ainda em `app/layout.tsx`, defina `data-theme="escuro"` (ou `"light"` / `"gray"`,
   conforme o tema escolhido) fixo na tag `<html>` e remova o `themeInitScript`
   (script inline que lê o tema salvo no `localStorage`).
4. Opcional: em `app/globals.css`, remova os blocos `[data-theme="..."]` que não forem
   mais usados, mantendo apenas os tokens do tema escolhido em `:root`.
5. Remova a classe de padding extra reservada para o seletor no header
   (`pr-28 sm:pr-40 lg:pr-48` em `components/layout/Header.tsx`), caso o espaço não
   seja mais necessário.

## Botão flutuante de WhatsApp

Fixo no canto inferior direito em todas as páginas (`components/ui/WhatsAppButton.tsx`),
com estados de hover/foco e animação de entrada. Abre uma conversa no WhatsApp com a
mensagem padrão definida em `config/site.ts` (`whatsapp.defaultMessage`), para o número
configurado em `whatsapp.number` (ver seção "O que editar" acima sobre o placeholder).

## Checklist de revisão

- [x] Roda localmente sem erros (`npm run dev`, `npm run build`)
- [x] Responsivo (mobile / tablet / desktop)
- [x] Logo aplicada corretamente (placa clara sobre fundo escuro/claro/cinza)
- [x] Conteúdo baseado em `infos.md`
- [x] Botão de WhatsApp funcional, com número centralizado e configurável
- [x] Seletor de tema com as 3 variações (Claro / Escuro / Cinza) preservando
      legibilidade e contraste
- [x] Imagens mockadas organizadas para troca futura
