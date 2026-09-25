# Além da Técnica

Landing page da plataforma Além da Técnica, com design system e biblioteca de componentes.

## Conteúdo

- `/`: landing page com hero animada, troca de frases, assinatura e perguntas frequentes.
- `/design-system`: catálogo da identidade visual.
- `/biblioteca`: biblioteca de componentes.
- `public/landing`: imagens e esculturas da hero, incluídas neste repositório.

Assinatura: R$37 por mês, acesso imediato às aulas gravadas após a confirmação do pagamento e uma nova aula completa por semana. Checkout: https://pay.hotmart.com/D107764184G

## Desenvolvimento

Use Node.js 22 (a partir de 22.13) e pnpm 11.25.0.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

## Validação e produção

```sh
pnpm typecheck
pnpm build
pnpm start
```

## Publicar na Vercel

1. Importe este repositório pelo painel da Vercel.
2. Selecione o framework **Next.js**, diretório raiz `./` e Node.js **22.x**.
3. A configuração `vercel.json` usa `pnpm build`; mantenha o diretório de saída padrão do Next.js.
4. Publique a branch `main`.

A landing page não exige banco de dados nem variáveis de ambiente. O checkout acontece na Hotmart. Atualizações enviadas à branch de produção passam a gerar novos deploys após a conexão com a Vercel.

## Estrutura

- `app/`: páginas e layouts.
- `components/landing/`: landing page, hero, estilos e conteúdo.
- `components/adt/` e `components/ui/`: componentes dos catálogos.
- `public/`: fontes e imagens locais.

Os scripts `dev:sites`, `build:sites` e `start:sites` preservam o ambiente de origem do Sites. Os comandos principais usam Next.js para a Vercel.

Origem: versão aprovada em 25/09/2026, commit Sites `0966b70890ee4666a01e4397500c1569af0e54fb`.
