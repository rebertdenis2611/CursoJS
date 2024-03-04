//fetch('pessoas.json')
//    .then(resposta => resposta.json())
//    .then(json => carregarElementosNaPagina(json))
    
axios('pessoas.json')
    .then(resposta => carregarElementosNaPagina(resposta.data))

function carregarElementosNaPagina(json){
    const table = document.querySelector('table')

    for(let pessoa of json){
        
        const tr = document.createElement('tr')
        table.appendChild(tr)
        
        let td1 = document.createElement('td')
        tr.innerHTML += pessoa.nome
        tr.appendChild(td1)

        const td2 = document.createElement('td')
        tr.innerHTML += pessoa.estado
        tr.appendChild(td2)

        const td3 = document.createElement('td')
        tr.innerHTML += pessoa.idade         
        tr.appendChild(td3)
        
    }
}