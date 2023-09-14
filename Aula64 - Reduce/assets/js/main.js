const numeros = [5,6,89,1,2,3,4,5,6,9,75,10,15,27,22]
const somaNumeros = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor
    return acumulador
}, 0);
console.log(somaNumeros)