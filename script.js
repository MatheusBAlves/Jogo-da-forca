const telaInicial = document.querySelector(".start");
const telaJogo = document.querySelector(".jogo");
const telaAdicionando = document.querySelector(".adicionando");


let palavras = ["ALURA", "ORACLE", "FORCA", "HTML", "JAVASCRIPT", "SALSICHA", "LOGICA"];

let tabuleiro = document.getElementById("forca").getContext('2d');
let palavraSecreta = "";
let palavraCorreta = "";
let letrasErradas = [];

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
                    if (!palavraCorreta.includes(letra)) {
                        for (let x = i + 1; x < palavraSecreta.length; x++) {
                            if (palavraSecreta[x] === letra) {
                                adicionarLetraCorreta(x);
                                escreverLetraCorreta(x);
                            }
                        }
                        adicionarLetraCorreta(i);
                        escreverLetraCorreta(i);
                        verificaEstadoJogo();
                    }
                }

            }
        }

        if (verificarLetra(letra) && !palavraSecreta.includes(letra)) {
            if (!letrasErradas.includes(letra)) {
                letrasErradas.push(letra);
                adicionarPalavraIncorreta();
                escreverLetraIncorreta(letra, erros);
                desenharForca(erros);
                verificaEstadoJogo();
            }

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
    if (key >= 65 && key <= 90) {
        if (!letras.includes(key)) {
            letras.push(key);
        }
        return estado;
    }
    else {
        if (!letras.includes(key)) {
            letras.push(key);
        }
        estado = true;
        // letras.push(key)

        console.log(key);
        // console.log(letras, "if true");
        return estado;
    }
}

function adicionarLetraCorreta(i) {
    palavraCorreta += palavraSecreta[i].toUpperCase();
}

function adicionarPalavraIncorreta() {
    erros += 1;
    console.log(erros);
}

function verificaEstadoJogo() {
    if (palavraCorreta.length === palavraSecreta.length) {
        window.alert("Você venceu o jogo, parabéns");
        resetar();
    }
    if (erros >= 9) {
        window.alert(`Você perdeu o jogo, a palavra era: ${palavraSecreta}`);
        resetar();
    }
}

function resetar() {
    palavraCorreta = "";
    letrasErradas = [];
    erros = 0;
    apagaCanvas();
    telaPrincipal();
}