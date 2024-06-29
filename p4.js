let pp1 = localStorage.getItem('pp1');
let pp2 = localStorage.getItem('pp2');
let pp3 = localStorage.getItem('pp3');
let pp4 = localStorage.getItem('pp4');



function
    mudar1() {

    var texto = document.getElementById("resp_A-P4");
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

    var numero4 = document.getElementById('numero4');
    if (numero4.src.match("/img/4.png")) {
        numero4.src = "/img/4vermelho.png";

        errar();
        
    }

    
}

function
    mudar2() {

    var texto = document.getElementById("resp_B-P4");
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

    var numero4 = document.getElementById('numero4');
    if (numero4.src.match("/img/4.png")) {
        numero4.src = "/img/4vermelho.png";

        errar();
        
    }


    
}

function
    mudar3() {

      
        
    var texto = document.getElementById("resp_C-P4");
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
    
        var numero4 = document.getElementById('numero4');
        if (numero4.src.match("/img/4.png")) {
            numero4.src = "/img/4verde.png";
    
            acertar();
        }

    
}

function
    mudar4() {

       

    var texto = document.getElementById("resp_D-P4");
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

    var numero4 = document.getElementById('numero4');
    if (numero4.src.match("/img/4.png")) {
        numero4.src = "/img/4vermelho.png";

        errar();
        
    }


}




function errar() {
    pp4 = "errada";
    localStorage.setItem('pp4', pp4)
   
    
    
}

function acertar() {
    pp4 = "certa";
    localStorage.setItem('pp4', pp4)
  
    
}





window.onload = function() {
    // Verificação e atualização da imagem para pp1
    if (pp1 === "certa") {
        let numero1 = document.getElementById('numero1');
        if (numero1.src.match("/img/1.png")) {
            numero1.src = "/img/1verde.png";
        }
    } else if (pp1 === "errada") {
        let numero1 = document.getElementById('numero1');
        if (numero1.src.match("/img/1.png")) {
            numero1.src = "/img/1vermelho.png";
        }
    }

    // Verificação e atualização da imagem para pp2
    if (pp2 === "certa") {
        let numero2 = document.getElementById('numero2');
        if (numero2.src.match("/img/2.png")) {
            numero2.src = "/img/2verde.png";
        }
    } else if (pp2 === "errada") {
        let numero2 = document.getElementById('numero2');
        if (numero2.src.match("/img/2.png")) {
            numero2.src = "/img/2vermelho.png";
        }
    }

     // Verificação e atualização da imagem para pp3
     if (pp3 === "certa") {
        let numero3 = document.getElementById('numero3');
        if (numero3.src.match("/img/3.png")) {
            numero3.src = "/img/3verde.png";
        }
    } else if (pp3 === "errada") {
        let numero3 = document.getElementById('numero3');
        if (numero3.src.match("/img/3.png")) {
            numero3.src = "/img/3vermelho.png";
        }
    }
}