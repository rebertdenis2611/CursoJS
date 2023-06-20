function horaAtual(){
    const time = new Date();

    return time.toLocaleTimeString('pt-br',{
        hour12: false
    })
}

timer = setInterval(function(){
    console.log(horaAtual());
},1000);

setTimeout(function(){
    clearInterval(timer)
},3000)