import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';


type LayoutProps = {
    children: ReactNode
}

const useLayoutStyles = makeStyles(theme => ({
    root: {
        position: 'relative'
    },
    body: {
        marginTop: '80px',
    }
}))

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const classes = useLayoutStyles()
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.body}>
                {children}
            </div>
        </div>
    )
}


export default Layout