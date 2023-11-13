//const cpf = document.querySelector('.cpf');
//const validar = document.querySelector('.validar');
//const mensagem = document.querySelector('.mensagem');

let cpf = '15022569400'
let cpfLimpo = cpf.replace(/\D+/g, '');  //Expressão REGULAR, deixa apenas o que é number
cpfArray = Array.from(cpfLimpo); //Criando um Array
let somaPrimeira = cpfArray.reduce((ac, val) => ac + Number(val), 0);
let totalValida1 = 0;
let totalValida2 = 0;
let restoPasso1;
let restoPasso2;

for(let seq = 10, x = 0; seq >= 2, x <=8 ; seq--, x++){
    totalValida1 += seq * cpfArray[x]
    restoPasso1 = totalValida1 * 10 % 11
}

for(let seq = 11, x = 0; seq >= 2, x <=9 ; seq--, x++){
    totalValida2 += seq * cpfArray[x]
    restoPasso2 = totalValida2 * 10 % 11
}

function multiplicaResultado(totalValida1){
    return 
}

function validaCpf(){
    if(Number(cpfArray[10]) === restoPasso1 && Number(cpfArray[9]) === restoPasso2){
        console.log('Cpf valido!')
    }else{
        console.log('Cpf invalido!')
    }
}

validaCpf()

console.log(typeof cpfArray[10])

console.log(cpfArray[10])
console.log(cpfArray[9])

//console.log(totalValida1)
//console.log(totalValida2)
console.log(restoPasso1)
console.log(restoPasso2)
