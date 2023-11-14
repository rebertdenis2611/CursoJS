function ValidaCpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
};

ValidaCpf.prototype.valida = function(){
    if(this.cpfLimpo.length !== 11) return false;
    if(typeof this.cpfLimpo === 'undefined') return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criarDigito(cpfParcial)
    const digito2 = this.criarDigito(cpfParcial + digito1)
    console.log(digito1, digito2)
    return true;
};


ValidaCpf.prototype.criarDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    
    let regressivo = cpfArray.length + 1
    let total = cpfArray.reduce((ac, val) =>{
        ac += (regressivo * Number(val))
        regressivo--
        return ac
    },0)
    
    let digito = 11 - (total % 11)
    return digito > 9 ? 0 : digito
}

const cpf = new ValidaCpf('10498988422');
console.log(cpf.valida());
