import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '../Drawer';

const useHeaderStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        height: '80px',
        width: '100%',
        top: '0',
        left: '0',
        backgroundColor: '#fff',
        paddingLeft: '5vw',
        paddingRight: '5vw',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        zIndex: 10
    },

    logo: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 600,
        fontSize: '24px',
        color: '#012B69',

        '& a': {
            color: 'inherit',
            textDecoration: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
    },
    linksContainer: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },

        '& a': {
            padding: '20px 45px',
            textDecoration: 'none',
            color: '#000',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',

            '&:hover': {
                backgroundColor: '#f0f6ff'
            },

            '&.active': {
                borderBottom: '5px solid #1175f6',
                backgroundColor: '#f0f6ff',

            }
        }
    }
}))


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