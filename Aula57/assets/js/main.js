function Calculadora(){
    const display = document.querySelector('.display');

    this.inicio = () =>{
        this.botao()
        this.apertaEnter()
    };

    this.apertaEnter = () =>{
        document.addEventListener('keyup', e =>{
            if(e.key = 13){
                this.calculo()
            }
        })
    };


    this.limpaDisplay = () =>{
        display.value = ''
    };

    this.limpaUmNumero = () =>{
        display.value = display.value.slice(0, -1)
    };
  
    this.calculo = () =>{
        let valor = display.value;

        try{
            valor = eval(valor)
            if(!valor){
                alert('Erro de valor')
            }
            display.value = valor
        }catch(e){
            alert('Erro de valor')
        }
    };


    this.botao = () =>{
        document.addEventListener('click', (e) =>{
            let el = e.target;

            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText)
            }

            if(el.classList.contains('btn-clear')){
                this.limpaDisplay()
            }

            if(el.classList.contains('btn-del')){
                this.limpaUmNumero()
            }

            if(el.classList.contains('btn-eq')){
                this.calculo()
            }
        })
    };

    
    this.btnParaDisplay = (valor) =>{
        display.value += valor
        return
    }
};

const calc = new Calculadora();
calc.inicio();