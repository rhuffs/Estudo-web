const db = require("../db");

async function listar() {
    return db.any("SELECT * FROM livros ");
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM livros WHERE id = $1", [id]);
}

async function inserir(autor_id, titulo, isbn, editora, paginas, ano_publicacao,categoria){
    return db.none("INSERT INTO livros (autor_id,titulo,isbn,editora,paginas,ano_publicacao,categoria) VALUES ($1,$2,$3,$4,$5,$6,$7)",[autor_id, titulo, isbn, editora, paginas, ano_publicacao,categoria])
}

async function deletarPorId(id) {
    return db.none("DELETE FROM livros WHERE id = $1", [id]);
}

async function atualizar(id,autor_id, titulo, isbn, editora, paginas, ano_publicacao,categoria) {
    return db.oneOrNone("UPDATE livros SET autor_id = $2,titulo = $3,isbn = $4,editora= $5,paginas= $6,ano_publicacao= $7,categoria= $8 WHERE id = $1",[id, autor_id, titulo, isbn, editora, paginas, ano_publicacao,categoria]);
}


module.exports = {
    listar,
    buscarPorId,
    inserir,
    deletarPorId,
    atualizar
};
