function gerarNumero(numeroGerado){
  const numero = Math.floor(Math.random() * 101)
  numeroGerado(numero)
}

function imprimeResultado(imprime){
  console.log(imprime)
}

gerarNumero(imprimeResultado)