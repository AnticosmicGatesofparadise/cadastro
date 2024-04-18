const form = document.getElementById('form-cadastro')
const nomeTab = [];
const telefoneTab = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const formNome = document.getElementById('nome');
    const formTel = document.getElementById('Telefone');

    if (nomeTab.includes(formNome.value)) {
        alert(`O usuário ${nomeTab} já foi cadastrado antes!`)
    } else {
        nomeTab.push(formNome.value);
        telefoneTab.push(formTel);

        let linha = '<tr>';
        linha += `<td>${formNome.value}</td>`;
        linha += `<td>${formTel.value}</td>`;

        linhas += linha
    }

    formNome.value = '';
    formTel.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}