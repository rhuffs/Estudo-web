const leitoresService = require("./leitores.service");

async function listar(req, res) {
    try {
        const leitores = await leitoresService.listar();
        return res.status(200).json(leitores);
    } catch (erro) {
        console.log("Erro ao buscar leitores:", erro);
        return res.status(400).json({ erro: erro.message });
    }
}

async function buscarPorId(req, res) {
    try {
        const leitor = await leitoresService.buscarPorId(req.params.id);
        return res.status(200).json(leitor);
    } catch (erro) {
        console.log("Erro ao buscar leitor:", erro);
        return res.status(500).json({ erro: erro.message });
    }
}

async function inserir(req,res) {
    try {
        const leitores = await leitoresService.inserir(req.body.nome, req.body.email, req.body.telefone, req.body.ativo);
        return res.status(200).json(leitores);
    } catch (erro){
        console.log("Erro ao adicionar leitor:", erro);
        return res.status(500).json({erro: erro.message});

    }
} 

async function deletarPorId(req,res) {
    try {
        const leitores = await leitoresService.deletarPorId(req.body.id);
        return res.status(200).json(leitores);

    } catch(erro){
        console.log("Erro ao deletar leitor:", erro);
        return res.status(500).json({erro: erro.message});
    }
}

async function atualizar(req,res){
    try {
        const leitores = await leitoresService.atualizar(req.body.id,req.body.nome, req.body.email, req.body.telefone, req.body.ativo);
        return res.status(200).json(leitores);

    }catch(erro) {
        console.log("Erro ao atualizar leitores:", erro);
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
