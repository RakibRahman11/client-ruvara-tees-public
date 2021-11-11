import { Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../../../hooks/useFirebase';
import initFirebase from '../../../Firebase/firebase.init';
import Navigation from '../../../Shared/Navigation/Navigation';

initFirebase()

const PlaceOrder = () => {
    const { user } = useFirebase();
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm();
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://calm-harbor-77192.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setOrder(data))
    })
    const find = order?.find(item => item._id === id)

    const onSubmit = (data) => {
        console.log(data);
        axios.post('https://calm-harbor-77192.herokuapp.com/placeOrder', data)
            .then(res => {
                alert('sure to add?');
                reset();
            })
    };
    return (
        <div>
            <Navigation></Navigation>
            <Grid container style={{ marginTop: '20px' }} spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '50%' }} src={find?.image} alt='' />
                    <Typography variant="h5" color="text.secondary">
                        {find?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {find?.description}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {find?.price}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{marginBottom:'20px'}} variant="h5">
                        Please provide the information
                    </Typography>
                    <div className="d-flex justify-content-center align-items-center">
                        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                            <input style={{ marginBottom: '5px', width: '50%', height: '25px' }} defaultValue={id} {...register("product")} />
                            <br />

                            <input style={{ marginBottom: '5px', width: '50%', height: '25px' }} defaultValue={user.displayName} {...register("name")} />
                            <br />

                            <input style={{ marginBottom: '5px', width: '50%', height: '25px' }} defaultValue={user?.email} {...register("email", { required: true })} />
                            <br />

                            <input style={{ marginBottom: '5px', width: '50%', height: '25px' }} placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                            <br />

                            <input style={{ marginBottom: '5px', width: '50%', height: '25px' }} placeholder="City" defaultValue="" {...register("city", { required: true })} />
                            <br />

                            <input style={{ marginBottom: '5px', width: '50%', height: '25px' }} placeholder="Contact" defaultValue="" {...register("phone", { required: true })} />
                            <br />

                            <select {...register("status")}>
                                <option value="Pending">Pending</option>
                            </select>
                            <br />
                            <Button variant="contained" type="submit" sx={{ mt: 3 }}>Buy Now</Button>
                        </form>
                    </div>

                </Grid>
            </Grid>
        </div>
    );
};

export default PlaceOrder;