const telaInicial = document.querySelector(".start");
const telaJogo = document.querySelector(".jogo");
const telaAdicionando = document.querySelector(".adicionando");


let palavras = ["ALURA", "ORACLE", "FORCA", "HTML", "JAVASCRIPT", "SALSICHA", "LOGICA"];

let tabuleiro = document.getElementById("forca").getContext('2d');
let palavraSecreta = "";
let palavraCorreta = "";

let letras = [];
let erros = 0;

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

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();

        if (verificarLetra(letra) && palavraSecreta.includes(letra)) {
            for (let i = 0; i < palavraSecreta.length; i++) {
                if (palavraSecreta[i] === letra) {
                    adicionarLetraCorreta(i);
                    escreverLetraCorreta(i);
                }

            }
        }

        else if(verificarLetra(letra) && !palavraSecreta.includes(letra)){
            adicionarPalavraIncorreta();
            escreverLetraIncorreta(letra, erros);
            desenharForca(erros);

        }
    }
}

function mudaTela(telaAdiciona, telaRemove) {
    telaAdiciona.classList.add("desaparece");
    telaRemove.classList.remove("desaparece");
}

document.getElementById("btn-salvar").onclick = () => {
    salvarPalavra();
}

function salvarPalavra() {
    let palavraNova = document.querySelector(".entrada-palavra").value;

    if (palavraNova !== "") {
        palavras.push(palavraNova.toUpperCase());
        alert('A palavra digitada foi salva');
        iniciarJogo();
    }
    else {
        alert("Nenhuma palavra foi digitada")
    }

}

function sortearPalavra() {
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    console.log(palavraSecreta)
}

function verificarLetra(key) {
    let estado = false;
    if (key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
        return estado;
        letras.push(key)

    }
    else {
        estado = true;
        letras.push(key)

        console.log(key);
        console.log(letras, "if true");
        return estado;
    }
}

function adicionarLetraCorreta(i) {
    palavraCorreta += palavraSecreta[i].toUpperCase();
}

function adicionarPalavraIncorreta() {
    erros += 1;
}