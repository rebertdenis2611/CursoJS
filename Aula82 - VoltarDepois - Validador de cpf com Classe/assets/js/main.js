class ValidarCpf{
    constructor(cpf){
        this.cpf = cpf;
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
        if(this.novoCpf() === this.tratarCpf()) return true
        if(typeof this.cpfLimpo !== String) return false
    }

}

const p1 = new ValidarCpf('11111111111');
console.log(p1.validarCpf())