function primeiroNome(){
    const nome = 'Denis'
    return function(){
        return nome
    };
}

const nome1 = primeiroNome('Joao')
console.dir(nome1)
