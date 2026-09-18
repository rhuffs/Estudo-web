import { useState } from "react";


export default function Notas() {
    const [nota, setNota] = useState("");
    const [nota2, setNota2] = useState("");

    const [media, setMedia] = useState(null);
    const [nome, setNome] = useState("");
    const [erro, setErro] = useState("");

    function calcularMedia() {
        if (nome === "" || nota === "" || nota2 === "") {
            setErro("Preencha todos os campos!");
            return;
        }

        setErro("");
        setMedia((Number(nota) + Number(nota2)) / 2);
    }

    return (
        <div>
            <input
                placeholder="Nome do aluno"
                type="text"
                value={nome} onChange={(e) => setNome(e.target.value)}
            ></input>
            <br></br>

            <input
                placeholder=" Digite a nota 1"
                type="number"
                value={nota} onChange={(e) => setNota(e.target.value)}
            ></input>
            <br></br>

            <input
                placeholder=" Digite a nota 2"
                type="number"
                value={nota2} onChange={(e) => setNota2(e.target.value)}
            ></input>
            <br></br>

            <button onClick={calcularMedia} > Calcular a Media</button>
            {erro !== "" ? <p>{erro}</p> : null}


            {media !== null ? (
                media >= 6
                    ? <p>{nome}, você foi Aprovado!! Média = {media}</p>
                    : <p>{nome}, você foi Reprovado :(  Média = {media}</p>
            ) : null}

            <br></br>

            {nota !== "" || nota2 !== "" || media != null || nome != "" ? (
                <button
                    onClick={() => {
                        setNome("");
                        setMedia(null);
                        setNota("");
                        setNota2("");
                    }} > Limpar</button>
            ) : null}

        </div>
    )
} 