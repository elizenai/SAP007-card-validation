const validator = {

    isValid: function (nCartao) {

        let arrayCartao = Array.from(nCartao)
        let reverterNumero = arrayCartao.reverse()

        let soma = 0  

        for (let i = 0; i < reverterNumero.length; i++) {

            if (i % 2 != 0) {
                reverterNumero[i] = (Number(reverterNumero[i])) * 2

                if (reverterNumero[i] > 9) {
                    reverterNumero[i] = reverterNumero[i] - 9
                    soma = soma + Number(reverterNumero[i])
                }
                else {
                    soma = soma + (reverterNumero[i])
                }

            }
            else {
                soma = soma + Number(reverterNumero[i])
            }
        }
        
        
        if (soma % 10 === 0 && soma !== 0){
            return true

        }
        else {
            return false
        }


    },

    maskify(nCard) {
        let maskNum = [];

        for (let i = 0; i < nCard.length; i++) {
            if (i < (nCard.length - 4)) {
                maskNum.push("#");
            }
            else {
                maskNum.push(nCard[i]);
              
            } 
            
        }
        return maskNum.join("");
    },

};

export default validator;