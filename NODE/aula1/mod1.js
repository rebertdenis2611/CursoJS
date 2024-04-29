const nome = 'Rebert'
const sobrenome = 'Denis'

const falaNome = () => nome + ' ' + sobrenome



//           posso alterar esse .nome para o nome que eu quiser fazer a exportação   
//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar'


class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}

exports.Pessoa = Pessoa;
