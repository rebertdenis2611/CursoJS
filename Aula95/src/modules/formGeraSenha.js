import geradores from './geradores'

const inserirSenha = document.querySelector('.senha-geradas');
const qdtCaractere = document.querySelector('.qtd-caractere');
const chknumeros = document.querySelector('.chknumeros');
const chkmaiuscula = document.querySelector('.chkmaiuscula');
const chkminuscula = document.querySelector('.chkminuscula');
const chksimbolos = document.querySelector('.chksimbolos');
const btnGerar = document.querySelector('.btn-gerar-cpf')

export default () => {
     btnGerar.addEventListener('click', () =>{
        inserirSenha.innerHTML = gera()
     })
}

function gera(){
    const senha = geradores(
        qdtCaractere.value, 
        chknumeros.checked, 
        chkmaiuscula.checked, 
        chkminuscula.checked, 
        chksimbolos.checked)

    return senha || 'Quantidade ou marcação invalida'
}