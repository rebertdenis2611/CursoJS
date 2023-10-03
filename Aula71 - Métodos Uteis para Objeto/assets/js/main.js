<<<<<<< HEAD
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nomes + ' ' + this.sobrenome
}

const p1 = new Pessoa('Rebert', 'Denis');
const p2 = new Pessoa('Rebert', 'Denis');

console.dir(p1)
console.dir(p2)
=======
const produto = {nome: 'Caneca', preco: 19, material: 'porcelana'}
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
}
>>>>>>> 6feac14dd35e758232aede173e05108a4ff50a0c
