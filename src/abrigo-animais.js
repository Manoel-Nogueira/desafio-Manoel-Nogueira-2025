class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    
    const brinquedos = [
      "RATO", 
      "BOLA", 
      "LASER", 
      "CAIXA", 
      "NOVELO", 
      "SKATE", 
      "RATO"
    ]

    const animais = [
      "Rex",
      "Mimi",
      "Zero",
      "Bola",
      "Bebe",
      "Loco"
    ]

    const animaisBrinque = [
      ["Rex", "cão", ["RATO", "BOLA"]],
      ["Fofo", "gato", ["BOLA", "RATO","LASER"]],
      ["Mimi", "gato", ["BOLA", "LASER"]],
      ["Zero", "gato", ["RATO", "BOLA"]],
      ["Bola", "cão", ["CAIXA", "NOVELO"]],
      ["Bebe", "cão", ["LASER", "RATO", "BOLA"]],
      ["Loco", "jabuti", ["SKATE", "RATO"]]
    ]

    // Função para validar os dados de entradas
    function validarDados(dadosEntrada, dadosGuardados) {

      let aux = []

      dadosEntrada.forEach(dadoEntrada => {

        // Verificando se o dado está correto
        if (!dadosGuardados.includes(dadoEntrada)) {

          return -1

        } 

        // Verificando se o dado é duplicado
        if (aux.includes(dadoEntrada)) {

          return -1

        } 

        aux.push(dadoEntrada)
  
      })

    }


  }

}

export { AbrigoAnimais as AbrigoAnimais };
