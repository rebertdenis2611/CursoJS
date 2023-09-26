function Produto(nome, preco, estoque){

    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: true,  
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError ('Não é um número valido!');
                return
            }
            estoquePrivado = valor
        }
    })
}

const p1 = new Produto('Refrigerante', 20, 3);
console.log(p1)
p1.estoque = 123
console.log(p1.estoque)


