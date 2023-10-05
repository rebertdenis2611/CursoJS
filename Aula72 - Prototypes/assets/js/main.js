function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return nome + ' ' + sobrenome; 
};

const p1 = new Pessoa('Rebert', 'Denis');
const data = new Date();

console.log(p1)
console.dir(data)
