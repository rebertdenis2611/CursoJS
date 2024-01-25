function rand(min, max){
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min)
}

function conexaoBanco(msg, tempo){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(msg)
    },tempo)
  })
}

function mensagem(){
  return 'Conexão com o banco'
}

conexaoBanco(mensagem(), rand(1,3))
  .then(resposta =>{
    console.log(resposta)
    return conexaoBanco('Lendo informações', rand(1,3))
  })
  .then(resposta =>{
    console.log(resposta)
    return conexaoBanco('Processando informações', rand(1,3))
  })
  .catch(resposta =>{
    console.log(resposta)
  })