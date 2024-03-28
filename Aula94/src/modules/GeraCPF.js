import validarCPF from './ValidarCpf';

export default class GerarCPF{
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatado(cpf){
        return(
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        )
    };

    geraNovoCpf(){
        const cpfsemDigito = this.rand();
        const digito1 = validarCPF.calculoDigito(cpfsemDigito)
        const digito2 = validarCPF.calculoDigito(cpfsemDigito + digito1)
        const novoCpf = cpfsemDigito + digito1 + digito2;
        return this.formatado(novoCpf)
    }
}

