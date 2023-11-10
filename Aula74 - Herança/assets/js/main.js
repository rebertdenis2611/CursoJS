//camisa = cor, caneca = material

function Produto(nome, preco, cor){
    this.nome = nome;
    this.preco = preco;
    this.cor = cor;
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * percentual / 100)
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * percentual / 100)
}

function Camisa(cor, tamanho, nome, preco){
    Produto.call(this, nome, preco, cor);
    this.tamanho = tamanho;
};
Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa
Camisa.prototype.desconto = function(valor){
    this.preco = this.preco - valor
}

function Caneca(nome, preco, cor, material, estoque){
    Produto.call(this, nome, preco, cor)
    this.material = material;
    Object.defineProperty(this, 'estoque',{
        get: function(){
            return estoque;
        },
        set: function(qtd){
            estoque = qtd
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const camisa = new Camisa('Azul', 'M', 'Camisa de corrida', 49.99)
camisa.desconto(10)
console.log(camisa)

const caneca = new Caneca('Caneca oval', 19.99, 'Vermelha', 'Plastico', 45)
caneca.estoque = 30
console.log(caneca.estoque)
console.log(caneca)
