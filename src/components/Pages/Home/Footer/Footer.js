import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import logo from '../../../../Images/logo.jpg'

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, marginTop: '100px', backgroundColor: 'black', color: 'white' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                    <img style={{ width: '90%', marginBottom:'10px', marginLeft:'2px' }} src={logo} alt='' />
                </Grid>
                <Grid item sx={{ marginY: 'auto' }} xs={6} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Maijdee Court, Noakhali, Bangladesh.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Official: official@ruvara-tees.com
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Contact : 01516707349 (Available : 09:00am to 10:00pm)
                    </Typography>
                </Grid>
                <Grid item sx={{ marginY: 'auto' }} xs={6} md={4}>
                    <Typography variant="body1" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Success
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Refund Policy
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Terms and Conditions
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Privacy Policy
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;