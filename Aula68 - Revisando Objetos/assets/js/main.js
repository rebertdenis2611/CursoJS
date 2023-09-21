//const pessoa1 = new Object();
//pessoa1.nome = 'Rebert';
//pessoa1.sobrenome = 'Denis';
//pessoa1.idade = 8
//pessoa1.falaNome = function(){
//    return (`${this.nome} está falando seu nome`)
//};
//pessoa1.getDataNascimento = function(){
//    const dataAtual = new Date();
//    return dataAtual.getFullYear() - this.idade
//}
//
//for(let chave in pessoa1){
//    console.log(pessoa1[chave])
//}

function Pessoa(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome
    Object.freeze(this)
}

const p1 = new Pessoa('Rebert', 'Denis')
delete p1.nome
console.log(p1)