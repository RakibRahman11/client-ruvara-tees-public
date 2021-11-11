import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';
import Navigation from '../../../../Shared/Navigation/Navigation';


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://calm-harbor-77192.herokuapp.com/products')
            .then(response => response.json())
            .then(json => setProducts(json))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" sx={{ marginTop: '100px', marginBottom: '30px' }}>
                    Design Covers
                </Typography>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map(product => <Product
                                key={product?.productID}
                                product={product}
                            ></Product>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Products;