Shammah | Site Corporativo

Status do Desenvolvimento: Em andamento

Site institucional moderno e responsivo desenvolvido para a Shammah Estruturas Metálicas, uma empresa brasileira especializada em estruturas metálicas.

Este é um projeto comercial real, desenvolvido com o objetivo de estabelecer uma presença digital profissional para a empresa.

O site segue uma identidade visual marcante, moderna e cinematográfica, combinando tipografia de alto contraste, elementos de grade técnica, ilustrações inspiradas na engenharia e layouts assimétricos.

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Motion (motion/react)
- Layouts responsivos para computadores, tablets e dispositivos móveis
- Componentes React modulares e reutilizáveis
- Seções animadas e interações durante a rolagem da página
- Apresentação dos serviços e segmentos de atuação da empresa
- Portfólio de projetos
- Integração de contato via WhatsApp
- Configuração centralizada de conteúdo
- Múltiplos temas visuais para avaliação do cliente
```
app/
  layout.tsx
  globals.css
  page.tsx

components/
  layout/
  sections/
  ui/

config/
  site.ts
  images.ts

lib/
  whatsapp.ts

public/
  logo.png
  mock/
```
O projeto utiliza uma arquitetura baseada em componentes para melhorar a manutenção, a reutilização de código e a separação de responsabilidades.
O site está atualmente em desenvolvimento ativo. Alguns elementos visuais, conteúdos e integrações poderão sofrer alterações antes do lançamento oficial.

- Arquitetura inicial do projeto
- Layout responsivo
- Seções do site institucional
- Componentes de interface reutilizáveis
- Animações interativas
- Integração de contato via WhatsApp
- Variações de temas para avaliação do cliente
- Ilustrações provisórias dos projetos
- Substituir as ilustrações provisórias por fotografias reais dos projetos
- Confirmar as informações oficiais de contato da empresa
- Finalizar o conteúdo institucional
- Aprovar e aplicar o tema visual definitivo
- Concluir os testes finais e realizar a publicação em produção

Clone o repositório:
```
git clone https://github.com/Bruno-fix/shammah-corporate-website.git
cd shammah-corporate-website
```
Instale as dependências:
```
npm install
```
Inicie o servidor de desenvolvimento:
```
npm run dev
```
Acesse http://localhost:3000 no navegador.

Para gerar e executar uma versão de produção:
```
npm run build
npm run start
```
O projeto foi desenvolvido para implantação na plataforma Vercel.

Para realizar a implantação, importe o repositório do GitHub para a Vercel e selecione a configuração predefinida do framework Next.js.

O site ainda está em desenvolvimento e não foi considerado uma versão final de produção.
O conteúdo do site, as informações de contato, as imagens e os temas visuais são gerenciados por arquivos de configuração centralizados.

- config/site.ts — Conteúdo institucional, informações de contato e serviços
- config/images.ts — Imagens dos projetos e metadados
- app/globals.css — Tokens de design e temas visuais
- lib/whatsapp.ts — Geração de URLs para contato via WhatsApp

Bruno Queiroz

Estudante de Engenharia de Software

GitHub: https://github.com/Bruno-fix

LinkedIn: https://www.linkedin.com/in/bruno-queiroz-fix

Desenvolvido para a Shammah Estruturas Metálicas.

Este repositório contém o código-fonte de um projeto comercial real, publicado com autorização.

Status do Projeto: Em desenvolvimento ativo.
