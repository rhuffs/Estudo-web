const db = require("../db");

async function listar() {
    return db.any("SELECT * FROM leitores ");
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM leitores WHERE id = $1", [id]);
}

async function inserir(nome, email, telefone, ativo){
    return db.none("INSERT INTO leitores (nome, email, telefone, ativo) VALUES ($1,$2,$3,$4)",[nome, email, telefone, ativo]);
}

async function deletarPorId(id) {
    return db.none("DELETE FROM leitores WHERE id = $1", [id]);
}

async function atualizar(id,nome, email, telefone, ativo) {
    return db.oneOrNone("UPDATE leitores SET nome = $2, email = $3, telefone = $4,ativo = $5 WHERE id = $1",[id, nome, email, telefone, ativo]);
}


module.exports = {
    listar,
    buscarPorId,
    inserir,
    deletarPorId,
    atualizar
};
