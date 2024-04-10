export default class GeradorDeSenha{
    constructor(){
    }
    
    capturarMarcacao(){
        const classInput = document.querySelectorAll('input')
        const qtdCaractere = document.querySelector('.qtd-caractere')
        const maiuscula = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ'
        const minuscula = maiuscula.toLocaleLowerCase();
        const caractere = '!@#$%¨&*()_+=?;:<>,.|'

        for(let qtd = 0; qtd < qtdCaractere.value; qtd++){
            for(let x of classInput){
                if(x.checked && x.className === 'add-numeros'){
                    this.insereSenha(this.gerarSenha(8))
                }

                if(x.checked && x.className === 'add-letras-maiuscula'){
                    this.insereSenha(maiuscula[this.gerarSenha(maiuscula.length)])
                    console.log(maiuscula[this.gerarSenha(maiuscula.length)])
                }

                if(x.checked && x.className === 'add-letras-minuscula'){
                    this.insereSenha(minuscula[this.gerarSenha(qtdCaractere.value)])
                }

                if(x.checked && x.className === 'add-simbolos'){
                    this.insereSenha(caractere[this.gerarSenha(qtdCaractere.value)])
                }
            }
        }
    } 
    
    gerarSenha(max){
        return Math.floor(Math.random() * (1 + max) - 1)
    }

    limpaSenha(){
        const campoSenha = document.querySelector('.senha-geradas')
        campoSenha.innerHTML = ' '
    }

    insereSenha(senha){
        const campoSenha = document.querySelector('.senha-geradas')
        campoSenha.innerHTML += senha
    }
}