const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
let maior = [];

for(let x = 0; numeros.length; x++){
    if(numeros[x] > 10 ){
        maior.push(numeros[x])
    };  
};

console.log(maior)

