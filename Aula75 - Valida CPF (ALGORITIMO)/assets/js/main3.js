function validaCpf(cpf){
    return{
        filtrarCpf(){
            const cpfLimpo = cpf.replace(/\D+/g, '');
            return cpfLimpo
        },

        verificaCpf(){
            if(this.filtrarCpf().length !== 11) return false
            if(typeof this.filtrarCpf() === 'undefined') return false
            return true
        }
        
    };
};

const confereCpf = validaCpf('104.989.884-22');
console.log(confereCpf.verificaCpf())