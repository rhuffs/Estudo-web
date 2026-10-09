


const leitoresRepository = require("./leitores.repository");

async function listar() {
    return leitoresRepository.listar();
}

async function buscarPorId(id) {
    return leitoresRepository.buscarPorId(id);
}

async function inserir(nome, email, telefone, ativo) {
    return leitoresRepository.inserir(nome, email, telefone, ativo);
}

async function deletarPorId(id) {
    return leitoresRepository.deletarPorId(id);
}

async function atualizar(id,nome, email, telefone, ativo) {
    return leitoresRepository.atualizar(id,nome, email, telefone, ativo);
}


module.exports = {
    listar,
    buscarPorId,
    inserir,
    deletarPorId,
    atualizar
};
