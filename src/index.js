import validator from './validator.js';

const button = document.getElementById("validar");

function validando(e) {
    e.preventDefault()

    let nCard = document.getElementById("numeroCartao").value;  
  console.log(nCard)
    let validarCard = validator.isValid(nCard);
    console.log(validarCard)
    let resposta = document.getElementById("resposta");
    let mascara = validator.maskify(nCard);
    console.log(mascara)
    if (validarCard === true) {
        return resposta.textContent = "CARTÃO VÁLIDO " + mascara; 
    }else{
        return resposta.textContent = "CARTÃO INVÁLIDO " + mascara;
}
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