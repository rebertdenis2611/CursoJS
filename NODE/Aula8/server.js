const express = require('express');
const app = express();
const port = 3333;

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.send(`
    <form action="/" method="POST">
    Digite seu nome: <input type="text" name="nome"></input>
    <button>ENVIAR</button>
    </form>
    `)
})


app.post('/', (req, res) =>{
    res.send(`Seja bem vindo! ${req.body.nome}` )
})

app.get('/testes/:usuario?/:senha?', (req, res) => {
    res.send(req.params.usuario)
    console.log(req.query)
})

app.get('/')

app.listen(port, (req, res) =>{
    console.log('Estamos escultando!')
    console.log(`http://127.0.0.1:${port}`)
})