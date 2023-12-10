const usuario = prompt('Qual o nome do usuario?')
const razaoSocial = document.querySelector('.razaoSocial')

function entrarSistema(){
    saudaUsuario();
    validaRazaoSocial();
}

function saudaUsuario(usuario){
    const saudacaoUsuario = document.querySelector("#nomeUsuario")
    saudacaoUsuario.innerHTML = `${usuario} seja bem vindo!`;
}

function validaRazaoSocial(){
    if(typeof razaoSocial != String){
        alert('Erro!')
    }
}