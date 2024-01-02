class DispositivoEletronico{
  constructor(nome){
      this.nome = nome;
      this.ligado = false;
    }

    ligar(){
      if(this.ligado){
        console.log(`O ${this.nome} já está ligado!`)
        return
      }
      this.ligado = true
    }

    desligar(){
      if(!this.ligado){
        console.log(`O ${this.nome} já está desligado!`)
        return
      }
      this.ligado = false;
  }
  
}

class Iphone extends DispositivoEletronico{
  constructor(nome, memoria, armazenamento, valor){
    super(nome)
    this.memoria = memoria;
    this.armazenamento = armazenamento;
    this.valor = valor;
  }
  info(){
    console.log(`O seu aparelho é um: ${this.nome} ele tem ${this.memoria} gigabyte, com um armazenamento de ${this.armazenamento} terabyte e o valor é de ${this.valor}`)
  }
}

class Tablete extends DispositivoEletronico{
  constructor(nome, polegadas){
    super(nome)
    this.polegadas = polegadas;
  }
}

const iphone1 = new Iphone('S6', 1, 6, 8000)
console.log(iphone1)

const tablete = new Tablete('Samsung', 10, 100, 8000)
tablete.desligar();
console.log(tablete)

//A HERANÇA SÓ VEM DA CLASSE PAI!!!!