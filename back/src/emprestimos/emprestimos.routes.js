const express = require("express");
const emprestimosController = require("./emprestimos.controller");

const router = express.Router();

// GET /autores
router.get("/emprestimos", emprestimosController.listar);

// GET /autores/:id
router.get("/emprestimos/:id", emprestimosController.buscarPorId);

router.post("/emprestimos",emprestimosController.inserir);

router.delete("/emprestimos", emprestimosController.deletarPorId);

router.put("/emprestimos",emprestimosController.atualizar);

module.exports = router;
