exports.preencherContato = (req, res) =>{
    res.send(`
        <form action="/" method="POST">
            Nome: <input name='nome'><br>
            Idade: <input name='idade'><br>
            Cidade: <input name='cidade'><br>
            Bairro: <input name='bairro'><br>
            <br>
            <br>
            <button>Cadastrar</button>
        </form>    
    `)
}

exports.cadastroConcluido = (req, res) =>{
    res.send('Obrigado por se cadastrar.')
}