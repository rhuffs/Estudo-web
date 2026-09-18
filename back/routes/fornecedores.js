const express = require("express");
const database = require("../database");

const router = express.Router();

router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const fornecedor = database.fornecedores.find(
        fornecedor => fornecedor.id === id
    );

    if (!fornecedor) {
        return res.status(404).send("Fornecedor não encontrado");
    }

    res.send(fornecedor);
});

router.get("/", (req,res) => {

    res.send(database.fornecedores);
})

router.post("/", (req, res) => {

    const novoFornecedor = {
        id: database.fornecedores.length + 1,
        nome: req.body.nome
    };

    database.fornecedores.push(novoFornecedor);

    res.status(201).send(novoFornecedor);
});


module.exports = router;