class validaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        document.addEventListener('submit', e =>{
            this.envioDeFormulario(e)
        })
    }

    envioDeFormulario(e){
        e.preventDefault();
        this.validarCampos();
        this.validaUsuario();
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
        }

        if(campo.classList.contains('usuario')) {
            if(!this.validaUsuario(campo)) valid = false;
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
        return valid
    }

    mensagemErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg;
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const form = new validaFormulario();
