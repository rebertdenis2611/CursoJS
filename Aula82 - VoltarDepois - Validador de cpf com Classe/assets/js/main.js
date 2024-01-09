class ValidarCpf{
    constructor(cpf){
        this.cpf = cpf;
        this.gerarDigito();
    }

    cpfLimpo(){
        const cpfLimpo = this.cpf.replace(/\D+/g, '');
        return cpfLimpo
    }

    
    
    gerarCpf(){
        const digito1 = this.gerarDigito()
    }

    gerarDigito(valor){
        let novoCpf = this.cpfLimpo().slice(0, -2);
        const cpfArray = Array.from(novoCpf);
        let decrescente = novoCpf.length;
        let soma = 0;
        for(let x of cpfArray){             
            decrescente--
            soma += decrescente * x
            console.log(decrescente, x)
        }
        return soma * 10 /11
    }

}

const p1 = new ValidarCpf('52998224725')
