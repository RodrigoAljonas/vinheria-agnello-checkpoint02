const ESTOQUE_MINIMO = 5;
const SAFRA_MINIMA = 1900;
const MAX_CADASTROS = 5;


function pedirTexto(mensagem) {
    let resposta = prompt(mensagem);

    while (resposta === null || resposta.trim() === "") {
        alert("Entrada inválida! Digite algum valor.");
        resposta = prompt(mensagem);
    }
    return resposta.trim();
}

function pedirTipo() {
    let tipo = pedirTexto("Digite o tipo do vinho (Tinto, Branco, Rosé):");
    let tipoMin = tipo.toLowerCase();

    while (tipoMin !== "tinto" && tipoMin !== "branco" && tipoMin !== "rosé" && tipoMin !== "rose") {
        alert("Tipo inválido! Use Tinto, Branco ou Rosé.");
        tipo = pedirTexto("Digite o tipo do vinho (Tinto, Branco, Rosé):");
        tipoMin = tipo.toLowerCase();
    }
    return tipo;
}



function pedirNumero(mensagem, minimo, maximo) {
    let numero = Number(pedirTexto(mensagem));

    while (!Number.isInteger(numero) || numero < minimo || numero > maximo) {
        alert("Valor inválido! Digite um número inteiro entre " + minimo + " e " + maximo + ".");
        numero = Number(pedirTexto(mensagem));
    }
    return numero;
}

function pedirSimNao(mensagem) {
    let resposta = pedirTexto(mensagem + " (s/n)").toLowerCase();

    while (resposta !== "s" && resposta !== "n") {
        alert("Responda apenas com s ou n.");
        resposta = pedirTexto(mensagem + " (s/n)").toLowerCase();
    }
    return resposta === "s";
}

function estoqueBaixo(quantidade) {
    return quantidade < ESTOQUE_MINIMO;
}




let NomeVinho = prompt("Digite o nome do vinho: ");
let TipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco, Rosé): ")
let Safra = prompt("Digite a safra(ano): ")
let QtdEstoque = prompt("Digite a quantidadade em estoque: ")

alert("Cadastro realizado! Veja os detalhes no console.")
alert("A seguir, veja os detalhes do vinho no console.")

console.log (`Nome do vinho:  ${NomeVinho}`)
console.log (`Tipo do vinho:  ${TipoVinho}`)
console.log (`Safra:  ${Safra}`)
console.log (`Quantidade em estoque:  ${QtdEstoque}`)