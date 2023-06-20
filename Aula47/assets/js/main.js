const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

document.addEventListener('click', function(e){
    const evento = e.target;
    
    if(evento.classList.contains('iniciar')){
        contagem();
        relogio.classList.remove('pausado');
    };

    if(evento.classList.contains('pausar')){
        clearTimeout(timer);
        relogio.classList.add('pausado');
        
    };
    
    if(evento.classList.contains('parar')){
        clearTimeout(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00'
        relogio.classList.remove('pausado');
    };
    
});

function gerarHorario(segundos){
    const hora = new Date(segundos * 1000);
    return hora.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'
    })
};

function contagem(){
    timer = setInterval(function(){
        relogio.innerHTML = gerarHorario(segundos);
        segundos++
    },1000)
};