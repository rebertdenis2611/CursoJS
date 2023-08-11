function criarPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor);
        },

        fala(assunto){
            return  `${nome} ${sobrenome} fala sobre ${assunto}`
        },
        altura,
        peso,
        
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

p1 = criarPessoa('Rebert', 'Denis', 1.80, 80);
p2 = criarPessoa('Joao', 'Denis', 1.30, 50);
p3 = criarPessoa('Clodoaldo', 'Denis', 1.10, 40);

console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)
