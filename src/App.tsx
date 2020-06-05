import React from 'react';
import Home from './pages/Home';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styling/Globals';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Home />
            </ThemeProvider>
        </React.Fragment>
    )
}