import css from './assets/css/style.css'
import GeradorDeSenha from './modules/GeradorDeSenha'
const botao = document.querySelector('.btn-gerar-cpf')

function recebeValor(){
    const senhaGerada = new GeradorDeSenha(1, 9)
    return senhaGerada.gerarSenha()
}

function insereSenha(){
    const campoSenha = document.querySelector('.senha-geradas')
    GeradorDeSenha.capturarMarcacao()
    campoSenha.innerHTML += recebeValor()
}

botao.addEventListener('click', () =>{
    insereSenha()
})


