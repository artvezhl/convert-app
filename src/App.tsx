import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CurrencyPage from './pages/CurrencyPage'
import Layout from './components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './services/store'
import { useGetCurrencyByNameQuery } from './services/currency'
import { changeBaseCurrency } from './services/appSlice'
import { TCurrency, updadeCurrencyDataFormat } from './utils'

function App() {
    const baseCurrency = useSelector(
        (state: RootState) => state.app.baseCurrency
    )
    const [currencyData, setCurrencyData] = useState<Array<TCurrency>>([])
    const dispatch = useDispatch()
    const { data, isLoading } = useGetCurrencyByNameQuery(baseCurrency)

    useEffect(() => {
        const currentCurrency = navigator.language === 'ru-RU' ? 'RUB' : 'USD'
        dispatch(changeBaseCurrency(currentCurrency))
    }, [dispatch])

    useEffect(() => {
        data &&
            setCurrencyData(updadeCurrencyDataFormat(data.rates, baseCurrency))
    }, [data, baseCurrency])

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route
                    path="currency"
                    element={
                        <CurrencyPage
                            isLoading={isLoading}
                            currencyData={currencyData}
                        />
                    }
                />
            </Route>
        </Routes>
    )
}

export default App
