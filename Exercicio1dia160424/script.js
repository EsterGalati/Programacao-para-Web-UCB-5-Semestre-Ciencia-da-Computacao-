let alunos = [];

function adicionarAluno() {
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    
    const media = (nota1 + nota2) / 2;
    
    const aluno = {
        nome: nome,
        notas: [nota1, nota2],
        media: media
    };

    alunos.push(aluno);

    exibirResultados();
    exibirListaAlunos();
}

function exibirResultados() {
    const maiorMedia = calcularMaiorMedia();
    const mediaTurma = calcularMediaTurma();

    document.getElementById("maiorMedia").textContent = maiorMedia;
    document.getElementById("mediaTurma").textContent = mediaTurma.toFixed(2);
}

function calcularMaiorMedia() {
    let maior = 0;
    for (let aluno of alunos) {
        if (aluno.media > maior) {
            maior = aluno.media;
        }
    }
    return maior.toFixed(2);
}

function calcularMediaTurma() {
    let soma = 0;
    for (let aluno of alunos) {
        soma += aluno.media;
    }
    return soma / alunos.length;
}

function exibirListaAlunos() {
    const listaAlunos = document.getElementById("listaAlunos");
    listaAlunos.innerHTML = '';
    for (let aluno of alunos) {
        const listItem = document.createElement("li");
        listItem.textContent = `${aluno.nome} - Média: ${aluno.media.toFixed(2)}`;
        listaAlunos.appendChild(listItem);
    }
}
