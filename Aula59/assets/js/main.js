function* geradora(){
    console.log('teste1')
    yield 'valor1'
    console.log('teste2')
    yield 'valor2'
    console.log('teste3')
    yield 'valor3'
};

// geradora infinita
function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++
    }
}

//delega para outra geradora
function* geradora3(){
    yield 1;
    yield 2;
    yield 3;
};

function* geradora4(){
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}
const g4 = geradora4();

// geradora com funções;

function* geradora5(){
    yield function(){
        console.log('vim do y1')
    };

    yield function(){
        console.log('vim do y2')
    };
};

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();