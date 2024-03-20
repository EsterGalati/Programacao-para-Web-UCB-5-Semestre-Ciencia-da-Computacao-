function preencherVetor() {
    let vetor = [];
  
    // Acessando os valores dos campos do formulário
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
  
    // Armazenando os valores no vetor
    vetor.push(nome);
    vetor.push(idade);
    vetor.push(email);
  
    // Exibindo o vetor preenchido
    exibirVetor(vetor);
  }
  
  function exibirVetor(vetor) {
    let outputDiv = document.getElementById("Saida");
    outputDiv.innerHTML = "<h2>Vetor preenchido:</h2><p>" + vetor.join(", ") + "</p>";
  }
  function removerVetor(){
  elemento1.pop();
  elemento2.pop(); // função usada para remover o ultimo valor de um array 

  resizeBy.innerHTML = "";
  }
    