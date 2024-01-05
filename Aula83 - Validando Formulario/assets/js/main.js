class validaFormulario{
    constructor(){
        this.nome = document.querySelector('.nome');
        this.sobrenome = document.querySelector('.sobrenome');
        this.usuario = document.querySelector('.usuario');
        this.senha = document.querySelector('.senha');
        this.repetirSenha = document.querySelector('.repertir_senha');
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
            menUser.className += ' men-user'
            menUser.innerHTML = ''
        }
    }

    validaSenha(){
        let menSenha = document.querySelector('.men-senha')
        if(this.senha.value < 6){    
            menSenha.className += ' error-text';
            menSenha.innerHTML = 'Senha fora dos caracteres informados!';
        }else{
            menSenha.className += 'men-senha';
            menSenha.innerHTML += ''
        }
    }
}

const validacao = new validaFormulario();

class ValidarCpf{
    constructor(){
        this.cpf = document.querySelector('.cpf');
    }

    tratarCpf(){
        const cpfLimpo = this.cpf.replace(/\D+/g, '');
        const novoCpf = cpfLimpo.slice(0, -2);
        return novoCpf
    }

    primeiraVerificacao(){
        const cpfNoveDigito = this.tratarCpf();
        const cpfArray = Array.from(cpfNoveDigito)
        let regressivo = cpfNoveDigito.length+1;
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
        const cpfNoveDigito = this.tratarCpf();
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
        return this.tratarCpf() + this.primeiroDigito() + this.segundoDigito()
    }

    validarCpf(){
        if(this.tratarCpf() === this.cpf) return true
        if(typeof this.cpfLimpo !== String) return false
    }

}
const p1 = new ValidarCpf('104.989.884-22');
if(p1.validarCpf === true){
    console.log('CPF FOI VALIDADO')
}else{
    console.log('TESTE @')
}