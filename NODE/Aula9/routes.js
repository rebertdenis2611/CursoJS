const express= require('express')
const route = express.Router();
const homeController = require('./controllers/homeController')
const homeContato = require('./controllers/homeContato')

//rostas da home
route.get('/', homeController.paginaInicial);


//rotas de contato
route.get('/contato', homeContato.preencherContato);
route.post('/contato', homeContato.cadastroConcluido);

module.exports = route;