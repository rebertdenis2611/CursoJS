function validaCpf(cpf){
    return{
        filtrarCpf(){
            this.cpfLimpo = cpf.replace(/\D+/g, '');
            return this.cpfLimpo
        },

        verificaCpf(digito){
            if(this.filtrarCpf().length !== 11) return false
            if(typeof this.filtrarCpf() === 'undefined') return false
            return true
        },

        gerarDigito(){
            const cpfFiltrado = this.cpfLimpo.slice(0,-2);
            const cpfArray = Array.from(cpfFiltrado)
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

const confereCpf = validaCpf('104.989.884-22');
console.log(confereCpf.verificaCpf())
console.log(confereCpf.gerarDigito())