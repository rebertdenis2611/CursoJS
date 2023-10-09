function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)

//Criando um novo Objeto e pegando o PROTO de Produto.

const p2 = {
    nome: 'Caneca',
    preco: 5
};
Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(100)
console.log(p1)
console.log(p2)

//Pegando o proto e configurando nas linhas

const p3 = Object.create(Produto.prototype);
p3.preco = 199;
p3.aumento(100)
console.log(p3)


//Pegando o proto e já configurando.
const p4 = Object.create(Produto.prototype, {
    preco : {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 199    
    }
});

p4.aumento(1000)
console.log(p4)