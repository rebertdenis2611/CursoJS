class validaFormulario{
    constructor(){
        this.nome = document.querySelector('.nome');
        this.sobrenome = document.querySelector('.sobrenome');
        this.usuario = document.querySelector('.usuario');
        this.senha = document.querySelector('.senha');
        this.repetirSenha = document.querySelector('.repetir-senha');
        this.todosCampos = document.querySelectorAll('input')
        this.mensagem = document.querySelector('.mensagem')
        this.executar();
    }

    executar(){
        document.addEventListener('submit', e =>{
            e.preventDefault();
            //this.verificarCamposSemInformacao();
            this.validacaoUsuario();
            this.validaSenha();
            this.validaRepeteSenha();
            
        })
    }

/*  verificarCamposSemInformacao(){
        let campoVazio = false;
        
        for(let valorCampo of this.todosCampos){
            if(valorCampo.value === ''){
                campoVazio = true
            }
        }

        if(campoVazio === true){
            alert('Campos não pode ser zerado')
        }else{
            console.log('Cadastro Enviado')
        }
        
    }
*/
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

class ValidarCpf{
    constructor(){
        this.cpf = document.querySelector('.cpf');
        this.executar();
    }

    executar(){
        document.addEventListener('submit', e =>{
            e.preventDefault();
            this.validaCpf()       
        })
    }

    tratarCpf(){
        let cpfSemTratamento = this.cpf.value;
        const cpfLimpo = cpfSemTratamento.replace(/\D+/g, '');
        return cpfLimpo
    }

    cpfComNoveDigitos(){
        const cpfOriginal = this.tratarCpf();
        const cpfNoveDigitos = cpfOriginal.slice(0, -2)
        return cpfNoveDigitos;
    }

    primeiraVerificacao(){
        const novoCpf = this.cpfComNoveDigitos()
        const cpfArray = Array.from(novoCpf)
        let regressivo = novoCpf.length+1;
        let totalCpf = cpfArray.reduce(function(ac, valor){
            ac += valor * regressivo
            regressivo--
            return ac
        },0)
        return totalCpf
    }   

    primeiroDigito(){
        let digito = this.primeiraVerificacao() * 10 % 11
        if(digito === 10){
            digito = 0 
        }else{
            return digito
        }
        return digito
    }

    segundaVerificacao(){
        const cpfNoveDigito = this.cpfComNoveDigitos();
        const cpfArray = Array.from(cpfNoveDigito + this.primeiroDigito())  
        let regressivo = cpfArray.length + 1;
        let totalCpf = cpfArray.reduce(function(ac, valor){
            ac += valor * regressivo
            regressivo--
            return ac
        },0)
        return totalCpf
    }

    segundoDigito(){
        let digito = this.segundaVerificacao() * 10 % 11
        if(digito === 10){
            digito = 0 
        }else{
            return digito
        }
        return digito
    }

    novoCpf(){
        return this.cpfComNoveDigitos() + this.primeiroDigito() + this.segundoDigito()
    }

    validaCpf(){  
        let menCpf = document.querySelector('.men-cpf')
        if(this.cpf.value === ''){
            menCpf.innerHTML = 'CPF está em branco!'
            menCpf.className += ' error-text';
        }
        else if(this.novoCpf() !== this.tratarCpf()){
            console.log(this.cpf.value)
            menCpf.innerHTML = 'CPF não é validoooo!'
            menCpf.className += ' error-text';
        }else{
            menCpf.innerHTML = ''
            menCpf.className = 'men-cpf';
        }
    }
}
const p1 = new ValidarCpf();
