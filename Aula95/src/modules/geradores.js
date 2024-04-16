const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const gerarMaiuscula = () => String.fromCharCode(rand(65, 90))
const gerarMinuscula = () => String.fromCharCode(rand(97, 122))
const gerarNumeros = () => String.fromCharCode(rand(48, 57))
const simbolo = '!@#$%¨&*()_-+=^`~{]}[?:;><.,'
const gerarSimbolos = () => simbolo[rand(0, 28)]


export default (qtd, maiuscula, minuscula, numeros, simbolos) => {
    qtd = Number(qtd);
    let senhaArray = []

    for(let x = 0; x < qtd; x++){
        maiuscula && senhaArray.push(gerarMaiuscula())
        minuscula && senhaArray.push(gerarMinuscula())
        numeros && senhaArray.push(gerarNumeros())
        simbolos && senhaArray.push(gerarSimbolos())
    }
    return senhaArray.slice(0, qtd).join('');
}
