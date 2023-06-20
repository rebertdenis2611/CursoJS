const pessoa = {
    nome: 'Rebert',
    idade: '27',
    sexo: 'M',
    endereco: {
        rua: 'Ametista',
        numero: '196'
    }
}
const {endereco: {rua: ruazinha, numero}} = pessoa;
console.log(ruazinha, numero);