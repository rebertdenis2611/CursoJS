const _velocidade = Symbol();
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade(){
        console.log('GETTER')
        return this[_velocidade];
    }

    set velocidade(kmh){
        console.log('SETTER')
        if(kmh > 100 || kmh < 0) return
        if(typeof kmh !== 'number') return
        this[_velocidade] = kmh;
    }

    freiar(valor){
        this[_velocidade] -= valor;
        return this[_velocidade];
    }

    acelerar(valor){
        this[_velocidade] += valor;
        return this[_velocidade];
    }
}

const c1 = new Carro('Toyota');
c1.velocidade = 101
console.log(c1.velocidade)