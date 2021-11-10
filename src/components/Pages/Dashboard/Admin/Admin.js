import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AddProduct from '../../Home/AllProducts/AddProduct/AddProduct';
import DashboardNav from '../Dashboard/DashboardNav/DashboardNav';
import OrderTable from './OrderTable/OrderTable';
import ProductsTable from './ProductsTable/ProductsTable';

const Admin = () => {

    return (
        <div>
            <DashboardNav></DashboardNav>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <AddProduct></AddProduct>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ProductsTable></ProductsTable>
                    </Grid>
                    <Grid item style={{ margin: 'auto', marginBottom: '50px' }} xs={12} md={6}>
                        <OrderTable></OrderTable>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Admin;