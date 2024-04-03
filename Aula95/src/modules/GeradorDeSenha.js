export default class GeradorDeSenha{
    constructor(){
    }
    
    static capturarMarcacao(){
        const nome = document.querySelectorAll('input')

        for(let x of nome){
            if(x.checked && x.className === 'add-numeros'){
                console.log('Adicionar numeros')
                return
            }
            console.log('não foi numeros')
        }
        
    }

    gerarSenha(){
        return Math.floor(Math.random() * (1 + 8) + 1)
    }
}
