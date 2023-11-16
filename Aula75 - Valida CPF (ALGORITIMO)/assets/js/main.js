//REFAZER DEPOIS USANDO O FUNCTION FACTORY

let cpf = '10498988422'
let cpfLimpo = cpf.replace(/\D+/g, '');  //Expressão REGULAR, deixa apenas o que é number
cpfArray = Array.from(cpfLimpo); //Criando um Array
let totalValida1 = 0;
let totalValida2 = 0;
let restoPasso1;
let restoPasso2;

function primeiraValidacao(){
    for(let seq = 10, x = 0; seq >= 2, x <=8 ; seq--, x++){
        totalValida1 += seq * cpfArray[x]
        restoPasso1 = totalValida1 * 10 % 11
    }
    if(restoPasso1 === 10){
        restoPasso1 = 0
    }else{
        restoPasso1 = restoPasso1;
    };
};

function segundaValidacao(){
    for(let seq = 11, x = 0; seq >= 2, x <=9 ; seq--, x++){
        totalValida2 += seq * cpfArray[x]
        restoPasso2 = totalValida2 * 10 % 11
    };
    if(restoPasso2 === 10){
        restoPasso2 = 0
    }else{
        restoPasso2 = restoPasso2;
    };
};


(function mensagem(){
    primeiraValidacao();
    segundaValidacao();
    if(Number(cpfArray[10]) === restoPasso1 && Number(cpfArray[9]) === restoPasso2){
        console.log('CPF Valido')
    }else{
        console.log('CPF Invalido')
    };
}())

