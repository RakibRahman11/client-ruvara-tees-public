import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AddProduct from '../../Home/AllProducts/AddProduct/AddProduct';
import DashboardNav from '../Dashboard/DashboardNav/DashboardNav';

const Admin = () => {
    return (
        <div>
            <DashboardNav></DashboardNav>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <AddProduct></AddProduct>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <h1>bye</h1>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Admin;