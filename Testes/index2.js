function f1(callback){
    console.log('f1')
    if(callback) callback()
};

function f2(callback){
    console.log('f2')
    if(callback) callback()
};

function f3(callback){
    console.log('f3')
    if(callback) callback()
};

f1(f1callback);

function f1callback(){
    f2(f2callback)
};

function f2callback(){
    f3(f3callback)
};

function f3callback(){
    console.log('OLA MUNDO')
};