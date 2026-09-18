import { useState } from "react";


export default function Nome() {
    const [nome, setNome] = useState("");


    return (
        <div>
            <input value = {nome} onChange = {(e) => setNome(e.target.value)}></input>
            <p>olá {nome}</p>
        </div>  
    )
}