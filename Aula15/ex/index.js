const num = Number(prompt('Digite o número: '));
const numero = document.getElementById('numero-digitado');
const textarea = document.getElementById('texto');

numero.innerHTML = '';
numero.innerHTML += (num);
textarea.innerHTML += (`O Número com duas casas decimais é: ${Number(num.toFixed(2))}`);




/* É NAN
É INTEIRO
ARREDONDANDO PARA BAIXO
ARREDONDANDO PARA CIMA
COM DUAS CASAS DECIMAIS
*/