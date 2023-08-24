function criaCalculadora(){
    return{

        display: document.querySelector('.display'),

        inicia(){
            this.botoes()
        },

        limpaDisplay(){
            this.display.value = ' '
        },

        apagaUmNumero(){
            this.display.value = this.display.value.slice(0,-1)
        },

        calculo(){
            let conta = this.display.value;
            try{
                conta = eval(conta)
                if(!conta){
                alert('Valor invalido!');
                return
            }
            this.display.value = conta
            }catch(e){
                alert('Valor invalido');
                return
            }
            
        },

        botoes(){
            document.addEventListener('click', e =>{
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnInsereDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')){
                    this.limpaDisplay()
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUmNumero()
                }

                if(el.classList.contains('btn-eq')){
                    this.calculo()
                }
            })
        },

        btnInsereDisplay(valor){
            this.display.value += valor
        }
    }
};

const calculadora = criaCalculadora();
calculadora.inicia();