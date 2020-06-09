import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/enye.png'

const useHeaderStyles = makeStyles({
    root: {
        position: 'fixed',
        height: '60px',
        width: '100%',
        top: '0',
        left: '0',
        backgroundColor: '#fff',
        paddingLeft: '10vw',
        paddingRight: '10vw',
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: 'rgba(79, 79, 79, 1) 0px 4px 10px'
    },
    imgContainer: {
        width: '100px',
        display: 'flex',
        alignItems: 'center'
    },
    img: {
        width: '100%'
    }
})


const Header = () => {
    const classes = useHeaderStyles()
    return (
        <div className={classes.root}>
            <div className={classes.imgContainer}>
                <img src={Logo} alt="enye logo" className={classes.img} />
            </div>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/history'>History</NavLink>
            </div>
        </div>
    )
}

export default Header