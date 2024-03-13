function cadEstudante(){

    estudante = new Estudante();

    nome = document.getElementById('nome').Value;
    idade = document.getElementById('idade').Value;
    email = document.getElementById('email').Value;
    turma = document.getElementById('turma').Value;
    telefone = document.getElementById('telefone').Value;

    estudante.setNome(nome);
    estudante.setIdade(idade);
    estudante.setEmail(email);
    estudante.setTurma(turma);
    estudante.setTelefone(telefone);

    console.log(estudante);
}

function cadTurma(){
    turma = new Turma();

    serie = document.getElementById('serie').Value;
    nome = document.getElementById('nome').Value;
    qtdAluno = document.getElementById('qtdAluno').Value;
    periodo = document.getElementById('periodo').Value;


    turma.setSerie(3);
    turma.setNome("M62");
    turma.setQtdAluno(21);
    turma.setPeriodo("Matutino");

    console.log(turma);
}