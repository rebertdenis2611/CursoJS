class ControleRemoto{
  constructor(nome){
    this.nome = nome;
    this.volume = 0;
  }

  //Isso é um Método de instancia;
  aumenta(){
    this.volume += 2
  }

  diminui(){
    this.volume -= 2
  }

  //Isso é um Método estatico;
  static trocaPilha(){
    console.log('PILHA TROCADA')
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumenta()
controle1.aumenta()
console.log(controle1)
ControleRemoto.trocaPilha()