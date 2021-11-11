import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const PlacedOrder = (props) => {
    const { _id, product } = props?.product;
    const [orders, setOrders] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch('https://calm-harbor-77192.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [control])
    const sort = orders?.filter(item => item._id === product)

    const projectDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const uri = `https://calm-harbor-77192.herokuapp.com/placeOrder/${id}`
            fetch(uri, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
                .then(response => response.json())
                .then(data => {
                    if (data?.deletedCount) {
                        setControl(!control);
                    } else {
                        setControl(false);
                    }
                    window.location.reload()
                })
        }
    }
    return (
        <Grid item xs={8} md={4}>
            <img style={{width:'60%'}} src={sort[0]?.image}  alt='' />
            <Typography variant="h5" color="text.secondary">
                {sort[0]?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {sort[0]?.description}
            </Typography>
            <Button onClick={() => projectDelete(_id)}>Cancel</Button>
        </Grid>
    );
};

export default PlacedOrder;