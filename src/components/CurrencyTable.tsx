import { useEffect } from 'react'

import { currencies } from '../mock'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const mockData: Array<{
    name: string
    value: string
}> = []

Object.keys(currencies).forEach((key) => {
    mockData.push({
        name: `1 ${key}`,
        // @ts-ignore
        value: (1 / currencies[key]).toFixed(2) + ' USD',
    })
})

export default function CurrencyTable() {
    // useEffect(() => {
    //     fetch('https://api.apilayer.com/exchangerates_data/latest?base=USD', {
    //         method: 'GET',
    //         redirect: 'follow',
    //         headers: {
    //             apikey: 'LgoNVoq1B4LIa6qpBB7BbvvyYoe6Y6Cz',
    //         },
    //     })
    //         .then((response) => response.text())
    //         .then((result) => console.log(result))
    //         .catch((error) => console.log('error', error))
    // }, [])

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
                    {mockData.map((row) => (
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
