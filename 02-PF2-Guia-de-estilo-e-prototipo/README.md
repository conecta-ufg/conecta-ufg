# Etapa 2 — Guia de estilo e protótipo

Entrega do projeto da interface: o guia de estilo e o protótipo navegável, com
os princípios e critérios de IHC indicados sobre as telas.

## O documento

[`PF2_Conecta_UFG.docx`](PF2_Conecta_UFG.docx) reune a Etapa 1 e a Etapa 2 num
documento so, como pede a entrega final. As secoes 1 a 7 sao a Etapa 1. A secao
8 e o guia de estilo, nas seis partes pedidas na disciplina. A secao 9 trata do
prototipo: a ferramenta escolhida, o endereco e a indicacao dos principios e
criterios sobre as telas.

## O protótipo

**[▶ Abrir](https://conecta-ufg.github.io/conecta-ufg/)**

A fonte é [`docs/index.html`](../docs/index.html), na raiz do repositório. É um
arquivo único, em HTML, CSS e JavaScript, sem dependência de servidor nem de
instalação, e é exatamente o mesmo arquivo que o GitHub Pages publica. Mantido
em um lugar só para não haver duas versões divergindo.

### Ferramenta escolhida

HTML, CSS e JavaScript escritos diretamente, em vez de uma ferramenta de
prototipagem visual. O motivo é o que vem na Etapa 3: a avaliação exige que o
usuário **complete uma tarefa** — descobrir uma vaga, verificar se é elegível,
candidatar-se e acompanhar. Um protótipo de telas estáticas não permite
completar nenhuma delas, logo não permite avaliar.

A escolha também dispensa instalação e conta de serviço: o avaliador abre um
endereço no navegador e usa. O guia de estilo fica no documento escrito, com os
valores exatos de cor, tipografia, espaçamento e componentes.

## Princípios indicados no protótipo

O botão **IHC**, na barra do topo, liga o modo de anotação. Marcadores numerados
aparecem sobre a interface; clicar em um deles abre a justificativa e a fonte.
São 29 marcadores:

| Categoria | Quantos | Cobertura |
|---|---|---|
| Princípios da Gestalt | 7 | as seis leis: proximidade, continuidade, simetria, similaridade, destino comum e fecho |
| Princípios e diretrizes de Silva e Barbosa | 13 | os nove princípios |
| Critérios de usabilidade | 4 | aprendizado, recordação, eficácia e segurança no uso |
| Acessibilidade | 4 | teclado, contraste, alvo de toque e leitor de tela |
| Affordance | 1 | convite ao uso |

O modo vem desligado por padrão, para não interferir na avaliação com usuários
da Etapa 3.

As telas com os marcadores estão em [`prints/`](prints/), com os arquivos
`anot_*.png`. Os arquivos `tela_*.png` são as mesmas telas sem anotação.

## Identidade visual

[`identidade-visual/`](identidade-visual/) traz a logomarca e os tokens de
design em JSON, que é a versão legível por máquina da paleta e da escala
tipográfica descritas no guia de estilo.

A paleta vem do protótipo: azul-cobalto `#2A3CD4` como cor da marca, amarelo-ipê
`#FFC21A` como destaque, e tinta `#15173A`. Tipografia Nunito.
