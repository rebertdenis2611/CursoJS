function Carro(marca, modelo, ano, dono){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;
    this.mostraCarro = mostraCarro;
}

function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

function mostraCarro(){
    console.log(`Um belo ${this.marca} ${this.modelo} ${this.ano} ${this.dono}`);
}

const pesso1 = new Pessoa('Rebert', 'Denis', 28)
const carro1 = new Carro('Toyota', 'Etios', '2015', pesso1.nome)
const carro2 = new Carro('Toyota', 'Gol', '9999', pesso1.nome)

carro1.mostraCarro()
carro2.mostraCarro()