const express = require("express");
const database = require("../database");
const router = express.Router();
const db = require("../db"); 

router.get("/sincrono", (req,res) => {
    const sql = 'select * from livros';

    //db.one : um e somente um
    //d.any : varios
    //db.none : nao retorna nada
    db.any(sql).then(
        (livros) => res.status(200).json(livros)
    ).catch(
        (erro) => res.status(400).json(erro)
    );
});

router.get("/", async (req,res) => {
    const sql = 'select * from livros';
    try{
        const livros = await db.any(sql);
        res.status(200).json(livros);
    }catch(erro) {
        res.status(400).json(erro);
    }
});


router.get("/:id", async (req,res) => {
    const id = parseInt(req.params.id);
    const sql = 'select * from livros where id = $1';
    try{
        const livros = await db.any(sql,[id]);
        res.status(200).json(livros);
    }catch(erro){
        res.status(400).json(erro);
    }

});

module.exports = router;