function cadastroPessoas(nome, sobrenome,peso, altura, idade, telefone){
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
        },

        get pessoa(){
            return `Olá! ${this.nome}, você tem ${idade} anos e seu telefone é o ${telefone} `
        },

        get imc(){
            const indice =  peso * (altura ** 2);
            return indice.toFixed(2)
        }
        
    }
};

const pessoa1 = cadastroPessoas('Rebert', 'Denis', 70, 1.56, 28, 81997591943);
pessoa1.nomeCompleto = 'Ana Karoline de Andrade Silva Além';
console.log(pessoa1.sobrenome);
