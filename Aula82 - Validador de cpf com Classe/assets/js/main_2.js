class ValidarCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo',{
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }


    gerarDigito(){
        const noveDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = somaDosNoveDigito(noveDigito)
    }



    somaDosNoveDigito(noveDigito){
        let cpfComNove = noveDigito;
        let regressivo = 10;
        let total = 0;
        
        for(let digito of cpfComNove){
            regressivo--
            total += regressivo * digito
            console.log(total, regressivo, digito)
        }
        return total
    }
}

const p1 = new ValidarCpf('529.982.247-25');
console.log(p1.somaDosNoveDigito())