import React from 'react';
import SignUp from './signUp/signUp';
import Login from './login/login';
import { useAuthPageStyles } from './style';

const AuthPage = () => {
    const classes = useAuthPageStyles()
    return (
        <div className={classes.authPageContainer}>
            <SignUp />
            <Login />
        </div>
    )
}

export default AuthPage;