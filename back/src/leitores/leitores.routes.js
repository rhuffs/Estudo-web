const express = require("express");
const leitoresController = require("./leitores.controller");

const router = express.Router();

// GET /leitores
router.get("/leitores", leitoresController.listar);

// GET /leitores/:id
router.get("/leitores/:id", leitoresController.buscarPorId);

router.post("/leitores",leitoresController.inserir);

router.delete("/leitores", leitoresController.deletarPorId);

router.put("/leitores",leitoresController.atualizar);



module.exports = router;
