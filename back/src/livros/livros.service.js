const livrosRepository = require("./livros.repository");

async function listar() {
    return livrosRepository.listar();
}

async function buscarPorId(id) {
    return livrosRepository.buscarPorId(id);
}

async function inserir(autor_id, titulo, isbn, editora, paginas, ano_publicacao, categoria) {
    return livrosRepository.inserir(autor_id, titulo, isbn, editora, paginas, ano_publicacao, categoria);
}

async function deletarPorId(id) {
    return livrosRepository.deletarPorId(id);
}

async function atualizar(id,autor_id, titulo, isbn, editora, paginas, ano_publicacao, categoria) {
    return livrosRepository.atualizar(id,autor_id, titulo, isbn, editora, paginas, ano_publicacao, categoria);
}


module.exports = {
    listar,
    buscarPorId,
    inserir,
    deletarPorId,
    atualizar
};
