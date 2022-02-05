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
            resposta.textContent = "CARTÃO VÁLIDO " + mascara;
            resposta.style.color = "#32CD32";
            resposta.style.fontSize = "17px";
            resposta.style.fontWeight = "bold";

        } else {
            resposta.textContent = "CARTÃO INVÁLIDO " + mascara;
            resposta.style.color = "#B22222";
            resposta.style.fontSize = "17px";
            resposta.style.fontWeight = "bold";
        }
    }
}

button.addEventListener("click", validando);
