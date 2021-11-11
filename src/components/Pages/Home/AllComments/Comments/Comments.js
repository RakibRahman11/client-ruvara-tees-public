import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Comment from '../Comment/Comment';


const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch('https://calm-harbor-77192.herokuapp.com/comments')
            .then(response => response.json())
            .then(json => setComments(json))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" sx={{ marginTop: '100px', marginBottom: '30px' }}>
                Our Valuable Customers
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        comments.map(comment => <Comment
                            key={comment?.name}
                            comment={comment}
                        ></Comment>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Comments;