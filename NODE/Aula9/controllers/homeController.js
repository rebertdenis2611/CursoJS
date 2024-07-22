exports.paginaInicial = (req, res) =>{
    res.send(`
        <form action="/" method="POST">
        Digite seu nome: <input type="text" name="nome"></input>
        <button>ENVIAR</button>
        </form>
        `)
}

exports.tratarPost = (req, res) =>{
    res.send('Sou a pagina inicial!')
}