import CurrencyTable from '../components/CurrencyTable'
import { Typography } from '@mui/material'
import React, { FC } from 'react'
import Loader from '../components/UI/Loader'
import { TCurrency } from '../utils'

interface ICurrencyPageProps {
    isLoading: boolean
    currencyData: Array<TCurrency>
}

const CurrencyPage: FC<ICurrencyPageProps> = ({ isLoading, currencyData }) => {
    return (
        <>
            <Typography variant="h2" component="h1" textAlign="center">
                Currency Page
            </Typography>
            {isLoading ? (
                <Loader />
            ) : (
                <CurrencyTable currencyData={currencyData} />
            )}
        </>
    )
}

export default CurrencyPage
