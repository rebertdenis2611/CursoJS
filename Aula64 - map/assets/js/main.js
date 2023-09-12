const numeros = [1,2,3,4,55,65,18,20,18];
//const numeros2 = numeros.map(valor => valor * 2)
//console.log(numeros2)


// Retorne apenas uma string com o nome da pessoa
// remova apenas a chave "nome" do objeto
// adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Rebert' , idade: 28},
    {nome: 'Karoline' , idade: 23},
    {nome: 'Alice' , idade: 1},
    {nome: 'Maria' , idade: 23}
]

//const apenasNome = pessoas.map(obj => obj.nome)
//const apenasIdade = pessoas.map(obj => ({idade: obj.idade}))
const chaveId = pessoas.map(function(obj, indice){
   const newObj = {... obj};
   newObj.id = indice
   return newObj
})

console.log(chaveId);
console.log(pessoas);