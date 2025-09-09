class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    
    // Função para validar os dados de entradas
    function validarDados(dadosEntrada, dadosGuardados) {

      let aux = [];

      for (const dadoEntrada of dadosEntrada) {

        // Verificando se o dado está incorreto
        if (!dadosGuardados.includes(dadoEntrada)) {

          return true;

        } 

        // Verificando se o dado é duplicado
        if (aux.includes(dadoEntrada)) {

          return true;

        } 

        aux.push(dadoEntrada);
  
      }

      return false;

    }

    // Função para verificar se o animal pode ser adotado por uma pessoa 
    function adotaAnimais(brinqPessoa, animaisBrinq, animal) {
      
      for (const animalBrinq of animaisBrinq) {
        
        // Caso para o restante dos animais
        if (animalBrinq[0] === animal && animal !== "Loco") {
          
          let aux1 = 0;
          let aux2 = -1;
  
          animalBrinq[2].forEach(brinque => {

            if (brinqPessoa.indexOf(brinque) > aux2) {
  
              aux1 ++;
              aux2 = brinqPessoa.indexOf(brinque);
  
            }

          })

          return aux1 === animalBrinq[2].length;
 
        }

        // Caso do Loco (Loco não se importa com a ordem dos seus brinquedos)
        if (animalBrinq[0] === animal && animal === "Loco") {
          
          let aux1 = 0;
  
          animalBrinq[2].forEach(brinque => {

            if (brinqPessoa.includes(brinque)) {

              aux1 ++;

            }    
  
          })

          return aux1 === animalBrinq[2].length;
 
        }

      }

    }

    // Função para a distribuição dos animais
    function distAnimais(brinquedosPess1, brinquedosPess2, ordemAnima, animaisBrinque) {

      let pessoa1Gato = false;
      let pessoa2Gato = false;
      let pessoa1QuantiAdota = 0;
      let pessoa2QuantiAdota = 0;

      let resultadoPess1 = [];
      let resultadoPess2 = [];
      let resultadoSobra = [];
      let resultado = [];

      ordemAnima.forEach(anima => {

        let pessoa1Adota = adotaAnimais(brinquedosPess1, animaisBrinque, anima);
        let pessoa2Adota = adotaAnimais(brinquedosPess2, animaisBrinque, anima);

        if (pessoa1Adota && pessoa2Adota) {

          resultado.push(anima + " - abrigo")

        } else if (pessoa1Adota && pessoa1QuantiAdota <= 3) {

          let animal = animaisBrinque.find(ani => ani[0] === anima);

          // Caso para quando a pesssoa vai adotar um gato ou quando a pessoa vai adotar mais de 1 gato (Gatos não dividem seus brinquedos)
          if (!pessoa1Gato || animal[1] !== "gato") {

            resultadoPess1.push(anima + " - pessoa 1");
            pessoa1QuantiAdota ++;

          } else {

            resultadoPess1.push(anima + " - abrigo");
            pessoa1Gato = true;

          } 

        } else if (pessoa2Adota && pessoa2QuantiAdota <= 3) {
          
          let animal = animaisBrinque.find(ani => ani[0] === anima);

          // Caso para quando a pesssoa vai adotar um gato ou quando a pessoa vai adotar mais de 1 gato (Gatos não dividem seus brinquedos)
          if (!pessoa2Gato || animal[1] !== "gato") {

            resultadoPess2.push(anima + " - pessoa 2");
            pessoa2QuantiAdota ++;

          } else {

            resultadoPess2.push(anima + " - abrigo");
            pessoa2Gato = true

          }


        } else {

          resultadoSobra.push(anima + " - abrigo");

        }

      })

      resultado = resultado.concat(resultadoPess1, resultadoPess2, resultadoSobra);
      return resultado;

    } 

  }

}

export { AbrigoAnimais as AbrigoAnimais };
