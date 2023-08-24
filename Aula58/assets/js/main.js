function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    
    this.metodo = function(){
        console.log(this.nome + ': É um metodo!')
    }
}



const p1 = new Pessoa('Rebert', 'Denis');
const p2 = new Pessoa('Ana', 'Karoline');
p1.metodo()

