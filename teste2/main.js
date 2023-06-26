const login = document.querySelector("#login");
const senhaDigitada = document.querySelector("#senha");
const avisos = document.querySelector("#avisos");
const entrar = document.querySelector("#entrar");
const boasVindas = document.querySelector("#boasvindas");

const email = 'rebert';
const senha = '123';

entrar.addEventListener('click',function(){
    validaCredencial();
})

function validaCredencial(){
    if (login.value === email && senhaDigitada.value === senha){    
        location = "tela2.html"
        avisos.innerHTML = `Login validado com sucesso`;
        avisos.className = 'validado';   
        escrevaSaldacao();
    }else{
        avisos.innerHTML = 'Login ou senha errada';
        avisos.className = 'naovalidado';
        escrevaSaldacao();
    }
};

function escrevaSaldacao(){
    boasVindas.innerHTML = `Bem vindo ${login}, hoje o dia está lindo!`;
    console.log('hoje o dia está lindo!');
};