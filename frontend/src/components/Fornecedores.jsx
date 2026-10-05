import axios from "axios";
import { useState, useEffect } from "react";
import Tabela from "./Tabela";
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

import Stack from '@mui/material/Stack';


export default function Fornecedores() {
    const [fornecedor, setFornecedor] = useState(null);
    const [entrada, setEntrada] = useState("");
    const [entradaRemove, setEntradaRemove] = useState("");
    const [exibirErro, setExibirErro] = useState(false);
    const [nome, setNome] = useState("");
    const [fornecedorT, setFornecedorT] = useState([]);
    const [flagCadastro, setFlagCadastro] = useState(true);

    useEffect(() => {
        async function buscarTodosFornecedores() {
            try {
                const response = await axios.get(
                    "http://localhost:3001/fornecedores"
                );

                console.log(response.data);

                setFornecedorT(response.data);
            } catch (error) {
                console.log(error);
                setExibirErro(true);
            }
        }

        buscarTodosFornecedores();
    }, [flagCadastro]);

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
            setFlagCadastro(!flagCadastro);
        } catch (error) {
            console.log(error);
        }
    }

    async function removerFornecedor() {
        try {
            const response = await axios.delete(
                `http://localhost:3001/fornecedores/${entradaRemove}`
            );

            console.log(response.data);
            setFlagCadastro(!flagCadastro);
            setEntradaRemove("");
        } catch (error) {
            console.log(error);
            setEntradaRemove("");
        }
    }


    return (
        <Stack>
            <h1>Fornecedores</h1>

            <h2>Buscar fornecedor</h2>

            <OutlinedInput
                type="number"
                value={entrada}
                onChange={(e) => setEntrada(e.target.value)}
                placeholder="Digite o ID"
                
            />

            <Button onClick={buscarFornecedor}>
                Buscar Fornecedor
            </Button>

            {exibirErro && (
                <p>Fornecedor não encontrado.</p>
            )}

            {fornecedor && (
                <Stack>
                    <p>ID: {fornecedor.id}</p>
                    <p>Nome: {fornecedor.nome}</p>

                    <Button onClick = {() => {
                        setFornecedor(null);
                        setEntrada("");
                    }} > Voltar</Button>

                </Stack>
            )}

        
            <br></br>



            {!fornecedor && ( 
                <Stack>
                    <h2>Todos os fornecedores</h2>
                    <Tabela fornecedores={fornecedorT} />
                </Stack>)
            }

            
            <br />

            <Stack>

                <h2>Cadastrar Fornecedor </h2>

                <OutlinedInput
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite o nome do novo Fornecedor" >
                
                </OutlinedInput>

                <Button onClick={cadastrarFornecedor}>
                    cadastrar Fornecedor
                </Button>

            </Stack>

            
            <br />

            <Stack>

                <h2>Remover Fornecedor </h2>

                <OutlinedInput
                    type="text"
                    value={entradaRemove}
                    onChange={(e) => setEntradaRemove(e.target.value)}
                    placeholder="Digite o id do fornecedor que deseja remover" >
                
                </OutlinedInput>

                <Button onClick={removerFornecedor}>
                    Remover Fornecedor
                </Button>

            </Stack>


        </Stack>
    );
}