function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor){
    if(valor <= this.saldo){
        this.saldo -= valor;
        this.verSaldo()
        return
    };
    this.verSaldo()
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo()
};
Conta.prototype.verSaldo = function(){
    console.log(`Agencia/Conta: ${this.agencia} | ${this.conta} | Saldo: ${this.saldo}`)
};

const conta1 = new Conta(9246, 193990, 100)
conta1.sacar(150)