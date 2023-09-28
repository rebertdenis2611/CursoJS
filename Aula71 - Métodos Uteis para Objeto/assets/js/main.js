const produto = {nome: 'Caneca', preco: 19, material: 'porcelana'}
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
}
