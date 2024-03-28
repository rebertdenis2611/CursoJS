import GeraCPF from './modules/GeraCPF'
import './assets/css/style.css';

const novoCpf = document.querySelector('.gerar-cpf');

novoCpf.addEventListener('click', () => {
    gerarCpf()
})

function gerarCpf(){
    const gera = new GeraCPF();
    const cfpgerado = document.querySelector('.cpf-gerado')
    cfpgerado.innerHTML = gera.geraNovoCpf()
}