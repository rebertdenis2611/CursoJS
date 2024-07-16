const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send(`
        <form action='/' method='POST'>
        NOME: <input type='text'></input>
        <button>ENVIAR</button>
        </form>
    `)
})

app.post('/', (req, res) =>{
    res.send('Recebi o formulario')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato!')
})

app.listen(port, (req, res) => {
    console.log('http://127.0.0.1:3000')
    console.log('Estou escutando isso')
})