function chamada(max){
    if(max > 10) return;
    console.log(max)
    max++
    chamada(max)
}

chamada(0)