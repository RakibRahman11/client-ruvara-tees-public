import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

const ProductsTable = () => {
    const [products, setProducts] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch('https://calm-harbor-77192.herokuapp.com/products')
            .then(response => response.json())
            .then(json => setProducts(json))
    }, [control])
    const itemDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const uri = `https://calm-harbor-77192.herokuapp.com/products/${id}`
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
        <TableContainer component={Paper} sx={{ marginTop: '40px', width: '75%' }}>
            <Typography variant="h4" sx={{ marginY: '20px'}}>
                All Products List
            </Typography>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.productID}
                            </TableCell>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>
                                <Button onClick={() => itemDelete(row?._id)} sx={{ color: 'red' }}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductsTable;