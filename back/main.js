const express = require("express");
const cors = require("cors");
const pgp = require('pg-promise');
const app = express();
app.use(express.json());
app.use(cors());

const PORTA = 3001;

const clientesRoutes = require("./routes/clientes");
const fornecedoresRoutes = require("./routes/fornecedores");
const livrosRoutes = require("./src/livros/livros.routes");
const leitoresRoutes = require("./src/leitores/leitores.routes");
const emprestimoRoutes = require("./src/emprestimos/emprestimos.routes");
const autoresRoutes = require("./src/autores/autores.routes");

app.use("/clientes", clientesRoutes);
app.use("/fornecedores", fornecedoresRoutes);
app.use(livrosRoutes);
app.use(leitoresRoutes);
app.use(emprestimoRoutes);
app.use(autoresRoutes);
app.use(autoresRoutes);



app.get("/", (req, res) => {
    res.send("Servidor ligado");
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});