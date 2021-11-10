import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useFirebase from '../../../../../hooks/useFirebase';
import initFirebase from '../../../../Firebase/firebase.init';

initFirebase()

const DashboardNav = () => {
    const { user, logOut } = useFirebase()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/home'>Ruvara Tees</NavLink>
                    </Typography>

                    <NavLink style={{ color: 'white', textDecoration: 'none', marginLeft: '10px' }} to='/admin'>Admin</NavLink>

                    <NavLink style={{ color: 'white', textDecoration: 'none', marginLeft: '10px' }} to='/myOrders'>Orders</NavLink>

                    <NavLink style={{ color: 'white', textDecoration: 'none', marginLeft: '10px' }} to='/review'>Review</NavLink>

                    <NavLink style={{ color: 'white', textDecoration: 'none', marginLeft: '10px' }} to='/payment'>Payment</NavLink>
                    {
                        user?.email ?
                            <div>
                                <Button onClick={logOut} style={{ color: 'white', textDecoration: 'none' }}>Logout</Button>
                            </div>
                            :
                            <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/login'>Login</NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default DashboardNav;