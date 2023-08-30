const nomes = ['Rebert','Denis','Karoline','Maria','Alice']
console.log(nomes)
//const nomesSplice = nomes.splice(2, 1, 'Cavalcanti');

//Simulando o pop - remove o ultimo
//const nomesSplice = nomes.splice(-1, 1);

//Simulando o shift - remove o primeiro
//const nomesSplice = nomes.splice(0, 1);

//Simulando o push - adiciona no final *MELHOR USAR O PUSH*
//const nomesSplice = nomes.splice(nomes.length, 0, 'JOAOZINHO')

//Simulando o unshift - adiciona no comeco
const nomesSplice = nomes.splice(0, 0, 'JOAOZINHO');


console.log(nomes, nomesSplice)
