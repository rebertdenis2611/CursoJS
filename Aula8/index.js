const nome = ('Rebert');
const sobrenome = ('Denis');
const idade = ('27');
const peso = ('86');
const altura = ('1.63')
let imc;
let anoNascimento;

imc = (peso / (altura * altura))
anoNascimento = 2023 - idade

//template string

console.log(`Meu nome é ${nome, sobrenome}`);
console.log(`Tenho ${idade} e meu peso é de ${peso} e tenho ${altura} metros de altura`);
console.log(`Nasci em ${anoNascimento} e me imc é de ${imc}`);

