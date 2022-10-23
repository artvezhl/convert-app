import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { TCurrency } from '../utils'

interface ICurrencyTableProps {
    currencyData: Array<TCurrency>
}

export default function CurrencyTable({ currencyData }: ICurrencyTableProps) {
    return (
        <TableContainer
            component={Paper}
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Table sx={{ maxWidth: '50%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Currency</TableCell>
                        <TableCell align="right">
                            Amount in base currency
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currencyData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
