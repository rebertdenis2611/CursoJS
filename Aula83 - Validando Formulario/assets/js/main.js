class validaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.envioFormulario();
    }

    envioFormulario(){
        document.addEventListener('submit', e =>{
            this.validarCampos();
            e.preventDefault();
        })
    }

    validarCampos(){
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        };

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML;

            if(!campo.value){
                this.mensagemErro(campo, `O campo ${label} não pode ser vázio`);
            }
        }
    }

    mensagemErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg;
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const form = new validaFormulario();
