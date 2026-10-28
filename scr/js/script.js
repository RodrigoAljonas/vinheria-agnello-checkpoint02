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



function iniciarSistema() {
    let nome1, nome2, nome3, nome4, nome5;
    let safra1, safra2, safra3, safra4, safra5;
    let quant1, quant2, quant3, quant4, quant5;

    let totalCadastros = 0;
    let totalEstoqueBaixo = 0;
    let safraMaisAntiga = 0;
    let nomeMaisAntigo = "";

    let continuar = true;

    while (continuar && totalCadastros < MAX_CADASTROS) {
        let nome = pedirTexto("Digite o nome do vinho:");
        let tipo = pedirTipo();
        let safra = pedirNumero("Digite a safra (ano):", SAFRA_MINIMA, new Date().getFullYear());
        let quantidade = pedirNumero("Digite a quantidade em estoque:", 0, 100000);

        totalCadastros++;

        let classificacao = classificarVinho(safra);
        let baixo = estoqueBaixo(quantidade);

        
        if (totalCadastros === 1) {
            nome1 = nome; safra1 = safra; quant1 = quantidade;
        } else if (totalCadastros === 2) {
            nome2 = nome; safra2 = safra; quant2 = quantidade;
        } else if (totalCadastros === 3) {
            nome3 = nome; safra3 = safra; quant3 = quantidade;
        } else if (totalCadastros === 4) {
            nome4 = nome; safra4 = safra; quant4 = quantidade;
        } else {
            nome5 = nome; safra5 = safra; quant5 = quantidade;
        }

        if (baixo) {
            totalEstoqueBaixo++;
        }

        if (totalCadastros === 1 || safra < safraMaisAntiga) {
            safraMaisAntiga = safra;
            nomeMaisAntigo = nome;
        }

        mostrarVinho(totalCadastros, nome, tipo, safra, quantidade, classificacao, baixo);

        if (totalCadastros < MAX_CADASTROS) {
            continuar = pedirSimNao("Deseja cadastrar outro vinho?");
        } else {
            alert("Limite de " + MAX_CADASTROS + " cadastros atingido.");
        }
    }
}
