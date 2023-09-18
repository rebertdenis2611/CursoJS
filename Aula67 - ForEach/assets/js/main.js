const numeros = [5,6,89,1,2,3,4,5,6,9,75,10,15,27,22]
const numerosFiltrados = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

console.log(numerosFiltrados)