function rand(min, max){
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
};

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      //resolve(msg);
      reject(new Error('Não foi possível estabelecer conexão com o banco de dados!'));
    }, tempo)
  })
}

esperaAi('Frase 1', rand(1,3))
  .then(resposta =>{
    console.log(resposta)
    return esperaAi('Frase2', rand(1,3))
  })
  .then(resposta =>{
    console.log(resposta)
    return esperaAi('Frase4', rand(1,3))
  })
  .then(resposta =>{
    console.log(resposta)
    return esperaAi('Frase5', rand(1,3))
  })
  .then(resposta =>{
    console.log(resposta)
    return esperaAi('Frase6', rand(1,3))
  })
  .then(resposta =>{
    console.log(resposta)
    return esperaAi('Frase7', rand(1,3))
  })
  .then(resposta =>{
    console.log(resposta)
    return esperaAi('Frase8', rand(1,3))
  })
  .then(resposta =>{
    console.log(resposta)
    return esperaAi('Frase9', rand(1,3))
  })
  .then(resposta =>{
    console.log('Encerrei aqui')
  })
  .catch('Deu erro aqui')