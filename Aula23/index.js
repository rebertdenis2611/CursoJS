/*
Avaliação de Curto-Circuito

&& -> false && true -> false "o valor mesmo" | RETORNA O PRIMEIRO VALOR QUE FOI FALSO E SE TODAS FOR VERDADEIRA VAI RETORAR A ULTIMA QUE FOI VERDADEIRA.

Valores FALSY
* false
0
'' "" ``
null / undefined
NaN

|| -> RETORNA O PRIMEIRO VERDADEIRO

console.log(NaN && 'Rebert' && 'Denis')
*/

const senha = 1234555;
const senhaRecebida = 123456;

function validaSenha(){
    return 'Senha Validada com sucesso!'
}

const comparaSenha = senha === senhaRecebida;
console.log(comparaSenha);
console.log(comparaSenha && validaSenha());




