import { NavLink, useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import { CurrencyExchange } from '@mui/icons-material'
import CurrencySelector from './CurrencySelector'

const Header = () => {
    const activeStyle = {
        textDecoration: 'underline',
    }
    const navigate = useNavigate()

    function handleLogoClick() {
        navigate('/')
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={handleLogoClick}
                >
                    <CurrencyExchange sx={{ marginRight: '10px' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
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
                </div>

                <Box sx={{ flexGrow: 1, display: 'flex' }}>
                    <nav>
                        <ul
                            style={{
                                display: 'flex',
                            }}
                        >
                            <li>
                                <Button
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                    }}
                                >
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
                            </li>
                            <li>
                                <Button
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                    }}
                                >
                                    <NavLink
                                        to="/currency"
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >
                                        CURRENCIES
                                    </NavLink>
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </Box>
                <CurrencySelector />
            </Toolbar>
        </AppBar>
    )
}

export default Header
