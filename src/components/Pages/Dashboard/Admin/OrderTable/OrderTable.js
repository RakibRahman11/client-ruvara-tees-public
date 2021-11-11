import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';


const OrderTable = () => {
    const [products, setProducts] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch('https://calm-harbor-77192.herokuapp.com/placeOrder')
            .then(response => response.json())
            .then(json => setProducts(json))
    }, [control])
    const itemDelete = id => {
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
        <TableContainer component={Paper} sx={{ marginTop: '40px' }}>
            <Typography variant="h4" sx={{ marginY: '20px'}}>
                All Ordered List
            </Typography>
            <Table sx={{ width: '75%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>User</TableCell>
                        <TableCell>Status</TableCell>
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
                                {row?._id}
                            </TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>
                                <Button sx={{ color: 'darkgoldenrod' }}>{row.status}</Button>
                            </TableCell>
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

export default OrderTable;