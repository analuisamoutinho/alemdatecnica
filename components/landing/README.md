# Além da Técnica · Horizonte

## Superfícies
- `/`: landing page aplicada.
- `/design-system`: catálogo da direção Horizonte, com tokens exportáveis, controles, movimento e prévia responsiva funcional.
- `/biblioteca`: biblioteca anterior preservada.

## Direção e referência
Referência principal solicitada: https://www.humanacademy.ai/. Inspeção em 21/09/2026. A página renderizou parcialmente e depois exibiu erro de carregamento, inclusive após uma recarga. Foram medidos no DOM fonte Helvetica Now Text / Helvetica Neue / Helvetica / Satoshi, título de aproximadamente 79 px e peso 400, texto #141B22, apoio #636E77, ação #568D9F e azul profundo #203B46. A navegação arredondada foi observada. Não foi possível validar visualmente a página inteira nem seus movimentos atuais.

Aplicação atual: branco frio, azul mineral, espaço amplo e esculturas metálicas de livro, conversa e evolução. Direção aprovada por imagem em 25/09/2026; peças menores nas bordas para preservar texto e CTAs. Usa Helvetica Neue/Helvetica quando disponíveis no dispositivo, seguida por Inter local/Arial. Não distribui Helvetica Now nem presume licença de fonte proprietária.

## Fonte de verdade
`components/landing/system.ts` contém os tokens exportados pelo catálogo e aplicados em ambas as superfícies. `design.tsx` reúne marca, ação, rótulo, entrada de seção e frase rotativa. `horizon.css` define composição, variantes e breakpoints. Os controles usam as primitives existentes.

## Movimento
- Hero: três frases a cada 4 s, deslocamento/opacidade em 650 ms; seleção e pausa manual.
- Pausa automática fora da tela, em aba oculta e com prefers-reduced-motion.
- Entrada de seção uma única vez, 24 px e opacidade, 600 ms. Conteúdo permanece visível se JavaScript não carregar.
- Respostas de botão em 160 ms; controles 220 ms; hover somente em ponteiros precisos.
- Peças do fundo: imagens transparentes separadas, animadas por transformações CSS com flutuação, inclinação em perspectiva e brilho. Não são modelos geométricos com rotação completa.
- Fundo pausa por controle próprio, fora da tela, em aba oculta e com preferência por movimento reduzido.
- Sem bibliotecas adicionais de animação ou rolagem interceptada.

## Oferta e dados
Assinatura confirmada: R$37 por mês, checkout https://pay.hotmart.com/D107764184G. Acesso imediato às aulas já gravadas após confirmação do pagamento e uma nova aula completa por semana. Botões de compra apontam para o checkout e preservam UTMs. Políticas e suporte aguardam links reais em `config.ts`. Nenhuma captura de lead ou API externa. Nenhum depoimento, prazo de oferta ou dado de resultado inventado.

## Validação
TypeScript e build de produção. Revisão em navegador da hero, alternância e pausa, tópicos, FAQ e catálogo. Prévia responsiva do catálogo permite testar larguras de 320 e 390 px na mesma implementação. Não equivale a teste de dispositivo físico.
