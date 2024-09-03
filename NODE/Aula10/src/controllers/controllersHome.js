exports.inicio = (req, res) =>{
    res.render('index')
}

exports.tratarPost = (req, res) =>{
    res.send('Olá! Suas informações foram gravadas com sucesso.')
}