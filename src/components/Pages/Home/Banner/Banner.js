import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import bannerCover from '../../../../Images/banner.jpg'


const Banner = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, marginY: '20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant="h3" sx={{ color: 'black', textAlign: 'left', marginY: '10px' }}>
                                Make Your Customize Mobile Covers
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'gray', textAlign: 'left', width: '70%' }}>
                                We, the Ruvara Tees's team are comes with your most used accessories - MOBILE COVERS. Order the favorite design or send us the design as you want to get.
                            </Typography><br />
                            <Button variant="contained" style={{ backgroundColor: 'black', marginTop: '20px' }}>ABOUT</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={bannerCover} style={{ width: '100%' }} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;