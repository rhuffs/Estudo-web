const db = require("../db");

async function listar() {
    return db.any("SELECT * FROM autores ORDER BY nome");
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM autores WHERE id = $1", [id]);
}

async function inserir(nome, nacionalidade, ano_nascimento){
    return db.none("INSERT INTO autores (nome, nacionalidade, ano_nascimento) VALUES ($1,$2,$3)",[nome, nacionalidade, ano_nascimento]);
}

async function deletarPorId(id) {
    return db.none("DELETE FROM autores WHERE id = $1", [id]);
}

async function atualizar(id,nome, nacionalidade, ano_nascimento) {
    return db.oneOrNone("UPDATE autores SET nome = $2, nacionalidade = $3, ano_nascimento = $4 WHERE id = $1",[id, nome, nacionalidade, ano_nascimento]);
}


module.exports = {
    listar,
    buscarPorId,
    inserir,
    deletarPorId,
    atualizar
};
