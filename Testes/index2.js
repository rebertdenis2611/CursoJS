function criarPessoa(nome, sobrenome, peso, altura){
    return{
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(){
            return `${nome + ' ' + sobrenome}`
        },
        peso,
        altura,

        get imc(){
            const indice = peso / (altura ** 2)
            return indice.toFixed(2)
        }
    }
};

const p1 = criarPessoa('Rebert', 'Denis', 80, 1.64);
p1.nomeCompleto = 'Ana Karoline Silva'
console.log(p1.imc);
console.log(p1.nomeCompleto);