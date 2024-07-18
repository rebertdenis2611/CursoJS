const express = require('express');
const app = express();
const port = 3333;

app.use(express.urlencoded({extended: true}))

app.get('/', (req, resp) =>{
    resp.send(`
        <form action="/" method='POST'>
        Nome do cliente: <input type="text" name="nome">
        <input type="text" name="outrovalor">
        <button>ENVIAR O ARQUIVO</button>    
        </form>
    `)
})

app.get("/testes/:id_usuarios?/:parametro?/:idade?", (req, res) =>{
    console.log('Estou no GET')
    console.log(req.query);
})


app.post('/', (req, resp) =>{
    console.log(req.body);
    if(req.body.nome === 'rebert'){
        console.log('Login validado!');
    }else{
        console.log('Não validado')
    }
    return resp.end()
    resp.send(`O que você me enviou foi ${req.body.nome} ${req.body.outrovalor}`);
})

app.listen(port, () =>{
    console.log('Porta Aberta.');
})