const autoresService = require("./autores.service");

async function listar(req, res) {
    try {
        const autores = await autoresService.listar();
        return res.status(200).json(autores);
    } catch (erro) {
        console.log("Erro ao buscar autores:", erro);
        return res.status(400).json({ erro: erro.message });
    }
}

async function buscarPorId(req, res) {
    try {
        const autor = await autoresService.buscarPorId(req.params.id);
        return res.status(200).json(autor);
    } catch (erro) {
        console.log("Erro ao buscar autor:", erro);
        return res.status(500).json({ erro: erro.message });
    }
}

async function inserir(req,res) {
    try {
        const autores = await autoresService.inserir(req.body.nome, req.body.nacionalidade, req.body.ano_nascimento);
        return res.status(200).json(autores);
    } catch (erro){
        console.log("Erro ao adicionar leitor:", erro);
        return res.status(500).json({erro: erro.message});

    }
} 

async function deletarPorId(req,res) {
    try {
        const autores = await autoresService.deletarPorId(req.body.id);
        return res.status(200).json(autores);

    } catch(erro){
        console.log("Erro ao deletar autor:", erro);
        return res.status(500).json({erro: erro.message});
    }
}

async function atualizar(req,res){
    try {
        const autores = await autoresService.atualizar(req.body.id,req.body.nome, req.body.nacionalidade, req.body.ano_nascimento);
        return res.status(200).json(autores);

    }catch(erro) {
        console.log("Erro ao atualizar autores:", erro);
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

