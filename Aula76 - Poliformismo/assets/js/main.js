function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log('Não é possível fazer retirada o saldo é insuficiente!')
    }else{
        this.saldo -= valor;
        this.mostraSaldo()
    }
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.mostraSaldo()
};

Conta.prototype.mostraSaldo = function(){
    console.log(`AG/C: ${this.agencia} | ${this.conta} | Saldo:  ${this.saldo} `);
}

//ContaCorrente

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC.prototype;

CC.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log('Saldo Insuficiente!')
        this.mostraSaldo()
    }else{
        this.saldo = this.limite - valor;
        this.mostraSaldo()
    }
    
};

function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP.prototype;

//const contaCC = new CC(9246, 193990, 0, 100)
//contaCC.depositar(500)
//contaCC.sacar(99)

const contaCP = new CP(9246, 193990, 10)
//contaCC.depositar(500)
contaCP.sacar(5)
