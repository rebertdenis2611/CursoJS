const express = require('express');
const app = express();
const port = 3333;
const routes = require('./routes')

app.use(express.urlencoded({extended: true}))
app.use(routes)

app.listen(port, (req, res) =>{
    console.log('Estamos escultando!')
    console.log(`http://127.0.0.1:${port}`)
})