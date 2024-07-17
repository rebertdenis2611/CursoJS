const express = require('express');
const app = express();
const port = 3333;

app.use(express.urlencoded({extended: true}))

app.get('/', (req, resp) =>{
    resp.send(`
        <form action="/" method='POST'>
        Nome do cliente: <input type="text" name="nome">
        <button>ENVIAR O ARQUIVO</button>    
        </form>
    `)
})

app.get("/testes/:id_usuarios?/:parametro?/:idade?", (req, res) =>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
})


app.post('/', (req, resp) =>{
    console.log(req.body);
    resp.send('Arquivo recebido');
})

app.listen(port, () =>{
    console.log('Porta Aberta.');
})