// let tem escopo de blo {... bloco}
// var só tem escopo de função

const ini =  true;
let nome = 'Rebert'

if (ini) {
    let sobrenome = 'Andrade'
    if (ini){
        let sobrenome = 'Silva'
    }
        if(ini){
            console.log(nome, sobrenome)
        }
}

console.log(nome, sobrenome)