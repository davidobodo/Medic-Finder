import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import AuthPage from './pages/AuthPage';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './styling/Globals';

const App = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={AuthPage} />
                        {/* <Route exact path='/' component={HomePage} /> */}
                        <Route exact path='/history' component={HistoryPage} />
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default App