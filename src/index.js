import validator from './validator.js';
//console.log(validator);

const button = document.getElementById("validar");

function validando(e) {
    e.preventDefault()

    let ncard = parseInt(document.getElementById("numeroCartao")).value;  
    const validarcard = validator.isValid(numeroCartao);
    document.getElementById("resposta").innerHTML = validarcard;
}

button.addEventListener("click", validando);









/*const valorInput = document.getElementById("numeroCartao"); 
function validando(e) {
    e.preventDefault()

    let ncard = valorInput.value;
    const validarCard = validator.isValid(ncard);
    let resposta = document.getElementById("resposta").value;
    if (validarCard === true) {
        resposta.innerHTML = "CARTÃO VÁLIDO"; //+ mask;
    }else{
        resposta.innerHTML = "CARTÃO INVÁLIDO"; //+ mask;
    }
    const button = document.getElementById("validar");
    button.addEventListener("click", validando)
}*/