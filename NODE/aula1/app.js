
//const mod1 = require('./mod1') //importa tudo
//const falaNome = require('./mod1').falaNome // Aqui importo algo expecifico
//const falaNome2 = mod1.falaNome // Aqui importo algo expecifico associando a uma variavel
//console.log(falaNome2()) // já consigo exibir a função sem precisar usar o mod1.
//console.log(mod1.falaNome())

//const {nome, sobrenome, falaNome} = require('./mod1') //via desestruturação
//console.log(falaNome())

const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Luiz')
console.log(p1)