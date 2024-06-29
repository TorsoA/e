let pp1 = localStorage.getItem('pp1');
let pp2 = localStorage.getItem('pp2');


function
    mudar1() {

    var texto = document.getElementById("resp_A-P2");
    texto.style.color = "red";

    var mensagem = document.getElementById("mensagem1")
    mensagem.style.display = "block";

    var mensagemp = document.getElementById("mensagem_pontos1");
    mensagemp.innerHTML = `<p> Vamos para a proxima pergunta! </p>`;

    var elementosParaDesfocar = document.querySelectorAll('body > *:not(#mensagem1):not(#mensagem2):not(#numerais)');
    elementosParaDesfocar.forEach(function (elemento) {
        elemento.style.transition = 'filter 0.1s ease-in-out'; // Transição suave de 0.3 segundos
        elemento.style.filter = 'blur(4px)';
    });

    var numeros = document.getElementById("numerais")
    numeros.style.display = "block";

    var numero2 = document.getElementById('numero2');
    if (numero2.src.match("/img/2.png")) {
        numero2.src = "/img/2vermelho.png";

        errar();


    }


  


}

function
    mudar2() {

    var texto = document.getElementById("resp_B-P2");
    texto.style.color = "red";

    var mensagem = document.getElementById("mensagem1")
    mensagem.style.display = "block";

    var mensagemp = document.getElementById("mensagem_pontos1");
    mensagemp.innerHTML = `<p> Vamos para a proxima pergunta! </p>`;

    var elementosParaDesfocar = document.querySelectorAll('body > *:not(#mensagem1):not(#mensagem2):not(#numerais)');
    elementosParaDesfocar.forEach(function (elemento) {
        elemento.style.transition = 'filter 0.1s ease-in-out'; // Transição suave de 0.3 segundos
        elemento.style.filter = 'blur(4px)';
    });

    var numeros = document.getElementById("numerais")
    numeros.style.display = "block";

    var numero2 = document.getElementById('numero2');
    if (numero2.src.match("/img/2.png")) {
        numero2.src = "/img/2vermelho.png";

        errar();
        
    }




}

function
    mudar3() {

     
    var texto = document.getElementById("resp_C-P2");
    texto.style.color = "green";

    var mensagem = document.getElementById("mensagem2")
    mensagem.style.display = "block";

    var mensagemp = document.getElementById("mensagem_pontos2");
    mensagemp.innerHTML = `<p> Vamos para a proxima pergunta! </p>`;

    var elementosParaDesfocar = document.querySelectorAll('body > *:not(#mensagem1):not(#mensagem2):not(#numerais)');
    elementosParaDesfocar.forEach(function (elemento) {
        elemento.style.transition = 'filter 0.1s ease-in-out'; // Transição suave de 0.3 segundos
        elemento.style.filter = 'blur(4px)';
    });

    var numeros = document.getElementById("numerais")
    numeros.style.display = "block";

    var numero2 = document.getElementById('numero2');
    if (numero2.src.match("/img/2.png")) {
        numero2.src = "/img/2verde.png";

        acertar();
       
    }

 

}

function
    mudar4() {



    var texto = document.getElementById("resp_D-P2");
    texto.style.color = "red";

    var mensagem = document.getElementById("mensagem1")
    mensagem.style.display = "block";

    var mensagemp = document.getElementById("mensagem_pontos1");
    mensagemp.innerHTML = `<p> Vamos para a proxima pergunta! </p>`;

    var elementosParaDesfocar = document.querySelectorAll('body > *:not(#mensagem1):not(#mensagem2):not(#numerais)');
    elementosParaDesfocar.forEach(function (elemento) {
        elemento.style.transition = 'filter 0.1s ease-in-out'; // Transição suave de 0.3 segundos
        elemento.style.filter = 'blur(4px)';
    });

    var numeros = document.getElementById("numerais")
    numeros.style.display = "block";

    var numero2 = document.getElementById('numero2');
    if (numero2.src.match("/img/2.png")) {
        numero2.src = "/img/2vermelho.png";

        errar();
    }
  
 

}



function errar() {
    pp2 = "errada";
    localStorage.setItem('pp2', pp2)
    
    
}

function acertar() {
    pp2 = "certa";
    localStorage.setItem('pp2', pp2)
  
    
}


window.onload = function() {
    let pp1 = localStorage.getItem('pp1');
    if (pp1 === "certa") {
        let numero1 = document.getElementById('numero1');
        if (numero1.src.match("/img/1.png")) {
            numero1.src = "/img/1verde.png";
        }
    } 

    if (pp1 === "errada") {
        let numero1 = document.getElementById('numero1');
        if (numero1.src.match("/img/1.png")) {
            numero1.src = "/img/1vermelho.png";
        }
    } 
}

