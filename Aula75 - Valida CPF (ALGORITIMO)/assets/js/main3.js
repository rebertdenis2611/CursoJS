function validaCpf(cpf){
    return{
        filtrarCpf(){
            this.cpfLimpo = cpf.replace(/\D+/g, '');
            this.cpfFiltrado = this.cpfLimpo.slice(0,-2);
            return this.cpfLimpo
        },

        verificaCpf(){
            if(this.filtrarCpf().length !== 11) return false
            if(typeof this.filtrarCpf() === 'undefined') return false
            
            return true
        },

        gerarDigito(){
            const cpfArray = Array.from(this.filtrarCpf())
            let regresso = cpfArray.length -1
            console.log(cpfArray) //funcionou
            cpfArray.reduce((ac, valor) => {
                ac += (regresso * Number(valor));
                regresso--;
                return ac
            },0)
            
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
console.log(confereCpf.gerarDigito())