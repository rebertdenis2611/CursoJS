const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const gerarMaiuscula = () => String.fromCharCode(rand(65, 91));
const gerarMinuscula = () => String.fromCharCode(rand(97, 122));
const gerarNumero = () => String.fromCharCode(rand(48, 57));
const simbolo = '!@#$%¨&*\()_-+=-.*/,:;?|'
const gerarSimbolo = () => simbolo[rand(1, 24)];

export default function gerarSenha(qtd, maiuscula, minuscula, numero, simbolo){
    qtd = Number(qtd)
    let senhaGerada = [];
    for(let x = 0; x < qtd; x++){
        maiuscula && senhaGerada.push(gerarMaiuscula());
        minuscula && senhaGerada.push(gerarMinuscula());
        numero && senhaGerada.push(gerarNumero());
        simbolo && senhaGerada.push(gerarSimbolo());
    }
    return senhaGerada.join('').slice(0, qtd)
}
