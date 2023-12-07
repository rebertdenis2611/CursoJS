class Carro{
    constructor(nome){
        this.nome = nome;
        this.velocidade = 0;
    }

    acelerar(vel){
        if(this.velocidade + vel > 220){
            console.log(`Atingiu a velocidade maxima de ${this.velocidade} não pode mais acelerar`)
        }else{
            this.velocidade += vel
        }
        
    }

    freiar(vel){
        if(this.velocidade === 0){
            console.log(`Atingiu a velocidade minima de ${this.velocidade} pode soltar o freio e puxar o freio de mão`)
        }else if(this.velocidade < vel){
            console.log(`O valor digitado foi superior a velocidade! FREIE MAIS DEVAGAR`)
        }else{
            this.velocidade -= vel
        }
        
    }
}

const c1 = new Carro('Toyota')
c1.acelerar(210)
console.log(c1)
c1.freiar(211)
console.log(c1)
c1.freiar(212)
console.log(c1)