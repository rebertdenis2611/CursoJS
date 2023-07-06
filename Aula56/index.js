function criarPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,
        fala(assunto){
            return `${nome} está ${assunto}` 
        },
        altura: a,
        peso: p
    };
}
const p1 = criarPessoa('Rebert', 'Denis', 1.65, 80)
console.log(p1.fala('falando de js'))
console.log()