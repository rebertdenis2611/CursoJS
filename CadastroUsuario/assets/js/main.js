const usuario = document.querySelector('.nome');
const password = document.querySelector('.senha');


const mensagem = document.querySelector('.mensagem');


class User{
    constructor(nome, senha){
        this.nome = nome;
        this.senha = senha;
    };
    
    valida(){
        if(this.nome === usuario.value && this.senha === password.value){
            mensagem.innerHTML = 'Senha e usuario OK'
            mensagem.className='senha-validada'          
        }else{
            mensagem.innerHTML = 'Erro na senha ou usuario'
            mensagem.className='senha-errada'
        }
        e.preventDefault();
        console.log(this.usuario, this.password);
    }

    entrarSistema(){
        const botao = document.querySelector('.salvar')
        botao.addEventListener('click', function(e){
            console.log(usuario.value, password.value);
            console.log(this.nome, this.senha);
            e.preventDefault();
        })
        
    }
}

const user1 = new User('rebert', 123);
user1.entrarSistema()
