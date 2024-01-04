class validaFormulario{
    constructor(){
        this.nome = document.querySelector('.nome');
        this.sobrenome = document.querySelector('.sobrenome');
        this.cpf = document.querySelector('.cpf');
        this.usuario = document.querySelector('.usuario');
        this.senha = document.querySelector('.senha');
        this.repetirSenha = document.querySelector('.repertir_senha');
        this.todosCampos = document.querySelectorAll('input')
    }

    executar(){
        document.addEventListener('submit', e =>{
            for(let x of this.todosCampos)
            console.log(x.value)
            e.preventDefault();
        })
    }

    verificarCamposSemInformacao(){
        if(this.todosCampos === ''){
            alert('todos os campos invalidos')
        }
    }
}

const validacao = new validaFormulario();
validacao.executar();