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
    console.log('Saldo insuficiente!')
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

//CONTA CORRENTE

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor <= (this.saldo + this.limite)){
        this.saldo -= valor;
        this.verSaldo()
        return
    };
    this.verSaldo()
};

//CONTA POUPANÇA

function Poupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

Poupanca.prototype = Object.create(Conta.prototype);
Poupanca.prototype.constructor = Poupanca;

const cc = new ContaCorrente(11,10,0,100)
cc.depositar(50)
cc.sacar(150)

console.log()

const cp = new Poupanca(11,10,0)
cp.depositar(10)
cp.sacar(3)
cp.sacar(10)
