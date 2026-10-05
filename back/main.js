const express = require("express");
const cors = require("cors");
const pgp = require('pg-promise');
const app = express();

app.use(express.json());
app.use(cors());

const PORTA = 3001;

const clientesRouter = require("./routes/clientes");
const fornecedoresRouter = require("./routes/fornecedores");
const livrosRouter = require("./routes/livros");
const leitoresRouter = require("./routes/leitores");
const emprestimoRouter = require("./routes/emprestimo");
const autoresRouter = require("./routes/autores");

app.use("/clientes", clientesRouter);
app.use("/fornecedores", fornecedoresRouter);
app.use("/livros", livrosRouter);
app.use("/leitores", leitoresRouter);
app.use("/emprestimo", emprestimoRouter);
app.use("/autores", autoresRouter);


app.get("/", (req, res) => {
    res.send("Servidor ligado");
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});