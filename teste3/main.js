function Pessoa(nome, idade, cpf){
    this.nome = nome;
    this.idade = idade;
    Object.defineProperty(this, 'cpf',{
        enumerable: true,
        configurable: false,
        get: function(){
            return cpf
        },
        set: function(novoCpf){
            if(typeof novoCpf !== 'number') throw new TypeError(alert('CPF INFALIDO'))
            cpf = novoCpf
        }
    })
}

const p1 = new Pessoa()
p1.nome = 'Rebert'
p1.idade = 26
p1.cpf = 104
console.log(p1.cpf)