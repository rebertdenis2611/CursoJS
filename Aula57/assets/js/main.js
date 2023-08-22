function criarCalculadora(){
    return{
        display: document.querySelector('.display'),
            
        inicia(){
            this.cliqueBotoes;
        },

        cliqueBotoes(){
            document.addEventListener('click',function(e){
                const el = e.target;
                console.log(this)

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor
        }
    };
}

const calculadora = criarCalculadora();
calculadora.inicia();