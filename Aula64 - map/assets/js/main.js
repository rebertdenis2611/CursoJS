//const numeros = [1,6,9,78,5,32,5,9,6,87,21]
//const numerosAoQuadrado = numeros.map(valor => valor * 2)
//console.log(numerosAoQuadrado);

const pessoas = [
    {nome: 'Rebert', idade: 18},
    {nome: 'Karoline', idade: 18},
    {nome: 'Rebert', idade: 18},
    {nome: 'Rebert', idade: 18},
    {nome: 'Rebert', idade: 18}

]

const pessoasFiltradas = pessoas.map(function(obj){
    delete obj.nome;
    return obj
})
console.log(pessoasFiltradas)