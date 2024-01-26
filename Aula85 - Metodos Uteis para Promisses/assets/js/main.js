function rand(min, max){
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if(typeof msg !== 'string'){
        reject('CAI NO ERRO');
        return;
      } 
  
      resolve(msg.toUpperCase() + ' - Passei na promise');
      return
    },tempo)
  })
}

function baixarPagina(){
  const emCache = true;
    //Usando Promis
  if(emCache){
    return Promise.resolve('Pagina em cache')
  }else{
    return esperaAi('Baixei a página', 3000)
  }
}

baixarPagina()
  .then(dadosPagina =>{
    console.log(dadosPagina)
  })
  .catch(e => console.log('erro: ',  e));



/*
const promises = [
  esperaAi('Frase 1', rand(1,3)),
  esperaAi('Frase 2', rand(1,3)),
  esperaAi('Frase 3', rand(1,3))
]

Promise.race || Promise.all (promises)
  .then(dados => {
    console.log(dados)
  })
  .catch(error =>{
    console.log(error)
  })
*/