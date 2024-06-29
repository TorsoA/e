let pp1 = localStorage.getItem('pp1');



 
function
mudar1() {


var texto = document.getElementById("resp_A-P1");
texto.style.color = "red";

var mensagem = document.getElementById("mensagem1")
mensagem.style.display = "block";

var mensagemp = document.getElementById("mensagem_pontos1");
mensagemp.innerHTML = `<p> Vamos para a proxima pergunta! </p>`;

var elementosParaDesfocar = document.querySelectorAll('body > *:not(#mensagem1):not(#mensagem2):not(#numerais)');
elementosParaDesfocar.forEach(function(elemento) {
    elemento.style.transition = 'filter 0.1s ease-in-out'; // Transição suave de 0.3 segundos
    elemento.style.filter = 'blur(4px)';
});

var numeros = document.getElementById("numerais")
numeros.style.display = "block";

var numero1 = document.getElementById('numero1');
if (numero1.src.match("/img/1.png")) {
    numero1.src = "/img/1vermelho.png";
    errar();
}
}

function
mudar2() {


var texto = document.getElementById("resp_B-P1");
texto.style.color = "red";

var mensagem = document.getElementById("mensagem1")
mensagem.style.display = "block";

var mensagemp = document.getElementById("mensagem_pontos1");
mensagemp.innerHTML = `<p> Vamos para a proxima pergunta! </p>`;

var elementosParaDesfocar = document.querySelectorAll('body > *:not(#mensagem1):not(#mensagem2):not(#numerais)');
elementosParaDesfocar.forEach(function(elemento) {
    elemento.style.transition = 'filter 0.1s ease-in-out';
    elemento.style.filter = 'blur(4px)';
});

var numeros = document.getElementById("numerais")
numeros.style.display = "block";

var numero1 = document.getElementById('numero1');
if (numero1.src.match("/img/1.png")) {
    numero1.src = "/img/1vermelho.png";
    errar();

}


}

function
mudar3() {


var texto = document.getElementById("resp_C-P1");
texto.style.color = "red";

var mensagem = document.getElementById("mensagem1")
mensagem.style.display = "block";

var mensagemp = document.getElementById("mensagem_pontos1");
mensagemp.innerHTML = `<p> Vamos para a proxima pergunta! </p>`;

var elementosParaDesfocar = document.querySelectorAll('body > *:not(#mensagem1):not(#mensagem2):not(#numerais)');
elementosParaDesfocar.forEach(function(elemento) {
    elemento.style.transition = 'filter 0.1s ease-in-out';
    elemento.style.filter = 'blur(4px)';
});

var numeros = document.getElementById("numerais")
numeros.style.display = "block";

var numero1 = document.getElementById('numero1');
if (numero1.src.match("/img/1.png")) {
    numero1.src = "/img/1vermelho.png";
    errar();

}

}

function
mudar4() {



var texto = document.getElementById("resp_D-P1");
texto.style.color = "green";

var mensagem = document.getElementById("mensagem2")
mensagem.style.display = "block";

var mensagemp = document.getElementById("mensagem_pontos2");
mensagemp.innerHTML = `<p> Vamos para a proxima pergunta! </p>`;

var elementosParaDesfocar = document.querySelectorAll('body > *:not(#mensagem1):not(#mensagem2):not(#numerais)');
elementosParaDesfocar.forEach(function(elemento) {
    elemento.style.transition = 'filter 0.1s ease-in-out';
    elemento.style.filter = 'blur(4px)';
});

var numeros = document.getElementById("numerais")
numeros.style.display = "block";

var numero1 = document.getElementById('numero1');
if (numero1.src.match("/img/1.png")) {
    numero1.src = "/img/1verde.png";
    acertar();
}
}

function errar() {
    pp1 = "errada";
    localStorage.setItem('pp1', pp1)

  
}

function acertar() {
    pp1 = "certa";
    localStorage.setItem('pp1', pp1)
    
    
}



