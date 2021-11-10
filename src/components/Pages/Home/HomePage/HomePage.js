import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Comments from '../AllComments/Comments/Comments';
import Product from '../AllProducts/Product/Product';
// import Products from '../AllProducts/Products/Products';
import Banner from '../Banner/Banner';
import Delivery from '../Delivery/Delivery';
import Footer from '../Footer/Footer';

const HomePage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(json => setProducts(json.slice(0, 6)))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <div>
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
            <Comments></Comments>
            <Delivery></Delivery>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;