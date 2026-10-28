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

function classificarVinho(safra) {
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - safra;

    if (idade <= 5) {
        return "Jovem";
    } else if (idade <= 15) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}


function mostrarVinho(numero, nome, tipo, safra, quantidade, classificacao, baixo) {
    console.log("----- Vinho " + numero + " -----");
    console.log("Nome do vinho: " + nome);
    console.log("Tipo do vinho: " + tipo);
    console.log("Safra: " + safra);
    console.log("Quantidade em estoque: " + quantidade);
    console.log("Classificação: " + classificacao);
    console.log("Estoque baixo: " + (baixo ? "SIM" : "não"));

    let aviso = "Vinho " + numero + " cadastrado! Veja os detalhes no console.";
    if (baixo) {
        aviso += "\nATENÇÃO: estoque baixo (menos de " + ESTOQUE_MINIMO + " unidades)!";
    }
    alert(aviso);
}

function linhaResumo(numero, nome, safra, quantidade) {
    return numero + ") " + nome + " - safra " + safra + " - " + quantidade + " un.\n";
}
