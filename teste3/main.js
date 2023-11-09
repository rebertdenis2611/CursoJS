function Carro(marca, modelo, motor, valor){
    this.marca = marca;
    this.modelo = modelo;
    this.motor = motor;
    this.valor = valor;
}

Carro.prototype.aumento = function(quantia){
    this.valor = this.valor + (this.valor * (quantia / 30))
}

function Config(portas, pneu, velocidade, valor, marca, modelo){
    Carro.call(this, marca, modelo, valor)
    this.portas = portas;
    this.pneu = pneu;
    this.velocidade = velocidade;
}

Config.prototype = Object.create(Carro.prototype);
Config.prototype.constructor = Config;

const carro1 = new Carro('Toyota', 'Etios', 2015, 100000)
carro1.aumento(100)
console.log(carro1)
const carro2 = new Carro('VW', 'Gol', 2019, 100000)
console.log(carro2)
const carro3 = new Config(4, 4, 110)
carro3.aumento(30)
console.log(carro3)
