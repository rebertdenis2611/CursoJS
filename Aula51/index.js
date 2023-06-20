function multiplicacao(valor){
    return function (n){
        return valor * n;
    }
}

const duplica = multiplicacao(10);
const triplica = multiplicacao(10);
const quadruplica = multiplicacao(10);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadruplica(4));