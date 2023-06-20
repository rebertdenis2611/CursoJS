const resultado = document.querySelector('.resultado');
const data = new Date();
const opcoes = {dateStyle: 'full', timeStyle: 'short'}
resultado.innerHTML = data.toLocaleString('pt-Br', opcoes);
