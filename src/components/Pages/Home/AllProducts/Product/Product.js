import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Product = (props) => {
    const { _id, title, description, price, image } = props.product;
    return (
        <Grid item sm={4} md={4}>
            <Card sx={{ boxShadow: 0, border: 0 }}>
                <CardMedia
                    component="img"
                    style={{
                        height: "400px",
                        width: "80%",
                        margin: "auto"
                    }}
                    image={image}
                    alt=""
                />
                <CardContent>
                    <Typography variant="h5" color="text.secondary">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {price}
                    </Typography>
                    <Link style={{textDecoration:'none'}} to={`/PlaceOrders/${_id}`}><Button sx={{ border:1, borderColor: 'text.primary', color:'black' }} variant='outlined'>Order</Button></Link>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Product;