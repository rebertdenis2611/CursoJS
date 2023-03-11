/*const pessoa1 = {
    nome : 'Rebert',
    idade : 27,
    cidade : 'Recife'
};
console.log(pessoa1.idade)
*/
/*
function pessoa2 (nome, cidade, idade){
    return{
        nome: nome,
        idade, idade,
        cidade, cidade
    }
};

const retornoPessoa = pessoa2('Rebert', 'Recife', 27);
console.log(retornoPessoa.nome);*/

const pessoa1 = {
    nome: 'Rebert',
    sobre: 'Denis',
    idade: 27,

    ola(){
        console.log(`Olá Mundo, meu nome é ${this.sobre}`);
    }
}

pessoa1.ola();