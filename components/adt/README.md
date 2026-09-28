# Além da Técnica · Biblioteca v1

Catálogo em `app/page.tsx`. Implementação React + TypeScript, com primitivas acessíveis em `components/ui` e composições próprias em `components/adt`.

## Estrutura
- `tokens.ts`: tokens serializáveis e exportação JSON.
- `core.tsx`: Button, IconButton, Badge, Field, PersonAvatar, AvatarGroup, Notice, CopyButton e BrandMark.
- `platform.tsx`: PromptComposer, ModelSelector, ChatMessage, GenerationIndicator, CodeBlock, SourceCard, PromptChips, GeneratedImageCard, UploadArea, AgentCard, ToolSelector, TaskStep, ApprovalRequest, ProjectCard, CreditMeter e CommandPalette.
- `basics.tsx` e `foundations.tsx`: documentação visual e exemplos.
- `app/globals.css`: tokens CSS e tema das composições. As fontes são locais, sem chamadas externas em tempo de execução.

## Reutilização
```tsx
import { Button, Field, Notice } from '@/components/adt/core';
import { ProjectCard, CreditMeter, TaskStep } from '@/components/adt/platform';

<Field label="Nome do projeto" placeholder="Minha presença profissional" />
<Button kind="primary" onClick={salvar}>Salvar</Button>
<Notice tone="success" title="Projeto salvo." />
<ProjectCard name="Minha presença profissional" files={6} activity="Há 2 horas" />
<CreditMeter consumed={320} limit={1000} />
<TaskStep title="Revisar apresentação" state="done" detail="Rascunho pronto para revisão." />
```

`Button.kind`: primary | secondary | quiet | danger | accent. `busy` e `disabled` impedem interação. `asChild` permite links sem botão aninhado.
`Notice.tone` e `Badge.tone`: neutral | success | warning | danger | info.
`Field`: tipos nativos de input, `multiline`, `hint`, `error`; associa rótulo e descrição por ID.
`TaskStep.state`: waiting | running | done | failed.
`ModelSelector`, `ToolSelector` e `PromptComposer` têm valores e callbacks controlados. `PromptComposer` recebe anexos tipados, callbacks de anexar/remover, envio e interrupção, além de estado `busy`/`disabled`.

Componentes maiores compõem os mesmos botões, badges, avatares e primitivas. Modais e menus usam Radix via o catálogo Shadcn instalado: preservar controle de foco, Escape, semântica e navegação por teclado.

## Simulação
Sem APIs de IA, cobranças, envio de mensagens ou processamento externo de arquivos. A conversa seleciona respostas locais, com tempo e cancelamento; uploads mostram metadados e progresso local; variação de imagem demonstra enquadramento da mesma imagem, identificada como simulação. Dados de créditos, projetos, membros e estados são exemplos. Sem persistência entre sessões.

## Direção visual
Identidade original Além da Técnica: verde, marfim, sálvia, manteiga e terracota; Playfair Display, Inter e IBM Plex Mono; ícones Lucide com traço de 1,5 px. Referência pública consultada: https://onovomercado.com/. Nenhuma imagem de referência específica foi anexada neste pedido.
