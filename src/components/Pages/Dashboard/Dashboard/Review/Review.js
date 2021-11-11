import React, { useState } from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import { Button, Container, TextField, Typography } from '@mui/material';
// import useFirebase from '../../../../../hooks/useFirebase';
// import initFirebase from '../../../../Firebase/firebase.init';
import useAuth from '../../../../../hooks/useAuth';

// initFirebase()

const Review = () => {
    // const { user } = useFirebase()
    const { user } = useAuth()
    const [commentData, setCommentData] = useState({})

    const commentDetails = (e) => {
        const email = user?.email;
        const field = e.target.name;
        const value = e.target.value;
        let updateComment = { ...commentData, email }
        updateComment[field] = value
        setCommentData(updateComment)
        console.log(commentData);
    }

    const handleComment = e => {
        fetch('https://calm-harbor-77192.herokuapp.com/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentData)
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
            <DashboardNav></DashboardNav>
            <Container sx={{ mt: 5 }}>
                <Typography variant="h4" gutterBottom>
                    Please share your valuable review
                </Typography>
                <form onSubmit={handleComment}>
                    <TextField
                        id="standard-basic"
                        sx={{ width: '25%', mt: 2 }}
                        name='orderNo'
                        onBlur={commentDetails}
                        label="Order No"
                        variant="standard" />
                    <br />
                    <TextField
                        id="standard-basic"
                        sx={{ width: '25%', mt: 2 }}
                        name='name'
                        onBlur={commentDetails}
                        label="Your Name"
                        variant="standard" />
                    <br />
                    <TextField
                        id="standard-basic"
                        sx={{ width: '25%', mt: 2 }}
                        name='ratings'
                        onBlur={commentDetails}
                        label="Please rate the product (out of 5)"
                        variant="standard" />
                    <br />
                    <TextField
                        id="outlined-multiline-static"
                        sx={{  width: '25%', mt: 2 }}
                        name='comment'
                        onBlur={commentDetails}
                        multiline
                        rows={4}
                        label="Your opinion"
                        type="text"
                        placeholder="Please share your experience"
                    /><br />
                    <Button variant="contained" type="submit" sx={{ mt: 3 }}>Review</Button>
                </form>
            </Container>
        </div>
    );
};

export default Review;