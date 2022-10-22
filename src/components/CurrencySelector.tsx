import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../services/store'
import { changeBaseCurrency } from '../services/appSlice'

const currencies = [
    {
        value: 'USD',
        name: 'Dollar USA',
        label: '$',
    },
    {
        value: 'RUB',
        name: 'Российский рубль',
        label: '₽',
    },
]

const MyTextField = styled(TextField)(() => ({
    '& label, & p': {
        color: 'rgba(255, 255, 255, 0.6)',
    },
    '&:hover label, & svg, & div, &:hover div, &.Mui-focusVisible, &.Mui-focused label':
        {
            color: 'rgb(255, 255, 255)',
        },
    '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.6)',
    },
    '&:hover fieldset': {
        borderColor: 'rgb(255, 255, 255) !important',
    },
    '& div[role=button]': {},
}))

const CurrencySelector = () => {
    const baseCurrency = useSelector(
        (state: RootState) => state.app.baseCurrency
    )
    const dispatch = useDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeBaseCurrency(event.target.value))
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                color: '#fff',
            }}
            noValidate
            autoComplete="off"
        >
            <MyTextField
                id="outlined-select-currency"
                select
                label={baseCurrency === 'USD' ? 'Select' : 'Выбор'}
                value={baseCurrency}
                onChange={handleChange}
                helperText={
                    baseCurrency === 'USD'
                        ? 'Please select your currency'
                        : 'Выберите Вашу валюту'
                }
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label + ' ' + option.name}
                    </MenuItem>
                ))}
            </MyTextField>
        </Box>
    )
}

export default CurrencySelector
