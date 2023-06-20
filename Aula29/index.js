function getDiaSemanaTexto (diasemana){
    let diaSemanaTexto;

    const semana1 = ['Seguda-']
    return semana1[diadasemana]
    
}

const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto)

