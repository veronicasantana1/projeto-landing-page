var setaDireita = window.document.getElementById("seta1");
var Leonardo = window.document.getElementById("leonardo");
var Samantha = window.document.getElementById("samantha");
var Bruna = window.document.getElementById("bruna");
var setaEsquerda = window.document.getElementById("seta2");
var cards = window.document.getElementById("div-cards");

function RolarParaDireita() {
  Leonardo.style = "display:none";
  Bruna.style = "display:flex";
  setaEsquerda.style = "display:flex";
  setaDireita.style = "display:none";
}

function RolarParaEsquerda() {
  Leonardo.style = "display:flex";
  Bruna.style = "display:none";
  setaDireita.style = "display:flex";
  setaEsquerda.style = "display:none";
  margin;
}
