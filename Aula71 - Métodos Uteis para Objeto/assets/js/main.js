function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nomes + ' ' + this.sobrenome
}

const p1 = new Pessoa('Rebert', 'Denis');
const p2 = new Pessoa('Rebert', 'Denis');

console.dir(p1)
console.dir(p2)