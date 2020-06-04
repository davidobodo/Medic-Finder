import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Locations from './pages/Locations';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styling/Globals';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        {/* <Route path='/locations' exact component={Locations} /> */}
                    </Switch>
                </Router>
            </ThemeProvider>
        </React.Fragment>
    )
}