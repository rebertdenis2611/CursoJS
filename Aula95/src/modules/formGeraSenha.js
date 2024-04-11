const btn = document.querySelector('.btn-gerar-cpf')
const inserirSenha = document.querySelector('.senha-geradas')
const caractere = document.querySelector('.qtd-caractere');
const chknumeros = document.querySelector('.chknumeros');
const chkmaiuscula = document.querySelector('.chkmaiuscula');
const chkminuscula = document.querySelector('.chkminuscula');
const chksimbolos = document.querySelector('.chksimbolos');

export default () =>{
    btn.addEventListener('click', () =>{
        inserirSenha.innerHTML = 'fui clicado'
    })
}