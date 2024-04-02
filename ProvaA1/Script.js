var transacoes = [];
function adicionarTransacao() {
    var valor = document.getElementById('valor').value;
    var descricao = document.getElementById('descricao').value;
    var tipo = document.getElementById('tipo').value;
    var categoria = document.getElementById('categoria').value;

    var transacao = {
        valor: valor,
        descricao: descricao,
        tipo: tipo,
        categoria: categoria
    };

    transacoes.push(transacao);

    alert('Transação adicionada com sucesso!');
}
function gerarRelatorio() {
    var relatorioDiv = document.getElementById('relatorioResultados');
    relatorioDiv.innerHTML = ''; 

    var totaisPorCategoria = {};

    for (var i = 0; i < transacoes.length; i++) {
        var transacao = transacoes[i];
        if (transacao.tipo === 'despesa') {
            if (!totaisPorCategoria[transacao.categoria]) {
                totaisPorCategoria[transacao.categoria] = 0;
            }
            totaisPorCategoria[transacao.categoria] += parseFloat(transacao.valor);
        }
    }

    for (var categoria in totaisPorCategoria) {
        var valor = totaisPorCategoria[categoria];
        relatorioDiv.innerHTML += `<p>${categoria.toUpperCase()}: R$${valor.toFixed(2)}</p>`;
    }
}
    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('adicionar').addEventListener('click', adicionarTransacao);
    document.getElementById('gerarRelatorio').addEventListener('click', gerarRelatorio);
});
