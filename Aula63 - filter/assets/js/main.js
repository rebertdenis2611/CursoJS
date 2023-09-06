const numeros = [5,6,7,8,59,87,23,11,25,65,48,68,3,4,3];
const numerosFiltrados = numeros.filter(valor => {
    console.log(valor);
    return valor > 10
})