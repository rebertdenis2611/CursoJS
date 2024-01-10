class validaFormulario{
    constructor(){
        this.nome = document.querySelector('.nome');
        this.sobrenome = document.querySelector('.sobrenome');
        this.usuario = document.querySelector('.usuario');
        this.senha = document.querySelector('.senha');
        this.repetirSenha = document.querySelector('.repetir-senha');
        this.todosCampos = document.querySelectorAll('input')
        this.mensagem = document.querySelector('.mensagem')
        this.formulario = document.querySelector('.formulario')
        this.executar();
    }

    executar(){
        document.addEventListener('submit', e =>{
            e.preventDefault();
            this.validacaoUsuario();
            this.validaSenha();
            this.validaRepeteSenha();
            this.camposSaoValidos()
            this.criarErro();
        })
    }

    camposSaoValidos(){
        for(let campo of document.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML;
            if(!campo.value){
                this.criarErro(campo, `Campo ${label} é invalido`)
            }
        }

        for(let errorText of document.querySelectorAll('.error-text')){
            errorText.remove()
        }

        if(campo.classList.contains('cpf')){
            if(!this.validaCPF(campo)) valida = false;
        }
    }

    validaCPF(){
        const cpf = new this.validaCPF(cpf.value)

        if(!cpf.valid()){
            
        }
        return true;
    }
    criarErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

    validacaoUsuario(){
        let menUser = document.querySelector('.men-user')
        if(typeof this.usuario.value !== 'string'){
            menUser.innerHTML = 'Usuário deve conter letras e números!'
        }else if(this.usuario.value === ''){
            menUser.innerHTML = 'Usuário não pode ser em branco!'
            menUser.className += ' error-text'
        }else{
            menUser.innerHTML = ''
            menUser.removeAttribute = 'error-text'
            menUser.className = 'men-user'
        }
    }

    validaSenha(){
        let menSenha = document.querySelector('.men-senha')
        if(this.senha.value < 6){    
            menSenha.className += ' error-text';
            menSenha.innerHTML = 'Senha fora dos caracteres informados!';
        }else{
            menSenha.innerHTML = ''
            menSenha.removeAttribute = 'error-text'
            menSenha.className = 'men-senha';
        }
    }

    validaRepeteSenha(){
        let menRepeteSenha = document.querySelector('.men-rep-senha')
        if(this.repetirSenha.value !== this.senha.value || this.repetirSenha.value === ''){
            menRepeteSenha.className += ' error-text';
            menRepeteSenha.innerHTML = 'Senha não é igual a digitada ou está zerada!';
        }else{
            menRepeteSenha.innerHTML = ''
            menRepeteSenha.removeAttribute = 'error-text'
            menRepeteSenha.className = 'men-rep-senha';
        }
    }
}

const validacao = new validaFormulario();

