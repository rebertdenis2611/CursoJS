//IIFE -> Immediately invoked function expression

(function(idade, peso, altura){
    const sobrenome = 'Denis'
    function falaNome(nome){
        return nome + ' ' + sobrenome
    }

    function escreveNome(){
        console.log(falaNome('Rebert'))
    }
    escreveNome()
    console.log(idade, peso, altura)
})(30, 80, 1.60)