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

    const novoCpf = cpfParcial + digito1 + digito2
    console.log(novoCpf)
    return novoCpf === this.cpfLimpo;
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
    return digito > 9 ? '0' : String(digito)
}

ValidaCpf.prototype.isSequecia = function(){
    const sequecia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequecia === this.cpfLimpo;
}

const cpf = new ValidaCpf('11111111100');
console.log(cpf.valida());
