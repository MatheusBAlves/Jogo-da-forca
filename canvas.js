

function desenharCanvas() {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    //Manipulação
    tabuleiro.fillRect(0, 0, 1200, 500);
    tabuleiro.beginPath();
    tabuleiro.moveTo(900, 360);
    tabuleiro.lineTo(650, 360);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function desenharLinhas() {

    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";
    let largura = 600 / palavraSecreta.length;



    for (let i = 0; i < palavraSecreta.length; i++) {
        tabuleiro.moveTo(500 + (largura * i), 446);
        tabuleiro.lineTo(550 + (largura * i), 446);
    }

    tabuleiro.stroke();
    tabuleiro.closePath();
}

function escreverLetraCorreta(index) {
    tabuleiro.font = "bold 52px Inter";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.lineWidth = 6;
    let largura = 600 / palavraSecreta.length;

    tabuleiro.fillText(palavraSecreta[index], 508 + (largura * index), 439);

}

function escreverLetraIncorreta(letra, erros) {
    tabuleiro.font = "bold 40px Inter";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.lineWidth = 6;

    tabuleiro.fillText(letra, 150, 100  + (40 * erros), 40);

}

function desenharForca(pontos) {
    tabuleiro.lineWidth=8
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.strokeStyle = "#0A3871"
    if(pontos===0){
    //poste lateral
    tabuleiro.moveTo(700,377)
    tabuleiro.lineTo(700,75)
    }
    if(pontos===1){//teto 
    tabuleiro.moveTo(850,75)
    tabuleiro.lineTo(700,75)
    }
    if(pontos===2){//corda
    tabuleiro.moveTo(850,75)
    tabuleiro.lineTo(850,123)
    }
    if(pontos===3){//para cara
    tabuleiro.moveTo(900,173)
    tabuleiro.arc(850,173,50,0,Math.PI*2)
    }
    if(pontos===4){//para corpo
    tabuleiro.moveTo(850,294)
    tabuleiro.lineTo(850,224)
    }
    if(pontos===5){//para perna esquerda
    tabuleiro.moveTo(850,294)
    tabuleiro.lineTo(800,340)
    }
    if(pontos===6){//para perna direita
    tabuleiro.moveTo(850,294)
    tabuleiro.lineTo(890,340)
    }
    if(pontos===7){//para mão izquerda
    tabuleiro.moveTo(850,249)
    tabuleiro.lineTo(800,294)
    }
    if(pontos===8){//para mão direita
    tabuleiro.moveTo(850,249)
    tabuleiro.lineTo(890,294)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
  }