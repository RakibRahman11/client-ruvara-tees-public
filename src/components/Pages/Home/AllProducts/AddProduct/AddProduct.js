import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useFirebase from '../../../../../hooks/useFirebase';

const AddProduct = () => {
    const { user } = useFirebase()
    const [product, setProduct] = useState({})

    const productDetails = (e) => {
        const email = user?.email;
        const field = e.target.name;
        const value = e.target.value;
        let updateProduct = { ...product, email }
        updateProduct[field] = value
        setProduct(updateProduct)
        console.log(product);
    }

    const handleProduct = e => {
        fetch('https://calm-harbor-77192.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
        alert('Update Information')
        e.preventDefault()
    }
    return (
        <div>
            <Container sx={{ mt: 5 }}>
                <Typography variant="h4" gutterBottom>
                    Add the Product
                </Typography>
                <form onSubmit={handleProduct}>
                    <TextField
                        id="standard-basic"
                        sx={{ width: '50%', mt: 2 }}
                        name='productID'
                        onBlur={productDetails}
                        label="Product ID"
                        variant="standard" />
                    <br />
                    <TextField
                        id="standard-basic"
                        sx={{ width: '50%', mt: 2 }}
                        name='title'
                        onBlur={productDetails}
                        label="Product Title"
                        variant="standard" />
                    <br />
                    <TextField
                        id="standard-basic"
                        sx={{ width: '50%', mt: 2 }}
                        name='price'
                        onBlur={productDetails}
                        label="Product Price"
                        variant="standard" />
                    <br />
                    <TextField
                        id="standard-basic"
                        sx={{ width: '50%', mt: 2 }}
                        name='image'
                        onBlur={productDetails}
                        label="Product Image"
                        variant="standard" />
                    <br />
                    <TextField
                        id="outlined-multiline-static"
                        sx={{ width: '50%', mt: 2 }}
                        name='description'
                        onBlur={productDetails}
                        multiline
                        rows={4}
                        label="Description"
                        type="text"
                        placeholder="Please share the product details"
                    /><br />
                    <Button variant="contained" type="submit" sx={{ mt: 3 }}>Add to website</Button>
                </form>
            </Container>
        </div>
    );
};

export default AddProduct;