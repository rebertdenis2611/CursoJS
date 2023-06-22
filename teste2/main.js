const login = document.querySelector("#login");
const senhaDigitada = document.querySelector("#senha");
const avisos = document.querySelector("#avisos");
const entrar = document.querySelector("#entrar");

const email = 'a';
const senha = '123';

entrar.addEventListener('click',function(){
    validaCredencial()
})

function validaCredencial(){
    if (login.value === email && senhaDigitada.value === senha){
        avisos.innerHTML = 'Login Validado, BRENO amanhã para o lanche e chupa alguém lá de baixo e eduardo paga a guaraná e lambe dona rose.';
        avisos.className = 'validado';
    }else{
        avisos.innerHTML = 'Login invalido';
        avisos.className = 'naovalidado';
    }
};