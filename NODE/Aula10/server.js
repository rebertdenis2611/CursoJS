const express = require('express');
const app = express();
const port = 3333;
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({extended: true}))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.listen(port, (req, res) =>{
    console.log('Estamos escultando!')
    console.log(`http://127.0.0.1:${port}`)
})