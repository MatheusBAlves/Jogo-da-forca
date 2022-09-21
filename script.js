const telaInicial = document.querySelector(".start");
const telaJogo = document.querySelector(".jogo");
const telaAdicionando = document.querySelector(".adicionando");

let palavras = ["ALURA", "ORACLE", "FORCA", "HTML", "jAVASCRIPT", "SALSICHA", "LOGICA"];

let tabuleiro = document.getElementById("forca").getContext('2d');
let palavraSecreta;

function telaAdicionar() {
    mudaTela(telaInicial, telaAdicionando);
}

function telaPrincipal() {
    mudaTela(telaAdicionando, telaInicial);
}

function iniciarJogo() {
    mudaTela(telaInicial, telaJogo);
    sortearPalavra();
    desenharCanvas();
    desenharLinhas();
}

function mudaTela(telaAdiciona, telaRemove) {
    telaAdiciona.classList.add("desaparece");
    telaRemove.classList.remove("desaparece");
}

function salvarPalavra() {
    const palavraNova = document.querySelector(".texto-entrada");

    if (palavraNova.value.length == 0) {
        console.log("Nenhuma palavra digitada");
    } else {
        console.log(palavraNova.value);
        palavras.push(palavraNova.value);
        // const palavraMaiuscula = palavraNova.value
        alert("Palavra nova adicionada!");
    }
}

function sortearPalavra() {
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    console.log(palavraSecreta)
}