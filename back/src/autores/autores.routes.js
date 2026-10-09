const express = require("express");
const autoresController = require("./autores.controller");

const router = express.Router();

// GET /autores
router.get("/autores", autoresController.listar);

// GET /autores/:id
router.get("/autores/:id", autoresController.buscarPorId);

router.post("/autores",autoresController.inserir);

router.delete("/autores", autoresController.deletarPorId);

router.put("/autores",autoresController.atualizar);

module.exports = router;
