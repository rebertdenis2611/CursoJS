function validaCpf(cpf){
    return{
        limparCpf(){
            this.cpfLimpo = cpf.replace(/\D+/g, '');
            return this.cpfLimpo;
        },

        filtrarCpf(){
            let cpfFiltrado = this.cpfLimpo.slice(0,-2);
            return cpfFiltrado
        },

        verificaCpf(){
            if(this.limparCpf().length !== 11) return false
            if(typeof this.limparCpf() === 'undefined') return false

            let digito1 = this.gerarDigito(this.novoCpf);
            let digito2 = this.gerarDigito(this.filtrarCpf() + digito1)
            const cpfCompleto = this.filtrarCpf() + digito1 + digito2
            return this.cpfLimpo === cpfCompleto;
        },

        gerarDigito(valor){
            const cpfArray = Array.from(this.filtrarCpf())
            let regresso = cpfArray.length + 2
            let total = cpfArray.reduce((ac, valor) =>{
                regresso--;
                ac += regresso * valor;
                return ac
            },0)         
            let digito = (total * 10) % 11
            return digito > 9 ? '0' : String(digito)
        },
        
        mostrarMensagem(){
            if(this.verificaCpf() === true){
                return('CPF VALIDADO!')
            }else{
               return('CPF INVALIDO!')
            };
        }
    };
};

const confereCpf = validaCpf('10498988422');
console.log(confereCpf.mostrarMensagem())
