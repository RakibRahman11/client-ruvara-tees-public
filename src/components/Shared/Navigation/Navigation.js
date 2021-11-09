import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Ruvara Tees
                    </Typography>
                    <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/login'>Login</NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;