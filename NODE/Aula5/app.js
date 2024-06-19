
const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
console.log(caminhoArquivo)
const pessoas = [
    {nome: 'Joao'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Luiza'}
]

const json = JSON.stringify(pessoas, '', 2)
fs.writeFile(caminhoArquivo, json, {flag: 'w'})