function mostrarMensagem(resultado){
  console.log('O resultado da operação foi: ', resultado)
}

function calcular(x, y, callback){
  const result = x + y;
  callback(result)
}

calcular(4, 5, mostrarMensagem)