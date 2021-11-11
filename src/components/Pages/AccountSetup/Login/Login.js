import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
// import useFirebase from '../../../../hooks/useFirebase';
// import initFirebase from '../../../Firebase/firebase.init';
import Navigation from '../../../Shared/Navigation/Navigation';

// initFirebase()

const Login = () => {
    const { googleSignIn, loginUser } = useAuth()
    const [loginData, setLoginData] = useState({})

    const location = useLocation()
    const history = useHistory()

    const redirect_ui = location.state?.from || '/'
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // .then((result) => {
                    // setUser(result.user)
                // }).catch((error) => {
                //     console.log(error.message);;
                // });
                history.push(redirect_ui);
            })
    }

    const loginInfo = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const updateLoginData = { ...loginData }
        updateLoginData[field] = value
        setLoginData(updateLoginData)
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password)
        alert('Update Information')
        e.preventDefault()
    }


    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ mt: 5 }}>
                <Typography variant="h4" gutterBottom>
                    Login Account
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        id="standard-basic"
                        sx={{ width: '25%', mt: 2 }}
                        name='email'
                        onChange={loginInfo}
                        label="Your email"
                        variant="standard" />
                    <br />
                    <TextField
                        id="standard-password-input"
                        sx={{ width: '25%', mt: 2 }}
                        name='password'
                        onChange={loginInfo}
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    /><br />

                    <Button variant="contained" type="submit" sx={{ mt: 3 }}>Login</Button>

                    <NavLink style={{ textDecoration: 'none', marginTop: '40px' }} to='/register'><Typography style={{ marginTop: '10px' }} variant="button" display="block" gutterBottom>
                        New user? Please register
                    </Typography></NavLink>
                </form>
                <p>---------------------</p>
                <Button onClick={handleGoogleSignIn} variant="outlined" sx={{ mt: 3, border: 1, borderColor: 'text.primary', color: 'black', width: '25%' }}>Google Sign-in</Button>
            </Container>
        </div>
    );
};

export default Login;