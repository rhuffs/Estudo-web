
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Stack from '@mui/material/Stack';

export default function Tabela({fornecedores}) {
    



    return (
        <Stack>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nome</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {fornecedores.map((fornecedor)=>(
                        <TableRow key = {fornecedor.id}>
                            <TableCell>{fornecedor.id}</TableCell>
                            <TableCell>{fornecedor.nome}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </Stack>
    )
}