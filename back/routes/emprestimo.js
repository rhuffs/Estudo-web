const express = require("express");
const database = require("../database");
const router = express.Router();
const db = require("../db"); 

router.get("/", async (req,res) => {
    const sql = 'select * from emprestimos';
    try{
        const emprestimos = await db.any(sql);
        res.status(200).json(emprestimos);
    }catch(erro) {
        res.status(400).json(erro);
    }
});


router.get("/:id", async (req,res) => {
    const id = parseInt(req.params.id);
    const sql = 'select * from emprestimos where id = $1';
    try{
        const emprestimos = await db.any(sql,[id]);
        res.status(200).json(emprestimos);
    }catch(erro){
        res.status(400).json(erro);
    }

});

module.exports = router;