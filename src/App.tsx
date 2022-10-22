import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CurrencyPage from './pages/CurrencyPage'
import Layout from './components/Layout'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="currency" element={<CurrencyPage />} />
            </Route>
        </Routes>
    )
}

export default App
