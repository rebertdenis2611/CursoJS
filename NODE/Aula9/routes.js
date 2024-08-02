const express = require('express');
const route = express.Router()
const home = require('./controllers/controllersHome')
const contato = require('./controllers/controllersContato')

//rota do home

route.get('/', home.inicio)
route.post('/', home.tratarPost)
//rota do contato

route.get('/contato', contato.form)


module.exports = route;