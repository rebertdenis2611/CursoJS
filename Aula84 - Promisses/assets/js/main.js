function rand(min = 0, max = 3){
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(false )
    setTimeout(() =>{
      resolve(msg)
    },tempo)
  })
}

esperaAi('Fase 1', rand())
  .then(fase => {
    console.log(fase);
    return esperaAi('Fase 2', rand())
  })
  .then(fase => {
    console.log(fase);
    return esperaAi('Fase 3', rand())
  })
  .then(fase => {
    console.log(fase)
    return fase
  })
  .then(fase =>{
    console.log('Finalizei na: ', fase)
  })
  .catch(e => console.log(e));