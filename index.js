import validator from './validator.js';

const button = document.getElementById("validar");

function validando(e) {
    e.preventDefault()

    let nCard = document.getElementById("numeroCartao").value;
    console.log(nCard)
    if (nCard == "") {
        alert("Preencha o campo abaixo")
    }
    else {
        let validarCard = validator.isValid(nCard);
        let resposta = document.getElementById("resposta");
        let mascara = validator.maskify(nCard);

        if (validarCard === true) {
            return resposta.textContent = "CARTÃO VÁLIDO " + mascara;
        } else {
            return resposta.textContent = "CARTÃO INVÁLIDO " + mascara;
        }
    }

}

button.addEventListener("click", validando);
