function gerarNumeros(){
    return (Math.random() * ((100 - 1) + 1)).toFixed(0)
};

function preencherArray(){
    let numeros = [];
    for(let x = 0; x < 30; x++){
        numeros.push(gerarNumeros())
    }
    return numeros
};

function somaDosPrimos(){
    const soma = preencherArray().reduce(function(acumulador, valor){
        if(valor / 1 === valor && valor / valor === 1){
            return acumulador += valor
        }
        console.log(acumulador)
    },0)
    return soma
}

console.log(gerarNumeros());
console.log(preencherArray());
console.log(somaDosPrimos());