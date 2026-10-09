const emprestimosRepository = require("./emprestimos.repository");

async function listar() {
    return emprestimosRepository.listar();
}

async function buscarPorId(id) {
    return emprestimosRepository.buscarPorId(id);
}

async function inserir(leitor_id ,livro_id,data_emprestimo,data_prevista,data_devolucao) {
    return emprestimosRepository.inserir(leitor_id ,livro_id,data_emprestimo,data_prevista,data_devolucao);
}

async function deletarPorId(id) {
    return emprestimosRepository.deletarPorId(id);
}

async function atualizar(id,leitor_id ,livro_id,data_emprestimo,data_prevista,data_devolucao) {
    return emprestimosRepository.atualizar(id,	leitor_id ,livro_id,data_emprestimo,data_prevista,data_devolucao);
}


module.exports = {
    listar,
    buscarPorId,
    inserir,
    deletarPorId,
    atualizar
};
