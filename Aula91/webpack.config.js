const path = require('path')

module.exports = {
    mode: 'development',
    entry: '.src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'blunde.js'
    },
    module: {},
    devtool: 'source-map',  /*Mapeia o local do erro, localizando no arquivo origial qual a linha.*/

};