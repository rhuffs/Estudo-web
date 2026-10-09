const db = require("../db");

async function listar() {
    return db.any("SELECT * FROM emprestimos");
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM emprestimos WHERE id = $1", [id]);
}

async function inserir(leitor_id ,livro_id,data_emprestimo,data_prevista,data_devolucao){
    return db.none("INSERT INTO emprestimos (leitor_id ,livro_id,data_emprestimo,data_prevista,data_devolucao) VALUES ($1,$2,$3,$4,$5)",[leitor_id ,livro_id,data_emprestimo,data_prevista,data_devolucao]);
}

async function deletarPorId(id) {
    return db.none("DELETE FROM emprestimos WHERE id = $1", [id]);
}

async function atualizar(id,leitor_id ,livro_id,data_emprestimo,data_prevista,data_devolucao) {
    return db.oneOrNone("UPDATE emprestimos SET leitor_id = $2, livro_id = $3, data_emprestimo = $4,data_prevista = $5, data_devolucao = $6 WHERE id = $1",[id,	leitor_id ,livro_id,data_emprestimo,data_prevista,data_devolucao]);
}

module.exports = {
    listar,
    buscarPorId,
    inserir,
    deletarPorId,
    atualizar
};
