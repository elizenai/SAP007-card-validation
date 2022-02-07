import validator from './validator.js';

const button = document.getElementById("validar");

function validando(e) {
    e.preventDefault()

    let nCartao = document.getElementById("numeroCartao").value;
   
    if (nCartao == "") {
        alert("Preencha o campo abaixo")
    }
    else {
        let validarCartao = validator.isValid(nCartao);
        let resposta = document.getElementById("resposta");
        let mascara = validator.maskify(nCartao);

        if (validarCartao === true) {
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
