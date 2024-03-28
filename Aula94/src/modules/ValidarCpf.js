export default class ValidarCpf{
    constructor(cpf){
        this.cpf = cpf;
        this.gerarCpf();
    }

    cpfTratado(){
        const cpfLimpo = this.cpf.replace(/\D+/g, '');
        return String(cpfLimpo)
    }
    
    gerarCpf(){
        const cpfComNove = this.cpfTratado().slice(0, -2);
        const digito1 = this.calculoDigito(cpfComNove);
        const digito2 = this.calculoDigito(cpfComNove + digito1);
        const cpfNovo = cpfComNove + digito1 + digito2
        return String(cpfNovo)
    }
    
    static calculoDigito(cpfComNove){
        const cpfArray = Array.from(cpfComNove);
        let decrescente = cpfArray.length + 2;
        let soma = 0;
        for(let x of cpfArray){             
            decrescente--
            soma += decrescente * x
        }

        let digito = soma * 10 % 11
        return digito > 9 ? 0 : String(digito)
    }

    verificaCpfValido(){
        if(typeof this.cpf === 'undefined') return false
        if(!(this.cpfTratado() === this.gerarCpf())) return false
        if(this.issequencia()) return false
        return true
    }    

    issequencia(){
        const sequencia = this.cpf[0].repeat(this.cpfTratado().length)
        return sequencia === this.cpfTratado();
    }

}

