//const Cachorro = require('./z/mod2')
//const c1 = new Cachorro('Bilico')

//c1.latir()


//__filename - Arquivo atual
//__dirname - Pasta atual

const path = require('path'); //chamada do modulo path

console.log(__dirname); // mostrando a pasta atual

console.log(path.resolve(__dirname, '..' , '..' , 'arquivos', 'imagens')); // Nesse exemplo aqui, foi localizado a pasta e voltado duas pastas da atual e por fim 
//foi entrado na pasta arquivos e depois iamgens;