import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import { CurrencyExchange } from '@mui/icons-material'
import CurrencySelector from './CurrencySelector'

const Header = () => {
    const activeStyle = {
        textDecoration: 'underline',
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <CurrencyExchange sx={{ marginRight: '10px' }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    ConvertAPP
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                        <NavLink
                            to="/"
                            end
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            MAIN
                        </NavLink>
                    </Button>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                        <NavLink
                            to="/currency"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            CURRENCIES
                        </NavLink>
                    </Button>
                </Box>
                <CurrencySelector />
            </Toolbar>
        </AppBar>
    )
}

export default Header
