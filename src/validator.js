const validator = {

    isValid(numeroCartao) {
      const card = Array.from(numeroCartao) 
      let cardRev = card.reverse() 
      let soma = 0
    

      //vai percorrer todo o numero
        for (let i= 0; i <= cardRev.length; i++) {

            if (i % 2 != 0){
             cardRev[i] = (Number(cardRev[i])) * 2
                
             if (cardRev[i] < 9 ){
                 cardRev[i] = cardRev[i] - 9
                 soma += (Number(cardRev[i]))
             }else{
                 soma += (cardRev[i])
             }
            }else{
                soma += (Number(cardRev[i]))
            }
        }
        if (soma % 10 ===  0){
            return numeroCartao = true
        }else{
            return numeroCartao = false
        }
            
        
    }
}

export default validator;