const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) =>{
    res.send(`
        <form action="/" method="POST">
        NOME: <input type:"text" name="nome">
        <button>Teste2</button>
        </form>
        `)
})

app.post('/', (req, res) =>{
    res.send(`Recebi o formulario!`)
})

app.listen(port, () =>{
    console.log('Acessar http://localhost:3000')
    console.log('Estou escultando nessa porta! ')
})