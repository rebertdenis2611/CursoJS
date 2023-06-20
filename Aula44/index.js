function somaDois(x, y){
    if(typeof x !== 'number' ||typeof y !== 'number'){
        throw new Error('Numero invalido');
    }
    return x + y
};

try {
    console.log(somaDois('a',6))
}catch(e){
    console.log(e);
};