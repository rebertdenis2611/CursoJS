class validaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.envioDeFormulario(e)
        })
    }

    envioDeFormulario(e){
        e.preventDefault();
        const camposValidos = this.validarCampos();
        const senhasValidas = this.validaSenhas();

        if(camposValidos && senhasValidas) {
        alert('Formulário enviado.');
        this.formulario.submit();
        }
    }

    validaSenhas(){
        let valid = true
        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')
        
        if(senha.value !== repetirSenha.value){
            valid = false;
            this.mensagemErro(senha, 'Senha não é igual a repetir senha')
            this.mensagemErro(repetirSenha, 'Repetir Senha não é igual a senha')
        }
        return valid
    }

    validarCampos(){
        let valid = true
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        };

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML;
            if(!campo.value){
                this.mensagemErro(campo, `O campo ${label} não pode ser vázio`);
                valid = false
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCpf(campo)) valid = false
            }
        }
        return valid
    }

    validaUsuario(campo){
        let valid = true;
        let usuario = campo.value
        if(usuario.length < 3 || usuario.length > 12){
            this.mensagemErro(campo, 'Tamanho do usuário não permitido.')
            valid = false
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.mensagemErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
            valid = false;
          }
        return valid
    }

    validaCpf(campo){
        const cpf = new ValidarCpf(campo.value)

        if(!cpf.validacao()){
            this.mensagemErro(campo, 'O cpf é invalido!')
            return false
        }
        return true
    }

    mensagemErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg;
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const form = new validaFormulario();
