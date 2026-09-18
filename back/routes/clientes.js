const express = require("express");
const database = require("../database");

const router = express.Router();

router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const cliente = database.clientes.find(
        cliente => cliente.id === id
    );

    if (!cliente) {
        return res.status(404).send("Cliente não encontrado");
    }

    res.send(cliente);
});

module.exports = router;