export default class ValidarCpf{
    constructor(cpf){
        this.cpf = cpf
        this.validarCpf();
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
        if(this.novoCpf() === this.cpf){
            console.log('CPF VALIDADO')
        }else{
            console.log('OLÀ!')
        }
    }
}

console.log('Cehguei aqui')