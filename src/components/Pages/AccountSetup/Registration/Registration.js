import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../../hooks/useFirebase';
import initFirebase from '../../../Firebase/firebase.init';
import Navigation from '../../../Shared/Navigation/Navigation';

initFirebase()

const Registration = () => {
    const { createUser } = useFirebase()
    const [loginData, setLoginData] = useState({})
    const loginInfo = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const updateLoginData = { ...loginData }
        updateLoginData[field] = value
        setLoginData(updateLoginData)
    }

    const handleLogin = e => {
        if (loginData?.password !== loginData?.retypePassword) {
            return alert('Password did not match')
        }
        alert('Update Information')
        createUser(loginData.email, loginData.password, loginData.name)
        e.preventDefault()
    }

    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ mt: 5 }}>
                <Typography variant="h4" gutterBottom>
                    Registration
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        id="standard-basic"
                        sx={{ width: '25%', mt: 2 }}
                        name='name'
                        onBlur={loginInfo}
                        label="Your name"
                        variant="standard" />
                    <br />
                    <TextField
                        id="standard-basic"
                        sx={{ width: '25%', mt: 2 }}
                        name='email'
                        type='email'
                        onBlur={loginInfo}
                        label="Your email"
                        variant="standard" />
                    <br />
                    <TextField
                        id="standard-password-input"
                        sx={{ width: '25%', mt: 2 }}
                        name='password'
                        onBlur={loginInfo}
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <br />
                    <TextField
                        id="standard-password-input"
                        sx={{ width: '25%', mt: 2 }}
                        name='retypePassword'
                        onBlur={loginInfo}
                        label="Retype the password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    /><br />
                    <Button variant="contained" type="submit" sx={{ mt: 3 }}>Register</Button>
                    <NavLink style={{ textDecoration: 'none' }} to='/login'><Typography style={{ marginTop: '10px' }} variant="button" display="block" gutterBottom>
                        Already an account? Please login
                    </Typography></NavLink>
                </form>
            </Container>
        </div>
    );
};

export default Registration;