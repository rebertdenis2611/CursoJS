const aluno = {
    nome : "Matheus", 
    idade : "23", 
    email : "matheushcastiglioni@gmail.com"
    };

function imprimeAluno({nome, idade, email}){
    console.log(nome, idade, email)
}

imprimeAluno(aluno)