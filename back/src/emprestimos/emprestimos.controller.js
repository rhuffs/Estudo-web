const emprestimoservice = require("./emprestimos.service");

async function listar(req, res) {
    try {
        const emprestimos = await emprestimoservice.listar();
        return res.status(200).json(emprestimos);
    } catch (erro) {
        console.log("Erro ao buscar emprestimos:", erro);
        return res.status(400).json({ erro: erro.message });
    }
}

async function buscarPorId(req, res) {
    try {
        const emprestimos = await emprestimoservice.buscarPorId(req.params.id);
        return res.status(200).json(emprestimos);
    } catch (erro) {
        console.log("Erro ao buscar emprestimos:", erro);
        return res.status(500).json({ erro: erro.message });
    }
}

async function inserir(req,res) {
    try {
        const emprestimos = await emprestimoservice.inserir(req.body.leitor_id ,req.body.livro_id,req.body.data_emprestimo,req.body.data_prevista,req.body.data_devolucao);
        return res.status(200).json(emprestimos);
    } catch (erro){
        console.log("Erro ao adicionar emprestimo:", erro);
        return res.status(500).json({erro: erro.message});

    }
} 

async function deletarPorId(req,res) {
    try {
        const emprestimos = await emprestimoservice.deletarPorId(req.body.id);
        return res.status(200).json(emprestimos);

    } catch(erro){
        console.log("Erro ao deletar emprestimo:", erro);
        return res.status(500).json({erro: erro.message});
    }
}

async function atualizar(req,res){
    try {
        const emprestimos = await emprestimoservice.atualizar(req.body.id,req.body.leitor_id ,req.body.livro_id,req.body.data_emprestimo,req.body.data_prevista,req.body.data_devolucao);
        return res.status(200).json(emprestimos);

    }catch(erro) {
        console.log("Erro ao atualizar emprestimos:", erro);
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
