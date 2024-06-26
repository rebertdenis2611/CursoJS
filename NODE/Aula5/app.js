const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'pessoas.json')

//implementaçoes
const caminhoArquivoLog = path.resolve(__dirname, 'arquivolog.txt')

const escreve = require('./modules/escrever')
const ler = require('./modules/ler')
const escrever = require('./modules/escrever')

//tentar colocar horario
const horario = require('./modules/horario')
// console.log(horario)


// const pessoas = [
//     {nome: 'Rebert'},
//     {nome: 'Luiz'},
//     {nome: 'Eduardo'},
//     {nome: 'José'}
// ]

//const json = JSON.stringify(pessoas, '', 2)
//escreve(caminhoArquivo, json)
async function leArquivo(caminho){
    const dados = await ler(caminho);
    return dados
}

const dadosArquivos = leArquivo(caminhoArquivo)
    .then(dados =>{
        console.log(dados)
    })
    .catch(e =>{
        escrever(caminhoArquivoLog,`O arquivo não foi encontrado`)
        //implementaçoes
        //escreve(caminhoArquivoLog, `${horario} : Erro ao lê arquivo de dados ` )
    })
