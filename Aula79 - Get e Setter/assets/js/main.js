class Carro{
  constructor(modelo, ano, fabricante){
    this.modelo = modelo;
    this.ano = ano;
    this.fabricante = fabricante;
    this.motor = 0;
    this.tabelaFipe = '39.587,00';
  }

  
  set motorizacao(valor){
    this.motor = valor
    
  }
  
  set valorFip(fipe){
    if(fipe === 0 || fipe === undefined || typeof fipe !== 'number') 
    alert('Valor invalido, não será atualizado!')
    this.tabelaFipe = fipe
  }

  get mensagemCarro(){
    console.log(`${this.modelo} | ${this.ano} | ${this.fabricante} | ${this.motor} | ${this.tabelaFipe}`)
  }
}

const c1 = new Carro('Etios Hatch 1.3', 2023, 'Toyota')
c1.motorizacao = 1.3
c1.valorFip = 11
c1.mensagemCarro;
console.log(c1.#privada);