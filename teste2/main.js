const botao = document.querySelector('#botao');
let para = document.querySelector('p')
//const n1 = parseInt(prompt('Digite o primeiro número para começar a contagem: '))
//const n2 = parseInt(prompt('Digite até onde iremos contadr: '))
const nomes = {
    nome: 'Rebert',
    idade: 27
};

for(let i in nomes){
    para.innerHTML += i;
}


//for(let i ; i < n2; i++){
 //   para.innerHTML += `<br>${i}`;
//}