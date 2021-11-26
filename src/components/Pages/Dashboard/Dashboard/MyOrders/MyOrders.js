import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useFirebase from '../../../../../hooks/useFirebase';
import initFirebase from '../../../../Firebase/firebase.init';
import DashboardNav from '../DashboardNav/DashboardNav';
import PlacedOrder from '../PlacedOrder/PlacedOrder';

initFirebase()

const MyOrders = () => {
    const [myOrder, setMyOrder] = useState([])
    const { user } = useFirebase()
    useEffect(() => {
        fetch('https://calm-harbor-77192.herokuapp.com/placeOrder')
            .then(response => response.json())
            .then(data => setMyOrder(data))
    }, [])
    const products = myOrder?.filter(item => item.email === user.email)
    console.log(products);
    return (
        <div>
            <DashboardNav></DashboardNav>
            {
                user.displayName && <div style={{ marginTop: '10px' }}>
                    {
                        products[0] ? <h1 style={{ marginTop: '10px' }}>Thank you for the orders</h1> : <h1 style={{ marginTop: '10px' }}>You don't have any pending order</h1>
                    }
                    <Grid container spacing={2}>
                        {
                            products.map(product => <PlacedOrder product={product}></PlacedOrder>)
                        }
                    </Grid>

                </div >
            }
        </div >
    );
};

export default MyOrders;