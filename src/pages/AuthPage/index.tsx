import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SignUp from './signUp/signUp';
import Login from './login/login';

import { useAuthPageStyles } from './style';

const AuthPage = () => {
    const classes = useAuthPageStyles()
    const userId = useSelector(state => state.auth.userId);

    console.log(userId)

    if (userId) {
        return <Redirect to="/" />
    }

    return (
        <div className={classes.authPageContainer}>
            <SignUp />
            <Login />
        </div>
    )
}

export default AuthPage;