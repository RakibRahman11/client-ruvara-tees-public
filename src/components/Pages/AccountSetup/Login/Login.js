import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import useFirebase from '../../../../hooks/useFirebase';
import initFirebase from '../../../Firebase/firebase.init';

initFirebase()

const Login = () => {
    const { googleSignIn } = useFirebase()
    const handleGoogleSignIn = () => {
        googleSignIn()
    }
    return (
        <div>
            <Container sx={{ mt: 5 }}>
                <Typography variant="h4" gutterBottom>
                    Login Account
                </Typography>
                {/* <form onSubmit={handleLogin}>
                        <TextField
                            id="standard-basic"
                            sx={{ width: '75%', mt: 2 }}
                            name='email'
                            onChange={loginInfo}
                            label="Your email"
                            variant="standard" />
                        <TextField
                            id="standard-password-input"
                            sx={{ width: '75%', mt: 2 }}
                            name='password'
                            onChange={loginInfo}
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        /><br />
                        <Button variant="contained" type="submit" sx={{ mt: 3 }}>Login</Button>
                        <NavLink style={{ textDecoration: 'none', marginTop: '40px' }} to='/register'><Typography style={{ marginTop: '10px' }} variant="button" display="block" gutterBottom>
                            New user? Please register an account
                        </Typography></NavLink>
                    </form> */}
                <p>---------------------</p>
                <Button onClick={handleGoogleSignIn} variant="outlined" sx={{ mt: 3, border: 1, borderColor: 'text.primary', color: 'black', width: '25%' }}>Google Sign-in</Button>
            </Container>
        </div>
    );
};

export default Login;