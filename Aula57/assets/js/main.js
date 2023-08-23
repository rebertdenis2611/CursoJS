function criarCalculadora(){
    return{

        display: document.querySelector('.display'),

        inicia(){
            this.calculo()
            this.pressionaEnter()
        },

        limpaDisplay(){
            this.display.value = ''
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta)
                if(!conta){
                    alert('Conta invalida!')
                    return
                }
                this.display.value = conta
            }catch(e){
                alert('Conta incorretamente!')
                return;
            }
        },

        calculo(){
            document.addEventListener('click', e =>{
                const el = e.target;    
                if(el.classList.contains('btn-num')){
                    this.btnInsereDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.limpaDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            })
        },

        btnInsereDisplay(valor){
            this.display.value += valor
        }
    }   
}

const calculadora = criarCalculadora();
calculadora.inicia();