import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/enye.png'

const useHeaderStyles = makeStyles({
    root: {
        position: 'fixed',
        height: '80px',
        width: '100%',
        top: '0',
        left: '0',
        backgroundColor: '#fff',
        paddingLeft: '10vw',
        paddingRight: '10vw',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0,0,0,0.1)'
    },
    imgContainer: {
        width: '100px',
        display: 'flex',
        alignItems: 'center'
    },
    img: {
        width: '100%'
    },
    linksContainer: {
        display: 'flex',

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
})


const Header = () => {
    const classes = useHeaderStyles()
    return (
        <div className={classes.root}>
            <div className={classes.imgContainer}>
                <img src={Logo} alt="enye logo" className={classes.img} />
            </div>
            <div className={classes.linksContainer}>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/history'>History</NavLink>
            </div>
        </div>
    )
}

export default Header