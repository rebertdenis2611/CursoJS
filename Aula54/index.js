function tempo(min = 1000, max = 3000){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

function f1(callback){
    setTimeout(() =>{
        console.log('Esse execulta depois')
        if (callback) callback();
    },tempo())
}

function f2(callback){
    setTimeout(() =>{
        console.log('Esse execulta primeiro')
        if (callback) callback();
    },tempo())
}

f2(f2callback);

function f2callback(){
    f1(f1callback);
};

function f1callback(callback){
    console.log('Olá mundo!')
}