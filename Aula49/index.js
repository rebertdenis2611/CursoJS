//FUNCTION HOSTING

function falaOi(){
    console.log('Falei OI')
};
falaOi()

//FUNCTION EXPPRESSION
const souUmDado = function(){
    console.log('Eu sou um dado')
};

function execultaFuncao(funcao){
    funcao()
};

execultaFuncao(souUmDado);

//Arrow Function

const funcaoArrow = () =>{
    console.log('Sou uma função Arrow')
};

funcaoArrow();

//FUNCAO POR OBJETO

const obj = {
    falar(){
        console.log('Sou uma função objeto!')
    }
};

obj.falar();