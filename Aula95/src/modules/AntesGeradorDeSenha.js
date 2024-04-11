export default class GeradorDeSenha{
    constructor(){
    }

    capturarMarcacao(){
        const classInput = document.querySelectorAll('input')
        const qtdCaractere = document.querySelector('.qtd-caractere')
        const maiuscula = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ'
        const minuscula = maiuscula.toLocaleLowerCase();
        const caractere = '!@#$%¨&*()_+=?;:<>,.|'

            for(let x = 0; x < qtdCaractere.value; x++){
                for(let x of classInput){                   
                        if(x.checked && x.className === 'add-letras-maiuscula'){
                            this.insereSenha(maiuscula[this.gerarSenha(maiuscula.length)])
                        }

                        if(x.checked && x.className === 'add-letras-minuscula'){
                            this.insereSenha(minuscula[this.gerarSenha(minuscula.length)])
                        }

                        if(x.checked && x.className === 'add-numeros'){
                            this.insereSenha(this.gerarSenha(10))
                        }

                        if(x.checked && x.className === 'add-simbolos'){
                            this.insereSenha(caractere[this.gerarSenha(caractere.length)])
                        }
                    }
                }
    } 
    
    gerarSenha(max){
        return Math.floor(Math.random() * max)
    }

    limpaSenha(){
        const campoSenha = document.querySelector('.senha-geradas')
        campoSenha.innerHTML = ' '
    }

    insereSenha(senha){
        const campoSenha = document.querySelector('.senha-geradas')
        campoSenha.innerHTML += senha
        campoSenha.className += ' validado'
    }
}