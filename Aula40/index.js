let numeros = [1,2,3,4,5,6,7,8,9];

let x = 0;
while(x < numeros.length){
    let numero = numeros[x]
    x++
    if(numero === 2){
        console.log('encontrei o número 2');
        continue        
    };
    console.log(numero);   
}
