import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import AddProduct from '../../Home/AllProducts/AddProduct/AddProduct';
import DashboardNav from '../Dashboard/DashboardNav/DashboardNav';
import AdminAccess from './AdminAccess/AdminAccess';
import OrderTable from './OrderTable/OrderTable';
import ProductsTable from './ProductsTable/ProductsTable';

const Admin = () => {
const {admin} = useAuth()
    return (
        <div>
            <DashboardNav></DashboardNav>
            {
                admin && <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <AddProduct></AddProduct>
                        <br />
                        <br />
                        <br />
                        <AdminAccess></AdminAccess>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ProductsTable></ProductsTable>
                    </Grid>
                    <Grid item style={{ margin: 'auto', marginBottom: '50px' }} xs={12} md={6}>
                        <OrderTable></OrderTable>
                    </Grid>
                </Grid>
            </Box>
            }
        </div>
    );
};

export default Admin;