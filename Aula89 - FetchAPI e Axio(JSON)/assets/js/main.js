fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregarElementosNaPagina(json))

function carregarElementosNaPagina(json){
    const table = document.querySelector('table')

    const tr = document.createElement('tr')
    const td = document.createElement('td')
    
    table.appendChild(tr)
    tr.appendChild(td)

    td.innerHTML = 'Rebert'
    td.innerHTML += ' 26'
}
