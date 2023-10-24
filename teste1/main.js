const palpite = document.querySelector('#palpite');
const enviarPalpite = document.querySelector('#enviar');
const resultado = document.querySelector('#resultado');
const numeroSorteado = document.querySelector('#numeros-sorteados');
const numeroGerado = gerarNumero();
const maiorOuMenor = document.querySelector('#maioroumenor');
let tentativas = 0
let botaoResetar;


enviarPalpite.addEventListener('click', () =>{  
    checagemDeNumero();
})

function gerarNumero(min = 1, max = 100){
    const num = Math.random() * (max - min) + min
    return Math.floor(num);
};

function checagemDeNumero(){
    if(Number(palpite.value) === numeroGerado){
        resultado.innerHTML = 'ACERTOU';
        resultado.classList = ('valorcorreto'); 
        maiorOuMenor.innerHTML = ' ';
        numeroSorteado.innerHTML += ' ' + palpite.value;
        criarBotaoReset()
    }else if(Number(palpite.value) > numeroGerado){
        resultado.innerHTML = 'ERROU'
        resultado.classList = ('valorincorreto');
        maiorOuMenor.innerHTML = 'SEU NÚMERO FOI MAIOR';
        numeroSorteado.innerHTML += ' ' + palpite.value;
        
    }else{
        resultado.innerHTML = 'ERROU'
        resultado.classList = ('valorincorreto');
        maiorOuMenor.innerHTML = 'SEU NÚMERO FOI MENOR';
        numeroSorteado.innerHTML += ' ' + palpite.value;
    }
    tentativas++
    checagemDeTentativas();
    limparPalpite()
}

function limparPalpite(){
    palpite.focus();
    palpite.value = ''
}

function checagemDeTentativas(){
    if(tentativas === 10){
        enviarPalpite.disabled = true
        palpite.disabled = true
        resultado.innerHTML = 'FIM DE JOGO';
        criarBotaoReset()
    }
}

function criarBotaoReset(){
    botaoResetar = document.createElement('button');
    botaoResetar.innerHTML = 'RESETAR O JOGO'
    document.body.appendChild(botaoResetar)
    botaoResetar.addEventListener('click', comercarNovoJogo)
};

function comercarNovoJogo(){
    maiorOuMenor.textContent += '';
    numeroSorteado.textContent += '';
    resultado.textContent += '' 
    enviarPalpite.disabled = false;
    palpite.disabled = false;
    botaoResetar.parentNode.removeChild(botaoResetar);
    tentativas = -1;
    checagemDeNumero();
}

palpite.focus()