let qtdNomes =  prompt('Quantas pessoas você vai cadastrar? ')
let pessoas = []


for(let x = 0; x < qtdNomes; x++){
    let nomes = prompt(`Digite o nome da ${x} pessoa`);
    pessoas.push(nomes)
};

console.log(pessoas)
