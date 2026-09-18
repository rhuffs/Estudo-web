

export default function Tabela({fornecedores}) {
    



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>

                <tbody>
                    {fornecedores.map((fornecedor)=>(
                        <tr key = {fornecedor.id}>
                            <td>{fornecedor.id}</td>
                            <td>{fornecedor.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}