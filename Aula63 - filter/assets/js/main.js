//const numeros = [1,2,3,4,55,65,18,20,18]
//const numerosFiltrados = numeros.filter(valor => valor > 10)

const pessoas = [
    {nome: 'Rebert' , idade: 28},
    {nome: 'Karoline' , idade: 23},
    {nome: 'Alice' , idade: 1},
    {nome: 'Maria' , idade: 23}
]

const nomesMaior = pessoas.filter(obj => obj.nome.length > 5)
const idadeMaior = pessoas.filter(obj => obj.idade > 20)
const terminaComA = pessoas.filter(obj => {obj.nome.toLowerCase().endsWith('a')})
console.log(nomesMaior); 
console.log(idadeMaior);
console.log(terminaComA)


//console.log(numerosFiltrados);