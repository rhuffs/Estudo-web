
const express = require("express");
const livrosController = require("./livros.controller");

const router = express.Router();

// GET /livros
router.get("/livros", livrosController.listar);

// GET /livros/:id
router.get("/livros/:id", livrosController.buscarPorId);

router.post("/livros",livrosController.inserir);

router.delete("/livros", livrosController.deletarPorId);

router.put("/livros",livrosController.atualizar);



module.exports = router;
