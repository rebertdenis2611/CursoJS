function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        fala: function(assunto){
            console.log(`${this.peso} está ${assunto}`)
        },
        peso: 80
    }
}

const p1 = criaPessoa('Rebert', 'Denis');
console.log(p1.fala('falando sobre js'));