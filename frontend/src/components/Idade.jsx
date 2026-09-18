import { useState } from "react";


export default function Idade(){
    const [idade, setIdade] = useState(0);
    const [nome, setNome] = useState("");


    return(
        <div>
            <input 
                type = "text"
                placeholder = "Digite seu nome"
                value = {nome} onChange = {(e) => setNome(e.target.value)}></input> 
            <br></br>
            <input 
                type = "number"
                placeholder = "Digite sua idade"
                value = {idade} onChange = {(e) => setIdade(e.target.value)}></input>


            <p>Olá {nome}, você tem {idade} anos</p>
            <p>Daqui a 10 anos você terá {parseInt(idade) + 10} anos</p>
            {idade > 0 ? (
                parseInt(idade) >= 18
                ? <p>Você é maior de idade</p> 
                : <p>Você é menor de idade</p>
            ) : null}
        </div>
    )
}
