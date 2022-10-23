import { Box, Typography } from '@mui/material'
import React from 'react'
import ConvertInput from '../components/ConvertInput'

const MainPage = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
                variant="h3"
                component="h1"
                fontWeight="bold"
                sx={{
                    backgroundImage: 'linear-gradient(60deg, #87ceeb, #1776d1)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    padding: '3rem 0',
                }}
            >
                ConverterApp
            </Typography>
            <ConvertInput />
        </Box>
    )
}

export default MainPage
