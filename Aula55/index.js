//IIFE -> Immediately invoked function expression

(function(){
    const sobrenome = 'Denis'
    function escreveNome(nome){
        return nome + ' ' + sobrenome
    }

    function revelaNome(){
        console.log(escreveNome('Rebert'))
    }

    revelaNome()
})()