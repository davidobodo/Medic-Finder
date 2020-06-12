import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import AuthPage from './pages/AuthPage';

import { theme } from './styling/Globals';



const ProtectedRoute = ({ component: Component, ...rest }) => {
    const userId = useSelector(state => state.auth.userId)
    console.log(userId)
    return <Route {...rest} render={(props) => (!!userId ? <Component {...props} /> : <Redirect to={{ pathname: '/auth' }} />)} />
}

const App = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/auth' component={AuthPage} />
                        <ProtectedRoute exact path='/' component={HomePage} />
                        <ProtectedRoute exact path='/history' component={HistoryPage} />
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default App