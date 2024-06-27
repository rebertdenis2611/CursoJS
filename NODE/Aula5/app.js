const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'pessoas.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

//implementaçoes
const caminhoArquivoLog = path.resolve(__dirname, 'arquivolog.txt')

//tentar colocar horario
//const horario = require('./modules/horario')
// console.log(horario)

        //ESCREVE NO ARQUIVO ESCREVER.JS AS INFORMAÇÕES ABAIXO.
// const pessoas = [
//     {nome: 'Rebert'},
//     {nome: 'Luiz'},
//     {nome: 'Eduardo'},
//     {nome: 'José'}
// ]

// const json = JSON.stringify(pessoas, '', 2)
// escreve(caminhoArquivo, json)

//PEGA INFORMAÇÕES DA LEITURA DO ARQUIVO.
async function leArquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados)
    return dados
}

//PARA NÃO FAZER ISSO PODE-SE CRIAR UMA NOVA FUNÇÃO PARA NÃO CRIAR A FUNÇÃO
// const dadosArquivos = leArquivo(caminhoArquivo)
//     .then(dados =>{
//         console.log(dados)
//     })
//     .catch(e =>{
//         escrever(caminhoArquivoLog,`O arquivo não foi encontrado`)
//         //implementaçoes
//         //escreve(caminhoArquivoLog, `${horario} : Erro ao lê arquivo de dados ` )
//     })

function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val.nome))
}

leArquivo(caminhoArquivo)