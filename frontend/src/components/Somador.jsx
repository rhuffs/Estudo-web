import { useState } from "react";


export default function Somador() {
    const [numero, setNumero] = useState(0);



    return (
        <div>
            <p>{numero}</p>

            <button onClick={() => {
                setNumero(numero + 1);
            }} > somar</button>
            <br></br>
            {numero > 0 ? <button onClick={() => setNumero(0)}>Reset</button> : null}
            {numero === 67 ? <p>SixxxSevveennnnnn</p> : null}
            {numero === 69 ? <p>hihihihihihihihihi</p> : null}

        </div>
    )

} 
