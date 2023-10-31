let nome = 'Rebert'

let creatPet = function(nome){
    return{
        setNome: function(nome){
            this.nome = nome;
        }
    }
}

console.log(creatPet().setNome())