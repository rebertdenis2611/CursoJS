module.exports = class Cachorro{
    constructor(nome){
        this.nome = nome
    }

    latir(){
        return ` O ${this.nome} fez au au`
    }
}