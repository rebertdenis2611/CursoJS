const fs = require('fs').promises;
const pasta = require("path");

const caminhoFull = pasta.resolve(__dirname)

const pessoas = [
    {nome: 'Rebert'},
    {nome: 'Denis'},
    {nome: 'Andrade'},
    {nome: 'Silva'}
]

fs.writeFile("caminhoFull.json", JSON.stringify(pessoas))