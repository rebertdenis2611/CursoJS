const inputTarefas = document.querySelector('.input-tarefas');
const botaoTarefas = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

function criarBotaoApagar(li){
    li.innerHTML += ' '
    const botao = document.createElement('button');
    botao.classList = ('apagar')
    li.appendChild(botao);
    botao.innerHTML = ('APAGAR')   
}

function limparInput(){
    inputTarefas.value = '';
    inputTarefas.focus();
}

function criarLi(){
    const li = document.createElement('li')
    return li
};

function criarTarefas(inputTexto){
    const li = criarLi();
    li.innerHTML = inputTexto;
    tarefas.appendChild(li);
    limparInput();
    criarBotaoApagar(li);
    salvarTarefas();
};


botaoTarefas.addEventListener('click', function(){
    if(!inputTarefas.value) return 
    criarTarefas(inputTarefas.value);
})

function salvarTarefas(){
    const litarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = []

    for (let tarefas of litarefas){
        let tarefaTexto = tarefas.innerText;
        tarefaTexto = tarefaTexto.replace('APAGAR', '').trim();
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criarTarefas(tarefa)
    }

}

adicionarTarefasSalvas()