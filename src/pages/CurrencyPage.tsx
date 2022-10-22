import CurrencyTable from '../components/CurrencyTable'
import { Typography } from '@mui/material'

const CurrencyPage = () => {
    return (
        <>
            <Typography variant="h2" component="h1" textAlign="center">
                Currency Page
            </Typography>
            <CurrencyTable />
        </>
    )
}

export default CurrencyPage
