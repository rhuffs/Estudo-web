
import axios from "axios";
import { useState } from "react";
import Idade from "./Idade";

export default function Fornecedores() {
    const [fornecedor, setFornecedor] = useState(null);
    const [entrada, setEntrada] = useState("");
    const [exibirErro, setExibirErro] = useState(false);

    const [nome, setNome] = useState("");

    async function buscarFornecedor() {
        try {
            const response = await axios.get(
                `http://localhost:3001/fornecedores/${entrada}`
            );

            setFornecedor(response.data);
            setExibirErro(false);

        } catch (error) {
            console.log(error);

            setFornecedor(null);
            setExibirErro(true);
        }
    }

    async function cadastrarFornecedor() {
        try {
            const response = await axios.post(
                "http://localhost:3001/fornecedores",
                {
                    nome: nome
                }
            );

            console.log(response.data);

            setNome("");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>

            <h1>Fornecedores</h1>

            <h2>Buscar fornecedor</h2>

            <input
                type="number"
                value={entrada}
                onChange={(e) => setEntrada(e.target.value)}
                placeholder="Digite o ID"
            />

            <button onClick={buscarFornecedor}>
                Buscar Fornecedor
            </button>

            {exibirErro && (
                <p>Fornecedor não encontrado.</p>
            )}

            {fornecedor && (
                <div>
                    <p>ID: {fornecedor.id}</p>
                    <p>Nome: {fornecedor.nome}</p>
                </div>
            )}

            <hr />

            <h2>Cadastrar fornecedor</h2>

            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome do fornecedor"
            />

            <button onClick={cadastrarFornecedor}>
                Cadastrar
            </button>
            <br></br>
            <br></br>
            <div>
                <Idade />
            </div>

        </div>


    );
}

