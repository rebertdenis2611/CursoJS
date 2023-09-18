const numeros = [5,6,89,1,2,3,4,5,6,9,75,10,15,27,22]
const somaNumeros = numeros.reduce(function(acumulador, valor){
    if(valor % 2 === 0){
        acumulador += valor
        
    }
    return acumulador
},0);

//console.log(somaNumeros)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 105},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63}
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;

});

console.log(maisVelha)