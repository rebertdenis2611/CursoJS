//2 - (export - Pode usar o export antes do nome const para poder exportar a variavel)
// const nome = 'Rebert Andrade';
const nome = 'Rebert Andrade';
const sobrenome = 'Denis';
const idade = 28;

function soma(x,y){
    return x + y;
}

export default (x, y) => (x * y);

//Para exportar variavel como padrão usa-se o export no final do arquivo
//export { nome as default, sobrenome, idade, soma}

//Quando usa a default na importação não precisa de {}
/*export default function soma(x,y){
    return x + y;
}
*/

// 1 - export { nome as novoNome 'PODEMOS FAZER A EXPORTAÇÃO MUDANDO O NOME 
//DA VARIAVEL PARA UM NOVO NOME', sobrenome, idade, soma }