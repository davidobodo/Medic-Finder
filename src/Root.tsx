import React from 'react';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styling/Globals';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Root() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </React.Fragment>
    )
}