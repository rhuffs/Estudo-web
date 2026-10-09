const autoresRepository = require("./autores.repository");

async function listar() {
    return autoresRepository.listar();
}

async function buscarPorId(id) {
    return autoresRepository.buscarPorId(id);
}

async function inserir(nome, nacionalidade, ano_nascimento) {
    return autoresRepository.inserir(nome, nacionalidade, ano_nascimento);
}

async function deletarPorId(id) {
    return autoresRepository.deletarPorId(id);
}

async function atualizar(id,nome, nacionalidade, ano_nascimento) {
    return autoresRepository.atualizar(id,nome, nacionalidade, ano_nascimento);
}


module.exports = {
    listar,
    buscarPorId,
    inserir,
    deletarPorId,
    atualizar
};
