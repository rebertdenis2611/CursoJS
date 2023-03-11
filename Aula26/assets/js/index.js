const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('teste')
    

    const inputAltura = e.target.querySelector('.altura');
    const inputPeso = e.target.querySelector('.peso');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        setResultado('Peso invalido! ', false)
        return
    }

    if (!altura){
        setResultado('Altura invalido! ', false)
        return
    }

    const imc = getImc(peso, altura);
    const legend = setLegenda(imc);
    
    msg = `O seu IMC é de ${imc} e você está ${legend}`
    setResultado(msg, true);

})

function getImc(peso, altura){
    const imc = peso / (altura * altura);
    return imc.toFixed(2)
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    
    const p = criaP();

    if (isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    };

    p.innerHTML = msg;
    resultado.appendChild(p);
}

function setLegenda(imc){
    const legenda = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3'];

    if (imc > 40) return legenda[5];
    if (imc > 35) return legenda[4];
    if (imc > 30) return legenda[3];
    if (imc > 25) return legenda[2];
    if (imc > 18.8) return legenda[1];
    if (imc < 18.5) return legenda[0];
}