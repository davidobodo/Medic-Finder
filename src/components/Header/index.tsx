import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Drawer from '../Drawer';
import { useHeaderStyles } from './style';


const Header = () => {
    const classes = useHeaderStyles()
    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <Link to='/'>
                    Enye Cohort 4
            </Link>
            </div>
            <Drawer />
            <div className={classes.linksContainer}>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/history'>History</NavLink>
            </div>
        </div>
    )
}

export default Header