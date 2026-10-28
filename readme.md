# Vinheria Agnello - Checkpoint 02

**Sistema de Avaliação de Estoque e Tendência de Vinhos**

## Descrição do que foi implementado

Evolução do Checkpoint 01. O sistema funciona via `prompt()` e `alert()` e agora:

- Cadastra **vários vinhos em sequência**, perguntando ao final de cada um se deseja cadastrar outro (até 5 cadastros);
- Usa **funções reutilizáveis** para validar entradas, verificar estoque baixo (menos de 5), classificar o vinho (jovem, amadurecido ou antigo) e mostrar os dados no console com aviso por `alert()`;
- Respeita o **escopo de variáveis** (variáveis das funções são locais);
- Usa **laços de repetição** (`while`) para os cadastros e para a validação;
- Não usa arrays nem objetos: os dados ficam em variáveis numeradas (`nome1`, `safra1`, `quant1`...);
- Ao final exibe quantos cadastros foram feitos, quantos vinhos têm estoque baixo e o vinho com a safra mais antiga.

**Classificação:** até 5 anos = Jovem | 6 a 15 anos = Amadurecido | mais de 15 anos = Antigo.

## Integrantes

- Rodrigo Aljonas de Lima
- Felipe Alves Costa

## GitHub Pages

https://rodrigoaljonas.github.io/vinheria-agnello-checkpoint02/
