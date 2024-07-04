const express = require('express');
const app = express();
const port = 3000

//         CRIAR LER ATUALIZAR APAGAR
// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST,   GET,  PUT   , DELETE

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

app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato com a gente!')
})

app.get('/sobre', (req, res) =>{
    res.send('Somos uma empresa de Tecnologia!')
})

app.listen(port, () =>{
    console.log('Acessar http://localhost:3000')
    console.log('Estou escultando nessa porta! ')
})