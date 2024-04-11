import css from './assets/css/style.css'
import GeradorDeSenha from './modules/GeradorDeSenha'

const botao = document.querySelector('.btn-gerar-cpf')
const mark = new GeradorDeSenha()

botao.addEventListener('click', (e) =>{
    mark.limpaSenha()
    mark.capturarMarcacao()
    insereSenha()
    e.preventDefault()

})

function insereSenha(){
    const campoSenha = document.querySelector('.senha-geradas')

}

