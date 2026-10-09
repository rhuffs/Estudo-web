const livrosService = require("./livros.service");

async function listar(req, res) {
    try {
        const livros = await livrosService.listar();
        return res.status(200).json(livros);
    } catch (erro) {
        console.log("Erro ao buscar livros:", erro);
        return res.status(400).json({ erro: erro.message });
    }
}

async function buscarPorId(req, res) {
    try {
        const livro = await livrosService.buscarPorId(req.params.id);
        return res.status(200).json(livro);
    } catch (erro) {
        console.log("Erro ao buscar livro:", erro);
        return res.status(500).json({ erro: erro.message });
    }
}

async function inserir(req,res) {
    try {
        const livro = await livrosService.inserir(req.body.autor_id, req.body.titulo, req.body.isbn, req.body.editora, req.body.paginas, req.body.ano_publicacao,req.body.categoria);
        return res.status(200).json(livro);
    } catch (erro){
        console.log("Erro ao adicionar livro:", erro);
        return res.status(500).json({erro: erro.message});

    }
} 

async function deletarPorId(req,res) {
    try {
        const livro = await livrosService.deletarPorId(req.body.id);
        return res.status(200).json(livro);

    } catch(erro){
        console.log("Erro ao deletar livro:", erro);
        return res.status(500).json({erro: erro.message});
    }
}

async function atualizar(req,res){
    try {
        const livro = await livrosService.atualizar(req.body.id,req.body.autor_id, req.body.titulo, req.body.isbn, req.body.editora, req.body.paginas, req.body.ano_publicacao,req.body.categoria);
        return res.status(200).json(livro);

    }catch(erro) {
        console.log("Erro ao atualizar livro:", erro);
        return res.status(500).json({erro: erro.message});
    }
}



module.exports = {
    listar,
    buscarPorId,
    inserir,
    deletarPorId,
    atualizar
};
