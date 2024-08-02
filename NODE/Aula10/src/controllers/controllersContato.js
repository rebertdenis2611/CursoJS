exports.form = (req, res) =>{
    res.send(`
    <form action="/" method="POST">
        Digite seu nome: <input type="text" name="name"></input><br>
        Digite sua idade: <input type="number" name="idade"></input>
        <button>Enviar</button>
    </form>    
    `)
}



