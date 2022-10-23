import * as React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useGetCurrentCurrencyMutation } from '../services/currency'
import SmallLoader from './UI/SmallLoader'

interface IRequestData {
    from: string
    to: string
    amount: string
}

const initialRequestData = {
    from: '',
    to: '',
    amount: '',
}

const ConvertInput = () => {
    const [inputValue, setInputValue] = useState('')
    const [requestData, setRequestData] =
        useState<IRequestData>(initialRequestData)
    const [result, setResult] = useState<string>('')
    const [
        getCurrencyRate,
        { data, isLoading, isError, isSuccess, error, reset },
    ] = useGetCurrentCurrencyMutation()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('isError', isError)
        reset()
        setResult('')
        const data = e.target.value.split(' ')
        setInputValue(e.target.value)
        setRequestData({
            from: data[1] ? data[1].toUpperCase() : '',
            to: data[3] ? data[3].toUpperCase() : '',
            amount: data[0] ? data[0] : '',
        })
    }

    const handleSubmit = (e: KeyboardEvent) => {
        if (e.code === 'Enter') {
            handleRequest()
                .then(() => setInputValue(''))
                .catch((e) => console.log(e.message))
        }
    }

    const handleRequest = async () => {
        await getCurrencyRate(requestData).unwrap()
        console.log(data)
    }

    useEffect(() => {
        isSuccess
            ? setResult(
                  `${requestData.amount} ${
                      requestData.from
                  } are equals ${data.result.toFixed(2)} ${requestData.to}`
              )
            : setResult('')
    }, [data, requestData, isSuccess])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > :not(style)': { m: 1 },
            }}
        >
            {isLoading ? (
                <SmallLoader />
            ) : (
                <Typography
                    marginBottom={4}
                    variant="h4"
                    fontWeight={700}
                    component="p"
                >
                    {result}
                </Typography>
            )}
            <TextField
                helperText={
                    isError
                        ? // @ts-ignore
                          error.data.error.message
                        : "After press 'Enter' or button"
                }
                id="demo-helper-text-misaligned"
                label="Enter sum to convert here"
                placeholder="Format: 15 usd in rub"
                onChange={handleChange}
                value={inputValue}
                error={isError}
                // @ts-ignore
                onKeyUp={handleSubmit}
            />
            <Button size="large" variant="contained" onClick={handleRequest}>
                Convert
            </Button>
        </Box>
    )
}

export default ConvertInput
