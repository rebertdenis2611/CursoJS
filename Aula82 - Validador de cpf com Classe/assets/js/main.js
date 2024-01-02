class ValidarCpf{
    constructor(cpf){
        this.cpf = cpf;
    }

    tratarCpf(){
        return this.cpf.replace(/\D+/g, '');
    }

    gerarDigito(){
        const cpfNoveDigito = this.tratarCpf().slice(0, -2);
        const cpfArray = Array.from(cpfNoveDigito)
        let regressivo = cpfNoveDigito.length+1;

        let totalCpf = cpfArray.reduce(function(ac, valor){
            ac += valor * regressivo
            regressivo--
            return ac
        },0)
        return totalCpf;
    }   

    primeiraValidacao(){
        let primeiroDigito = (this.gerarDigito() * 10) % 11;
        if(primeiroDigito === 10){
            primeiroDigito === 0
        }else{
            (this.gerarDigito() * 10) % 11
        }
        return primeiroDigito;
    }
    escrever(){
        console.log(this.primeiraValidacao())
    }
    
}

const p1 = new ValidarCpf('150.224.694-00');
console.log(p1.escrever())