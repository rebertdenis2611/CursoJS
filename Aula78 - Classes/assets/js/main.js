class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${nome} ${sobrenome} bom dia!`)
    }
}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}




const p1 = new Pessoa('Rebert', 'Denis')
const p2 = new Pessoa2('Eduardo', 'Denis')

console.log(p1)
console.log(p2)