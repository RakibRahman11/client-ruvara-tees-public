import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Comment = (props) => {
    const { name, comment, ratings } = props.comment;
    return (
        <Grid item sm={4} md={4}>
            <Card sx={{ boxShadow: 0, border: 0 }}>
                <CardContent>
                    <Typography variant="body2" sx={{ fontStyle: 'italic', marginBottom: '10px' }} color="text.secondary">
                        " {comment} "
                    </Typography>
                    <span><i class="fas fa-star"></i> Ratings: {ratings} / 5 </span>
                    <br />
                    <span>reviewed by </span>
                    <Typography sx={{ fontWeight: 'bold' }} variant="button">
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Comment;