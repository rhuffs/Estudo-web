const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORTA = 3001;

const clientesRouter = require("./routes/clientes");
const fornecedoresRouter = require("./routes/fornecedores");

app.use("/clientes", clientesRouter);
app.use("/fornecedores", fornecedoresRouter);

app.get("/", (req, res) => {
    res.send("Servidor ligado");
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});